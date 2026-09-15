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
    <section className="relative overflow-hidden bg-surface-page">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 hidden h-56 w-72 lg:block"
      >
        <span className="absolute left-16 top-0 h-40 w-40 rounded-full bg-taupe-400/14" />
        <span className="absolute left-0 top-16 h-32 w-32 rounded-full bg-taupe-600/11" />
        <span className="absolute left-28 top-24 h-24 w-24 rounded-full bg-taupe-400/18" />
      </div>

      <Container className="relative py-14 md:py-20">
        <div className="max-w-4xl">
          <Eyebrow>Vorgehensweise</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Ein strukturierter Prozess statt eines standardisierten Suchschemas
          </h2>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2 md:gap-x-16">
          <div className="space-y-6">
            {steps.slice(0, 3).map((step) => (
              <div key={step.n} className="border-t border-border-subtle pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-base text-taupe-600">{step.n}</span>
                  <h3 className="text-[16px] font-medium text-navy-900">{step.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {steps.slice(3).map((step) => (
              <div key={step.n} className="border-t border-border-subtle pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-base text-taupe-600">{step.n}</span>
                  <h3 className="text-[16px] font-medium text-navy-900">{step.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
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
