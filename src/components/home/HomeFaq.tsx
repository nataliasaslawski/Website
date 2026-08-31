import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Faq } from "@/components/ui/Faq";

const items = [
  {
    question: "Für welche Positionen ist die Zusammenarbeit geeignet?",
    answer:
      "Vor allem für anspruchsvolle Fach-, Führungs- und Schlüsselpositionen, bei denen klassische Recruiting-Wege nicht ausreichend funktionieren oder zusätzliche Search-Kompetenz benötigt wird.",
  },
  {
    question: "Arbeiten Sie deutschlandweit?",
    answer:
      "Ja. Der Schwerpunkt liegt auf Deutschland und dem DACH-Raum, mit regionaler Basis in Frankfurt am Main / Rhein-Main.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Zu Beginn werden Ausgangssituation, Rolle, Anforderungen und bisherige Suchaktivitäten gemeinsam besprochen. Anschließend wird der passende Projektumfang definiert und die Such- bzw. Beratungsstrategie aufgesetzt.",
  },
  {
    question: "Können auch einzelne Teile eines Search-Projekts übernommen werden?",
    answer:
      "Ja. Die Zusammenarbeit kann je nach Bedarf ein vollständiges Search-Projekt oder einzelne Leistungsbausteine umfassen.",
  },
  {
    question: "Arbeiten Sie auch mit Personalberatungen zusammen?",
    answer:
      "Ja. Personalberatungen und Executive-Search-Boutiquen können flexibel bei laufenden oder neuen Mandaten unterstützt werden.",
  },
  {
    question: "Was unterscheidet die Zusammenarbeit von klassischem Recruiting?",
    answer:
      "Im Mittelpunkt steht nicht nur die operative Kandidatensuche, sondern die Verbindung aus Suchstrategie, Marktanalyse, Research, Direktansprache, Kandidatenbewertung und persönlicher Beratung.",
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
