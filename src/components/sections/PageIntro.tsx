import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-16 pb-4 sm:pt-20">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Badge tone="accent">{eyebrow}</Badge>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
