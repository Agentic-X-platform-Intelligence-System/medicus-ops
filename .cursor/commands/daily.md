# /daily

Medicus Ops morning kickoff — one-screen overview, then stop unless asked to start.

## Sources (read; do not invent progress)

1. `docs/sprints/STATUS.md` — living glance (rewrite at end)
2. `docs/sprints/phase-1-sprint-plan.md` — checkboxes + open decisions
3. `README.md` + `idea/doctor-app-blueprint.md` — framing only
4. Git (cwd = medicus-ops): `git status -sb`, `git log -5 --oneline`

Ignore `node_modules/`, `.next/`.

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
- **Task ID + title** (first incomplete on dependency chain)
- Why next (1 line)
- Suggested session outcome (1 deliverable)

## Blockers / open decisions
- Unresolved Phase 1 items — or "none"

## Out of scope today
- No public portfolio (Phase 2) · no live social-media channels (Phase 3)

## Optional start
Ask: "Want me to start **{task id}** now?"
```

## Rules

- Follow sprint order D1 → D7. Do not skip dependencies.
- Unchecked `[ ]` = not done; never mark complete without user confirmation.
- Rewrite `docs/sprints/STATUS.md` to match this snapshot.
- No commit, push, or implementation unless user says yes.
- Phase gate: Phase 1 = internal ops + email only — no public site, no live social channels.
