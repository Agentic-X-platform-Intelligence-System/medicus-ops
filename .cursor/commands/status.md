# /status

Quick orientation — under 30 lines. Not a full audit.

Scan `app/`, `lib/`, `sql/`, `.cursor/` and report:

- What's implemented vs placeholder
- Current phase (from `docs/sprints/`)
- Start commands:
  - `npm run dev`
  - Docker Oracle: `docker start oracle-medicus-ops` (or local container name)
  - Health: `GET /api/health` → `{ ok }`
  - SQL*Plus / env: see `terminal-cmds/setup.md`

Keep output concise.
