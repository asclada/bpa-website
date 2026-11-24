import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Link2Off,
  MessageCircle,
  SearchX,
  User,
} from "lucide-react";

/**
 * Páginas por segmento (nicho). Cada nicho tem a própria rota em
 * `src/app/sites/<slug>/page.tsx` (endereço /sites/<slug>), que só renderiza `<NichePage niche={...} />`.
 * Regra: só criar página com conteúdo de verdade daquele segmento — páginas
 * iguais trocando só o nome do nicho ou da cidade o Google penaliza.
 */
export type Niche = {
  slug: string;
  /** Como o nicho aparece em links e na mensagem de WhatsApp */
  label: string;
  /** Resumo curto pro card na página de Serviços */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** H1 em linhas: cada item começa numa linha nova */
  title: string[];
  intro: string;
  pains: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  features: { eyebrow: string; title: string; description: string; items: string[] };
  formats: {
    title: string;
    items: { icon: LucideIcon; badge: string; title: string; description: string }[];
  };
  steps: { eyebrow: string; title: string; items: { step: string; title: string; description: string }[] };
  faq: { question: string; answer: string }[];
  cta: { title: string; description: string; button: string; whatsappMessage: string };
};

export const niches: Niche[] = [
  {
    slug: "ar-condicionado",
    label: "Ar-condicionado",
    summary:
      "Orçamento pelo WhatsApp, serviços, PMOC e bairros atendidos — pra empresas e técnicos autônomos.",
    metaTitle: "Site para Empresas de Ar-Condicionado em Natal",
    metaDescription:
      "Site para empresas e técnicos de instalação e manutenção de ar-condicionado em Natal/RN, com orçamento pelo WhatsApp e pronto para o Google. Desde R$ 999.",
    eyebrow: "Ar-condicionado",
    title: ["Site para empresas e técnicos de", "ar-condicionado em Natal"],
    intro:
      "Quando o calor aperta, o cliente pesquisa no Google e chama quem passa mais confiança. Um site profissional faz isso por você e leva o pedido de orçamento direto pro seu WhatsApp. Atendo Natal e todo o Brasil.",
    pains: {
      eyebrow: "O problema",
      title: "Cliente com calor não espera",
      description:
        "Na hora do aperto, quem aparece primeiro e passa confiança leva o serviço.",
      items: [
        {
          icon: SearchX,
          title: "Só Instagram não aparece no Google",
          description:
            "Quem procura \"instalação de ar-condicionado perto de mim\" vê o Google e o Maps primeiro. Sem site, você fica dependendo de indicação e do algoritmo.",
        },
        {
          icon: Link2Off,
          title: "Site fora do ar espanta cliente",
          description:
            "Link quebrado na ficha do Google passa a impressão de empresa fechada — e o cliente chama o próximo da lista.",
        },
        {
          icon: MessageCircle,
          title: "Orçamento perdido no caminho",
          description:
            "Sem um caminho claro, o cliente desiste antes de pedir orçamento. No site, um toque abre o seu WhatsApp com a mensagem pronta.",
        },
      ],
    },
    features: {
      eyebrow: "O que entra no seu site",
      title: "Feito pro jeito que o seu cliente contrata",
      description: "Cada seção pensada pra quem trabalha com climatização.",
      items: [
        "Botão de orçamento pelo WhatsApp em todas as telas, com a mensagem já escrita",
        "Serviços separados: instalação, limpeza e higienização, manutenção preventiva, conserto e carga de gás",
        "Atendimento residencial e empresarial, com destaque pra PMOC e contratos de manutenção",
        "Tipos de aparelho que você atende: split, inverter, cassete, piso-teto e VRF",
        "Bairros e cidades onde você atende",
        "Fotos dos seus serviços e avaliações dos clientes no Google",
        "Preparado pra aparecer no Google e conectado ao seu perfil no Google Maps",
      ],
    },
    formats: {
      title: "Autônomo ou empresa, tem o formato certo",
      items: [
        {
          icon: User,
          badge: "Site Express · R$ 999",
          title: "Técnico autônomo",
          description:
            "Uma página única com seus serviços, onde você atende, fotos e o botão de WhatsApp. Pronta em até 5 dias úteis — ideal pra começar a aparecer no Google.",
        },
        {
          icon: Building2,
          badge: "Site Completo · R$ 1.499",
          title: "Empresa com equipe",
          description:
            "Até 5 páginas — instalação, manutenção, PMOC e contato —, cada uma preparada pra aparecer numa busca diferente no Google. Inclui a otimização do seu perfil no Google.",
        },
      ],
    },
    steps: {
      eyebrow: "Como funciona",
      title: "Você vê o site antes de fechar",
      items: [
        {
          step: "01",
          title: "Me chama no WhatsApp",
          description:
            "Me conta o nome da empresa, os serviços que você faz e onde atende.",
        },
        {
          step: "02",
          title: "Eu monto uma prévia",
          description:
            "Faço uma prévia de como ficaria o seu site, com a sua marca, sem compromisso.",
        },
        {
          step: "03",
          title: "Site no ar",
          description:
            "Aprovou, eu finalizo, coloco no ar com domínio e conecto ao seu perfil no Google.",
        },
      ],
    },
    faq: [
      {
        question: "Já tenho Instagram. Preciso mesmo de site?",
        answer:
          "O Instagram é ótimo pra mostrar o trabalho, mas quase não aparece quando alguém pesquisa \"conserto de ar-condicionado\" no Google. O site aparece nessa busca, passa mais confiança pra quem ainda não te conhece e leva direto pro seu WhatsApp. Um complementa o outro.",
      },
      {
        question: "Sou técnico autônomo, sem CNPJ. Posso ter site?",
        answer:
          "Pode. Dá pra registrar o domínio .com.br no seu CPF, e o Site Express foi pensado exatamente pra quem trabalha sozinho.",
      },
      {
        question: "Quanto custa um site para empresa de ar-condicionado?",
        answer:
          "O Site Express sai por R$ 999 e o Site Institucional Completo por R$ 1.499, os dois com R$ 49,90/mês de hospedagem e manutenção. Preço fechado, sem surpresa.",
      },
      {
        question: "Em quanto tempo o site fica pronto?",
        answer:
          "O Express fica pronto em até 5 dias úteis e o Completo em até 10, contando a partir da aprovação da direção visual. Dá tempo de estar no ar antes do pico do verão.",
      },
      {
        question: "Meu site vai aparecer no Google?",
        answer:
          "Ele sai preparado pra isso: textos pensados pra buscas como \"instalação de ar-condicionado em Natal\", cadastro do site no Google e conexão com o seu perfil no Google Maps. A posição exata depende da concorrência e das suas avaliações — por isso ninguém sério promete primeiro lugar.",
      },
      {
        question: "Você atende empresas de fora de Natal?",
        answer:
          "Sim. Estou em Natal/RN, mas o processo é todo online, então faço sites pra empresas de ar-condicionado de qualquer cidade do Brasil.",
      },
    ],
    cta: {
      title: "Seu site no ar antes do verão?",
      description:
        "Me chama no WhatsApp e eu monto uma prévia do site da sua empresa, sem compromisso.",
      button: "Quero minha prévia",
      whatsappMessage:
        "Oi! Vim pela página de sites para ar-condicionado e quero uma prévia do site da minha empresa.",
    },
  },
];

export function getNiche(slug: string): Niche {
  const niche = niches.find((item) => item.slug === slug);
  if (!niche) throw new Error(`Nicho não encontrado: ${slug}`);
  return niche;
}

/** Endereço público da página do nicho, ex.: /sites/ar-condicionado */
export function nichePath(niche: Niche): string {
  return `/sites/${niche.slug}`;
}
