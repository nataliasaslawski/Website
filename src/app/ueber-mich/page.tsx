import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Natalia Saslawski – rund 15 Jahre Erfahrung in Personalberatung, Professional und Executive Search sowie Inhouse Talent Acquisition.",
};

const highlights = [
  {
    label: "16 Jahre Search-Erfahrung",
    icon: (
      <>
        <circle cx="12" cy="8.5" r="3.8" />
        <path d="M4.5 20c1-4.3 3.9-6.7 7.5-6.7s6.5 2.4 7.5 6.7" />
      </>
    ),
  },
  {
    label: "Executive & Professional Search",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <path d="M4.5 19.5 10.3 13.7" />
        <path d="M6.8 13.4 10.3 13.7 10 17.2" />
      </>
    ),
  },
  {
    label: "Persönliche Boutique-Beratung",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.8 8.2 13 13l-4.8 2.8L11 11l4.8-2.8Z" />
      </>
    ),
  },
];

const stations = [
  {
    company: "WideResearch",
    roles: ["Projektmanagerin"],
    text: "Einstieg in Search, Kandidatenrecherche und Marktanalyse.",
  },
  {
    company: "Eurosearch / Deininger",
    roles: ["Consultant", "Senior Consultant", "Head of Project Management"],
    text: "Erste eigene Mandate, wachsende Verantwortung für Teams und Prozesse.",
  },
  {
    company: "MSU",
    roles: ["Senior Consultant"],
    text: "Vertiefung anspruchsvoller Suchmandate.",
  },
  {
    company: "Odgers",
    roles: [
      "Senior Consultant",
      "Teamleitung für das Projekt Management der Industrial Practice Manufacturing",
    ],
    text: "Senior-Mandate und zusätzliche Führungsverantwortung im Projektmanagement der Practice.",
  },
];

const perspectives = [
  {
    title: "Als Senior Consultant",
    text: "Ich habe anspruchsvolle Mandate eigenverantwortlich von der Analyse bis zum erfolgreichen Abschluss begleitet.",
    icon: (
      <>
        <circle cx="12" cy="8.5" r="3.2" />
        <path d="M5 19c.9-3.5 3.8-5.5 7-5.5s6.1 2 7 5.5" />
      </>
    ),
  },
  {
    title: "Als Führungskraft",
    text: "Ich habe Teams aufgebaut, Ressourcen gesteuert und die Performance meiner Bereiche verantwortet.",
    icon: (
      <>
        <circle cx="8.5" cy="8.5" r="2.8" />
        <circle cx="15.5" cy="9.5" r="2.3" />
        <path d="M3.5 19c.6-3.1 2.8-5 5-5s4.5 1.7 5.2 4.6" />
        <path d="M13.8 14.2c2 .3 3.6 1.9 4.2 4.8" />
      </>
    ),
  },
  {
    title: "Als interne Mentorin",
    text: "Ich habe Junior-Kolleg:innen eingearbeitet sowie Schulungen zu Research, Direktansprache und Projektmanagement durchgeführt.",
    icon: (
      <>
        <path d="M4 6c1.8-.9 4-.9 6 .2v10.3c-2-1.1-4.2-1.1-6-.2Z" />
        <path d="M20 6c-1.8-.9-4-.9-6 .2v10.3c2-1.1 4.2-1.1 6-.2Z" />
      </>
    ),
  },
];

function IconBadge({
  children,
  size = "sm",
}: {
  children: ReactNode;
  size?: "sm" | "lg";
}) {
  const badge = size === "lg" ? "h-14 w-14" : "h-10 w-10";
  const icon = size === "lg" ? 30 : 18;
  const stroke = size === "lg" ? "1.6" : "1.3";
  const color = size === "lg" ? "text-taupe-700" : "text-taupe-600";
  return (
    <span
      className={`flex ${badge} flex-none items-center justify-center rounded-full bg-cream-100`}
    >
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={color}
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  );
}

export default function UeberMichPage() {
  return (
    <>
      <section className="bg-surface-page">
        <Container className="grid items-start gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="lg:order-1">
            <Eyebrow>Über mich</Eyebrow>
            <h1 className="mt-3 font-display text-xl font-medium text-taupe-700">
              Natalia Saslawski
            </h1>
            <h2 className="mt-5 font-display text-[1.85rem] font-medium leading-[1.2] text-navy-900 md:text-[2.25rem]">
              Menschen lassen sich nicht auf Lebensläufe reduzieren. Und gute
              Besetzungen nicht auf Stellenprofile.
            </h2>
            <div className="mt-6 text-[15px] leading-[1.75] text-text-secondary">
              <p>
                In vielen Jahren Personalberatung habe ich unzählige Gespräche
                mit Unternehmen, Führungskräften und Kandidat:innen geführt.
                Ich habe erlebt, dass der vermeintlich perfekte Kandidat am
                Ende doch nicht der Richtige war – und dass sich hinter einem
                zunächst unscheinbaren Profil genau die Persönlichkeit
                verbarg, die ein Unternehmen gesucht hatte.
              </p>
              <p className="mt-4">
                Genau das macht Executive Search für mich bis heute spannend.
                Entscheidend ist nicht nur, wer eine fachliche Anforderung
                erfüllt, sondern was hinter einer Position wirklich gebraucht
                wird – und was Menschen zu einem Wechsel bewegt.
              </p>
              <p className="mt-4">
                Eine gute Suche beginnt für mich lange vor der ersten
                Kandidatenansprache: mit Zuhören, Einordnen, Hinterfragen und
                einem realistischen Blick auf den Markt. Besonders reizen mich
                komplexe Mandate, bei denen die naheliegende Suche nicht
                ausreicht.
              </p>
              <p className="mt-4">
                Diese strukturierte Arbeitsweise habe ich über viele Jahre und
                Projekte entwickelt. Dabei sind zahlreiche erfolgreiche
                Besetzungen entstanden, auf die ich mit Freude zurückblicke –
                nicht zuletzt, weil einige dieser Entscheidungen Unternehmen
                und Teams langfristig begleitet haben.
              </p>
              <p className="mt-4">
                Der Schritt in die Selbstständigkeit war für mich kein
                Neuanfang, sondern die bewusste Entscheidung, meine
                langjährige Search-Erfahrung in eigener Verantwortung
                einzusetzen – als persönliche Boutique-Beratung mit
                durchgängiger Begleitung von der Suchstrategie bis zur
                Umsetzung. So ist die Art der Beratung entstanden, für die ich
                heute stehe: persönlich, verbindlich und mit einem Arbeitsstil,
                der Kundenwunsch und Suchrealität in einen produktiven Dialog
                bringt.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-border-subtle pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border-subtle">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 sm:pr-4 sm:first:pl-0 sm:[&:not(:first-child)]:pl-4"
                >
                  <IconBadge size="lg">{h.icon}</IconBadge>
                  <span className="text-[13px] font-medium leading-snug text-navy-900">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="lg:order-2 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
              <Image
                src={images.about.portrait}
                alt="Portrait-Platzhalter – wird durch professionelle Businessfotos ersetzt"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="mt-5 border-t border-border-subtle pt-5 text-right">
              <p className="font-display text-lg italic leading-tight text-navy-900">
                Menschen.
                <br />
                Möglichkeiten.
                <br />
                Zusammenbringen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-elevated">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 hidden h-36 w-36 rounded-full bg-navy-900/5 xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-24 top-14 hidden h-24 w-24 rounded-full bg-navy-900/4 xl:block"
        />

        <Container className="relative py-12 md:py-16">
          <span className="block text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
            Werdegang
          </span>
          <h2 className="mt-3 font-display text-[1.75rem] font-medium leading-[1.15] text-navy-900 md:text-[2.375rem]">
            Vom Projektmanagement zur Beratung und Führung
          </h2>
          <p className="mt-3 max-w-[680px] text-[16px] leading-[1.55] text-text-muted">
            Nach dem Architekturstudium und ersten Berufsjahren im
            Gewerbeimmobilienumfeld führte mein Weg in die Personalberatung.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[3fr_1fr] lg:gap-9">
            <div>
              {stations.map((s, i) => (
                <div key={s.company} className="flex gap-4">
                  <div className="relative flex w-2 flex-none flex-col items-center">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-taupe-500" />
                    {i < stations.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-border-subtle" />
                    )}
                  </div>
                  <div className={i < stations.length - 1 ? "pb-7" : ""}>
                    <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-taupe-700">
                      {s.company}
                    </span>
                    <h3 className="mt-1 font-display text-[22px] font-medium leading-[1.25] text-navy-900">
                      {s.roles.join(" → ")}
                    </h3>
                    <p className="mt-1 text-[15px] leading-[1.5] text-text-secondary">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:mt-14">
              <div className="max-w-[270px] border-t border-border-subtle pt-3">
                <p className="font-display text-[21px] italic leading-[1.55] text-navy-900">
                  „Mit jeder Station wuchs nicht nur die Verantwortung für
                  Mandate, sondern auch die für Teams, Kundenbeziehungen und
                  die Qualität komplexer Suchprozesse.“
                </p>
                <div className="mt-3 border-t border-border-subtle" />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="py-14 md:py-20">
          <Eyebrow>Perspektiven, die meine Arbeit heute prägen</Eyebrow>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {perspectives.map((p) => (
              <div key={p.title} className="bg-cream-100/50 p-7">
                <IconBadge>{p.icon}</IconBadge>
                <h3 className="mt-4 font-display text-lg font-medium text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  „{p.text}“
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border-subtle pt-8">
            <p className="mx-auto max-w-2xl text-center text-[15px] leading-relaxed text-text-secondary">
              Diese Erfahrungen prägen heute meine Arbeit als selbstständige
              Beraterin – in der Verbindung aus operativer Search-Kompetenz,
              Beratung, Führung und einem tiefen Verständnis dafür, wie
              erfolgreiche Besetzungen entstehen.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-elevated">
        <Container narrow className="py-16 md:py-24">
          <Eyebrow>Arbeitsweise</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Menschenkenntnis, Marktverständnis und ein strukturierter Blick
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Ein Lebenslauf zeigt nicht immer, was jemand tatsächlich leisten
              kann. Erfahrung lässt sich aus anderen Branchen, Funktionen oder
              Unternehmenskontexten übertragen – und manche Kandidat:innen
              wirken auf dem Papier zunächst nicht wie die naheliegende
              Besetzung, erweisen sich im Gespräch aber als genau richtig für
              die Aufgabe.
            </p>
            <p>
              Genau hier setzt meine Arbeit an: Ich lese nicht nur, was im
              Lebenslauf steht, sondern versuche zu verstehen, welche
              Verantwortung tatsächlich getragen wurde, welche Erfahrungen
              übertragbar sind und welches Potenzial für eine neue Aufgabe
              besteht. Diese Einschätzung verbinde ich mit einer strukturierten
              Suchmethodik und einem realistischen Blick auf den jeweiligen
              Kandidat:innenmarkt.
            </p>
            <p>
              Nach vielen Jahren in der Personalberatung weiß ich außerdem,
              woran Suchprozesse häufig scheitern – und wie sich das durch
              eine klare Suchstrategie, Verbindlichkeit im Prozess und eine
              persönliche, direkte Kandidat:innenansprache vermeiden lässt.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-inverse text-text-inverse">
        <Container className="py-16 text-center md:py-24">
          <h2 className="font-display text-2xl font-medium leading-snug md:text-[2.25rem]">
            Lassen Sie uns über Ihr aktuelles Search-Projekt sprechen.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt#erstgespraech" variant="inverse">
              Unverbindliches Erstgespräch vereinbaren
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
