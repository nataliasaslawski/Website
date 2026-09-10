import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const items = [
  {
    title: "Senior-Level-Erfahrung",
    text: "Rund 15 Jahre Erfahrung in Personalberatung, Professional Search und Executive Search – mit Kenntnis unterschiedlicher Branchen, Unternehmensgrößen und Kandidat:innenmärkte.",
  },
  {
    title: "Mehrere Perspektiven auf Recruiting",
    text: "Erfahrung aus Personalberatung, Führungsverantwortung und Inhouse Talent Acquisition schafft ein Verständnis für die Perspektiven von Unternehmen, Kandidat:innen sowie die Arbeitsweise von Personalberatungen.",
  },
  {
    title: "Strukturierte Suchmethodik",
    text: "Suchprojekte werden über Zielfirmen, Marktsegmente, Funktionen, Kompetenzprofile und alternative Kandidat:innenpools systematisch aufgebaut und bearbeitet.",
  },
  {
    title: "Persönliche Mandatsführung",
    text: "Ich begleite Mandate persönlich und durchgängig – mit direktem Austausch, klarer Verantwortung und kontinuierlicher Steuerung des gesamten Prozesses.",
  },
];

export function ExpertiseTrust() {
  return (
    <section className="bg-surface-page">
      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Erfahrung &amp; Arbeitsweise</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Vertrauen entsteht durch Erfahrung und Verständnis – nicht durch
            Versprechen
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-t border-border-subtle pt-6">
              <h3 className="font-display text-lg font-medium text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
