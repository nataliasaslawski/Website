import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    label: "Für Unternehmen",
    title: "Executive & Professional Search",
    description:
      "Unterstützung bei der Besetzung anspruchsvoller Fach-, Führungs- und Schlüsselpositionen – von der Suchstrategie bis zur Kandidatenauswahl.",
    points: [
      "Rollen- und Anforderungsanalyse",
      "Suchstrategie, Markt- und Zielfirmenanalyse",
      "Research, Sourcing und Direktansprache",
      "Kandidatenqualifizierung und Begleitung des Auswahlprozesses",
    ],
    href: "/fuer-unternehmen",
    cta: "Mehr für Unternehmen",
  },
  {
    label: "Für Personalberatungen",
    title: "Seniorige Search-Projektunterstützung",
    description:
      "Flexible externe Unterstützung für Personalberatungen und Executive-Search-Boutiquen bei anspruchsvollen oder kapazitätsintensiven Mandaten.",
    points: [
      "Suchstrategie, Markt- und Zielfirmenanalyse",
      "Research, Sourcing und Direktansprache",
      "Long- und Shortlists, Kandidatenqualifizierung",
      "Projektkoordination und eigenständige Search-Workstreams",
    ],
    href: "/fuer-personalberatungen",
    cta: "Mehr für Personalberatungen",
  },
  {
    label: "Talent Advisory",
    title: "Strategische Beratung rund um Search & Recruiting",
    description:
      "Beratung zu Anforderungsprofilen, Kandidatenmärkten und Suchstrategien – eigenständig oder in Verbindung mit einem Search-Projekt.",
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
        <div className="max-w-2xl">
          <Eyebrow>Leistungen</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Executive Search, Professional Search und Talent Advisory aus
            einer Hand
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-border-default bg-border-default md:grid-cols-3">
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
