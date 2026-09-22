import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { processSteps } from "@/lib/site-data";

export function HowItWorks() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao site no ar"
          description="Um processo simples, sem enrolação — você sabe exatamente em que etapa está."
          titleClassName="lg:whitespace-nowrap"
        />

        <div className="mt-14 flex flex-col gap-8 md:flex-row md:gap-8">
          {processSteps.map((item) => (
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
  );
}
