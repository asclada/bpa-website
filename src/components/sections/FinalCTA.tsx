import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA({
  title = "Vamos colocar seu site no ar?",
  description = "Conversa inicial rápida, sem compromisso. Você sai sabendo exatamente o formato e o prazo ideais pro seu negócio.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="card-hover flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface-raised px-8 py-12 sm:items-center sm:px-14 sm:py-16 sm:text-center">
          <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:whitespace-nowrap">
            {title}
          </h2>
          <p className="max-w-md text-base text-text-secondary">
            {description}
          </p>
          <Button href="/contato" size="lg">
            Quero meu site
            <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
