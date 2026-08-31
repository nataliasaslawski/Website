import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-surface-page">
      <Container narrow className="py-16 md:py-24">
        <Eyebrow>Rechtliches</Eyebrow>
        <h1 className="mt-4 font-display text-2xl font-medium text-navy-900 md:text-[2rem]">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 border border-border-default bg-surface-elevated p-6 text-[15px] leading-relaxed text-text-secondary">
          <strong className="text-navy-900">Platzhalter — noch nicht final.</strong>{" "}
          Diese Seite muss vor Launch an die tatsächlich eingesetzten Dienste
          angepasst werden (aktuell vorgesehen: Kontaktformular, Terminbuchung,
          datenschutzfreundliche Analyse, lokal gehostete Schriftarten). Bitte
          nicht veröffentlichen, bevor ein:e Datenschutzbeauftragte:r oder
          Rechtsberatung sie final geprüft hat.
        </div>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Verantwortlicher
            </h2>
            <p className="mt-2">[wird ergänzt gemäß Impressum]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Kontaktformular
            </h2>
            <p className="mt-2">
              Bei Nutzung des Kontaktformulars werden die eingegebenen Daten
              (Name, E-Mail, ggf. Unternehmen und Telefonnummer, Nachricht) zur
              Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage: Art. 6
              Abs. 1 lit. b DSGVO. [Angaben zum eingesetzten
              Versanddienstleister werden ergänzt, sobald final ausgewählt.]
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Terminbuchung
            </h2>
            <p className="mt-2">
              [Wird ergänzt, sobald das Buchungssystem final ausgewählt und
              eingebunden ist.]
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Hosting &amp; Server-Logfiles
            </h2>
            <p className="mt-2">[Wird ergänzt gemäß gewähltem Hosting-Anbieter.]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Analyse
            </h2>
            <p className="mt-2">
              [Wird ergänzt, sobald die datenschutzfreundliche Analyse-Lösung
              final eingerichtet ist.]
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Schriftarten
            </h2>
            <p className="mt-2">
              Diese Website nutzt Schriftarten, die lokal eingebunden werden.
              Es findet dabei keine Verbindung zu Servern Dritter (z. B.
              Google Fonts) statt.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Ihre Rechte
            </h2>
            <p className="mt-2">[Wird ergänzt.]</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
