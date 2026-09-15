import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "01",
    title: "Verstehen",
    text: "Rolle, Unternehmen, Kontext, Anforderungen und Ziel der Besetzung erfassen.",
  },
  {
    n: "02",
    title: "Analysieren",
    text: "Suchparameter, Kandidat:innenmarkt, Branchen, Zielfirmen und alternative Märkte einordnen.",
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
    text: "Erkenntnisse transparent kommunizieren, Suchstrategie bei Bedarf anpassen und den Auswahlprozess begleiten.",
  },
];

export function Method() {
  return (
    <section className="bg-surface-inverse text-text-inverse">
      <Container className="py-16 md:py-24">
        <div className="max-w-4xl">
          <Eyebrow tone="inverse">Vorgehensweise</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug md:text-[2rem]">
            Ein strukturierter Prozess statt eines standardisierten Suchschemas
          </h2>
        </div>

        <div className="relative mt-14 max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-0 top-2 w-px bg-[oklch(from_var(--paper-050)_l_c_h_/_0.25)]"
          />
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.n} className="pl-10 md:pl-12">
                <span className="font-display text-lg text-taupe-400">{step.n}</span>
                <h3 className="mt-2 text-[19px] font-medium text-text-inverse">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-inverse-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
