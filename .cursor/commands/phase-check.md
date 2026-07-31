# /phase-check

Gate work against medicus-ops product phases.

## Before summarizing

Ask for phase number (1–3) if not provided.

## Phase map

| Phase | In scope | Out of scope |
|-------|----------|--------------|
| 1 | Auth, tasks, schedule, appointments, email notifications, Oracle, internal MUI UI | Public portfolio, booking SEO site, live social-media channels |
| 2 | Public portfolio + patient-facing booking request | Live social-media sends (unless explicitly pulled forward) |
| 3 | Social-media / messaging channel adapters + richer automation | Unrelated pivots |

## Then

1. List in-scope for the given phase
2. List out-of-scope (later phases)
3. Scan recent git (`git diff`, recent commits) and flag scope creep

Be explicit when a change should wait for a later phase.

Source: `idea/doctor-app-blueprint.md` + `docs/sprints/phase-1-sprint-plan.md`.
