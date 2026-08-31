import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { images } from "@/lib/images";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Unverbindliches Erstgespräch vereinbaren, Rückruf anfragen oder direkt Kontakt aufnehmen.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-surface-page">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Kontakt</Eyebrow>
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-4xl">
              Lassen Sie uns über Ihre aktuelle Search-Herausforderung
              sprechen.
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-text-secondary">
              Ob anspruchsvolle Schlüsselposition, festgefahrene Suche oder
              zusätzlicher Unterstützungsbedarf in einem bestehenden Mandat –
              in einem unverbindlichen Erstgespräch klären wir, wo eine
              Zusammenarbeit sinnvoll unterstützen kann.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.contact.hero}
              alt="Bild-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section id="erstgespraech" className="scroll-mt-24 bg-surface-elevated">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="border border-border-default bg-surface-card p-8">
            <Eyebrow>Erstgespräch</Eyebrow>
            <h2 className="mt-3 font-display text-xl font-medium text-navy-900">
              Termin für ein unverbindliches Erstgespräch
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
              Die Online-Terminbuchung wird derzeit eingerichtet. Bis dahin
              erreichen Sie mich am schnellsten über das Kontaktformular oder
              per E-Mail — ich melde mich zeitnah mit Terminvorschlägen
              zurück.
            </p>
            <a
              href="#kontaktformular"
              className="mt-6 inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-navy-900 px-6 py-3 text-sm font-medium text-text-inverse transition-colors hover:bg-navy-800"
            >
              Zum Kontaktformular
            </a>
          </div>

          <div id="rueckruf" className="scroll-mt-24 border border-border-default bg-surface-card p-8">
            <Eyebrow>Rückruf</Eyebrow>
            <h2 className="mt-3 font-display text-xl font-medium text-navy-900">
              Rückruf anfragen
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
              Hinterlassen Sie kurz Ihr Anliegen und Ihre Telefonnummer im
              Kontaktformular — ich rufe Sie gerne zurück.
            </p>
            <div className="mt-6 space-y-1 text-[15px] text-text-secondary">
              <p>
                E-Mail:{" "}
                <a href={`mailto:${site.email}`} className="text-navy-900 underline decoration-taupe-600 underline-offset-4">
                  {site.email}
                </a>
              </p>
              <p className="text-text-muted">
                Telefonnummer folgt in Kürze.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="kontaktformular" className="scroll-mt-24 bg-surface-page">
        <Container narrow className="py-16 md:py-24">
          <Eyebrow>Kontaktformular</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Schreiben Sie mir
          </h2>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
