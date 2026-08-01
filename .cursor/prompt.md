Project: medicus-ops — internal task, schedule & appointment tracker for a 
solo physician (Phase 1 of a larger app; later phases add a public portfolio 
and social media notifications, so keep interfaces extensible, not overbuilt).

Stack: Next.js 15 (App Router, TypeScript), MUI v6, Oracle DB via 
node-oracledb v6+ in Thin mode. DB runs locally in Docker now (Oracle Free 
container image), will point to Oracle Autonomous DB (Always Free tier) in 
production via env vars only — no code changes between environments.

Create these three files:

1. lib/db.ts
   - Export a singleton connection pool using oracledb (Thin mode — do NOT 
     add any Instant Client / Thick mode init code).
   - Read DB_USER, DB_PASSWORD, DB_CONNECT_STRING from process.env.
   - Pool sized for serverless: poolMin: 0, poolMax: 4, poolIncrement: 1, 
     poolTimeout: 60. Create the pool lazily on first use and cache it at 
     module scope so warm serverless invocations reuse it instead of 
     reconnecting.
   - Export an `executeQuery<T>(sql: string, binds?: object)` helper that 
     acquires a connection from the pool, runs the query with bind 
     variables (never string-concatenate SQL), returns rows typed as T[], 
     and releases the connection in a finally block even on error.
   - Add a `checkHealth()` function that runs `SELECT 1 FROM DUAL` and 
     returns a boolean, for use in /api/health.

2. .cursor/rules/general.mdc
   - alwaysApply: true
   - Document: Next.js App Router + TypeScript + MUI v6 project, mobile-first 
     (design for 375px viewport first, scale up), Server Actions preferred 
     for mutations, Route Handlers only for endpoints external callers need 
     (cron, future public API), all DB access must go through lib/db.ts's 
     executeQuery — never instantiate oracledb directly elsewhere, all 
     notification sends must go through a NotificationChannel interface 
     (email implementation now, WhatsApp added later) — never call an 
     email/SMS provider directly from a route or component.

3. .cursor/rules/db-oracle.mdc
   - globs: ["lib/db.ts", "app/api/**/*.ts"]
   - Document: Thin-mode only, single shared pool (never open a new pool or 
     connection per request), always parameterize queries with bind 
     variables, always release connections in try/finally, keep pool sizes 
     small (this is a free-tier/serverless context, not a high-concurrency 
     service).

After creating these, add a minimal /app/api/health/route.ts that calls 
checkHealth() and returns { ok: true/false } as JSON, so I can verify the 
DB connection end-to-end before building any real features.