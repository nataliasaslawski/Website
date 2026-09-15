import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    label: "Für Unternehmen",
    title: "Executive & Professional Search",
    description:
      "Unterstützung bei der Besetzung anspruchsvoller Fach-, Führungs- und Schlüsselpositionen sowie strategische Beratung rund um Recruiting und Talentgewinnung.",
    href: "/fuer-unternehmen",
    cta: "Mehr für Unternehmen",
  },
  {
    label: "Für Personalberatungen",
    title: "Professionelle Unterstützung",
    description:
      "Flexible externe Unterstützung für Personalberatungen bei anspruchsvollen Mandaten oder temporären Kapazitätsengpässen.",
    href: "/fuer-personalberatungen",
    cta: "Mehr für Personalberatungen",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-surface-elevated">
      <Container className="py-16 md:py-24">
        <Eyebrow>Leistungen</Eyebrow>

        <div className="mt-8 grid gap-px overflow-hidden border border-border-default bg-border-default md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-surface-card p-10">
              <Eyebrow>{service.label}</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy-900">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
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
