import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/images";

export function IntroStatement() {
  return (
    <section className="bg-surface-elevated">
      <Container className="py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Executive Search &amp; Talent Advisory
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              Durch meine langjährige Arbeit in der Personalberatung und
              zahlreiche erfolgreich begleitete Besetzungen verstehe ich, was
              Unternehmen wirklich brauchen – und was Menschen bewegt, sich
              für eine neue Aufgabe zu entscheiden. Dieses Verständnis prägt
              meine Arbeit bei der Besetzung anspruchsvoller Positionen und in
              der strategischen Beratung rund um Recruiting und
              Talentgewinnung.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={brand.markNavy}
              alt=""
              width={349}
              height={326}
              className="h-auto w-40 opacity-30 md:w-48"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
