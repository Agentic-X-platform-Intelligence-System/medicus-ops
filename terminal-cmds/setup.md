# Medicus Ops — Initial Setup

> **Windows / PowerShell note:** Bash uses `\` for line continuation. In PowerShell use a **single line**, or backtick `` ` `` at end of each line. Do not paste bash multi-line `docker run` into PowerShell.

## Step 4 — Docker: pull and run local Oracle DB

```powershell
docker pull container-registry.oracle.com/database/free:latest

docker run -d --name oracle-medicus-ops -p 1521:1521 -e ORACLE_PWD=MedicusOps123 container-registry.oracle.com/database/free:latest
```

Takes a few minutes to initialize on first run — check with:

```powershell
docker logs -f oracle-medicus-ops
```

Wait until logs show the database is ready (often `DATABASE IS READY TO USE`). Ctrl+C exits the log follow; the container keeps running.

Useful checks:

```powershell
docker ps --filter "name=oracle-medicus-ops"
docker stop oracle-medicus-ops
docker start oracle-medicus-ops

# docker rename oracle-medicus-ops oracle-medicus-ops
# docker exec -it oracle-medicus-ops sqlplus system/MedicusOps123@FREEPDB1

```

## Step 5 — Scaffold Next.js

From `medicus-ops/` (or after merging scaffold into repo root):

```powershell
npx create-next-app@latest . --typescript --eslint --app --no-tailwind --no-src-dir --import-alias "@/*" --use-npm --turbopack --yes
```

If the folder already has `idea/`, `terminal-cmds/`, or `.env.local`, scaffold into a temp dir then move files up (create-next-app refuses non-empty conflicts).

When prompted interactively instead: TypeScript = Yes, ESLint = Yes, Tailwind = No, App Router = Yes, no `src/` (blueprint assumes root `app/`).

```powershell
npm install @mui/material @emotion/react @emotion/styled oracledb
```

## Step 6 — commit (only when you ask the agent / are ready)

```powershell
git add .
git commit -m "Initial scaffold + blueprint"
git push
```

Do **not** commit `.env.local` (already in `.gitignore`).

## DB Config (local Docker Oracle Free)

Put in `.env.local` (never commit):

```
DB_USER=system
DB_PASSWORD=MedicusOps123
DB_CONNECT_STRING=localhost:1521/FREEPDB1
```

Service name for Oracle Free is typically `FREEPDB1`. Confirm with container docs/logs if connection fails.

`ORACLE_PWD` is applied only on first container/DB create. `.env.local` `DB_PASSWORD` must match that value — changing `-e ORACLE_PWD=...` later does not update an existing volume.

### Phase 2 — public portfolio DB migration

After Oracle is up, apply appointments schema (from repo root):

```powershell
Get-Content sql/migrations/001_phase2_public.sql | docker exec -i oracle-medicus-ops bash -c "sqlplus -s system/`${ORACLE_PWD}@FREEPDB1"
```

Optional in `.env.local`:

```
DEFAULT_DOCTOR_USER_ID=1
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

On Vercel (Production + Preview), set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin (e.g. `https://medicus-ops.vercel.app`) so canonical, Open Graph, sitemap, and robots URLs are correct when shared.
