import { Container } from "@/components/ui/Container";

export function Introduction() {
  return (
    <section className="bg-surface-page">
      <Container narrow className="py-16 text-center md:py-24">
        <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
          Executive Search &amp; Talent Advisory
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Durch meine langjährige Arbeit in der Personalberatung und
          zahlreiche erfolgreich begleitete Besetzungen verstehe ich, was
          Unternehmen wirklich brauchen – und was Menschen bewegt, sich für
          eine neue Aufgabe zu entscheiden. Dieses Verständnis prägt meine
          Arbeit bei der Besetzung anspruchsvoller Positionen und in der
          strategischen Beratung rund um Recruiting und Talentgewinnung.
        </p>
      </Container>
    </section>
  );
}
