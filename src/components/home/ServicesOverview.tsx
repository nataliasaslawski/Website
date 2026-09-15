import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    label: "Für Unternehmen",
    title: "Executive & Professional Search",
    description:
      "Unterstützung bei der Besetzung anspruchsvoller Fach-, Führungs- und Schlüsselpositionen – von der Suchstrategie bis zur erfolgreichen Besetzung.",
    points: [
      "Rollen- und Anforderungsanalyse",
      "Suchstrategie, Markt- und Zielfirmenanalyse",
      "Research, Sourcing und Kandidat:innengewinnung",
      "Kandidatenqualifizierung und Begleitung des Auswahlprozesses",
    ],
    href: "/fuer-unternehmen",
    cta: "Mehr für Unternehmen",
  },
  {
    label: "Für Personalberatungen",
    title: "Professionelle Unterstützung",
    description:
      "Flexible externe Unterstützung für Personalberatungen bei anspruchsvollen Mandaten oder temporären Kapazitätsengpässen.",
    points: [
      "Suchstrategie, Markt- und Zielfirmenanalyse",
      "Research, Sourcing und Direktansprache",
      "Long- und Shortlists, Kandidatenqualifizierung",
      "Projektkoordination und operative Projektdurchführung",
    ],
    href: "/fuer-personalberatungen",
    cta: "Mehr für Personalberatungen",
  },
  {
    label: "Talent Advisory",
    title: "Strategische Beratung für Talentgewinnung",
    description:
      "Beratung zu Anforderungsprofilen, Zielmärkten und Suchstrategien – eigenständig oder in Verbindung mit einem Search-Projekt.",
    points: [
      "Anforderungsprofile schärfen",
      "Kandidatenmärkte und alternative Zielmärkte analysieren",
      "Suchstrategien entwickeln oder überprüfen",
      "Auswahl- und Bewertungskriterien strukturieren",
    ],
    href: "/fuer-unternehmen#talent-advisory",
    cta: "Mehr erfahren",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-surface-elevated">
      <Container className="py-16 md:py-24">
        <Eyebrow>Leistungen</Eyebrow>

        <div className="mt-8 grid gap-px overflow-hidden border border-border-default bg-border-default md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-surface-card p-8">
              <Eyebrow>{service.label}</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy-900">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="border-t border-border-subtle pt-2.5 text-sm leading-relaxed text-text-secondary first:border-none first:pt-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
