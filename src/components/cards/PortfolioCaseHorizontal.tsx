import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DeviceMockup } from "@/components/DeviceMockup";
import type { PortfolioItem } from "@/lib/site-data";

export function PortfolioCaseHorizontal({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group grid items-center gap-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:grid-cols-2 md:p-10"
    >
      <DeviceMockup
        label={item.client}
        src={item.heroDesktop}
        mobileSrc={item.heroMobile}
        mobileWidth={item.heroMobileWidth}
        mobileHeight={item.heroMobileHeight}
        alt={`Site da ${item.client}`}
      />

      <div className="flex flex-col items-start gap-4">
        {item.featured && <Badge tone="accent">Case em destaque</Badge>}
        <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
          {item.client}
        </h2>
        <Badge tone="neutral">{item.category}</Badge>
        <p className="text-sm text-text-secondary sm:text-base">
          {item.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent-muted transition-colors group-hover:text-accent">
          Visitar site
          <ArrowUpRight size={16} />
        </span>
      </div>
    </a>
  );
}
