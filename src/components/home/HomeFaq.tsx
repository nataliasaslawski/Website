import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Faq } from "@/components/ui/Faq";

const items = [
  {
    question: "Für welche Positionen ist die Zusammenarbeit geeignet?",
    answer:
      "Vor allem für anspruchsvolle Fach-, Führungs- und Schlüsselpositionen, bei denen klassische Recruiting-Wege nicht ausreichend funktionieren und zusätzliche Search-Kompetenz benötigt wird.",
  },
  {
    question: "Für welche Unternehmen ist die Zusammenarbeit besonders geeignet?",
    answer:
      "Ich arbeite mit Unternehmen unterschiedlicher Größe – von kleineren und mittelständischen Unternehmen über wachstumsorientierte Start-ups bis hin zu größeren Organisationen und Konzernstrukturen. Mein Schwerpunkt liegt dabei auf Unternehmen, die anspruchsvolle Fach- und Führungspositionen besetzen oder ihre Recruitingprozesse gezielt weiterentwickeln möchten. Entscheidend ist weniger die Unternehmensgröße als der Bedarf an einer individuellen, fundierten und persönlich begleiteten Lösung.",
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer:
      "Der Schwerpunkt liegt auf Deutschland und dem DACH-Raum, mit regionaler Basis in Frankfurt am Main / Rhein-Main.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Zu Beginn werden Ausgangssituation, Rolle, Anforderungen und bisherige Suchaktivitäten gemeinsam besprochen. Anschließend wird der passende Projektumfang definiert und die Such- bzw. Beratungsstrategie aufgesetzt. Darauf aufbauend begleite ich den Prozess von der Identifikation und Gewinnung geeigneter Kandidat:innen über die Bewertung und Auswahl bis zur erfolgreichen Besetzung.",
  },
  {
    question: "Können auch einzelne Teile eines Search-Projekts übernommen werden?",
    answer:
      "Ja. Die Zusammenarbeit kann je nach Bedarf ein vollständiges Search-Projekt oder einzelne Leistungsbausteine umfassen.",
  },
  {
    question: "Was unterscheidet Ihre Leistung von klassischem Recruiting?",
    answer:
      "Im Mittelpunkt steht nicht nur die operative Kandidat:innensuche, sondern die Verbindung aus Suchstrategie, Marktanalyse, Research, Direktansprache, fundierter Kandidat:innenbewertung und persönlicher Beratung. Kandidat:innen und Entscheider:innen werden während des gesamten Prozesses individuell und persönlich begleitet. Ziel ist eine erfolgreiche Besetzung – entsprechend wird jedes Mandat konsequent und zielgerichtet bis zum Abschluss betreut. Gleichzeitig entsteht eine qualifizierte Kandidat:innenpipeline, die auch für weitere zukünftige Besetzungen relevant sein kann.",
  },
  {
    question: "Worauf basiert Ihr Erfolg bei anspruchsvollen Besetzungen?",
    answer:
      "Langjährige Erfahrung, belegt durch zahlreiche erfolgreiche Besetzungen in unterschiedlichen Marktsituationen und Konjunkturphasen, ausgeprägte Menschenkenntnis und ein gutes Gespür für beide Seiten des Prozesses: Ich verstehe, was Unternehmen und Entscheider:innen wirklich brauchen, und kann gleichzeitig Kandidat:innen für eine Rolle und ein Umfeld gewinnen. Diese Verbindung aus Marktverständnis, Einschätzungsvermögen und persönlicher Ansprache ist für mich ein wesentlicher Erfolgsfaktor.",
  },
  {
    question: "Wie können Sie uns als externe Beraterin bei internen Entscheidungen unterstützen?",
    answer:
      "Die Grundlage ist zunächst ein genaues Verständnis Ihrer Organisation, der jeweiligen Rolle, der Ausgangssituation und der internen Rahmenbedingungen. Dieses Wissen verbinde ich mit meiner langjährigen Erfahrung aus unterschiedlichen Suchmandaten, Marktkenntnis und dem Blick von außen. So entstehen keine pauschalen Empfehlungen, sondern konkrete, auf Ihre Situation zugeschnittene Einschätzungen und Entscheidungsgrundlagen.",
  },
];

export function HomeFaq() {
  return (
    <section className="relative overflow-hidden bg-surface-page pb-20 pt-12 md:pb-28 md:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 hidden h-56 w-56 rounded-full bg-navy-900/[0.025] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-12 hidden h-64 w-64 rounded-full bg-navy-900/[0.025] lg:block"
      />

      <Container className="relative">
        <div className="mx-auto max-w-[960px] rounded-[calc(var(--radius-lg)+8px)] border border-taupe-400/15 bg-cream-050/60 p-3 md:p-4 xl:max-w-[1100px] desktop:max-w-[1220px]!">
          <div className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface-elevated px-8 py-14 shadow-[var(--shadow-card)] md:px-16 md:py-16">
            <Eyebrow className="desktop:text-[13.5px]!">Häufige Fragen</Eyebrow>
            <h2 className="mt-4 font-display section-headline font-medium leading-snug text-navy-900">
              Was Sie vor einer Zusammenarbeit wissen möchten
            </h2>
            <div className="mt-10">
              <Faq items={items} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
