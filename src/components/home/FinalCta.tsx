import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-surface-elevated">
      <Container narrow className="py-16 text-center md:py-24">
        <h2 className="font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2.25rem]">
          Lassen Sie uns über Ihre aktuelle Search-Herausforderung sprechen.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary">
          Ob anspruchsvolle Schlüsselposition, festgefahrene Suche oder
          zusätzlicher Unterstützungsbedarf in einem bestehenden Mandat – in
          einem unverbindlichen Erstgespräch klären wir, wo eine
          Zusammenarbeit sinnvoll unterstützen kann.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/kontakt#erstgespraech" variant="primary">
            Unverbindliches Erstgespräch vereinbaren
          </Button>
          <Button href="/kontakt#rueckruf" variant="ghost">
            Rückruf anfragen
          </Button>
        </div>
      </Container>
    </section>
  );
}
