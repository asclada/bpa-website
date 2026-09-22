"use client";

import { ReactNode, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { buildWhatsappLink } from "@/lib/constants";

type ScreenId = "intro" | "business" | "loja-detail" | "situation" | "result";
type BusinessTypeId = "clinica" | "advocacia" | "loja" | "autonomo" | "outro";
type SituationId = "sem-site" | "desatualizado" | "trocar-agencia";
type CatalogSizeId = "poucos" | "grande";
type ProdutoId = "Express" | "Completo";

type Recommendation = { produto: ProdutoId; motivo: string };

const businessTypes: { id: BusinessTypeId; label: string }[] = [
  { id: "clinica", label: "Clínica / Consultório" },
  { id: "advocacia", label: "Advocacia" },
  { id: "loja", label: "Loja / Comércio (vitrine virtual)" },
  { id: "autonomo", label: "Prestador de serviço autônomo" },
  { id: "outro", label: "Outro" },
];

const situations: { id: SituationId; label: string }[] = [
  { id: "sem-site", label: "Ainda não tenho site" },
  { id: "desatualizado", label: "Tenho, mas tá desatualizado" },
  { id: "trocar-agencia", label: "Quero trocar de agência" },
];

const catalogSizes: { id: CatalogSizeId; label: string }[] = [
  { id: "poucos", label: "Poucos produtos, mudo raramente" },
  {
    id: "grande",
    label:
      "Catálogo maior, atualizo com frequência — fotos, preços, produtos — e fecho a venda no WhatsApp",
  },
];

const productNames: Record<ProdutoId, string> = {
  Express: "Site Express",
  Completo: "Site Institucional Completo",
};

const decisionTable: Record<BusinessTypeId, Record<SituationId, Recommendation>> = {
  clinica: {
    "sem-site": {
      produto: "Completo",
      motivo:
        "negócios de saúde ganham muito com SEO — cada especialidade/serviço pode ter sua própria página e aparecer melhor no Google",
    },
    desatualizado: {
      produto: "Completo",
      motivo:
        "vale aproveitar a troca pra já sair com uma estrutura mais completa e melhor posicionada",
    },
    "trocar-agencia": {
      produto: "Completo",
      motivo:
        "pra manter o padrão de página múltipla que já deve ter, ou dar um upgrade nisso",
    },
  },
  advocacia: {
    "sem-site": {
      produto: "Completo",
      motivo:
        "credibilidade e SEO pesam muito nesse segmento — múltiplas páginas ajudam a transmitir mais autoridade",
    },
    desatualizado: {
      produto: "Completo",
      motivo:
        "advocacia se beneficia de uma presença mais robusta, com páginas dedicadas por área de atuação",
    },
    "trocar-agencia": {
      produto: "Completo",
      motivo: "mesma lógica: mais páginas, mais autoridade, melhor posicionamento",
    },
  },
  loja: {
    "sem-site": {
      produto: "Express",
      motivo: "pra começar rápido e já ter uma vitrine online funcionando, sem complicar",
    },
    desatualizado: {
      produto: "Express",
      motivo:
        "uma renovação rápida já resolve — não precisa de estrutura multi-página pra a maioria dos comércios",
    },
    "trocar-agencia": {
      produto: "Express",
      motivo: "resolve rápido e sem burocracia",
    },
  },
  autonomo: {
    "sem-site": {
      produto: "Express",
      motivo: "o formato mais rápido e em conta pra quem tá começando a ter presença online",
    },
    desatualizado: {
      produto: "Express",
      motivo: "uma atualização ágil, sem precisar de investimento alto",
    },
    "trocar-agencia": {
      produto: "Express",
      motivo: "rápido de trocar, sem burocracia",
    },
  },
  outro: {
    "sem-site": {
      produto: "Express",
      motivo:
        "pra já sair do zero com uma presença online rápida — se precisar de algo mais robusto, ajusto na conversa",
    },
    desatualizado: {
      produto: "Express",
      motivo:
        "uma renovação ágil já costuma resolver — se o caso pedir mais, a gente ajusta",
    },
    "trocar-agencia": {
      produto: "Express",
      motivo:
        "começo simples e rápido, e evoluímos conforme a necessidade real do seu negócio",
    },
  },
};

const ecosystemMotivo =
  "vitrine sempre atualizada, sem limitar a manutenção ao plano básico";

function ChatBubble({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit max-w-[92%] rounded-2xl rounded-tl-sm bg-black/25 px-4 py-3 text-sm leading-relaxed text-text-primary">
      {children}
    </div>
  );
}

function OptionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer rounded-full border border-accent-muted/40 bg-transparent px-4 py-2.5 text-left text-sm text-text-primary transition-colors hover:border-accent hover:bg-accent/10"
    >
      {label}
    </button>
  );
}

export function QualificationWidget({ className = "" }: { className?: string }) {
  const [screen, setScreen] = useState<ScreenId>("intro");
  const [businessType, setBusinessType] = useState<BusinessTypeId | null>(null);
  const [situation, setSituation] = useState<SituationId | null>(null);
  const [catalogSize, setCatalogSize] = useState<CatalogSizeId | null>(null);

  function reset() {
    setScreen("intro");
    setBusinessType(null);
    setSituation(null);
    setCatalogSize(null);
  }

  const businessLabel = businessTypes.find((b) => b.id === businessType)?.label;
  const situationLabel = situations.find((s) => s.id === situation)?.label;

  const isEcosystemFromLoja = businessType === "loja" && catalogSize === "grande";
  const recommendation =
    !isEcosystemFromLoja && businessType && situation
      ? decisionTable[businessType][situation]
      : null;
  const productName = recommendation ? productNames[recommendation.produto] : "";

  const whatsappHref = isEcosystemFromLoja
    ? buildWhatsappLink(
        `Oi! Fiz o teste rápido no site da Bora Pro Ar. Meu negócio: ${businessLabel} — catálogo maior, atualizado com frequência. O resultado indicou montar um Ecossistema Digital personalizado — quero saber mais!`,
      )
    : recommendation
      ? buildWhatsappLink(
          `Oi! Fiz o teste rápido no site da Bora Pro Ar. Meu negócio: ${businessLabel}. Minha situação: ${situationLabel}. O resultado indicou o ${productName} — quero saber mais!`,
        )
      : buildWhatsappLink();

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border bg-bg px-4 py-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface">
          <LogoMark className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-text-primary">
            Assistente Virtual — Bora Pro Ar
          </span>
          <span className="flex items-center gap-1.5 text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            online
          </span>
        </div>
      </div>

      <div
        className={`flex flex-col p-5 transition-[min-height] duration-300 ease-in-out sm:p-6 ${
          screen === "intro"
            ? "min-h-[180px] sm:min-h-[200px]"
            : "min-h-[380px] sm:min-h-[420px]"
        }`}
      >
        <div key={screen} className="widget-screen flex flex-1 flex-col gap-4">
          {screen === "intro" && (
            <>
              <ChatBubble>
                Oi! Vou te ajudar a encontrar o site ideal pro seu negócio. Leva
                10 segundos 👇
              </ChatBubble>
              <Button
                size="lg"
                className="w-full"
                onClick={() => setScreen("business")}
              >
                Começar
              </Button>
            </>
          )}

          {screen === "business" && (
            <>
              <ChatBubble>Qual desses combina com seu negócio?</ChatBubble>
              <div className="flex flex-col gap-2.5">
                {businessTypes.map((b) => (
                  <OptionButton
                    key={b.id}
                    label={b.label}
                    onClick={() => {
                      setBusinessType(b.id);
                      setScreen(b.id === "loja" ? "loja-detail" : "situation");
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {screen === "loja-detail" && (
            <>
              <ChatBubble>Como é (ou vai ser) sua vitrine?</ChatBubble>
              <div className="flex flex-col gap-2.5">
                {catalogSizes.map((c) => (
                  <OptionButton
                    key={c.id}
                    label={c.label}
                    onClick={() => {
                      setCatalogSize(c.id);
                      setScreen(c.id === "grande" ? "result" : "situation");
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {screen === "situation" && (
            <>
              <ChatBubble>E hoje, como está seu site?</ChatBubble>
              <div className="flex flex-col gap-2.5">
                {situations.map((s) => (
                  <OptionButton
                    key={s.id}
                    label={s.label}
                    onClick={() => {
                      setSituation(s.id);
                      setScreen("result");
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {screen === "result" && (isEcosystemFromLoja || recommendation) && (
            <>
              <ChatBubble>
                {isEcosystemFromLoja ? (
                  <>
                    Pra <strong className="text-accent-muted">{businessLabel}</strong>{" "}
                    com catálogo maior, recomendo montar um{" "}
                    <strong className="text-accent-muted">
                      Ecossistema Digital personalizado
                    </strong>{" "}
                    — {ecosystemMotivo}.
                  </>
                ) : (
                  <>
                    Pra <strong className="text-accent-muted">{businessLabel}</strong>,
                    recomendo o{" "}
                    <strong className="text-accent-muted">{productName}</strong> —{" "}
                    {recommendation!.motivo}.
                  </>
                )}
              </ChatBubble>
              <div className="mt-auto flex flex-col items-center gap-3">
                <Button href={whatsappHref} size="lg" className="w-full">
                  Falar no WhatsApp
                  <ArrowRight size={18} />
                </Button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-text-primary"
                >
                  <RotateCcw size={14} />
                  Recomeçar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
