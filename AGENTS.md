# Medicus Ops — Agent Instructions

Phase 1: solo-physician internal ops (tasks, schedule, appointments). Later: public portfolio, social-media channel adapters.

## Specialist bench

| Layer | Where |
|-------|--------|
| **Rules** (policy) | `.cursor/rules/` — `general`, `db-oracle`, `ui-mui`, `notifications`, … |
| **Commands** (rituals) | `/daily`, `/commit`, `/status`, `/phase-check`, `/pr-review`, `/deploy-check`, `/test-changed`, `/new-feature` |
| **Skill** (daily twin) | `.cursor/skills/daily-medicus-ops/` |
| **Org KB** (facts, roster) | [`agentic-ai-ideas/cursor-specialist-team.md`](../agentic-ai-ideas/cursor-specialist-team.md) |

Do not restate rule bodies here — follow scoped rules.

## Quick pointers

| Concern | Where |
|--------|--------|
| DB pool / queries | `lib/db.ts` only |
| Health check | `GET /api/health` → `{ ok }` |
| Sprint glance | `docs/sprints/STATUS.md` |
| Blueprint / schema | `idea/doctor-app-blueprint.md` |
| Local Oracle setup | `terminal-cmds/setup.md` |

Next.js APIs may differ from training data — check `node_modules/next/dist/docs/` when unsure.
