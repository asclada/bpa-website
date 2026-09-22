import { Users, Bot, Workflow, Network, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PricingCard } from "@/components/cards/PricingCard";
import { pricingPlans } from "@/lib/site-data";
import { buildWhatsappLink } from "@/lib/constants";

const ecosystemWhatsappMessage =
  "Oi! Quero saber mais sobre o Ecossistema Digital personalizado (CRM, agentes de IA e automações).";

const ecosystemFeatures = [
  { icon: Users, label: "CRM sob medida" },
  { icon: Bot, label: "Agentes de IA" },
  { icon: Workflow, label: "Automação de processos" },
  { icon: Network, label: "Integração ponta a ponta" },
];

export function PricingSection({
  eyebrow = "Preços",
  title = "Escolha o formato certo pro seu negócio",
  description = "Preço fechado, sem letra miúda. Os dois formatos já incluem hospedagem e manutenção básica.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          titleClassName="lg:whitespace-nowrap"
          descriptionClassName="max-w-none lg:whitespace-nowrap"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} />
          ))}
        </div>

        <div className="card-hover mt-6 flex flex-col gap-8 rounded-2xl border border-border bg-surface-raised p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-lg flex-col gap-3">
            <h3 className="font-heading text-xl font-bold text-text-primary lg:whitespace-nowrap">
              Ecossistema digital para a sua empresa
            </h3>
            <p className="text-sm text-text-secondary">
              Além do site, também construo CRM sob medida, agentes de IA
              pra atendimento, automação de processos e integrações ponta a
              ponta — pra quando o seu negócio precisar de mais do que uma
              presença online.
            </p>
            <Button
              href={buildWhatsappLink(ecosystemWhatsappMessage)}
              variant="primary"
              size="md"
              className="mt-2 w-fit"
            >
              Vamos conversar
              <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {ecosystemFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-muted">
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span className="text-sm text-text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
