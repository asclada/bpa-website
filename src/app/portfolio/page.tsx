import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/sections/PageIntro";
import { PortfolioCaseHorizontal } from "@/components/cards/PortfolioCaseHorizontal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Cases reais entregues pela Bora Pro Ar, com destaque para o ecossistema digital da HK Advocacia e da KLL Promotora.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfólio"
        title="Projetos entregues, não só protótipos"
        description="Cada case abaixo foi publicado, está no ar e representa um negócio real."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6">
            {portfolioItems.map((item) => (
              <div key={item.slug} id={item.slug}>
                <PortfolioCaseHorizontal item={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Seu projeto pode ser o próximo case"
        description="Vamos conversar sobre o que seu negócio precisa pra ter presença online de verdade."
      />
    </>
  );
}
