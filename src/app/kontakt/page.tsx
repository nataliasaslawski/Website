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
      <section className="relative overflow-hidden bg-surface-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 -bottom-12 hidden h-40 w-40 rounded-full bg-navy-900/[0.04] xl:block"
        />
        <Container wide className="relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow className="desktop:text-[13.5px]!">Kontakt</Eyebrow>
            <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-navy-900 md:text-[2.75rem] desktop:text-[3rem]!">
              Lassen Sie uns über Ihre aktuelle Search-Herausforderung
              sprechen.
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Ob anspruchsvolle Schlüsselposition, festgefahrene Suche oder
              zusätzlicher Unterstützungsbedarf in einem bestehenden Mandat –
              in einem unverbindlichen Erstgespräch klären wir, wo eine
              Zusammenarbeit sinnvoll unterstützen kann.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden bg-surface-elevated">
            <Image
              src={images.contact.hero}
              alt="Natalia Saslawski"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Container>
      </section>

      <section id="erstgespraech" className="relative scroll-mt-24 overflow-hidden bg-surface-elevated">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-12 hidden h-36 w-36 rounded-full bg-taupe-400/14 xl:block"
        />
        <Container wide className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem] desktop:text-[2.75rem]!">
              Kontakt aufnehmen
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Sie möchten sich zu einer möglichen Zusammenarbeit austauschen
              oder haben Fragen zu meinen Leistungen?
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary desktop:text-[18px]! desktop:leading-[1.6]!">
              Kontaktieren Sie mich gerne telefonisch, per E-Mail, über
              LinkedIn oder über das Kontaktformular. Ich melde mich zeitnah
              persönlich bei Ihnen zurück und wir stimmen bei Bedarf einen
              passenden Gesprächstermin ab.
            </p>
          </div>

          <dl id="rueckruf" className="scroll-mt-24 self-center">
            <div className="border-t border-border-default py-5">
              <dt className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted desktop:text-[13.5px]!">
                Telefon
              </dt>
              <dd className="mt-2 text-[15px] desktop:text-[17px]!">
                <a
                  href="tel:+4917643983941"
                  className="text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
                >
                  +49 176 43983941
                </a>
              </dd>
            </div>
            <div className="border-t border-border-default py-5">
              <dt className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted desktop:text-[13.5px]!">
                E-Mail
              </dt>
              <dd className="mt-2 text-[15px] desktop:text-[17px]!">
                <a
                  href={`mailto:${site.email}`}
                  className="text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="border-y border-border-default py-5">
              <dt className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted desktop:text-[13.5px]!">
                LinkedIn
              </dt>
              <dd className="mt-2 text-[15px] desktop:text-[17px]!">
                <a
                  href="https://www.linkedin.com/in/natalia-saslawski-20788467/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy-900 underline decoration-taupe-600 underline-offset-4 hover:decoration-navy-900"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-taupe-600"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  <span>LinkedIn-Profil</span>
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section id="kontaktformular" className="scroll-mt-24 bg-surface-page">
        <Container narrow className="py-16 md:py-24">
          <Eyebrow className="desktop:text-[13.5px]!">Kontaktformular</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem] desktop:text-[2.5rem]!">
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
