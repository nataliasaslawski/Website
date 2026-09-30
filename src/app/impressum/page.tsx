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
        <Eyebrow className="desktop:text-[13.5px]!">Rechtliches</Eyebrow>
        <h1 className="mt-4 font-display text-2xl font-medium text-navy-900 md:text-[2rem] desktop:text-[2.5rem]!">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-2">
              Natalia Saslawski – Executive Search &amp; Talent Advisory
              <br />
              Inhaberin: Natalia Saslawski
              <br />
              Römischer Ring 48
              <br />
              60486 Frankfurt am Main
              <br />
              Deutschland
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">Kontakt</h2>
            <p className="mt-2">
              Telefon: +49 176 43983941
              <br />
              E-Mail: kontakt@natalia-saslawski.de
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV)
            </h2>
            <p className="mt-2">
              Natalia Saslawski
              <br />
              Römischer Ring 48
              <br />
              60486 Frankfurt am Main
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE463819060
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-2">
              Ich bin nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Haftung für externe Links
            </h2>
            <p className="mt-2">
              Diese Website kann Links zu externen Websites Dritter enthalten.
              Auf deren Inhalte habe ich keinen Einfluss. Für die Inhalte der
              verlinkten Seiten ist der jeweilige Anbieter oder Betreiber
              verantwortlich.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              Urheberrecht
            </h2>
            <p className="mt-2">
              Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder,
              Fotografien, Grafiken und das Design unterliegen dem deutschen
              Urheberrecht bzw. den Rechten der jeweiligen Urheber:innen. Eine
              Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
              Verwendung außerhalb der gesetzlichen Grenzen des Urheberrechts
              bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
