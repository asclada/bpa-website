import { ReactNode } from "react";

type Tone = "accent" | "neutral" | "light" | "dark";

const toneStyles: Record<Tone, string> = {
  accent: "bg-accent text-ink",
  neutral: "bg-surface text-text-secondary border border-border",
  light: "bg-ink text-surface-light",
  dark: "bg-ink text-accent",
};

export function Badge({
  children,
  tone = "accent",
  shine = false,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  shine?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${toneStyles[tone]} ${shine ? "badge-shiny" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
