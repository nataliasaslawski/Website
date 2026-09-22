/**
 * Central image registry.
 *
 * All photography on the site is temporary placeholder material from the
 * client-supplied moodboard (see /Assets/Bilder in the project folder),
 * approved for interim use until professional brand photography is
 * available. To swap a photo later, replace the file in
 * public/images/moodboard (or public/images/portraits once available)
 * and update the path below — no page/component code needs to change.
 */

export const images = {
  home: {
    hero: "/images/portraits/hero-skyline-v3.webp",
    methodAccent: "/images/moodboard/talent-strategy.png",
    aboutTeaser: "/images/portraits/natalia-home-teaser.webp",
    ansatzPortrait: "/images/portraits/natalia-ansatz-beratung.webp",
    introPortrait: "/images/portraits/natalia-intro-wide.webp",
  },
  about: {
    portrait: "/images/portraits/natalia-ueber-mich.webp",
    secondary: "/images/moodboard/architektur-fassade.png",
  },
  companies: {
    hero: "/images/moodboard/konferenzraum.png",
    secondary: "/images/moodboard/buero-konferenz.png",
  },
  agencies: {
    hero: "/images/moodboard/konferenz-gespraech.png",
    secondary: "/images/moodboard/notizbuch-strategy.png",
  },
  insights: {
    hero: "/images/moodboard/architektur-detail.png",
    cardFallback: "/images/moodboard/kaffee-notizbuch.png",
  },
  contact: {
    hero: "/images/moodboard/buero-abends.png",
  },
} as const;

export const brand = {
  logoNavy: "/brand/logo-navy-full.png",
  logoLight: "/brand/logo-light-full.png",
  markNavy: "/brand/logo-navy-mark2.png",
  markLight: "/brand/logo-light-mark2.png",
} as const;
