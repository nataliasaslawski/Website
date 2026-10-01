import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Für Unternehmen",
  description:
    "Executive & Professional Search für Unternehmen – Suchstrategie, Marktanalyse, Research, Direktansprache und Kandidatenbewertung für anspruchsvolle Fach-, Führungs- und Schlüsselpositionen.",
};

const situations = [
  "Eine anspruchsvolle Schlüsselposition ist schwer zu besetzen.",
  "Klassische Recruiting-Kanäle liefern nicht genügend passende Kandidat:innen.",
  "Die Suche dauert länger als erwartet und führt nicht zu den gewünschten Kandidat:innen.",
  "Es fehlt Transparenz darüber, welche Kandidat:innen wirklich relevant sind und wie sie für das Unternehmen gewonnen werden können.",
  "Anforderungen und verfügbarer Kandidatenmarkt passen nicht ausreichend zusammen.",
  "Interne Recruiting-Kapazitäten reichen für eine intensive Suche und Direktansprache nicht aus.",
];

const serviceTiles = [
  {
    title: "Executive & Professional Search",
    description:
      "Ganzheitliche Besetzung anspruchsvoller Fach-, Führungs- und Schlüsselpositionen – von der Suchstrategie bis zur Kandidatenpräsentation.",
    points: [
      "Suchstrategie & Zielmarktdefinition",
      "Research, Direktansprache & Qualifizierung",
      "Kandidatenbewertung & Begleitung des Auswahlprozesses",
      "Besetzung einzelner Schlüsselpositionen bis hin zu kompletten Teams",
    ],
  },
  {
    title: "Marktanalyse & Talent Mapping",
    description:
      "Transparenz über relevante Zielunternehmen, Kandidatenmärkte und tatsächlich ansprechbare Profile.",
    points: [
      "Markt- und Wettbewerbsanalyse",
      "Identifikation relevanter Kandidat:innen",
      "Optional: erste Ansprache und Aufbau einer Kandidatenpipeline",
    ],
  },
  {
    title: "Talent Advisory & Recruiting-Beratung",
    description:
      "Strategische Unterstützung bei komplexen Recruiting- und Talent-Acquisition-Fragestellungen.",
    points: [
      "Anforderungsprofile & Suchstrategien schärfen",
      "Auswahl- und Recruitingprozesse strukturieren",
      "Talentgewinnung und Arbeitgeberpositionierung verbessern",
    ],
  },
  {
    title: "Interim Recruiting & Talent Acquisition",
    description:
      "Temporäre Unterstützung bei Aufbau-, Veränderungs- und Optimierungsprojekten im Recruiting.",
    points: [
      "Aufbau und Weiterentwicklung von Recruiting-/TA-Strukturen",
      "Optimierung von Prozessen und Zusammenarbeit",
      "Steuerung größerer Recruiting- und Transformationsprojekte",
      "Aufbau und Besetzung neuer Teams und Funktionen",
    ],
  },
];

const processSteps = [
  {
    n: "01",
    title: "Verstehen & Einordnen",
    text: "Rolle, Unternehmen, Ausgangssituation und Anforderungen erfassen und in den relevanten Markt- und Suchkontext einordnen.",
  },
  {
    n: "02",
    title: "Suchstrategie entwickeln",
    text: "Relevante Märkte, Zielunternehmen und Suchfelder analysieren und daraus eine fundierte Suchstrategie entwickeln.",
  },
  {
    n: "03",
    title: "Finden & Aktivieren",
    text: "Relevante Kandidat:innen identifizieren, persönlich ansprechen und für den Prozess gewinnen.",
  },
  {
    n: "04",
    title: "Bewerten",
    text: "Erfahrung, Kompetenzen, Motivation, Persönlichkeit und mögliche Passung strukturiert bewerten.",
  },
  {
    n: "05",
    title: "Entscheiden & Begleiten",
    text: "Erkenntnisse transparent kommunizieren, geeignete Kandidat:innen vorstellen und den weiteren Auswahlprozess beratend begleiten.",
  },
];

const industryGroups = [
  {
    title: "Industrie & Technologie",
    items: [
      "Industrie & Produktion",
      "Maschinen- & Anlagenbau",
      "Automotive – OEM & Tier-1-/Tier-2-Zulieferer",
      "Automatisierungstechnik & Robotik",
      "Technische Produkte & Lösungen",
    ],
  },
  {
    title: "Bau & Gebäudetechnik",
    items: [
      "Technische Gebäudeausrüstung (TGA)",
      "Architektur & Bau",
      "Projektentwicklungsgesellschaften",
      "Planungs- & Ingenieurbüros",
    ],
  },
  {
    title: "Chemie & Life Sciences",
    items: ["Chemie", "Pharma", "Life Sciences"],
  },
  {
    title: "Consumer & Retail",
    items: [
      "Consumer Goods",
      "Handel & Retail",
      "Gastronomie & Foodservice",
    ],
  },
  {
    title: "Financial Services",
    items: [
      "Banken & Finanzdienstleister",
      "Asset & Investment Management",
      "Financial Technology & digitale Lösungen",
    ],
  },
  {
    title: "Sport & Verbände",
    items: ["Profisport & Fußball", "Sportverbände & -organisationen"],
  },
];

const levelGroups = [
  {
    title: "Positionslevel",
    items: [
      "C-Level & Geschäftsführung",
      "Bereichs- und Funktionsleitung",
      "Senior Management",
      "ausgewählte Spezialist:innen- und Schlüsselrollen",
    ],
  },
  {
    title: "Funktionsbereiche",
    items: [
      "Operations & Produktion",
      "Sales & Business Development",
      "Technik & Engineering",
      "Einkauf & Supply Chain",
      "Human Resources",
      "Finance & Controlling",
      "Marketing / Commercial",
      "weitere Funktionen je nach Branche und Mandat",
    ],
  },
];

const outcomes = [
  "Klarheit über den relevanten Kandidatenmarkt",
  "Fundierte, praxisbewährte Suchstrategien",
  "Direkter Zugang zu relevanten, nicht wechselaktiven Kandidat:innen",
  "Erprobte Such- und Besetzungskompetenz aus zahlreichen Besetzungen in unterschiedlichen Konjunktur- und Marktphasen",
  "Qualifizierte Kandidat:innen statt möglichst großer Profilmengen",
  "Entlastung interner Recruiting- oder Search-Ressourcen",
  "Fundierte Entscheidungsgrundlagen für den weiteren Auswahlprozess",
  "Strategie, Search und Prozessbegleitung aus einer Hand",
  "Persönliche Verbindlichkeit, Verlässlichkeit und Diskretion in der Zusammenarbeit",
];

export default function FuerUnternehmenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-12 hidden h-44 w-44 rounded-full bg-navy-900/[0.04] xl:block"
        />
        <Container wide className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow className="desktop:text-[13.5px]!">Für Unternehmen</Eyebrow>
            <h1 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.2] text-navy-900 md:text-[2.25rem] desktop:text-[2.75rem]!">
              Besetzung anspruchsvoller Fach-, Führungs- und
              Schlüsselpositionen
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Als erfahrene Sparringspartnerin begleite ich Unternehmen bei
              der Besetzung von Fach-, Führungs- und Schlüsselpositionen –
              mit fundierter Marktkenntnis, strukturierter Vorgehensweise und
              einem klaren Blick für tragfähige Besetzungsentscheidungen.
            </p>
            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="photo-shadow photo-frame-b">
            <div className="relative aspect-[1013/644] w-full overflow-hidden bg-surface-elevated">
              <Image
                src={images.companies.hero}
                alt="Aufgeräumter Schreibtisch mit Laptop, Notizbuch und Kaffee"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-elevated">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-40 hidden h-32 w-32 rounded-full bg-taupe-400/14 xl:block"
        />
        <Container wide className="relative py-16 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow className="desktop:text-[13.5px]!">Ausgangssituation</Eyebrow>
            <h2 className="mt-4 font-display section-headline font-medium leading-snug text-navy-900">
              Kommen Ihnen diese Herausforderungen bekannt vor?
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-14 md:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="border-t border-border-subtle py-5 text-[15px] leading-relaxed text-text-secondary first:border-t-0 md:[&:nth-child(2)]:border-t-0 desktop:text-[17px]!"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 right-40 hidden h-32 w-32 rounded-full bg-taupe-400/14 xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 right-0 hidden h-40 w-40 rounded-full bg-navy-900/[0.04] xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 right-24 hidden h-20 w-20 rounded-full bg-navy-900/[0.05] xl:block"
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

      <section className="relative overflow-hidden bg-surface-inverse text-text-inverse">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 hidden h-64 w-64 xl:block"
        >
          <span className="absolute bottom-0 left-10 h-36 w-36 rounded-full bg-navy-800/42" />
          <span className="absolute bottom-16 left-32 h-24 w-24 rounded-full bg-navy-700/30" />
        </div>
        <Container wide className="relative py-16 md:py-24">
          <Eyebrow tone="inverse" className="desktop:text-[13.5px]!">Vorgehensweise</Eyebrow>

          <div className="mt-10 grid gap-8 md:grid-cols-5 md:gap-6">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="border-t border-[oklch(from_var(--cream-100)_l_c_h_/_0.35)] pt-6"
              >
                <span className="font-display text-lg text-cream-100 desktop:text-[32px]!">{step.n}</span>
                <h3 className="mt-3 text-[17px] font-medium text-text-inverse desktop:text-[19px]!">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-inverse/90 desktop:text-[16px]!">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container wide className="py-16 md:py-24">
          <div>
            <div className="max-w-3xl">
              <h2 className="font-display section-headline font-medium leading-snug text-navy-900">
                Branchenerfahrung
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
                Meine langjährige Erfahrung in Executive &amp; Professional
                Search, Marktanalyse und strategischer Talentgewinnung umfasst
                unterschiedliche Branchen und Märkte – mit besonderen
                Schwerpunkten in den folgenden Bereichen:
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industryGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card p-8 shadow-[var(--shadow-card)] desktop:p-9!"
                >
                  <h3 className="font-display text-xl font-medium leading-snug text-navy-900 lg:text-lg desktop:text-[24px]!">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-border-subtle pt-2.5 text-sm leading-relaxed text-text-secondary first:border-none first:pt-0 desktop:text-[16px]!"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-[16px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
            Diese Branchenschwerpunkte lassen sich je nach Mandat gezielt auf
            angrenzende und weitere Märkte übertragen.
          </p>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container wide className="py-16 md:py-20">
          <div>
            <h2 className="font-display section-headline font-medium leading-snug text-navy-900">
              Positionslevel &amp; Funktionsbereiche
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Meine Erfahrung umfasst Führungs- und Schlüsselpositionen über
              verschiedene Hierarchieebenen und Funktionsbereiche hinweg.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {levelGroups.map((group) => (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card p-8 shadow-[var(--shadow-card)] desktop:p-9!"
              >
                {group.title === "Positionslevel" && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-taupe-400/10"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-10 left-14 h-14 w-14 rounded-full bg-navy-900/[0.05]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-4 left-28 h-6 w-6 rounded-full bg-taupe-600/10"
                    />
                  </>
                )}
                <h3 className="font-display text-xl font-medium leading-snug text-navy-900 desktop:text-[36px]!">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-border-subtle pt-2.5 text-sm leading-relaxed text-text-secondary first:border-none first:pt-0 desktop:text-[16px]!"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container wide className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 desktop:grid-cols-[1.05fr_0.95fr]!">
            <div>
              <Eyebrow className="desktop:text-[13.5px]!">Mehrwert der Zusammenarbeit</Eyebrow>
              <h2 className="mt-4 font-display section-headline font-medium leading-snug text-navy-900">
                Was Sie aus der Zusammenarbeit mitnehmen
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

            <div className="photo-shadow photo-frame-a h-full">
              <div className="relative min-h-[280px] h-full w-full overflow-hidden bg-surface-elevated">
                <Image
                  src={images.companies.secondary}
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
          <h2 className="font-display section-headline font-medium leading-snug text-navy-900 desktop:relative! desktop:left-1/2! desktop:w-[1000px]! desktop:max-w-[calc(100vw-80px)]! desktop:-translate-x-1/2!">
            Lassen Sie uns über Ihre aktuelle Position sprechen.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary desktop:relative! desktop:left-1/2! desktop:w-[820px]! desktop:max-w-[calc(100vw-80px)]! desktop:-translate-x-1/2! desktop:text-[18px]! desktop:leading-[1.6]!">
            Ob anspruchsvolle Schlüsselposition, festgefahrene Suche oder
            zusätzlicher Unterstützungsbedarf – in einem unverbindlichen
            Erstgespräch klären wir, wie ich Sie sinnvoll unterstützen kann.
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
