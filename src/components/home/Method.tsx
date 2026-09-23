import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const principles = [
  {
    title: "Verstehen & hinterfragen",
    text: "Ich möchte Zusammenhänge wirklich verstehen, Anforderungen einordnen und auch bestehende Annahmen hinterfragen – bevor daraus eine Such- oder Handlungsempfehlung entsteht.",
  },
  {
    title: "Qualität vor Quantität",
    text: "Nicht die Anzahl präsentierter Profile entscheidet, sondern deren Relevanz, Qualität und Passung zur jeweiligen Aufgabe und zum Unternehmen.",
  },
  {
    title: "Beratung statt reiner Vermittlung",
    text: "Ich verstehe meine Rolle nicht als reine Kandidatenvermittlung, sondern als beratende Partnerschaft – mit Marktkenntnis, einer klaren Einschätzung und persönlicher Begleitung.",
  },
  {
    title: "Verbindlichkeit & Vertrauen",
    text: "Diskretion, persönliche Verantwortung und ein offener, verlässlicher Austausch sind für mich Grundlage jeder Zusammenarbeit.",
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

      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow tone="inverse">Arbeitsweise</Eyebrow>
          <h2 className="mt-5 font-display text-[1.9rem] font-medium leading-snug md:text-[2.5rem]">
            Substanz, Urteilsvermögen und persönliche Verantwortung
          </h2>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="border-t border-[oklch(from_var(--cream-100)_l_c_h_/_0.35)] pt-7"
            >
              <h3 className="text-[17px] font-medium text-text-inverse">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-inverse/90">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
