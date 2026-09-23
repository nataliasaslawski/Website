import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ExpertiseTrust() {
  return (
    <section className="relative overflow-hidden bg-surface-page">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 hidden h-64 w-64 rounded-full bg-navy-900/[0.03] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 hidden h-72 w-72 rounded-full bg-navy-900/[0.03] lg:block"
      />

      <Container narrow className="relative py-20 text-center md:py-24">
        <Eyebrow>Was meine Arbeit prägt</Eyebrow>
        <p className="mx-auto mt-8 max-w-2xl font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2.25rem]">
          „Vertrauen entsteht durch Erfahrung und Verständnis – nicht durch
          Versprechen.“
        </p>
        <div className="mt-8">
          <p className="text-sm font-medium text-navy-900">Natalia Saslawski</p>
          <p className="mt-1 text-sm text-text-secondary">
            Executive Search &amp; Talent Advisory
          </p>
        </div>
      </Container>
    </section>
  );
}
