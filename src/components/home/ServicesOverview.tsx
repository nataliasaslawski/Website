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
    <section className="relative overflow-hidden bg-surface-elevated">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-1/2 hidden h-[18rem] w-[18rem] -translate-y-1/2 xl:block"
      >
        <span className="absolute left-2 top-0 h-32 w-32 rounded-full bg-navy-900/8" />
        <span className="absolute left-14 top-8 h-24 w-24 rounded-full bg-navy-900/6" />
        <span className="absolute left-6 top-20 h-16 w-16 rounded-full bg-navy-900/5" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 hidden h-[14rem] w-[16rem] xl:block"
      >
        <span className="absolute bottom-2 left-0 h-32 w-32 rounded-full bg-navy-900/7" />
        <span className="absolute bottom-8 left-14 h-24 w-24 rounded-full bg-navy-900/5" />
      </div>

      <Container className="relative py-16 md:py-24">
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
