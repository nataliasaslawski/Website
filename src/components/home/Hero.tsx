import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src={images.home.hero}
          alt=""
          fill
          priority
          className="scale-105 object-cover blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay-scrim" />
      </div>

      <Container narrow className="relative z-10 py-24 text-center">
        <h1 className="font-display text-3xl font-medium leading-tight text-text-inverse md:text-4xl lg:text-[3rem]">
          Was morgen zählt, beginnt heute. Mit den richtigen Menschen.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-text-inverse-muted">
          Durch Erfahrung, Marktkenntnis und Menschengespür zur
          Entscheidungssicherheit. Strategische und persönliche Begleitung
          bei anspruchsvollen Besetzungen.
        </p>

        <div className="mx-auto mt-14 max-w-2xl border-t border-[oklch(from_var(--paper-050)_l_c_h_/_0.2)] pt-14">
          <h2 className="font-display text-xl font-medium text-text-inverse md:text-2xl">
            Executive Search &amp; Talent Advisory
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-text-inverse-muted">
            Durch meine langjährige Arbeit in der Personalberatung und
            zahlreiche erfolgreich begleitete Besetzungen verstehe ich, was
            Unternehmen wirklich brauchen – und was Menschen bewegt, sich
            für eine neue Aufgabe zu entscheiden. Dieses Verständnis prägt
            meine Arbeit bei der Besetzung anspruchsvoller Positionen und in
            der strategischen Beratung rund um Recruiting und
            Talentgewinnung.
          </p>
        </div>
      </Container>
    </section>
  );
}
