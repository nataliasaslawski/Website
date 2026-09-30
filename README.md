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

## Deployment (Netlify via GitHub)

This repo includes a `netlify.toml` (build command, Node version, and the
`@netlify/plugin-nextjs` plugin needed for SSR/API routes like
`/api/contact` to run as serverless functions). To deploy:

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick
   the repo. Netlify reads `netlify.toml` automatically — no manual build
   settings needed.
3. Under **Site settings → Environment variables**, set the variables listed
   in `.env.example` (currently `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and
   optionally `CONTACT_TO_EMAIL`) so the contact form can send email. Without
   these it still works, just falls back to a "please email me directly"
   message instead of sending.
4. Trigger a deploy.

## Known placeholders — still to resolve before launch

- **Domain**: `src/lib/content.ts` still has a placeholder `url`
  (`ihre-domain-platzhalter.de`) — the Datenschutzerklärung/Impressum
  reference `www.natalia-saslawski.de` and `kontakt@natalia-saslawski.de`;
  once the real domain is confirmed and connected in Netlify, update
  `site.url` to match.
- **Photography**: most sections use real client photos
  (`public/images/portraits/`); `home.methodAccent` and both `insights.*`
  images still use the moodboard placeholders (`public/images/moodboard/`).
  Swap via `src/lib/images.ts`.
- **Logo**: `public/brand/logo-light*.png` were derived programmatically from
  the supplied `logo-navy.png` (color-remapped for dark backgrounds, shape
  unchanged) — replace with an official file if/when the client provides one.
- **Booking (Cal.com)**: not yet embedded — the Kontakt page's Erstgespräch
  section currently points to the contact form instead.
- **CMS (Sanity)**: not yet connected — Insights page shows a clean empty
  state. See `src/lib/posts.ts`.
- **Analytics (Plausible)**: not yet added — and per `src/app/datenschutz`,
  none is currently active, so adding one later requires a matching update
  there plus a cookie-consent banner if it isn't a cookie-free/consent-exempt
  setup.

None of the above required creating third-party accounts, which isn't
something to do on the client's behalf — she'll need to set those up
(Cal.com, Sanity, Plausible, a domain registrar), after which each
integration is a scoped, mechanical follow-up.
