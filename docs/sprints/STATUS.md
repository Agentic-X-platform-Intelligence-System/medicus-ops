# Medicus Ops — Status

**Phase / sprint:** Phase 1 · D1 Foundation complete → D2 Auth next  
**Last updated:** 2026-08-01

## At a glance

- D1 Foundation done — smoke verified: `GET /api/health` → `{ ok: true }`
- Next: D2 Auth + shell layout
- Branch: `feature` (work here → PR → merge `main` → deploy `main`)

## Done recently

- `42d8886` Initial scaffold + blueprint
- Next.js + MUI, `lib/db.ts`, `/api/health`, Cursor specialist pack
- Local Oracle `oracle-medicus-ops` healthy on `1521`
- Smoke pass: `/api/health` returns `{ ok: true }`
- `lib/db.ts`: reset pool after failed health probes (avoids poisoned pool after bad creds)

## Next up (recommended)

- **D2 — Auth + shell layout** — NextAuth credentials, login page, mobile/desktop nav

## Blockers / open decisions

- Auth provider env vars for Day 2
- Email: Resend vs Nodemailer + Gmail SMTP
- Oracle prod: wallet TLS vs TLS-only ACL

## Out of scope today

- Public portfolio / SEO site (Phase 2)
- Live social-media / messaging channels (Phase 3)
