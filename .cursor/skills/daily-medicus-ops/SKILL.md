---
name: daily-medicus-ops
description: >-
  Medicus Ops morning kickoff. One-screen daily overview from sprint STATUS,
  plan checkboxes, git, blockers, and next task; rewrites STATUS.md. Use when
  the user invokes /daily-medicus-ops, /daily, morning standup, or start-of-day
  status for medicus-ops.
disable-model-invocation: true
---

# Daily Medicus Ops

Morning kickstart. One-screen overview, then **stop** unless asked to start a task.

Work only inside the `medicus-ops/` repo root.

## Sources (read; do not invent progress)

1. `docs/sprints/STATUS.md` — living glance (rewrite at end)
2. `docs/sprints/phase-1-sprint-plan.md` — checkboxes + open decisions
3. `README.md` + `idea/doctor-app-blueprint.md` — framing only
4. Git: `git status -sb`, `git log -5 --oneline`

Ignore `node_modules/`, `.next/`.

Canonical command twin: `.cursor/commands/daily.md`

## Workflow

1. Read STATUS, sprint plan, README, blueprint framing.
2. Run git status/log; summarize branch + dirty paths.
3. Emit overview (glance, not essay).
4. Rewrite `docs/sprints/STATUS.md` to match snapshot.
5. Ask optional start; no implementation until user says yes.

## Output format

```markdown
# Medicus Ops — Daily

**Phase / sprint:** …
**Today's date:** …

## At a glance
- One sentence status
- Branch + dirty/untracked (key paths only)

## Done recently
- Last 1–3 commits or checkbox flips (or "none since last session")

## Next up (recommended)
- **Task ID + title**
- Why next (1 line)
- Suggested session outcome

## Blockers / open decisions
- Unresolved Phase 1 items — or "none"

## Out of scope today
- No public portfolio (Phase 2) · no live social-media channels (Phase 3)

## Optional start
Ask: "Want me to start **{task id}** now?"
```

## Rules

- Sprint order D1 → D7; do not skip dependencies.
- Unchecked `[ ]` = not done.
- No commit, push, or implementation unless user confirms.
- Phase gate: internal ops + email only — no public site, no live social channels.
