import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";

const solutionPoints = [
  "Marktverständnis",
  "strukturierte Suchmethodik",
  "Research und Sourcing",
  "Gewinnung relevanter Kandidat:innen",
  "fundierte Kandidatenbewertung",
  "Beratung auf Augenhöhe",
];

export function ProblemSolution() {
  return (
    <section className="bg-surface-page">
      <div className="pt-16 md:pt-24">
        <Container className="pb-8 md:pb-10">
          <Eyebrow>Die Ausgangslage</Eyebrow>
        </Container>
        <div className="grid w-full overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[280px] w-full lg:min-h-[440px]">
            <Image
              src={images.home.ausgangslage}
              alt="Bild-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-cream-100 p-8 md:p-14 lg:px-20">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
                Anspruchsvolle Positionen brauchen mehr als
                Standard-Recruiting.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-900">
                Was anspruchsvolle Besetzungen erschwert: komplexe oder sehr
                spezifische Anforderungen, schwer erreichbare
                Kandidat:innen, ein wenig transparenter Zielmarkt, zu eng
                angelegte Suchstrategien, geringe Resonanz auf klassischen
                Kanälen und fehlende interne Ressourcen für eine intensive
                Suche. Gerade in diesen Situationen braucht es mehr als
                Reichweite – entscheidend sind Marktverständnis, eine klare
                Suchstrategie und der Zugang zu relevanten Profilen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container className="pb-16 md:pb-24">
        <div className="mx-auto mt-16 max-w-2xl md:mt-24">
          <Eyebrow>Der Ansatz</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Strategische Beratung, verbunden mit operativer
            Search-Kompetenz.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Die Zusammenarbeit beginnt nicht erst bei der Profilsuche.
            Zunächst werden Rolle, Unternehmenskontext, Anforderungen,
            Suchparameter und relevante Zielmärkte verstanden und
            hinterfragt. Darauf aufbauend wird eine fundierte Suchstrategie
            entwickelt und operativ umgesetzt.
          </p>
          <p className="mt-6 text-md font-normal leading-relaxed text-navy-900">
            Im Mittelpunkt stehen dabei
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
            Kandidat:innen zu identifizieren, die fachlich wie persönlich zur
            Rolle und zum Unternehmen passen.
          </p>
        </div>
      </Container>
    </section>
  );
}
