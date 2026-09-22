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

const stations = [
  {
    company: "WideResearch",
    roles: ["Projektmanagerin"],
    text: "Einstieg in die Personalberatung: Search von Grund auf gelernt, von Marktanalyse bis zur strukturierten Kandidat:innenansprache.",
  },
  {
    company: "Eurosearch / Deininger Unternehmensberatung",
    roles: ["Consultant", "Senior Consultant", "Head of Project Management"],
    text: "Erste eigene Mandate und Aufstieg in die Verantwortung für Teams, Prozesse und Projektqualität.",
  },
  {
    company: "MSU",
    roles: ["Senior Consultant"],
    text: "Eigenverantwortliche Betreuung anspruchsvoller Suchmandate.",
  },
  {
    company: "Odgers Berndtson",
    roles: ["Senior Consultant", "Teamleitung Industrial Practice Manufacturing"],
    text: "Senior-Mandate sowie zusätzliche Teamleitung für das Projekt Management, bevor der Schritt in die Selbstständigkeit folgte.",
    current: true,
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
              In vielen Jahren Personalberatung habe ich unzählige Gespräche mit Unternehmen, Führungskräften und Kandidat:innen geführt. Ich habe erlebt, dass der vermeintlich perfekte Kandidat am Ende doch nicht der Richtige war – und dass sich hinter einem zunächst unscheinbaren Profil genau die Persönlichkeit verbarg, die ein Unternehmen gesucht hatte.
            </p>
            <p className="mt-6">
              Genau das macht Executive Search für mich bis heute spannend. Entscheidend ist nicht nur, wer eine fachliche Anforderung erfüllt, sondern was hinter einer Position wirklich gebraucht wird – und was Menschen zu einem Wechsel bewegt.
            </p>
            <blockquote className="my-8 border-l-2 border-taupe-600 pl-6 font-display text-xl italic leading-snug text-navy-900 md:text-2xl">
              „Entscheidend ist nicht nur, wer eine fachliche Anforderung
              erfüllt, sondern was hinter einer Position wirklich gebraucht
              wird.“
            </blockquote>
            <p className="mt-6">
              Eine gute Suche beginnt für mich lange vor der ersten Kandidatenansprache: mit Zuhören, Einordnen, Hinterfragen und einem realistischen Blick auf den Markt. Besonders reizen mich komplexe Mandate, bei denen die naheliegende Suche nicht ausreicht.
            </p>
            <p className="mt-6">
              Vielleicht liegt mir diese Arbeitsweise auch deshalb, weil ich ursprünglich aus der Architektur komme: Strukturen verstehen, Zusammenhänge erkennen und aus vielen Anforderungen eine tragfähige Lösung entwickeln. Dieser Blick begleitet mich bis heute.
            </p>
            <p className="mt-6">
              Der Schritt in die Selbstständigkeit war für mich kein Neuanfang, sondern die bewusste Entscheidung, meine langjährige Search-Erfahrung in eigener Verantwortung einzusetzen – als persönliche Boutique-Beratung mit durchgängiger Begleitung von der Suchstrategie bis zur Umsetzung.
            </p>
            <p className="mt-6">
              So ist aus vielen Jahren Search-Erfahrung die Art der Beratung entstanden, für die ich heute stehe: persönlich, verbindlich und mit einem Arbeitsstil, der Kundenwunsch und Suchrealität in einen produktiven Dialog bringt.
            </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated lg:sticky lg:top-28 lg:order-2">
            <Image
              src={images.about.portrait}
              alt="Portrait-Platzhalter – wird durch professionelle Businessfotos ersetzt"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
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
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 border border-border-default bg-surface-card lg:sticky lg:top-28">
              <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-taupe-600"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 20c1-3.8 4.2-6 7.5-6s6.5 2.2 7.5 6" />
              </svg>
              <span className="text-eyebrow font-medium uppercase tracking-[var(--tracking-wider)] text-text-muted">
                Bildplatzhalter
              </span>
            </div>

            <div>
              <Eyebrow>Werdegang</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
                Vom Projektmanagement zur Beratung und Führung
              </h2>

              <div className="mt-10">
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
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-taupe-600">
                        {s.company}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-medium text-navy-900">
                        {s.roles.join(" → ")}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-text-secondary">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-2xl space-y-5 border-t border-border-subtle pt-8 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Diese Entwicklung hat mir Erfahrung aus unterschiedlichen
              Perspektiven gegeben: Als Senior Consultant habe ich
              anspruchsvolle Mandate eigenverantwortlich bis zum erfolgreichen
              Abschluss begleitet. Als Führungskraft habe ich Teams aufgebaut,
              Ressourcen gesteuert und die Performance meiner Bereiche
              verantwortet. Und als interne Mentorin habe ich
              Junior-Kolleg:innen eingearbeitet sowie Schulungen zu Research,
              Direktansprache und Projektmanagement durchgeführt.
            </p>
            <p>
              Diese Erfahrungen prägen heute meine Arbeit als selbstständige
              Beraterin – in der Verbindung aus operativer Search-Kompetenz,
              Beratung, Führung und einem tiefen Verständnis dafür, wie
              erfolgreiche Besetzungen entstehen.
            </p>
          </div>
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
