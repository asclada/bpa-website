import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/sections/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/Badge";
import {
  buildWhatsappLink,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/constants";
import { pricingPlans } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Bora Pro Ar pelo WhatsApp ou Instagram e peça seu site institucional ou express.",
};

export default function ContatoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Vamos conversar sobre o seu site"
        description="Me conta rapidamente sobre o seu negócio — respondo no mesmo dia."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-8">
              <div className="card-hover rounded-2xl border border-border bg-surface p-5 sm:p-7">
                <ContactForm />
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <MessageCircle size={18} className="text-accent-muted" />
                  Falar direto pelo WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <InstagramIcon size={18} className="text-accent-muted" />
                  {INSTAGRAM_HANDLE} no Instagram
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                Preços
              </span>
              {pricingPlans.map((plan) => (
                <div
                  key={plan.slug}
                  className="card-hover flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-2xl border border-border bg-surface p-6"
                >
                  <div>
                    <p className="font-heading text-base font-bold text-text-primary">
                      {plan.name}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {plan.recurrence}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="font-heading text-2xl font-bold text-accent-muted">
                      {plan.price}
                    </span>
                    {plan.highlight && <Badge tone="accent">Recomendado</Badge>}
                  </div>
                </div>
              ))}

              <div className="card-hover flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border border-border bg-surface p-6">
                <div className="min-w-0">
                  <p className="font-heading text-base font-bold text-text-primary">
                    Ecossistema Digital
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    CRM, agentes de IA e automações sob medida
                  </p>
                </div>
                <span className="shrink-0 font-heading text-lg font-bold whitespace-nowrap text-accent-muted">
                  A consultar
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
