import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light" | "ghost" | "dark-accent";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-ink border border-accent hover:bg-accent-muted hover:ring-2 hover:ring-ink hover:opacity-80",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent",
  "outline-light":
    "bg-transparent text-ink border border-ink/20 hover:bg-ink hover:text-surface-light hover:border-accent hover:opacity-80",
  ghost:
    "bg-transparent text-text-primary border border-transparent hover:border-accent hover:text-accent hover:opacity-80",
  "dark-accent":
    "bg-ink text-accent border border-ink hover:text-text-primary hover:border-text-primary hover:opacity-80",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
