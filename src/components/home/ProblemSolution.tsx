import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images, brand } from "@/lib/images";

export function ProblemSolution() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-100/40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 hidden h-[30rem] w-[36rem] -translate-y-1/2 lg:block"
        >
          <span className="absolute left-24 top-2 h-72 w-72 rounded-full bg-taupe-400/14" />
          <span className="absolute left-0 top-44 h-56 w-56 rounded-full bg-taupe-600/11" />
          <span className="absolute left-48 bottom-0 h-44 w-44 rounded-full bg-taupe-400/17" />
        </div>

        <Container className="relative py-14 md:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Die Ausgangslage</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2.25rem]">
              Anspruchsvolle Positionen brauchen mehr als
              Standard-Recruiting.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              Je spezifischer eine Rolle, desto anspruchsvoller wird die
              Suche. Oft sind relevante Kandidat:innen nur schwer erreichbar,
              Zielmärkte eng und klassische Recruiting-Kanäle wenig wirksam.
              Gleichzeitig müssen fachliche Anforderungen, Unternehmenskontext
              und persönliche Passung zusammengebracht werden. Gerade bei
              Schlüsselpositionen braucht es deshalb mehr als Reichweite:
              Marktverständnis, Klarheit in der Suche und einen
              differenzierten Blick auf relevante Kandidat:innenmärkte.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="py-14 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Mein Ansatz</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
                Strategische Beratung, verbunden mit operativer
                Besetzungskompetenz.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
                Am Anfang steht für mich ein klares Verständnis der Rolle, des
                Unternehmenskontextes und der Anforderungen. Darauf aufbauend
                entwickle ich eine fundierte Suchstrategie, die sich im
                Zusammenspiel mit den Marktergebnissen kontinuierlich
                weiterentwickelt, und führe den Besetzungsprozess operativ
                durch.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                Entscheidend ist für mich dabei nicht die Anzahl
                präsentierter Profile, sondern die Identifikation von
                Kandidat:innen, die fachlich, persönlich und zur jeweiligen
                Unternehmenskultur passen.
              </p>

              <div aria-hidden="true" className="mt-10 flex justify-end pr-1">
                <Image
                  src={brand.markNavy}
                  alt=""
                  width={349}
                  height={326}
                  className="h-auto w-64 opacity-[0.08] md:w-80"
                />
              </div>
            </div>

            <div className="relative aspect-[3/2] w-full border border-border-default">
              <Image
                src={images.home.ansatzPortrait}
                alt="Natalia Saslawski"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
