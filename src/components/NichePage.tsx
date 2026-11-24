import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/sections/PageIntro";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/StructuredData";
import { buildWhatsappLink } from "@/lib/constants";
import type { Niche } from "@/lib/niches";

/** Página de segmento: todo o conteúdo vem de `niches` em src/lib/niches.ts */
export function NichePage({ niche }: { niche: Niche }) {
  const whatsappHref = buildWhatsappLink(niche.cta.whatsappMessage);

  return (
    <>
      <FaqJsonLd items={niche.faq} />

      <PageIntro
        eyebrow={niche.eyebrow}
        title={niche.title.map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex}>
                {wordIndex > 0 && " "}
                {/* palavras com hífen não quebram no meio ("ar-condicionado") */}
                {word.includes("-") ? (
                  <span className="whitespace-nowrap">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
            {index < niche.title.length - 1 && " "}
          </span>
        ))}
        description={niche.intro}
      >
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Button href={whatsappHref} size="lg">
            {niche.cta.button}
            <ArrowRight size={18} />
          </Button>
          <Button href="#precos" variant="outline" size="lg">
            Ver preços
          </Button>
        </div>
      </PageIntro>

      <section className="mt-16 border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow={niche.pains.eyebrow}
            title={niche.pains.title}
            description={niche.pains.description}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {niche.pains.items.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow={niche.features.eyebrow}
            title={niche.features.title}
            description={niche.features.description}
          />
          <ul className="card-hover mt-12 grid gap-x-10 gap-y-4 rounded-2xl border border-border bg-surface p-7 sm:p-10 md:grid-cols-2">
            {niche.features.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-muted"
                  strokeWidth={2.5}
                />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Qual formato" title={niche.formats.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {niche.formats.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                badge={item.badge}
                title={item.title}
                description={item.description}
                light={index === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <div id="precos" className="scroll-mt-24">
        <PricingSection
          eyebrow="Preços"
          title="Preço fechado, sem surpresa"
          description="Os dois formatos já incluem hospedagem e manutenção básica."
          whatsappSource={`sites para ${niche.label.toLowerCase()}`}
        />
      </div>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow={niche.steps.eyebrow} title={niche.steps.title} />
          <div className="mt-14 flex flex-col gap-8 md:flex-row md:gap-8">
            {niche.steps.items.map((item) => (
              <ProcessStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-12 max-w-3xl">
            <FAQAccordion items={niche.faq} />
          </div>
        </Container>
      </section>

      <FinalCTA
        title={niche.cta.title}
        description={niche.cta.description}
        href={whatsappHref}
        buttonLabel={niche.cta.button}
      />
    </>
  );
}
