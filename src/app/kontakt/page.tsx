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
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-[2.75rem]">
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
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Kontakt aufnehmen
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              Sie möchten sich zu einer möglichen Zusammenarbeit austauschen
              oder haben Fragen zu meinen Leistungen?
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              Kontaktieren Sie mich gerne telefonisch, per E-Mail, über
              LinkedIn oder über das Kontaktformular. Ich melde mich zeitnah
              persönlich bei Ihnen zurück und wir stimmen bei Bedarf einen
              passenden Gesprächstermin ab.
            </p>
          </div>

          <dl id="rueckruf" className="scroll-mt-24 self-center">
            <div className="border-t border-border-default py-5">
              <dt className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted">
                Telefon
              </dt>
              <dd className="mt-2 text-[15px] text-text-muted">
                Telefonnummer folgt in Kürze.
              </dd>
            </div>
            <div className="border-t border-border-default py-5">
              <dt className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted">
                E-Mail
              </dt>
              <dd className="mt-2 text-[15px]">
                <a
                  href={`mailto:${site.email}`}
                  className="text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="border-y border-border-default py-5">
              <dt className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted">
                LinkedIn
              </dt>
              <dd className="mt-2 text-[15px]">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
                >
                  Auf LinkedIn vernetzen
                </a>
              </dd>
            </div>
          </dl>
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
