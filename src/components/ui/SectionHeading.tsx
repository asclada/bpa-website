import { Badge } from "@/components/ui/Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  titleClassName = "",
  descriptionClassName = "max-w-2xl",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center"
          ? "mx-auto max-w-2xl items-center text-center"
          : "items-start"
      }`}
    >
      {eyebrow && <Badge tone={light ? "light" : "accent"}>{eyebrow}</Badge>}
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-ink" : "text-text-primary"
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base ${descriptionClassName} ${
            light ? "text-ink/70" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
