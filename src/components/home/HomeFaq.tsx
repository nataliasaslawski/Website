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
      "Im Mittelpunkt steht nicht nur die operative Kandidat:innensuche, sondern die Verbindung aus Suchstrategie, Marktanalyse, Research, Direktansprache, Kandidat:innenbewertung und persönlicher Beratung. Ziel ist eine erfolgreiche Besetzung – entsprechend wird jedes fortgeführte Mandat konsequent und zielgerichtet bis zum Abschluss bearbeitet.",
  },
  {
    question: "Worauf basiert Ihr Erfolg bei anspruchsvollen Besetzungen?",
    answer:
      "Langjährige Erfahrung aus zahlreichen erfolgreichen Besetzungen in unterschiedlichen Marktsituationen und Konjunkturphasen, ausgeprägte Menschenkenntnis und ein gutes Gespür für beide Seiten des Prozesses: Ich verstehe, was Unternehmen und Entscheider:innen wirklich brauchen, und kann gleichzeitig Kandidat:innen für eine Rolle und ein Umfeld gewinnen. Diese Verbindung aus Marktverständnis, Einschätzungsvermögen und persönlicher Ansprache ist für mich ein wesentlicher Erfolgsfaktor.",
  },
  {
    question: "Wie kann ein erstes Gespräch vereinbart werden?",
    answer:
      "Über die Terminbuchung, eine Rückrufanfrage oder direkte Kontaktaufnahme per E-Mail bzw. Kontaktformular.",
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
