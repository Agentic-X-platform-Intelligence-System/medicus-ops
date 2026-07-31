# /pr-review

Self-review before opening a PR. Diff against `main`/`master`.

## Checklist

Flag pass / fail / N/A with file refs:

1. **Secrets** — no hardcoded keys; env placeholders only
2. **Injection** — SQL uses bind variables via `executeQuery`; no string concat
3. **Auth** — protected routes/actions require session (when auth exists)
4. **PHI / PII** — no patient data in logs or client console
5. **Channels** — outbound sends via `NotificationChannel` only
6. **Tests** — new logic has tests or explicit reason not to
7. **Debug leftovers** — no stray `console.log` in production paths
8. **Migrations** — new SQL files only; never edit applied migrations
9. **Scope** — matches intended phase (flag public site / social channel creep)
10. **Mobile-first** — UI changes sane at 375px
11. **Server Actions** — mutations prefer Server Actions; Route Handlers only for cron/external API

Summarize blockers vs nits. Do not open PR unless asked.
