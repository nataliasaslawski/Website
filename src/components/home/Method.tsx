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
    <section className="bg-surface-inverse text-text-inverse">
      <Container className="py-20 md:py-28">
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
