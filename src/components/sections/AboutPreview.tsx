import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { aboutSummary } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[220px_1fr] md:gap-14">
          <div className="relative aspect-square w-40 overflow-hidden rounded-full border border-border bg-surface md:w-full">
            <Image
              src="/lucas-santana.jpg"
              alt="Lucas Santana"
              fill
              sizes="(min-width: 768px) 220px, 160px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <Badge tone="accent">Sobre</Badge>
            <p className="max-w-3xl font-heading text-xl font-bold text-text-primary sm:text-2xl">
              {aboutSummary}
            </p>
            <Button href="/sobre" variant="outline">
              Conhecer a história
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
