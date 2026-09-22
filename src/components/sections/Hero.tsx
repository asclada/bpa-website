import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QualificationWidget } from "@/components/QualificationWidget";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 pb-20 sm:pt-20 md:pt-24">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-start gap-6">
            <Badge tone="accent">Sites institucionais &amp; express</Badge>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Sites que{" "}
              <span className="text-[0.82em]">
                <span className="text-accent">parecem</span> caros.
              </span>
              <br />
              <span className="text-[0.74em] lg:text-[0.77em]">
                Preço que não é.
              </span>
            </h1>

            <p className="max-w-md text-base text-text-secondary sm:text-lg">
              Sites institucionais e express para negócios que querem ser
              levados a sério online — feitos rápido, sem parecer genérico.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contato" size="lg">
                Quero meu site
                <ArrowRight size={18} />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                Ver portfólio
              </Button>
            </div>
          </div>

          <QualificationWidget />
        </div>
      </Container>
    </section>
  );
}
