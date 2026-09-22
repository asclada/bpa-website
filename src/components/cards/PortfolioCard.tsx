import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DeviceMockup } from "@/components/DeviceMockup";
import type { PortfolioItem } from "@/lib/site-data";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 hover:border-accent-muted"
    >
      <DeviceMockup
        label={item.client}
        src={item.heroDesktop}
        mobileSrc={item.heroMobile}
        mobileWidth={item.heroMobileWidth}
        mobileHeight={item.heroMobileHeight}
        alt={`Site da ${item.client}`}
      />

      <div className="flex flex-col gap-2">
        <Badge tone="neutral" className="w-fit">
          {item.category}
        </Badge>
        <h3 className="font-heading text-lg font-bold text-text-primary">
          {item.client}
        </h3>
        <p className="text-sm text-text-secondary">{item.description}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent-muted transition-colors group-hover:text-accent">
          Visitar site
          <ArrowUpRight size={16} />
        </span>
      </div>
    </a>
  );
}
