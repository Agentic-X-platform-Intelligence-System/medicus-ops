# Medicus Ops — Status

**Phase / sprint:** Phase 2 · Public portfolio (initial build complete) → D2 Auth next  
**Last updated:** 2026-08-01

## At a glance

- Phase 2 public site live at `/` — hero, Credential Rail, procedures, conditions, contact, appointment request
- Phase 1 D1 complete (`/api/health` smoke pass); D2 Auth still pending for internal dashboard
- Branch: `main` after PR #2 merge

## Done recently

- Public route group `app/(public)/` with Fraunces + IBM Plex, ink/gold palette, full-bleed hero
- SEO: `generateMetadata`, JSON-LD Physician, SSG/ISR (1d revalidate)
- Routes: `/`, `/credentials`, `/procedures`, `/procedures/[slug]`, `/conditions/[slug]`, `/contact`
- Appointment request Server Action → Oracle `appointments` (`status: requested`)
- SQL migration `001_phase2_public.sql` (users + appointments)
- D1: `lib/db.ts`, `/api/health`, pool reset on failed probes

## Next up (recommended)

- Replace `UPDATE:` placeholders in `lib/public/site-content.ts` with brother's confirmed facts
- Phase 1 D2 Auth + internal dashboard shell
- Deploy public site from `main`

## Blockers / open decisions

- WhatsApp / phone `9960912675`, address Nashik Road 422101, Magnum affiliation set; email + secondary clinic still stubs
- Google ranking: needs live custom domain + Search Console (hospital/directory listings currently dominate)
- Auth provider env vars for Day 2 internal app
- Email: Resend vs Nodemailer + Gmail SMTP
- Oracle prod: wallet TLS vs TLS-only ACL

## Out of scope today

- Phase 3 WhatsApp Business API automation
- Internal dashboard features (tasks, calendar) until D2+
