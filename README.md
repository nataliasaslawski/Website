# Natalia Saslawski — Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, built against the
`Master_Website_Briefing_Claude_Code._31.08.2026.docx` and the client's design
system package (`Natalia Saslawski Design System.zip`).

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. If newly added Tailwind classes don't seem to
apply in dev mode (a known Tailwind v4 / Next dev-server JIT quirk), stop and
restart `npm run dev` — `npm run build` always regenerates CSS correctly.

## Project structure

- `src/app/` — one folder per route (App Router). Metadata (title/description)
  is set per page.
- `src/components/ui/` — generic building blocks (Button, Container, Eyebrow, Faq).
- `src/components/layout/` — header/footer.
- `src/components/home/`, `src/components/contact/` — page-specific sections.
- `src/lib/content.ts` — site-wide constants (nav, CTAs, **placeholder**
  domain/email — see TODO below).
- `src/lib/images.ts` — central image registry. **To swap a placeholder photo
  for a real one: replace the file in `public/images/...` (or add a new file)
  and update the path in this one file** — no page/component code changes needed.
- `src/lib/posts.ts` — blog/insights data layer, currently returns no posts.
  Swap `getPosts`/`getPost` for real Sanity queries once that project exists;
  the UI in `src/app/insights/` doesn't need to change.

## Design system

Colors, type scale, spacing and effects are wired up as CSS variables /
Tailwind theme tokens in `src/app/globals.css`, taken directly from the
client-supplied design system. Fonts (Cormorant Garamond, Work Sans, Lato)
are self-hosted via `next/font/google` (downloaded at build time, served from
this site's own origin — no runtime calls to Google).

## Known placeholders — must be resolved before launch

- **Photography**: all photos are temporary stand-ins from the client's
  moodboard (`public/images/moodboard/`), approved for interim use. Swap via
  `src/lib/images.ts` once professional photos exist.
- **Logo**: `public/brand/logo-light*.png` were derived programmatically from
  the supplied `logo-navy.png` (color-remapped for dark backgrounds, shape
  unchanged) — replace with an official file if/when the client provides one.
- **Domain & email**: `src/lib/content.ts` uses obvious placeholder values
  (`ihre-domain-platzhalter.de`) — no real domain or email address was ever
  supplied. Update before launch.
- **Phone number**: none was supplied; the Kontakt page currently omits one
  ("Telefonnummer folgt in Kürze").
- **Impressum / Datenschutz**: structurally complete but explicitly marked as
  placeholders in the UI — need real legal content, ideally reviewed by the
  client's legal/data-protection advisor before going live.
- **Contact form**: `/api/contact` validates and honeypot-checks submissions
  but doesn't send email yet — needs `RESEND_API_KEY` (or an equivalent
  provider) once that account exists. Until then it degrades gracefully to a
  "please email me directly" message.
- **Booking (Cal.com)**: not yet embedded — the Kontakt page's Erstgespräch
  section currently points to the contact form instead.
- **CMS (Sanity)**: not yet connected — Insights page shows a clean empty
  state. See `src/lib/posts.ts`.
- **Analytics (Plausible)**: not yet added.

None of the above required creating third-party accounts, which isn't
something to do on the client's behalf — she'll need to set those up (Resend,
Cal.com, Sanity, Plausible, a domain registrar, and a Vercel project for
hosting), after which each integration is a scoped, mechanical follow-up.
