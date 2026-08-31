import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-page">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <Eyebrow>Executive Search &amp; Talent Advisory</Eyebrow>
          <h1 className="mt-5 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-4xl">
            Executive Search &amp; Talent Advisory für anspruchsvolle
            Schlüsselpositionen
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
            Strategische und persönliche Begleitung bei anspruchsvollen
            Besetzungen – von der Rollenklärung und Suchstrategie über
            Marktanalyse, Research und Direktansprache bis zur fundierten
            Kandidatenauswahl.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/kontakt#erstgespraech" variant="primary">
              Unverbindliches Erstgespräch vereinbaren
            </Button>
            <Button href="/ueber-mich" variant="ghost">
              Mehr über mich
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 border border-border-subtle md:-inset-x-10 md:-inset-y-10" />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.home.hero}
              alt="Portrait-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
