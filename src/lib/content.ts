/**
 * Site-wide constants sourced from the Master-Website-Briefing (31.08.2026)
 * and Brand Guidelines. Keep in sync if the client updates those documents.
 */

// TODO: No domain or phone number was supplied in the briefing/knowledge
// documents. The domain below is an intentionally obvious placeholder —
// replace before launch, do not treat as a real contact detail.
export const site = {
  name: "Natalia Saslawski",
  tagline: "Executive Search & Talent Advisory",
  locationShort: "Frankfurt am Main",
  region: "Deutschland / DACH",
  url: "https://www.ihre-domain-platzhalter.de",
  email: "kontakt@natalia-saslawski.de",
} as const;

// Header nav: "Für Unternehmen" and "Für Personalberatungen" are grouped
// under one "Leistungen" dropdown entry per client request (2026-09-01) —
// the two pages themselves still exist and are linked individually elsewhere
// (homepage service cards, footer).
export const nav = [
  { href: "/", label: "Home" },
  { href: "/ueber-mich", label: "Über mich" },
  {
    label: "Leistungen",
    children: [
      { href: "/fuer-unternehmen", label: "Für Unternehmen" },
      { href: "/fuer-personalberatungen", label: "Für Personalberatungen" },
    ],
  },
  { href: "/insights", label: "Insights" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Flat version for the footer, which lists every page individually.
export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/fuer-unternehmen", label: "Für Unternehmen" },
  { href: "/fuer-personalberatungen", label: "Für Personalberatungen" },
  { href: "/insights", label: "Insights" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const primaryCta = {
  label: "Erstgespräch vereinbaren",
  href: "/kontakt#erstgespraech",
} as const;

export const secondaryCta = {
  label: "Rückruf anfragen",
  href: "/kontakt#rueckruf",
} as const;
