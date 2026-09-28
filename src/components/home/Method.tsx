import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const principles = [
  {
    title: "Verstehen & hinterfragen",
    text: "Zusammenhänge verstehen, Anforderungen einordnen und Annahmen hinterfragen.",
  },
  {
    title: "Qualität vor Quantität",
    text: "Entscheidend sind Relevanz, Qualität und Passung – nicht die Menge.",
  },
  {
    title: "Beratung statt Vermittlung",
    text: "Ich begleite Mandate beratend, persönlich und mit klarer Einschätzung.",
  },
  {
    title: "Verbindlichkeit & Vertrauen",
    text: "Diskretion, Verantwortung und ein verlässlicher Austausch prägen meine Arbeit.",
  },
];

export function Method() {
  return (
    <section className="relative overflow-hidden bg-surface-inverse text-text-inverse">
      {/* seam circle: continues the bottom-right circle from the Leistungen section
          above. Same size/horizontal offset (right-24, h-36 w-36), center sits
          exactly on the shared section boundary (top: -R). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-18 right-24 hidden h-36 w-36 rounded-full bg-cream-100/5 xl:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 lg:block"
      >
        <span className="absolute left-10 top-0 h-52 w-52 rounded-full bg-navy-800/45" />
        <span className="absolute left-28 top-16 h-44 w-44 rounded-full bg-navy-700/32" />
        <span className="absolute left-16 top-36 h-36 w-36 rounded-full bg-navy-800/22" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 hidden h-[14rem] w-[18rem] lg:block"
      >
        <span className="absolute bottom-2 left-0 h-40 w-40 rounded-full bg-navy-800/46" />
        <span className="absolute bottom-10 left-20 h-32 w-32 rounded-full bg-navy-700/34" />
      </div>

      <Container wide className="relative py-20 md:py-28">
        <div className="max-w-xl">
          <h2>
            <Eyebrow tone="inverse" className="desktop:text-[13px]!">Meine Arbeitsweise</Eyebrow>
          </h2>
          <p className="mt-3 text-sm text-text-inverse/70 md:text-[15px]">
            Substanz, Urteilsvermögen und persönliche Verantwortung
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 xl:gap-6 desktop:gap-8!">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[var(--radius-md)] border border-cream-100/10 bg-navy-800/25 p-6 md:px-6 md:py-8 xl:p-8 desktop:px-8! desktop:py-12!"
            >
              <h3 className="text-[17px] font-medium leading-snug text-text-inverse xl:text-[19px] desktop:text-[21px]!">
                {principle.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-inverse/80 xl:text-[16px] desktop:text-[18px]!">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
