import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildWhatsappLink } from "@/lib/constants";
import type { PricingPlan } from "@/lib/site-data";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const light = plan.highlight;

  return (
    <div
      className={`card-hover flex h-full flex-col rounded-2xl border-2 p-8 ${
        light
          ? "border-ink/15 bg-accent text-ink"
          : "border-border bg-surface text-text-primary"
      }`}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
        {plan.highlight && (
          <Badge tone="dark" shine className="shrink-0">
            Recomendado
          </Badge>
        )}
      </div>

      <p className={`text-sm ${light ? "text-ink/70" : "text-text-secondary"}`}>
        {plan.tagline}
      </p>

      <div className="mt-6">
        <span className="font-heading text-4xl font-bold">{plan.price}</span>
        <p
          className={`mt-1 text-xs ${light ? "text-ink/70" : "text-text-secondary"}`}
        >
          {plan.recurrence}
        </p>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {plan.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${light ? "text-ink" : "text-accent-muted"}`}
              strokeWidth={2.5}
            />
            <span className={light ? "text-ink/80" : "text-text-secondary"}>
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={buildWhatsappLink(plan.whatsappMessage)}
        variant={light ? "dark-accent" : "primary"}
        size="lg"
        className="mt-8 w-full"
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}
