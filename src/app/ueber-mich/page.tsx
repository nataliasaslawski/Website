import type { Metadata } from "next";
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
  "16 Jahre Search-Erfahrung",
  "Executive & Professional Search",
  "Persönliche Boutique-Beratung",
];

const stations = [
  {
    company: "WideResearch",
    roles: ["Projektmanagerin"],
    text: "Einstieg in Search, Kandidatenrecherche, Marktanalyse und strukturierte Projektsteuerung.",
  },
  {
    company: "Eurosearch / Deininger",
    roles: ["Consultant", "Senior Consultant", "Head of Project Management"],
    text: "Erstmals eigene Mandate, kontinuierliche Weiterentwicklung in der Beratung und schließlich Verantwortung für Teams, Prozesse und die Qualität der Projektarbeit.",
  },
  {
    company: "MSU",
    roles: ["Senior Consultant"],
    text: "Weitere Vertiefung anspruchsvoller Suchmandate.",
  },
  {
    company: "Odgers",
    roles: [
      "Senior Consultant",
      "Teamleitung für das Projekt Management der Industrial Practice Manufacturing",
    ],
    text: "Erneuter Einstieg als Senior Consultant und später zusätzliche Führungsverantwortung im Projektmanagement der Practice.",
    current: true,
  },
];

const perspectives = [
  {
    title: "Als Senior Consultant",
    text: "Ich habe anspruchsvolle Mandate eigenverantwortlich von der Analyse bis zum erfolgreichen Abschluss begleitet.",
  },
  {
    title: "Als Führungskraft",
    text: "Ich habe Teams aufgebaut, Ressourcen gesteuert und die Performance meiner Bereiche verantwortet.",
  },
  {
    title: "Als interne Mentorin",
    text: "Ich habe Junior-Kolleg:innen eingearbeitet sowie Schulungen zu Research, Direktansprache und Projektmanagement durchgeführt.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      <section className="bg-surface-page">
        <Container className="grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="lg:order-1">
            <Eyebrow>Über mich</Eyebrow>
            <h1 className="mt-4 font-display text-xl font-medium text-taupe-700">
              Natalia Saslawski
            </h1>
            <h2 className="mt-8 max-w-xl font-display text-[2rem] font-medium leading-[1.15] text-navy-900 md:text-[2.5rem]">
              Menschen lassen sich nicht auf Lebensläufe reduzieren. Und gute
              Besetzungen nicht auf Stellenprofile.
            </h2>
            <div className="max-w-xl text-[16px] leading-[1.8] text-text-secondary">
              <p className="mt-6">
                In vielen Jahren Personalberatung habe ich unzählige Gespräche
                mit Unternehmen, Führungskräften und Kandidat:innen geführt.
                Ich habe erlebt, dass der vermeintlich perfekte Kandidat am
                Ende doch nicht der Richtige war – und dass sich hinter einem
                zunächst unscheinbaren Profil genau die Persönlichkeit
                verbarg, die ein Unternehmen gesucht hatte.
              </p>
              <p className="mt-6">
                Genau das macht Executive Search für mich bis heute spannend.
                Entscheidend ist nicht nur, wer eine fachliche Anforderung
                erfüllt, sondern was hinter einer Position wirklich gebraucht
                wird – und was Menschen zu einem Wechsel bewegt.
              </p>
              <p className="mt-6">
                Eine gute Suche beginnt für mich lange vor der ersten
                Kandidatenansprache: mit Zuhören, Einordnen, Hinterfragen und
                einem realistischen Blick auf den Markt. Besonders reizen mich
                komplexe Mandate, bei denen die naheliegende Suche nicht
                ausreicht.
              </p>
              <p className="mt-6">
                Diese strukturierte Arbeitsweise habe ich über viele Jahre und
                Projekte entwickelt. Dabei sind zahlreiche erfolgreiche
                Besetzungen entstanden, auf die ich mit Freude zurückblicke –
                nicht zuletzt, weil einige dieser Entscheidungen Unternehmen
                und Teams langfristig begleitet haben.
              </p>
              <p className="mt-6">
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

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border-subtle pt-6 text-xs font-medium uppercase tracking-[0.08em] text-taupe-700">
              {highlights.map((item, i) => (
                <span key={item} className="flex items-center gap-x-6">
                  {i > 0 && <span className="text-border-default">·</span>}
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
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
            <p className="mt-4 text-center font-display text-[15px] italic text-taupe-700">
              Menschen. Möglichkeiten. Zusammenbringen.
            </p>
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

        <Container className="relative py-16 md:py-24">
          <Eyebrow>Werdegang</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
            Vom Projektmanagement zur Beratung und Führung
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
            <div>
              {stations.map((s, i) => (
                <div key={s.company} className="flex gap-6">
                  <div className="relative flex w-3 flex-none flex-col items-center">
                    <span
                      className={
                        s.current
                          ? "mt-1 h-3.5 w-3.5 flex-none rounded-full bg-navy-900"
                          : "mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-taupe-600"
                      }
                    />
                    {i < stations.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-border-default" />
                    )}
                  </div>
                  <div className={i < stations.length - 1 ? "pb-10" : ""}>
                    <div className="md:grid md:grid-cols-[9rem_1fr] md:gap-x-8">
                      <span className="block text-xs font-medium uppercase tracking-[0.1em] text-taupe-700 md:pt-1">
                        {s.company}
                      </span>
                      <div>
                        <h3 className="mt-1 font-display text-lg font-medium text-navy-900 md:mt-0">
                          {s.roles.join(" → ")}
                        </h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-text-secondary">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <p className="border-l-2 border-taupe-600 pl-5 font-display text-lg italic leading-snug text-navy-900">
                „Mit jeder Station wuchs nicht nur die Verantwortung für
                Mandate, sondern auch die für Teams, Kundenbeziehungen und die
                Qualität komplexer Suchprozesse.“
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface-page">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Perspektiven, die meine Arbeit heute prägen
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {perspectives.map((p) => (
              <div
                key={p.title}
                className="border border-border-subtle bg-surface-card p-8"
              >
                <h3 className="font-display text-lg font-medium text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  „{p.text}“
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-text-secondary">
            Diese Erfahrungen prägen heute meine Arbeit als selbstständige
            Beraterin – in der Verbindung aus operativer Search-Kompetenz,
            Beratung, Führung und einem tiefen Verständnis dafür, wie
            erfolgreiche Besetzungen entstehen.
          </p>
        </Container>
      </section>

      <section className="bg-surface-page">
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
