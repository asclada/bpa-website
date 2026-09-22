import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/sections/PageIntro";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { homeFaq } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Perguntas frequentes sobre os sites da Bora Pro Ar: preço, prazo, ajustes e mensalidade.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Se a sua dúvida não estiver aqui, chama no WhatsApp — respondo rápido."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <FAQAccordion items={homeFaq} />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
