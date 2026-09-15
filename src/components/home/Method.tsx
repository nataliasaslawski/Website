import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "01",
    title: "Verstehen",
    text: "Rolle, Unternehmen, Kontext, Ausgangssituation, Anforderungen, Ziel der Besetzung und Erwartungen an die Rolle verstehen.",
  },
  {
    n: "02",
    title: "Analysieren",
    text: "Suchparameter, Kandidat:innenmarkt, Branchen, Zielfirmen sowie mögliche alternative Märkte analysieren.",
  },
  {
    n: "03",
    title: "Finden & Aktivieren",
    text: "Relevante Kandidat:innen identifizieren, persönlich ansprechen und für den Prozess gewinnen.",
  },
  {
    n: "04",
    title: "Bewerten",
    text: "Erfahrung, Kompetenzen, Motivation, Persönlichkeit und mögliche Passung strukturiert bewerten.",
  },
  {
    n: "05",
    title: "Begleiten",
    text: "Erkenntnisse transparent kommunizieren, Suchstrategie bei Bedarf anpassen und den weiteren Auswahlprozess begleiten.",
  },
];

export function Method() {
  return (
    <section className="relative overflow-hidden bg-surface-inverse text-text-inverse">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 lg:block"
      >
        <span className="absolute left-10 top-0 h-52 w-52 rounded-full bg-navy-800/45" />
        <span className="absolute left-28 top-16 h-44 w-44 rounded-full bg-navy-700/32" />
        <span className="absolute left-16 top-36 h-36 w-36 rounded-full bg-navy-800/22" />
      </div>

      <Container className="relative py-20 md:py-28">
        <div className="max-w-4xl">
          <Eyebrow tone="inverse">Vorgehensweise</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug md:text-[2rem]">
            Ein strukturierter Prozess statt eines standardisierten Suchschemas
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="border-t border-[oklch(from_var(--cream-100)_l_c_h_/_0.35)] pt-6"
            >
              <span className="font-display text-lg text-cream-100">{step.n}</span>
              <h3 className="mt-3 text-[17px] font-medium text-text-inverse">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-inverse/90">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
