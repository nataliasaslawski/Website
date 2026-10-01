import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function FounderTeaser() {
  return (
    <section className="bg-surface-page">
      <Container wide className="grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="photo-shadow photo-frame-a lg:mt-[35px] lg:w-[53%] lg:justify-self-end">
          <div className="relative aspect-[2/3] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.home.aboutTeaser}
              alt="Natalia Saslawski"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 35vw, 90vw"
            />
          </div>
        </div>

        <div>
          <Eyebrow className="desktop:text-[13.5px]!">Über mich</Eyebrow>
          <h2 className="mt-4 font-display section-headline font-medium leading-snug text-navy-900">
            15 Jahre Erfahrung in Executive Search und Personalberatung
          </h2>
          <p className="mt-5 max-w-xl text-justify hyphens-auto text-[15px] leading-relaxed text-text-secondary xl:max-w-2xl xl:text-[16px] xl:leading-[1.7] desktop:text-[18px]! desktop:leading-[1.6]!">
            Ich verbinde langjährige Erfahrung aus Personalberatung,
            Führungsverantwortung und Inhouse Talent Acquisition mit
            fundierter Professional- und Executive-Search-Expertise aus
            zahlreichen erfolgreichen Besetzungen.
          </p>
          <p className="mt-4 max-w-xl text-justify hyphens-auto text-[15px] leading-relaxed text-text-secondary xl:max-w-2xl xl:text-[16px] xl:leading-[1.7] desktop:text-[18px]! desktop:leading-[1.6]!">
            Im Mittelpunkt steht eine persönliche, pragmatische und beratende
            Arbeitsweise: Kund:innen arbeiten direkt mit einer erfahrenen
            Ansprechpartnerin zusammen, die das jeweilige Projekt selbst
            versteht, begleitet und operativ umsetzt.
          </p>

          <p className="mt-8 max-w-xl font-display text-lg italic leading-snug text-navy-900 desktop:text-[28px]!">
            „Vertrauen wächst durch Substanz, Urteilsvermögen und
            Verbindlichkeit – nicht durch große Versprechen.“
          </p>
          <p className="mt-3 text-[13px] text-text-muted">
            Natalia Saslawski
            <br />
            Executive Search &amp; Talent Advisory
          </p>

          <div className="mt-8">
            <Button href="/ueber-mich" variant="primary">
              Mehr über mich
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
