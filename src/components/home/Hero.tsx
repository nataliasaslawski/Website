import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src={images.home.hero}
          alt=""
          fill
          priority
          className="object-cover object-[50%_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-900/55" />
      </div>

      <Container narrow className="relative z-10 py-20 text-center md:py-24">
        <h1 className="font-display text-[1.575rem] font-medium leading-tight text-text-inverse md:text-[1.8375rem] xl:text-[2.1rem] desktop:text-[2.49375rem]!">
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
