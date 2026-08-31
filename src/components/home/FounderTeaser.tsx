import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function FounderTeaser() {
  return (
    <section className="bg-surface-page">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
          <Image
            src={images.home.aboutTeaser}
            alt="Bild-Platzhalter – wird durch professionelle Businessfotos ersetzt"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 35vw, 90vw"
          />
        </div>

        <div>
          <Eyebrow>Über die Beraterin</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Rund 16 Jahre Erfahrung in Recruiting, Personalberatung und Search
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Natalia Saslawski verbindet Erfahrung aus Personalberatung,
            Führungsverantwortung und Inhouse Talent Acquisition mit
            Professional- und Executive-Search-Kompetenz bis hin zu
            anspruchsvollen Führungs- und Schlüsselpositionen.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Im Mittelpunkt steht eine persönliche, pragmatische und beratende
            Arbeitsweise: Kund:innen arbeiten direkt mit einer erfahrenen
            Ansprechpartnerin zusammen, die das jeweilige Projekt selbst
            versteht, begleitet und operativ umsetzt.
          </p>
          <div className="mt-8">
            <Button href="/ueber-mich" variant="secondary">
              Mehr über mich
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
