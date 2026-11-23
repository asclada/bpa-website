import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/sections/PageIntro";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FaqJsonLd } from "@/components/StructuredData";
import { homeFaq } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dúvidas sobre Criação de Sites",
  description:
    "Quanto custa, quanto tempo demora, quantos ajustes e como o site aparece no Google: perguntas frequentes sobre os sites da Bora Pro Ar, em Natal/RN.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={homeFaq} />
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
