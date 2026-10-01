import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Für Personalberatungen",
  description:
    "Seniorige externe Search-Projektunterstützung für Personalberatungen und Executive-Search-Boutiquen – Research, Sourcing, Direktansprache und Projektsteuerung.",
};

const situations = [
  {
    text: "Die Zahl paralleler Mandate übersteigt zeitweise die verfügbaren internen Kapazitäten.",
    icon: (
      <>
        <path d="M12 4 21 9 12 14 3 9Z" />
        <path d="M3 14l9 5 9-5" />
      </>
    ),
  },
  {
    text: "Einzelne Mandate erfordern kurzfristig zusätzliche Research- oder Projektmanagement-Unterstützung ohne lange Einarbeitung.",
    icon: (
      <>
        <path d="M4 6l7 6-7 6V6Z" />
        <path d="M13 6l7 6-7 6V6Z" />
      </>
    ),
  },
  {
    text: "Für ein schwieriges Mandat wird erfahrene Unterstützung mit zusätzlicher Markt- und Suchperspektive benötigt.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M15 9l-2 6-6 2 2-6z" />
      </>
    ),
  },
  {
    text: "Die Beratung möchte flexibel skalieren und bei Bedarf erfahrene Unterstützung kurzfristig einbinden, ohne dauerhaft interne Kapazität aufzubauen.",
    icon: <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />,
  },
];

const serviceTiles = [
  {
    title: "Komplette Mandatsübernahme",
    description:
      "Eigenständige Durchführung kompletter Suchmandate – von der Suchstrategie bis zur Kandidatenpräsentation.",
    points: [
      "Suchstrategie & Zielmarktdefinition",
      "Research & Direktansprache",
      "Kandidatenbewertung & Auswahl",
      "Projektsteuerung & Kommunikation",
      "je nach gewünschtem Setup im direkten Kundenkontakt oder im Hintergrund als externe Projektpartnerin",
    ],
  },
  {
    title: "Teilprojekte mit definiertem Umfang",
    description:
      "Übernahme ausgewählter Projektteile – flexibel eingebunden in das jeweilige Mandat.",
    points: [
      "Markt- & Zielfirmenanalyse",
      "Research und Identifikation von Kandidat:innen",
      "Direktansprache & Vorqualifizierung",
      "Longlist- und Shortlist-Unterstützung",
      "definierte Search-Workstreams",
    ],
  },
  {
    title: "Projektmanagement & Entlastung",
    description:
      "Flexible Entlastung bei parallelen, umfangreichen oder zeitkritischen Mandaten.",
    points: [
      "Projektkoordination & Statussteuerung",
      "Abstimmung mit Consultants und Research-Teams",
      "flexible Unterstützung bei Kapazitätsspitzen",
    ],
  },
  {
    title: "Schulungen & Wissenstransfer",
    description:
      "Praxisnahe Schulungen für Teams in Personalberatungen mit Fokus auf strukturierte und effiziente Projektarbeit.",
    points: [
      "Projektmanagement in Search-Mandaten",
      "Direktansprache & Gesprächsführung",
      "Research- und Prozessqualität",
    ],
  },
];

const outcomes = [
  "Professionelle und eigenständige Bearbeitung von Mandaten oder Projektteilen",
  "Flexible Projektunterstützung ohne lange Einarbeitungszeiten",
  "Effizienz in Suche, Ansprache und Aktivierung von Kandidat:innen",
  "Lösungsorientierung und neue Suchansätze bei anspruchsvollen Mandaten",
  "Hohe fachliche und methodische Qualität in der Projektarbeit",
  "Transparente Kommunikation und verlässliches Projekt- und Berichtswesen",
  "Diskretion, Vertraulichkeit und Loyalität gegenüber Ihrer Beratung, Ihren Kund:innen und Kandidat:innen",
  "Nahtlose Einbindung in Ihre Mandatsarbeit – im Hintergrund ebenso wie im direkten Kontakt mit Ihren Kundenunternehmen",
];

export default function FuerPersonalberatungenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 hidden h-40 w-40 rounded-full bg-navy-900/[0.04] xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-18 left-20 hidden h-36 w-36 rounded-full bg-navy-900/5 xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 left-44 hidden h-28 w-28 rounded-full bg-taupe-400/10 xl:block"
        />
        <Container wide className="relative grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow className="desktop:text-[13.5px]!">Für Personalberatungen</Eyebrow>
            <h1 className="mt-4 text-balance font-display section-headline font-medium leading-[1.2] text-navy-900">
              Professionelle Projektunterstützung
            </h1>
            <p className="mt-6 text-justify hyphens-auto text-[17px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Als erfahrene Projektpartnerin unterstütze ich
              Personalberatungen und Executive-Search-Boutiquen flexibel bei
              laufenden und neuen Mandaten – eigenständig, verbindlich und
              ohne lange Einarbeitungszeiten.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-border-subtle pt-6">
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-cream-100">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-taupe-700"
                  aria-hidden="true"
                >
                  <circle cx="7" cy="12" r="3.5" />
                  <circle cx="17" cy="12" r="3.5" />
                  <path d="M10.5 12h3" />
                </svg>
              </span>
              <span className="text-[15px] font-medium leading-snug text-navy-900">
                Flexibel. Eigenständig. Verlässlich.
              </span>
            </div>
            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="photo-shadow photo-frame-b">
            <div className="relative aspect-[1013/644] w-full overflow-hidden bg-surface-elevated">
              <Image
                src={images.agencies.hero}
                alt="Aufgeräumter Schreibtisch mit Laptop, Notizbuch und Kaffee"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-elevated">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-10 hidden h-32 w-32 rounded-full bg-taupe-400/14 xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-18 left-20 hidden h-36 w-36 rounded-full bg-navy-900/5 xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 left-44 hidden h-12 w-12 rounded-full bg-taupe-600/8 xl:block"
        />
        <Container wide className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow className="desktop:text-[13.5px]!">Ausgangssituation</Eyebrow>
            <h2 className="mt-4 font-display text-[1.425rem] font-medium leading-snug text-navy-900 md:text-[1.6625rem] xl:text-[1.9rem] desktop:text-[2.25625rem]!">
              Kennen Sie diese Engpässe?
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-14 md:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-4 border-t border-border-subtle py-5 text-[15px] leading-relaxed text-text-secondary first:border-t-0 md:[&:nth-child(2)]:border-t-0 desktop:text-[17px]!"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-taupe-600"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-10 hidden h-40 w-40 rounded-full bg-navy-900/[0.04] xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-36 right-4 hidden h-20 w-20 rounded-full bg-navy-900/[0.05] xl:block"
        />
        <Container wide className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow className="desktop:text-[13.5px]!">Mein Angebot</Eyebrow>
            <h2 className="mt-4 font-display section-headline font-medium leading-snug text-navy-900">
              So unterstütze ich Sie
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {serviceTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-elevated p-8 shadow-[var(--shadow-card)] md:p-10 desktop:p-12!"
              >
                <h3 className="font-display text-[1.5rem] font-medium leading-snug text-navy-900 md:text-[1.875rem] desktop:text-[2rem]!">
                  {tile.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
                  {tile.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {tile.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-navy-900 desktop:text-[16px]!">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-surface-page">
        <Container wide>
          <div className="border-t-2 border-border-default shadow-[0_1px_3px_rgba(10,30,50,0.08)]" />
        </Container>
      </div>

      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -left-10 hidden h-32 w-32 rounded-full bg-taupe-400/12 xl:block"
        />
        <Container wide className="relative py-16 md:py-24">
          <div className="grid rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card shadow-[var(--shadow-card)] lg:grid-cols-[1.2fr_0.8fr] desktop:grid-cols-[1.05fr_0.95fr]!">
            <div className="p-8 md:p-10">
              <Eyebrow className="desktop:text-[13.5px]!">Mehrwert der Zusammenarbeit</Eyebrow>
              <h2 className="mt-4 font-display text-[1.425rem] font-medium leading-snug text-navy-900 md:text-[1.6625rem] xl:text-[1.9rem] desktop:text-[2.25625rem]!">
                Ihr Mehrwert in der Zusammenarbeit
              </h2>
              <ul className="mt-6 divide-y divide-border-subtle">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-[15px] leading-relaxed text-text-secondary first:pt-0 last:pb-0 desktop:text-[18px]! desktop:leading-[1.6]!"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="photo-shadow photo-frame-a h-full rounded-b-[var(--radius-lg)] lg:rounded-b-none lg:rounded-r-[var(--radius-lg)]">
              <div className="relative min-h-[280px] h-full w-full overflow-hidden rounded-b-[var(--radius-lg)] border-t border-border-subtle bg-cream-050 lg:min-h-0 lg:rounded-b-none lg:rounded-r-[var(--radius-lg)] lg:border-l lg:border-t-0">
                <Image
                  src={images.agencies.secondary}
                  alt="Natalia Saslawski"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container narrow className="py-16 text-center md:py-24">
          <h2 className="font-display text-[1.35rem] font-medium leading-snug text-navy-900 md:text-[1.575rem] xl:text-[1.8rem] desktop:relative! desktop:left-1/2! desktop:w-[880px]! desktop:max-w-[calc(100vw-80px)]! desktop:-translate-x-1/2! desktop:text-[2.1375rem]!">
            Lassen Sie uns über Ihr aktuelles Mandat sprechen.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary desktop:max-w-[640px]! desktop:text-[18px]! desktop:leading-[1.6]!">
            Wenn bei Ihnen mehrere Mandate parallel laufen oder ein
            Search-Projekt zusätzliche Kompetenz benötigt, lassen Sie uns
            unverbindlich austauschen.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt#erstgespraech" variant="primary">
              Unverbindliches Erstgespräch vereinbaren
            </Button>
            <Button href="/kontakt#rueckruf" variant="ghost">
              Rückruf anfragen
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
