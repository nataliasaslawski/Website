import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-surface-page">
      <Container narrow className="py-16 md:py-24">
        <Eyebrow>Rechtliches</Eyebrow>
        <h1 className="mt-4 font-display text-2xl font-medium text-navy-900 md:text-[2rem]">
          Impressum
        </h1>

        <div className="mt-8 border border-border-default bg-surface-elevated p-6 text-[15px] leading-relaxed text-text-secondary">
          <strong className="text-navy-900">Platzhalter — noch nicht final.</strong>{" "}
          Diese Seite enthält noch keine rechtsverbindlichen Angaben. Sie muss
          vor Launch mit den tatsächlichen Angaben (u. a. Anbieterkennzeichnung
          nach § 5 DDG, Kontaktdaten, USt-IdNr. sofern vorhanden,
          Berufsbezeichnung) final abgestimmt werden.
        </div>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-2">[Name], [Anschrift] — wird ergänzt.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">Kontakt</h2>
            <p className="mt-2">E-Mail: [wird ergänzt] · Telefon: [wird ergänzt]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-2">[falls vorhanden, wird ergänzt]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-2">[wird ergänzt]</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
