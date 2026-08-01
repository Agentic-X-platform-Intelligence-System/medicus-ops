# /deploy-check

Pre-deploy checklist. Run checks; do not deploy unless asked.

**Deploy target:** `main` only (after PR merge). Never deploy `feature` to production.

## Checklist

1. **Env vars present** (names only — never print values):
   - `DB_USER`, `DB_PASSWORD`, `DB_CONNECT_STRING`
   - `NEXT_PUBLIC_SITE_URL` (production HTTPS origin, e.g. `https://medicus-ops.vercel.app`)
   - `AUTH_SECRET` (when auth shipped)
   - Email / channel vars (when notifications shipped)
2. **Oracle reachable**: local `docker ps --filter name=oracle` or ADB ACL/wallet configured
3. **Health**: `GET /api/health` → `{ ok: true }` against target DB
4. **No TODO/FIXME** in files changed on branch
5. **Build passes**: `npm run build` (and `npx tsc --noEmit` if TS errors suspected)
6. **No `.env*` committed**

Report pass / fail per item. Block on any fail.
