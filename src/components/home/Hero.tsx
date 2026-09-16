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

      <Container narrow className="relative z-10 py-32 text-center">
        <h1 className="font-display text-3xl font-medium leading-tight text-text-inverse md:text-4xl lg:text-[3rem]">
          Was morgen zählt, beginnt heute. Mit den richtigen Menschen.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-text-inverse-muted">
          Durch Erfahrung, Marktkenntnis und Menschengespür zur
          Entscheidungssicherheit. Strategische und persönliche Begleitung
          bei anspruchsvollen Besetzungen.
        </p>
      </Container>
    </section>
  );
}
