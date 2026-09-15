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
      {/* top-left cluster, mirrored to Vorgehensweise's top-right cluster.
          z-10 lifts the circles above the (unpositioned) card grid so they
          visibly run across the "Für Unternehmen" card's corner at low opacity. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 z-10 hidden h-[22rem] w-[22rem] rounded-full bg-navy-900/7 xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-20 z-10 hidden h-56 w-56 rounded-full bg-navy-900/6 xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-24 -top-8 z-10 hidden h-40 w-40 rounded-full bg-navy-900/6 xl:block"
      />

      {/* bottom-right cluster. The largest circle is the seam anchor: it continues
          into the dark Vorgehensweise section below and across the
          "Für Personalberatungen" card's corner. Its center sits exactly on the
          section boundary (bottom: -R); same size/horizontal offset as the
          matching circle in Method.tsx. The two smaller satellites stay clear of
          the boundary and only add to the cluster within Leistungen. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 right-24 z-10 hidden h-96 w-96 rounded-full bg-navy-900/11 xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-56 z-10 hidden h-56 w-56 rounded-full bg-navy-900/6 xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-8 z-10 hidden h-40 w-40 rounded-full bg-navy-900/7 xl:block"
      />

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
