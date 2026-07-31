# Phase 1 Sprint Plan (7 days)

Internal-only ops tool. Dependency order — do not skip ahead.

**Out of scope Phase 1:** public portfolio, patient booking SEO site, live social-media / messaging channels.

---

## D1 — Foundation

- [x] Repo + Next.js + MUI scaffold
- [x] Oracle local Docker (or ADB) + `.env.local` (`DB_USER`, `DB_PASSWORD`, `DB_CONNECT_STRING`)
- [x] `lib/db.ts` Thin pool + `executeQuery` + `checkHealth`
- [x] `GET /api/health` → `{ ok }`
- [x] Cursor specialist pack (rules, commands, skill, sprint docs)
- [ ] Smoke: `/api/health` returns `{ ok: true }` with DB up

## D2 — Auth + shell layout

- [ ] NextAuth (Auth.js) credentials provider
- [ ] Login page
- [ ] Base layout: bottom nav (mobile), sidebar (desktop)
- [ ] Mobile-first at 375px

## D3 — Tasks

- [ ] `tasks` table migration SQL
- [ ] Server Actions: list / create / update / delete
- [ ] MUI task list UI: status chips, priority indicator

## D4 — Appointments

- [ ] `appointments` table migration SQL
- [ ] CRUD Server Actions
- [ ] Simple calendar / day view

## D5 — Schedule + dashboard

- [ ] `schedules` table (recurring availability)
- [ ] Schedule CRUD
- [ ] Dashboard: today's tasks + today's appointments

## D6 — Notifications

- [ ] `NotificationChannel` interface + `EmailChannel`
- [ ] `SocialMediaChannel` stub (throws / no-op — no live sends)
- [ ] Vercel Cron → `/api/cron/reminders` (daily digest email)

## D7 — Polish + deploy

- [ ] Mobile responsiveness pass
- [ ] Empty states + error handling
- [ ] Deploy Vercel; env vars for DB + auth + email
- [ ] End-to-end smoke test

---

## Open decisions

- Email provider: Resend vs Nodemailer + Gmail SMTP
- Oracle prod: wallet TLS vs TLS-only ACL (see blueprint §1)

## Phase gates

| Phase | In scope |
|-------|----------|
| 1 | Auth, tasks, schedule, appointments, email notifications, Oracle, internal MUI |
| 2 | Public portfolio + booking request flow |
| 3 | Social-media / messaging channel adapters |
