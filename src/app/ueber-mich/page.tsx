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
    title: "Personalberatung & Search",
    text: "Rund 15 Jahre in der Personalberatung, mit Schwerpunkt auf Professional und Executive Search bis hin zu Geschäftsleitungs- und C-Level-Mandaten. Besetzungen über unterschiedliche Branchen, Unternehmensgrößen und Hierarchieebenen hinweg, mit wiederkehrendem Schwerpunkt im industriellen bzw. produzierenden Umfeld.",
  },
  {
    title: "Führungsverantwortung",
    text: "Beförderungen in Führungsrollen in zwei Personalberatungen – unter anderem mit Teamaufbau, Ressourcen- und Performance-Steuerung sowie Einarbeitung, Coaching und fachlicher Entwicklung neuer Kolleg:innen.",
  },
  {
    title: "Inhouse Talent Acquisition",
    text: "Erfahrung auch aus der Unternehmensperspektive – ein Verständnis dafür, wie Recruiting-Entscheidungen innerhalb von Unternehmen getroffen werden.",
  },
  {
    title: "Akademischer Hintergrund",
    text: "Abgeschlossenes Architekturstudium (Dipl.-Ing. FH) und Berufserfahrung im Gewerbeimmobilienumfeld vor dem Wechsel ins Recruiting. Ausschlaggebend war mein wachsendes Interesse daran, Entscheidungen beratend zu begleiten, die das Wachstum von Unternehmen prägen.",
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
            <div className="mt-10">
              <Button href="/kontakt#erstgespraech" variant="primary">
                Unverbindliches Erstgespräch vereinbaren
              </Button>
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

      <section className="bg-surface-elevated">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Werdegang</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem]">
              Erfahrung aus mehreren Perspektiven des Recruitings
            </h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {stations.map((s) => (
              <div key={s.title} className="border-t border-border-subtle pt-6">
                <h3 className="font-display text-lg font-medium text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {s.text}
                </p>
              </div>
            ))}
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
