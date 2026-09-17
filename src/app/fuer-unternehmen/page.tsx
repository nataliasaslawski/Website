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
    title: "Kandidatenmarktanalyse & Talent Mapping",
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

const outcomes = [
  "Klarheit über den relevanten Kandidatenmarkt",
  "Fundierte, praxisbewährte Suchstrategien",
  "Direkter Zugang zu relevanten, nicht wechselaktiven Kandidat:innen",
  "Zahlreiche Besetzungen über unterschiedliche Konjunkturphasen und Kandidatenmärkte hinweg",
  "Qualifizierte Kandidat:innen statt möglichst großer Profilmengen",
  "Entlastung interner Recruiting- oder Search-Ressourcen",
  "Fundierte Entscheidungsgrundlagen für den weiteren Auswahlprozess",
  "Strategie, Search und Prozessbegleitung aus einer Hand",
];

export default function FuerUnternehmenPage() {
  return (
    <>
      <section className="bg-surface-page">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.companies.hero}
              alt="Bild-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              priority
              className="object-cover"
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
          <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="border-t border-border-default pt-4 text-[15px] leading-relaxed text-text-secondary"
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
            <Eyebrow>Leistungen</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Formen der Zusammenarbeit
            </h2>
          </div>

          <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {serviceTiles.map((tile) => (
              <div key={tile.title} className="border-t border-border-default pt-6">
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

      <section className="bg-surface-inverse text-text-inverse">
        <Container className="py-16 md:py-24">
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

      <section className="bg-surface-elevated">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <Eyebrow>Mehrwert der Zusammenarbeit</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Was Sie aus der Zusammenarbeit mitnehmen
            </h2>
            <ul className="mt-6 space-y-3">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-text-secondary first:border-none first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 border border-border-default bg-surface-card">
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-taupe-600"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M4.5 20c1-3.8 4.2-6 7.5-6s6.5 2.2 7.5 6" />
            </svg>
            <span className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted">
              Bildplatzhalter
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-surface-inverse text-text-inverse">
        <Container narrow className="py-16 text-center md:py-24">
          <h2 className="font-display text-2xl font-medium leading-snug md:text-[2.25rem]">
            Lassen Sie uns über Ihre aktuelle Position sprechen.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt#erstgespraech" variant="inverse">
              Unverbindliches Erstgespräch vereinbaren
            </Button>
            <Button href="/kontakt#rueckruf" variant="ghost" className="border-paper-050 text-text-inverse hover:bg-paper-050 hover:text-navy-900">
              Rückruf anfragen
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
