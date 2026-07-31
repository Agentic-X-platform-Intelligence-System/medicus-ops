# Doctor Ops App — Project Blueprint (Phase 1: Internal Tool)

## 0. Ground Rules

- **Phase 1 (7 days):** Internal-only tool. No public patients, no real WhatsApp. Just your brother, logged in, managing his day.
- **Phase 2 (later):** Public portfolio + SEO landing page, patient-facing booking.
- **Phase 3 (later):** Real WhatsApp Business API, richer automation.
- Every phase deploys independently — Phase 1 is a real, usable product on its own, not a throwaway prototype.

---

## 1. Final Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend + Backend | **Next.js 15 (App Router)** | Server Actions + API routes give you a backend without a separate service. React under the hood, so "React + Next.js" is really just Next.js. |
| UI | **MUI v6** | Fast to build forms/tables/calendars; theming is quick to make it look like a real product, not a bootstrap-y demo. |
| Database | **Oracle Autonomous DB (Always Free)** | Two free instances, 20GB each, free forever — your call to keep it for the learning value. |
| DB Driver | **node-oracledb v6+, Thin mode** | No Oracle Instant Client install needed — works in serverless. Confirmed it accepts wallet PEM files directly in Thin mode, which is what makes this viable on Vercel at all. |
| Auth | **NextAuth.js (Auth.js) — credentials provider** | Just your brother logs in. No need for social login in Phase 1. |
| Notifications (Phase 1) | **Email only (Resend or Nodemailer + Gmail SMTP), stubbed WhatsApp** | A `NotificationChannel` interface with an `EmailChannel` implementation now, `WhatsAppChannel` added in Phase 3 without touching calling code. |
| Hosting | **Vercel (Hobby)** | Free, but flagged below — see "Vercel ToS note." |
| Source control | **GitHub** (private repo) | Standard. |
| Dev tool | **Cursor AI** with `.cursor/rules/` | Covered in Section 6. |

### Vercel ToS note
Hobby is scoped to personal, non-commercial use. Since Phase 1 is *your* personal project (a tool you built, that your brother happens to use) rather than a monetized product, you're on reasonably solid ground. Once Phase 2 turns this into his business's public marketing/booking site, revisit — either keep it framed as your personal portfolio piece, or budget for Vercel Pro ($20/mo) if it starts looking like his commercial site.

### Oracle connection specifics (worth knowing before Day 1)
- Thin mode needs the wallet's `ewallet.pem` file (not `cwallet.sso`, which is Thick-mode-only).
- Alternative: skip the wallet entirely and use **TLS-only** (no mTLS) by adding `0.0.0.0/0` to your DB's Access Control List and connecting with just username/password + TLS. Simpler for a solo/free-tier setup — no wallet file to manage as a secret in Vercel's env vars. I'd start here and only add the wallet if you hit an access-control issue.
- Either way, store credentials in Vercel Environment Variables, never commit them.

---

## 2. Data Model (Phase 1)

```
User (the doctor)
 ├─ id, name, email, password_hash, specialty, phone

Task
 ├─ id, user_id, title, description, status (todo/in_progress/done),
 │  priority, due_date, created_at

Schedule (recurring availability blocks)
 ├─ id, user_id, day_of_week, start_time, end_time, location, is_active

Appointment
 ├─ id, user_id, patient_name, patient_phone, patient_email (optional),
 │  scheduled_at, duration_minutes, status (scheduled/completed/cancelled/no_show),
 │  notes, reminder_sent (bool)

Notification
 ├─ id, appointment_id (nullable), user_id, channel (email/whatsapp),
 │  recipient, message, status (pending/sent/failed), sent_at
```

This schema already supports Phase 2/3 — `patient_phone`/`patient_email` and the `Notification` table exist now, so adding real WhatsApp later is a channel implementation, not a schema migration.

---

## 3. Architecture (Phase 1)

```
Browser (mobile-first MUI UI)
   │
   ▼
Next.js App Router
   ├─ /app/dashboard        → Task board + today's schedule
   ├─ /app/appointments      → Calendar view, CRUD
   ├─ /app/tasks             → Task list, CRUD
   ├─ /app/api/*             → Route handlers (or Server Actions) for DB ops
   └─ /lib/db                → node-oracledb connection pool (singleton)
   └─ /lib/notifications      → NotificationChannel interface
                                 ├─ EmailChannel (active)
                                 └─ WhatsAppChannel (stub, throws "not implemented" in Phase 1)
   │
   ▼
Oracle Autonomous DB (free tier)
```

A daily cron (Vercel Cron, free on Hobby) hits `/api/cron/reminders` each morning, queries appointments for the day, and calls `NotificationChannel.send()` — this is the "automate schedules" piece for Phase 1, delivered by email.

---

## 4. Folder Structure

```
doctor-app/
├── .cursor/
│   └── rules/
│       ├── general.mdc
│       ├── nextjs-patterns.mdc
│       ├── db-oracle.mdc
│       └── ui-mui.mdc
├── app/
│   ├── (auth)/login/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── tasks/
│   │   ├── appointments/
│   │   └── layout.tsx
│   ├── api/
│   │   ├── tasks/route.ts
│   │   ├── appointments/route.ts
│   │   └── cron/reminders/route.ts
│   └── layout.tsx
├── lib/
│   ├── db.ts
│   ├── notifications/
│   │   ├── channel.ts
│   │   └── email-channel.ts
│   └── auth.ts
├── components/
├── types/
└── vercel.json   (cron config)
```

---

## 5. Day-by-Day 7-Day Plan

| Day | Goal |
|---|---|
| 1 | Repo init, Next.js + MUI scaffold, Oracle ADB provisioned, `.env` wired, DB connection tested with one query. Cursor rules written (Section 6). |
| 2 | Auth (NextAuth credentials) + login page. Base layout/nav (mobile-first: bottom nav on mobile, sidebar on desktop). |
| 3 | Task model + CRUD (API routes + UI: list, add, edit, mark done). |
| 4 | Appointment model + CRUD + simple calendar/day view. |
| 5 | Schedule (recurring availability) CRUD + dashboard that combines today's tasks + today's appointments. |
| 6 | Notification system: EmailChannel implementation, Vercel Cron for daily reminder digest, WhatsAppChannel stub wired but disabled. |
| 7 | Polish pass: mobile responsiveness audit, empty states, error handling, deploy to Vercel, smoke-test end to end. |

---

## 6. Cursor AI Setup

Create `.cursor/rules/general.mdc` with something like:

```md
---
description: Project-wide conventions
alwaysApply: true
---
This is a Next.js 15 App Router + TypeScript + MUI v6 project for a solo
doctor's internal task/schedule/appointment tracker (Phase 1 of a larger app).
- Mobile-first: design every screen for a 375px viewport first, then scale up.
- Use Server Actions for mutations where possible; use Route Handlers only
  when an external caller (cron, future public API) needs the endpoint.
- All DB access goes through lib/db.ts — never instantiate a new oracledb
  pool elsewhere.
- Notification sends always go through lib/notifications/channel.ts's
  interface — never call an email/SMS provider directly from a route.
- Keep components small and colocated under app/ unless shared.
```

`.cursor/rules/db-oracle.mdc`:
```md
---
description: Oracle DB conventions
globs: ["lib/db.ts", "app/api/**/*.ts"]
---
- Use node-oracledb in Thin mode (no Instant Client). Do not add thick-mode
  init code.
- Use a single connection pool created once (lib/db.ts), reused across
  requests — never open a new connection per request.
- Parameterize all queries (bind variables) — never string-concatenate SQL.
- Wrap all queries in try/finally that releases the connection back to the pool.
```

Sample **first prompt to Cursor** once rules are in place:
> "Scaffold the Next.js project per `.cursor/rules/general.mdc`. Set up `lib/db.ts` with an oracledb Thin-mode connection pool reading `DB_USER`, `DB_PASSWORD`, `DB_CONNECT_STRING` from env. Add a health-check route at `/api/health` that runs `SELECT 1 FROM DUAL`."

Sample **Day 3 prompt**:
> "Implement the Task model per the schema in the blueprint. Create the `tasks` table migration SQL, a Server Action for create/update/delete/list, and a MUI-based task list UI at `/app/(dashboard)/tasks` with status chips and a priority indicator. Mobile-first layout."

Keep one `.mdc` rule file per concern (db, ui, notifications) rather than one giant file — Cursor applies them more precisely that way, and it's easier for you to update one concern without touching the others.

---

## 7. Phase 2 Preview (public portfolio + booking + SEO)

When you get here:
- New route group `app/(public)/` — portfolio, about, services, contact.
- SSG/ISR for the public pages (fast, cacheable, great for SEO) vs. the dashboard staying fully dynamic/authenticated.
- `next/metadata` API for per-page title/description, Open Graph tags, structured data (`schema.org/Physician`) for rich Google results.
- Public appointment request form writes to the same `Appointment` table with `status = requested`, which your brother approves from the dashboard — no new schema needed.

## 8. Phase 3 Preview (real WhatsApp)
- Implement `WhatsAppChannel` against Twilio's WhatsApp sandbox first (free for testing) or Meta's Business Platform (1,000 free business-initiated conversations/month) before committing to a paid provider.
- Swap it into `lib/notifications/channel.ts` — zero changes needed elsewhere since the interface is already in place.

---

**Next step:** feed Section 6 into Cursor as your first prompt, and work the Day-by-Day plan top to bottom. Ping me for the actual `.mdc` file contents in full, the Oracle table DDL, or a specific day's Cursor prompt written out completely — happy to draft any of those next.
