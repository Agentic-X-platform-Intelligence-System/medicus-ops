import oracledb from "oracledb";

/**
 * Singleton Thin-mode pool (no Instant Client / Thick init).
 * Lazy + module-cached so warm serverless invocations reuse it.
 * Concurrent first callers share one createPool promise (no double-create).
 */
let poolPromise: Promise<oracledb.Pool> | null = null;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/** Drop cached pool so the next call rebuilds with current env (e.g. after ORA-01017). */
async function resetPool(): Promise<void> {
  const pending = poolPromise;
  poolPromise = null;
  if (!pending) {
    return;
  }
  try {
    const pool = await pending;
    await pool.close(0);
  } catch {
    // Pool may never have opened; safe to discard.
  }
}

async function getPool(): Promise<oracledb.Pool> {
  if (!poolPromise) {
    poolPromise = oracledb.createPool({
      user: requireEnv("DB_USER"),
      password: requireEnv("DB_PASSWORD"),
      connectString: requireEnv("DB_CONNECT_STRING"),
      poolMin: 0,
      poolMax: 4,
      poolIncrement: 1,
      poolTimeout: 60,
    });
  }
  return poolPromise;
}

/**
 * Run parameterized SQL. Never concatenate user input into sql.
 * Connection always returned to the pool in finally.
 */
export async function executeQuery<T>(
  sql: string,
  binds: oracledb.BindParameters = {},
): Promise<T[]> {
  const pool = await getPool();
  let connection: oracledb.Connection | undefined;
  try {
    connection = await pool.getConnection();
    const result = await connection.execute<T>(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    return (result.rows ?? []) as T[];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

/** For /api/health — true if `SELECT 1 FROM DUAL` succeeds. */
export async function checkHealth(): Promise<boolean> {
  try {
    const rows = await executeQuery<{ OK: number }>("SELECT 1 AS OK FROM DUAL");
    return rows.length > 0;
  } catch (err) {
    console.error("[checkHealth] DB probe failed:", err);
    // Auth / config mistakes leave a poisoned pool; clear so a fixed .env.local can recover.
    await resetPool();
    return false;
  }
}
