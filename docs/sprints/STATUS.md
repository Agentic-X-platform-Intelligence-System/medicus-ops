# Medicus Ops — Status

**Phase / sprint:** Phase 2 · Public portfolio (initial build complete)  
**Last updated:** 2026-08-01

## At a glance

- Phase 2 public site live at `/` — hero, Credential Rail, procedures, conditions, contact, appointment request
- Phase 1 D1 complete; D2 Auth still pending for internal dashboard
- Branch: `feature` → PR → merge `main` → deploy `main`

## Done recently

- Public route group `app/(public)/` with Fraunces + IBM Plex, ink/gold palette, full-bleed hero
- SEO: `generateMetadata`, JSON-LD Physician, SSG/ISR (1d revalidate)
- Routes: `/`, `/credentials`, `/procedures`, `/procedures/[slug]`, `/conditions/[slug]`, `/contact`
- Appointment request Server Action → Oracle `appointments` (`status: requested`)
- SQL migration `001_phase2_public.sql` (users + appointments)

## Next up (recommended)

- Replace `UPDATE:` placeholders in `lib/public/site-content.ts` with brother's confirmed facts
- Phase 1 D2 Auth + internal dashboard shell
- Deploy public site from `main` after PR review

## Blockers / open decisions

- Real clinic address, phone, WhatsApp, hospital names (stub content in `site-content.ts`)
- Auth provider env vars for Day 2 internal app
- Email: Resend vs Nodemailer + Gmail SMTP

## Out of scope today

- Phase 3 WhatsApp Business API automation
- Internal dashboard features (tasks, calendar) until D2+
