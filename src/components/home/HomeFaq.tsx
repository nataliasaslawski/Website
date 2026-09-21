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
    question: "Wie können Sie uns als externe Beraterin bei internen Recruiting-Entscheidungen unterstützen?",
    answer:
      "Die Grundlage ist zunächst ein genaues Verständnis Ihrer Organisation, der jeweiligen Rolle, der Ausgangssituation und der internen Rahmenbedingungen. Dieses Wissen verbinde ich mit meiner langjährigen Erfahrung aus unterschiedlichen Suchmandaten, Marktkenntnis und dem Blick von außen. So entstehen keine pauschalen Empfehlungen, sondern konkrete, auf Ihre Situation zugeschnittene Einschätzungen und Entscheidungsgrundlagen.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-surface-page">
      <Container narrow className="py-16 md:py-24">
        <Eyebrow>Häufige Fragen</Eyebrow>
        <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
          Fragen, die häufig vor einem Erstgespräch aufkommen
        </h2>
        <div className="mt-10">
          <Faq items={items} />
        </div>
      </Container>
    </section>
  );
}
