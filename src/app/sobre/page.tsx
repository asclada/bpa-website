import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/sections/PageIntro";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Lucas Santana, desenvolvedor por trás da Agência Digital Bora Pro Ar.",
};

export default function SobrePage() {
  return (
    <>
      <PageIntro eyebrow="Sobre" title="A pessoa por trás da Bora Pro Ar" />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
            <div className="relative aspect-square w-48 overflow-hidden rounded-full border border-border bg-surface md:w-full">
              <Image
                src="/lucas-santana.jpg"
                alt="Lucas Santana"
                fill
                sizes="(min-width: 768px) 260px, 192px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 text-text-secondary">
              <p className="text-lg text-text-primary sm:text-xl">
                Sou Lucas Santana, desenvolvedor por trás da Agência Digital
                &quot;Bora Pro Ar&quot;.
              </p>
              <p>
                A Bora Pro Ar nasceu de uma dor real: a maioria das pequenas e
                médias empresas não consegue um site que mostre o potencial de
                verdade do negócio. Ou fica genérico, ou demora meses pra
                ficar pronto, ou custa caro demais pra quem tá começando — e
                no fim, não converte ninguém.
              </p>
              <p>
                Meu foco aqui é resolver exatamente isso: sites institucionais
                e express com preço justo, prazo curto (dias, não meses) e
                pensados pra vender — não só pra existir no ar.
              </p>
              <p>
                Curo cada projeto pessoalmente, do primeiro rascunho de direção
                visual até a última linha de código. Sem equipe terceirizada no
                meio, sem telefone sem fio: quem conversa com você é quem
                constrói o seu site.
              </p>

              <p className="mt-4 font-heading text-2xl text-accent-muted">
                Lucas Santana
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
