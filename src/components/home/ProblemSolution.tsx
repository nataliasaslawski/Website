import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const problems = [
  "komplexe oder sehr spezifische Anforderungsprofile die Suche stark eingrenzen",
  "relevante Kandidat:innen schwer erreichbar sind",
  "der Zielmarkt wenig transparent ist",
  "Suchstrategien zu eng oder nicht marktgerecht angelegt sind",
  "klassische Recruiting-Kanäle kaum Resonanz erzeugen",
  "interne Ressourcen für eine intensive Suche fehlen",
];

const solutionPoints = [
  "Marktverständnis",
  "strukturierte Suchmethodik",
  "Research und Sourcing",
  "persönliche Direktansprache",
  "fundierte Kandidatenbewertung",
  "Beratung auf Augenhöhe",
];

export function ProblemSolution() {
  return (
    <section className="bg-surface-page">
      <Container className="grid gap-16 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Die Ausgangslage</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Anspruchsvolle Positionen brauchen mehr als
            Standard-Recruiting.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Besetzungen werden besonders dann anspruchsvoll, wenn …
          </p>
          <ul className="mt-6 space-y-3">
            {problems.map((item) => (
              <li
                key={item}
                className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-text-secondary first:border-none first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow>Der Ansatz</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Strategische Talent Advisory verbunden mit operativer
            Search-Kompetenz.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Die Zusammenarbeit beginnt nicht erst bei der Kandidatensuche.
            Zunächst werden Rolle, Anforderungen, Suchparameter und relevante
            Kandidatenmärkte verstanden und hinterfragt. Darauf aufbauend wird
            eine fundierte Suchstrategie entwickelt und operativ umgesetzt.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {solutionPoints.map((item) => (
              <li
                key={item}
                className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-navy-900"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary">
            Ziel ist nicht, möglichst viele Profile zu präsentieren, sondern
            die Kandidat:innen zu identifizieren, die für die jeweilige
            Aufgabe tatsächlich relevant sind.
          </p>
        </div>
      </Container>
    </section>
  );
}
