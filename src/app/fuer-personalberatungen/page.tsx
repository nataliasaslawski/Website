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
  "Die Zahl paralleler Mandate übersteigt zeitweise die verfügbaren internen Kapazitäten.",
  "Einzelne Mandate erfordern kurzfristig zusätzliche Research- oder Projektmanagement-Unterstützung ohne lange Einarbeitung.",
  "Für ein schwieriges Mandat wird erfahrene Unterstützung mit zusätzlicher Markt- und Suchperspektive benötigt.",
  "Die Beratung möchte flexibel skalieren und bei Bedarf erfahrene Unterstützung kurzfristig einbinden, ohne dauerhaft interne Kapazität aufzubauen.",
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
        <Container className="relative grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Für Personalberatungen</Eyebrow>
            <h1 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.2] text-navy-900 md:text-[2.25rem]">
              Professionelle Projektunterstützung
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Als erfahrene Projektpartnerin unterstütze ich
              Personalberatungen und Executive-Search-Boutiquen flexibel bei
              laufenden und neuen Mandaten – eigenständig, verbindlich und
              ohne lange Einarbeitungszeiten.
            </p>
            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="relative aspect-[1013/644] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.agencies.hero}
              alt="Natalia Saslawski"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-elevated">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 -right-10 hidden h-32 w-32 rounded-full bg-taupe-400/14 xl:block"
        />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Ausgangssituation</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Kennen Sie diese Engpässe?
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-14 md:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="border-t border-border-subtle py-5 text-[15px] leading-relaxed text-text-secondary first:border-t-0 md:[&:nth-child(2)]:border-t-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Mein Angebot</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              So unterstütze ich Sie
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {serviceTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-elevated p-8 md:p-10"
              >
                <h3 className="font-display text-[1.5rem] font-medium leading-snug text-navy-900 md:text-[1.875rem]">
                  {tile.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {tile.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {tile.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-navy-900">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container className="py-16 md:py-24">
          <div className="grid overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-10">
              <Eyebrow>Mehrwert der Zusammenarbeit</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
                Ihr Mehrwert in der Zusammenarbeit
              </h2>
              <ul className="mt-6 divide-y divide-border-subtle">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-[15px] leading-relaxed text-text-secondary first:pt-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[280px] w-full overflow-hidden border-t border-border-subtle bg-cream-050 lg:min-h-0 lg:border-l lg:border-t-0">
              <Image
                src={images.agencies.secondary}
                alt="Natalia Saslawski"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container narrow className="py-16 text-center md:py-24">
          <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2.25rem]">
            Lassen Sie uns über Ihr aktuelles Mandat sprechen.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary">
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
