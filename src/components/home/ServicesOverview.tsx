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
      {/* top-left pair, mirrored to Vorgehensweise's top-right circles.
          z-10 lifts them above the (unpositioned) card grid. Very low opacity,
          small radius (~70px) - a barely-there texture, not a visible pattern. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 z-10 hidden h-36 w-36 rounded-full bg-navy-900/5 xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-16 z-10 hidden h-28 w-28 rounded-full bg-navy-900/4 xl:block"
      />

      {/* bottom-right pair. The larger circle is the seam anchor: it continues
          into the dark Vorgehensweise section below and across the
          "Für Personalberatungen" card's corner. Its center sits exactly on the
          section boundary (bottom: -R); same size/horizontal offset as the
          matching circle in Method.tsx. The smaller satellite stays clear of the
          boundary. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-18 right-24 z-10 hidden h-36 w-36 rounded-full bg-navy-900/5 xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-48 z-10 hidden h-28 w-28 rounded-full bg-navy-900/4 xl:block"
      />

      <Container wide className="relative py-16 md:py-24">
        <Eyebrow className="desktop:text-[13.5px]!">Leistungen</Eyebrow>

        <div className="mt-8 grid gap-px overflow-hidden border border-border-default bg-border-default md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-surface-card p-10 xl:p-12 desktop:p-14!">
              <Eyebrow className="desktop:text-[13.5px]!">{service.label}</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy-900 xl:text-[1.375rem] desktop:text-[1.5rem]!">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-secondary xl:text-[16px] xl:leading-[1.7] desktop:text-[18px]! desktop:leading-[1.6]!">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900 desktop:text-[16px]!"
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
