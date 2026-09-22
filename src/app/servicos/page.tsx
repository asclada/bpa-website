import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageIntro } from "@/components/sections/PageIntro";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { homeFaq } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Site Express e Site Institucional Completo: prazos, rodadas de ajuste e o que está incluso na mensalidade.",
};

const maintenanceIncludes = [
  "Trocar foto ou imagem já existente na estrutura",
  "Trocar texto de uma seção existente",
  "Corrigir informação: telefone, endereço, horário",
  "Ajustes pequenos já previstos na estrutura",
  "Hospedagem e domínio funcionando",
];

const maintenanceExcludes = [
  "Nova seção significativa",
  "Nova página",
  "Nova funcionalidade",
  "Redesenho de estrutura ou layout",
];

const servicesFaq = homeFaq.filter((item) =>
  [
    "Por que pagar se eu consigo montar um site sozinho / com IA?",
    "Quanto tempo demora?",
    "Quantos ajustes posso pedir?",
    "Qual a diferença entre Express e Completo?",
    "O que é SEO?",
    "E se eu quiser parar de pagar a mensalidade?",
  ].includes(item.question),
);

export default function ServicosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Serviços"
        title="Dois formatos. Um padrão de qualidade."
        description="Escolha o formato pelo objetivo do seu negócio — validar presença rápido ou construir SEO de verdade com múltiplas páginas."
      />

      <PricingSection
        eyebrow="Formatos"
        title="Express vs. Completo"
        description="Os dois incluem hospedagem, manutenção básica e suporte direto comigo."
      />

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Manutenção"
            title="O que a mensalidade de R$ 49,90 cobre"
            description="Transparência total sobre o que está incluso na recorrência e o que é considerado novo desenvolvimento."
            titleClassName="lg:whitespace-nowrap"
            descriptionClassName="max-w-none lg:whitespace-nowrap"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card-hover rounded-2xl border border-border bg-surface p-7">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Incluso na mensalidade
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {maintenanceIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent-muted"
                      strokeWidth={2.5}
                    />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-hover rounded-2xl border border-border bg-surface p-7">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Orçado à parte
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {maintenanceExcludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <X
                      size={16}
                      className="mt-0.5 shrink-0 text-text-secondary"
                      strokeWidth={2.5}
                    />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Dúvidas rápidas"
            title="Perguntas sobre os serviços"
          />
          <div className="mt-10 max-w-3xl">
            <FAQAccordion items={servicesFaq} />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
