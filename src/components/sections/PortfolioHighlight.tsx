import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { portfolioItems } from "@/lib/site-data";

export function PortfolioHighlight() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos que já saíram do papel"
            description="Alguns dos negócios que já confiaram na Bora Pro Ar pra representar a marca deles online."
          />
          <Button href="/portfolio" variant="outline">
            Ver todos os cases
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
