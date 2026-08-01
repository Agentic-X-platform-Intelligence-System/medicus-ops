# Medicus Ops — Status

**Phase / sprint:** Phase 2 · Public portfolio (demo-ready patch) → D2 Auth next  
**Last updated:** 2026-08-02

## At a glance

- Phase 2 public site live at `/` — hero, Credential Rail, procedures, conditions, contact, appointment request
- Demo patch: production site URL helper, stub trim, real doctor photo at `/images/doctor.png`
- Phase 1 D1 complete (`/api/health` smoke pass); D2 Auth still pending for internal dashboard
- Branch: `main` after PR #2 merge

## Done recently

- `getSiteUrl()` — `NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → localhost fallback for metadata, robots, sitemap, JSON-LD
- Trimmed public stubs: Magnum-only affiliation, USI-only membership, neutral credential rail copy (no fake college names)
- Contact email hidden until a real address is confirmed
- SQL seed phone aligned with site (`+919960912675`)
- Real hero photo wired at `public/images/doctor.png`

## Next up (recommended)

- Set `NEXT_PUBLIC_SITE_URL=https://medicus-ops.vercel.app` on Vercel (Production + Preview) and redeploy
- Brother to confirm: exact medical colleges, secondary clinic, professional email
- Phase 1 D2 Auth + internal dashboard shell
- Custom domain + Search Console when ready for SEO

## Blockers / open decisions

- Vercel env `NEXT_PUBLIC_SITE_URL` must be set before sharing link (canonical / OG previews)
- Pending from brother: college names, secondary clinic, clinic email
- Google ranking: needs custom domain + Search Console (hospital/directory listings currently dominate)
- Auth provider env vars for Day 2 internal app
- Email: Resend vs Nodemailer + Gmail SMTP
- Oracle prod: wallet TLS vs TLS-only ACL

## Out of scope today

- Phase 3 WhatsApp Business API automation
- Internal dashboard features (tasks, calendar) until D2+
