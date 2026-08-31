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
  "Es bestehen mehrere parallele Mandate und interne Kapazitäten sind ausgelastet.",
  "Ein Search-Projekt benötigt kurzfristig zusätzliche Unterstützung.",
  "Für ein schwieriges Mandat wird erfahrene Kompetenz benötigt.",
  "Die Beratung möchte flexibel skalieren, ohne dauerhaft zusätzliche interne Kapazität aufzubauen.",
  "Es wird eine externe Projektpartnerin gesucht, die sich schnell in bestehende Prozesse integriert und eigenständig arbeiten kann.",
];

const services = [
  "Projekt- und Suchstrategie",
  "Markt- und Zielfirmenanalyse",
  "Research und Sourcing",
  "Longlist-Erstellung",
  "Direktansprache",
  "Kandidatenidentifikation und Vorqualifizierung",
  "Unterstützung bei Long- und Shortlists",
  "Projektkoordination",
  "Übernahme definierter Search-Workstreams oder umfangreicherer Projektteile",
];

const outcomes = [
  "Schnelle und verlässliche Unterstützung bei laufenden Mandaten",
  "Professionelle Search-Kompetenz ohne lange Einarbeitung",
  "Eigenständige Bearbeitung klar definierter Projektteile oder ganzer Search-Projekte",
  "Flexible Kapazität bei Projektspitzen",
  "Hohe Qualität in Research, Sourcing, Direktansprache und Kandidatengewinnung",
  "Eine Zusammenarbeit, die gegenüber Ihren Endkund:innen professionell anschlussfähig ist",
];

export default function FuerPersonalberatungenPage() {
  return (
    <>
      <section className="bg-surface-page">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Für Personalberatungen</Eyebrow>
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-4xl">
              Seniorige Search-Projektunterstützung
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Flexible externe Unterstützung für Personalberatungen und
              Executive-Search-Boutiquen bei laufenden oder neuen Mandaten –
              seniorig, eigenständig und ohne lange Einarbeitung.
            </p>
            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.agencies.hero}
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
              Wann sich eine externe Projektpartnerin auf Senior-Level lohnt
            </h2>
          </div>
          <ul className="mt-10 space-y-4">
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
        <Container className="grid gap-16 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Mögliche Leistungsbausteine</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Flexibel an Projektvolumen und Mandat angepasst
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              Ziel ist keine reine zusätzliche Research-Kapazität, sondern
              seniorige Unterstützung, die eigenständig arbeitet und
              bestehende Search-Projekte fachlich und operativ verstärkt.
            </p>
            <ul className="mt-6 space-y-3">
              {services.map((item) => (
                <li
                  key={item}
                  className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-navy-900 first:border-none first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

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
            <p className="mt-6 border-t border-border-subtle pt-6 text-[15px] leading-relaxed text-text-secondary">
              Vertraulichkeit gegenüber Ihrer Beratung, Ihren Unternehmenskunden
              und den angesprochenen Kandidat:innen hat für mich höchste
              Priorität – die Zusammenarbeit kann je nach Wunsch im
              Hintergrund oder sichtbar erfolgen.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-inverse text-text-inverse">
        <Container narrow className="py-16 text-center md:py-24">
          <h2 className="font-display text-2xl font-medium leading-snug md:text-[2.25rem]">
            Lassen Sie uns über Ihr aktuelles Mandat sprechen.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-inverse-muted">
            Wenn bei Ihnen mehrere Mandate parallel laufen oder ein
            Search-Projekt zusätzliche Kompetenz benötigt, lassen Sie uns
            unverbindlich austauschen.
          </p>
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
