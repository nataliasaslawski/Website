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
  "Eine anspruchsvolle Fach-, Führungs- oder Schlüsselposition ist schwer zu besetzen.",
  "Klassische Recruiting-Kanäle liefern nicht genügend passende Kandidat:innen.",
  "Die Suche dauert bereits länger als geplant oder ist festgefahren.",
  "Der relevante Kandidatenmarkt ist nicht ausreichend transparent.",
  "Das Anforderungsprofil ist komplex, sehr eng oder möglicherweise nicht marktgerecht.",
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
      "Automotive – Hersteller sowie Tier-1- und Tier-2-Zulieferer",
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
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Für Unternehmen</Eyebrow>
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-[2.75rem]">
              Besetzung anspruchsvoller Fach-, Führungs- und
              Schlüsselpositionen
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Ich unterstütze Unternehmen bei komplexen Besetzungen – von der
              Klärung des Suchprofils über die Entwicklung der Suchstrategie
              bis zur strukturierten Kandidatenbewertung und Begleitung des
              Auswahlprozesses.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
              Dabei verbinde ich langjährige Search-Erfahrung mit fundierter
              Marktkenntnis und einer individuell entwickelten
              Suchstrategie.
            </p>
            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated lg:w-[78%] lg:justify-self-end">
            <Image
              src={images.companies.hero}
              alt="Natalia Saslawski"
              fill
              priority
              className="object-cover object-[50%_45%]"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Typische Ausgangssituation</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Wann eine externe Search-Perspektive den Unterschied macht
            </h2>
          </div>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {[0, 1].map((column) => (
              <ul key={column} className="divide-y divide-border-subtle">
                {situations
                  .filter((_, i) => i % 2 === column)
                  .map((item, idx) => (
                    <li key={item} className="flex gap-4 py-5">
                      <span className="font-display text-sm text-taupe-600">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] leading-relaxed text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Leistungen</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Formen der Zusammenarbeit
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {serviceTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-elevated p-8 md:p-10"
              >
                <h3 className="font-display text-xl font-medium leading-snug text-navy-900">
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

      <section className="relative overflow-hidden bg-surface-inverse text-text-inverse">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 hidden h-64 w-64 xl:block"
        >
          <span className="absolute bottom-0 left-10 h-36 w-36 rounded-full bg-navy-800/42" />
          <span className="absolute bottom-16 left-32 h-24 w-24 rounded-full bg-navy-700/30" />
        </div>
        <Container className="relative py-16 md:py-24">
          <Eyebrow tone="inverse">Vorgehensweise</Eyebrow>

          <div className="mt-10 grid gap-8 md:grid-cols-5 md:gap-6">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="border-t border-[oklch(from_var(--cream-100)_l_c_h_/_0.35)] pt-6"
              >
                <span className="font-display text-lg text-cream-100">{step.n}</span>
                <h3 className="mt-3 text-[17px] font-medium text-text-inverse">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-inverse/90">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="py-16 md:py-24">
          <div>
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
                Branchenerfahrung
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
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
                  className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card p-8 shadow-[var(--shadow-sm)]"
                >
                  <h3 className="font-display text-xl font-medium leading-snug text-navy-900 lg:text-lg">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-border-subtle pt-2.5 text-sm leading-relaxed text-text-secondary first:border-none first:pt-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-[16px] leading-relaxed text-text-secondary">
            Diese Branchenschwerpunkte lassen sich je nach Mandat gezielt auf
            angrenzende und weitere Märkte übertragen.
          </p>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container className="py-16 md:py-20">
          <div>
            <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Positionslevel &amp; Funktionsbereiche
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              Meine Erfahrung umfasst Führungs- und Schlüsselpositionen über
              verschiedene Hierarchieebenen und Funktionsbereiche hinweg.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {levelGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card p-8 shadow-[var(--shadow-sm)]"
              >
                <h3 className="font-display text-xl font-medium leading-snug text-navy-900">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-border-subtle pt-2.5 text-sm leading-relaxed text-text-secondary first:border-none first:pt-0"
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
        <Container className="py-16 md:py-24">
          <div className="grid overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-surface-card lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-10">
              <Eyebrow>Mehrwert der Zusammenarbeit</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
                Was Sie aus der Zusammenarbeit mitnehmen
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

            <div className="relative min-h-[280px] w-full overflow-hidden border-t border-border-subtle bg-surface-elevated lg:min-h-0 lg:border-l lg:border-t-0">
              <Image
                src={images.companies.secondary}
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
            Lassen Sie uns über Ihre aktuelle Position sprechen.
          </h2>
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
