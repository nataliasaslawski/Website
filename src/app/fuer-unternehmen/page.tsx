import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Für Unternehmen",
  description:
    "Executive & Professional Search für Unternehmen – Suchstrategie, Marktanalyse, Research, Direktansprache und Kandidatenbewertung für anspruchsvolle Fach-, Führungs- und Schlüsselpositionen.",
};

const situations = [
  "Eine anspruchsvolle Fach-, Führungs- oder Schlüsselposition ist schwer zu besetzen.",
  "Klassische Recruiting-Kanäle liefern nicht genügend passende Kandidat:innen.",
  "Die Suche dauert bereits länger als geplant oder ist festgefahren.",
  "Der relevante Kandidatenmarkt ist nicht ausreichend transparent.",
  "Das Anforderungsprofil ist komplex, sehr eng oder möglicherweise nicht marktgerecht.",
  "Interne Recruiting-Kapazitäten reichen für eine intensive Suche und Direktansprache nicht aus.",
];

const services = [
  "Rollen- und Anforderungsanalyse",
  "Entwicklung und Schärfung der Suchstrategie",
  "Markt- und Wettbewerbsanalyse",
  "Definition relevanter Zielfirmen und Kandidatenmärkte",
  "Research und Sourcing",
  "Direktansprache potenzieller Kandidat:innen",
  "Erstgespräche und Qualifizierung",
  "Strukturierte Kandidatenbewertung",
  "Erstellung und Präsentation geeigneter Kandidatenprofile",
  "Begleitung und Beratung im Auswahlprozess",
];

const outcomes = [
  "Klarheit über den relevanten Kandidatenmarkt",
  "Realistische und fundierte Suchstrategie",
  "Zugang zu Kandidat:innen außerhalb klassischer Bewerbermärkte",
  "Strukturierte Identifikation und Ansprache relevanter Profile",
  "Qualifizierte Kandidat:innen statt möglichst großer Profilmengen",
  "Entlastung interner Recruiting- oder Search-Ressourcen",
  "Fundierte Entscheidungsgrundlagen für den weiteren Auswahlprozess",
];

const advisoryPoints = [
  "Anforderungsprofile schärfen",
  "Kandidatenmärkte analysieren",
  "Alternative Zielmärkte identifizieren",
  "Suchstrategien entwickeln oder überprüfen",
  "Auswahl- und Bewertungskriterien strukturieren",
  "Recruiting- und Talent-Acquisition-Prozesse optimieren",
];

export default function FuerUnternehmenPage() {
  return (
    <>
      <section className="bg-surface-page">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Für Unternehmen</Eyebrow>
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-[2.75rem]">
              Executive &amp; Professional Search für anspruchsvolle
              Positionen
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
              Unterstützung bei der Besetzung anspruchsvoller Fach-,
              Führungs- und Schlüsselpositionen – von der Klärung des
              Suchprofils und der Entwicklung einer fundierten Suchstrategie
              über Research, Sourcing und Direktansprache bis zur
              strukturierten Kandidatenbewertung und Begleitung des
              Auswahlprozesses.
            </p>
            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.companies.hero}
              alt="Bild-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Typische Ausgangssituation</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Wann eine externe Search-Perspektive den Unterschied macht
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="border-t border-border-default pt-4 text-[15px] leading-relaxed text-text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="grid gap-16 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Leistungen &amp; Vorgehensweise</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Mögliche Leistungsbausteine
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              Die konkrete Ausgestaltung richtet sich nach Position,
              Ausgangssituation und vorhandenen internen
              Recruiting-Ressourcen – als vollständiges Search-Mandat oder in
              einzelnen Projektbausteinen.
            </p>
            <ul className="mt-6 space-y-3">
              {services.map((item) => (
                <li
                  key={item}
                  className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-navy-900 first:border-none first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow>Mehrwert der Zusammenarbeit</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Was Sie aus der Zusammenarbeit mitnehmen
            </h2>
            <ul className="mt-6 space-y-3">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-text-secondary first:border-none first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="talent-advisory" className="scroll-mt-24 bg-surface-elevated">
        <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Talent Advisory</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Strategische Beratung rund um Search &amp; Recruiting
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              Ergänzende Beratungsleistungen für anspruchsvolle Recruiting-
              und Search-Fragestellungen – eigenständig oder in Verbindung
              mit einem Search-Projekt.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {advisoryPoints.map((item) => (
                <li
                  key={item}
                  className="border-t border-border-subtle pt-3 text-[15px] leading-relaxed text-navy-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-card">
            <Image
              src={images.companies.secondary}
              alt="Bild-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface-inverse text-text-inverse">
        <Container narrow className="py-16 text-center md:py-24">
          <h2 className="font-display text-2xl font-medium leading-snug md:text-[2.25rem]">
            Lassen Sie uns über Ihre aktuelle Position sprechen.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt#erstgespraech" variant="inverse">
              Unverbindliches Erstgespräch vereinbaren
            </Button>
            <Button href="/kontakt#rueckruf" variant="ghost" className="border-paper-050 text-text-inverse hover:bg-paper-050 hover:text-navy-900">
              Rückruf anfragen
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
