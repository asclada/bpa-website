import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  light = false,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-2xl border p-7 ${
        light
          ? "border-transparent bg-surface-light text-ink"
          : "border-border bg-surface text-text-primary"
      }`}
    >
      {badge && (
        <Badge tone={light ? "light" : "accent"} className="w-fit">
          {badge}
        </Badge>
      )}

      {Icon && (
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            light ? "bg-ink text-surface-light" : "bg-accent text-ink"
          }`}
        >
          <Icon size={18} strokeWidth={2} />
        </div>
      )}

      <h3 className="font-heading text-lg font-bold">{title}</h3>
      <p className={`text-sm ${light ? "text-ink/70" : "text-text-secondary"}`}>
        {description}
      </p>
    </div>
  );
}
