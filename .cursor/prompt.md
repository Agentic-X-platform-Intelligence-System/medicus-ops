Context: This is Phase 2 of medicus-ops — the public-facing portfolio page for 
a urologist (urosurgeon), built with Next.js App Router + MUI v6, mobile-first, 
SEO-optimized. Phase 1 (internal task/appointment tracker) is already built; 
this is a new route group app/(public)/ that's fully separate from the 
authenticated dashboard.

Act as design lead. Do not default to the generic medical-website look (soft 
blue/teal palette, stock doctor photo, rounded cards, generic "Book Now" 
button) — that's what every templated clinic site already looks like. Take 
one real aesthetic risk that still reads as credible and clinical, not 
casual or startup-y. A urosurgeon's site needs to feel precise, senior, and 
trustworthy — think the restraint of a well-run private practice, not a 
marketing agency template.

Before writing code, produce a short design plan:
- Palette: 4-6 named hex values. Avoid the default soft-blue-on-white medical 
  look — consider something with more weight (deep navy, charcoal, a single 
  considered accent) that still feels clean and clinical.
- Typography: a display face with real character for the doctor's name/hero 
  headline, paired deliberately with a body face for readability. Not the 
  same pairing every medical template uses.
- Layout concept: describe it in prose + a rough wireframe before building.
- Signature element: the one memorable thing this page will be remembered 
  for — could be how credentials are presented, how the hero is composed, 
  or an interactive element specific to a surgeon's practice (e.g. a visual 
  timeline of training/fellowships, an interactive breakdown of procedures 
  performed, a case-outcomes stat block). Make it something a generic 
  clinic-site generator would never produce.

Information architecture (content, not just sections):
1. Hero — name, credentials (MBBS/MS/MCh etc.), specialty focus, one clear 
   primary action (book/contact), one supporting action (view credentials 
   or procedures).
2. Credibility block — degrees, fellowships, years of experience, hospital 
   affiliations, professional memberships. This carries more weight for a 
   surgeon than testimonials do — patients researching a urologist are 
   checking qualifications first.
3. Areas of expertise/procedures — laparoscopic/robotic urology, stone 
   disease, prostate health, etc. (confirm exact list with your brother) — 
   presented as substantive content, not just icon tiles.
4. Patient resources — plain-language explainers on common conditions. This 
   is also your strongest SEO content (see below).
5. Location, hospital/clinic affiliation, contact — map embed, phone, 
   WhatsApp click-to-chat link (wa.me/ links work without needing the 
   WhatsApp Business API — fine for Phase 2 even before Phase 3's automation).
6. Appointment request — writes to the same Appointment table from the 
   Phase 1 blueprint (status: requested), no new schema needed.

SEO requirements:
- Use Next.js generateMetadata per page — proper title/description/OG tags.
- Add JSON-LD structured data using schema.org/Physician (name, medical 
  specialty, address, hours) — this is what lets Google show rich results 
  for local doctor searches.
- Static-generate (SSG/ISR) all public pages — they don't need per-request 
  auth like the dashboard does.
- Semantic HTML headings (one h1 per page), descriptive alt text on all 
  images, fast LCP (optimize the hero image with next/image).
- Each condition/procedure explainer page is a real SEO opportunity — plan 
  these as individual routes (e.g. /conditions/kidney-stones), not one long 
  page.

Interaction/UX:
- Mobile-first: assume most patients arrive on a phone from a Google search 
  — sticky bottom contact bar on mobile, not a hover-dependent nav.
- Smooth, purposeful scroll reveals only where they add clarity — no 
  gratuitous animation.
- Visible keyboard focus states, reduced-motion respected.

Build in passes: propose the design plan first (palette, type, layout, 
signature) and wait for confirmation before generating full page code.