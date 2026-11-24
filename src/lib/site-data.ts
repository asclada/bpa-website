export const navLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export type PricingPlan = {
  slug: "express" | "completo";
  name: string;
  tagline: string;
  price: string;
  /** Valor numérico em BRL, usado nos dados estruturados (LocalBusiness) */
  amount: number;
  recurrence: string;
  bullets: string[];
  highlight?: boolean;
  ctaLabel: string;
  whatsappMessage: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "express",
    name: "Site Express",
    tagline: "Página única, direto ao ponto",
    price: "R$ 999",
    amount: 999,
    recurrence: "+ R$ 49,90/mês (hospedagem e manutenção)",
    bullets: [
      "Página única com scroll",
      "Pronto em até 5 dias úteis",
      "2 rodadas de ajustes",
      "Preparado e cadastrado no Google",
      "Conectado ao seu perfil no Google Maps",
      "Hospedagem e manutenção inclusas",
    ],
    ctaLabel: "Quero o Express",
    whatsappMessage:
      "Oi! Quero saber mais sobre o Site Express (R$ 999 + R$ 49,90/mês).",
  },
  {
    slug: "completo",
    name: "Site Institucional Completo",
    tagline: "Multi-página, feito pra ranquear",
    price: "R$ 1.499",
    amount: 1499,
    recurrence: "+ R$ 49,90/mês (hospedagem e manutenção)",
    bullets: [
      "Até 5 páginas com rotas próprias",
      "Cada página preparada para o Google",
      "Perfil no Google criado ou otimizado",
      "Pronto em até 10 dias úteis",
      "4 rodadas de ajustes",
      "Hospedagem e manutenção inclusas",
    ],
    highlight: true,
    ctaLabel: "Quero o Completo",
    whatsappMessage:
      "Oi! Quero saber mais sobre o Site Institucional Completo (R$ 1.499 + R$ 49,90/mês).",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Conversa",
    description: "Entendemos seu negócio e objetivo.",
  },
  {
    step: "02",
    title: "Direção visual",
    description: "Definimos estilo, cores e estrutura.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Construímos o site.",
  },
  {
    step: "04",
    title: "Publicação",
    description: "Seu site no ar, com domínio e tudo funcionando.",
  },
];

export type PortfolioItem = {
  slug: string;
  client: string;
  category: string;
  description: string;
  externalUrl: string;
  heroDesktop: string;
  heroMobile: string;
  heroMobileWidth: number;
  heroMobileHeight: number;
  featured?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "hk-advocacia",
    client: "HK Advocacia",
    category: "Direito bancário",
    description:
      "Site institucional completo para escritório de advocacia bancária, com identidade visual própria e presença online pensada pra gerar autoridade. Além do site, criei um agente de inteligência artificial que faz a triagem inicial dos leads que chegam pelo WhatsApp e pelo site, tudo integrado a um CRM feito sob medida — assim nenhum contato se perde, e o escritório já recebe o cliente com o caso pré-qualificado.",
    externalUrl: "https://www.heliokleisonadvocacia.com.br/",
    heroDesktop: "/portfolio/hk-web.png",
    heroMobile: "/portfolio/hk-mobile.jpg",
    heroMobileWidth: 1179,
    heroMobileHeight: 2110,
    featured: true,
  },
  {
    slug: "kll-promotora",
    client: "KLL Promotora",
    category: "Correspondente bancário",
    description:
      "Presença online estruturada do zero para correspondente bancário: site institucional, identidade visual e um agente de inteligência artificial integrado que atende e qualifica automaticamente quem chega em busca de crédito. Tudo conectado a um CRM sob medida, criado pra que a equipe acompanhe cada simulação sem perder nenhum lead pelo caminho.",
    externalUrl: "https://www.kllpromotora.com.br/",
    heroDesktop: "/portfolio/kll-web.png",
    heroMobile: "/portfolio/kll-mobile.jpg",
    heroMobileWidth: 1179,
    heroMobileHeight: 1787,
  },
];

export const homeFaq = [
  {
    question: "Por que pagar se eu consigo montar um site sozinho / com IA?",
    answer:
      "Você consegue, sim — mas o que separa um site que existe de um site que converte é a curadoria: direção visual pensada pro seu negócio, código organizado, performance e um processo que termina com domínio configurado, hospedagem estável e suporte de verdade. É isso que eu entrego.",
  },
  {
    question: "O que está incluso na mensalidade de R$ 49,90?",
    answer:
      "Hospedagem e manutenção básica: trocar foto, trocar texto, corrigir informação (telefone, endereço, horário) e ajustes pequenos já previstos na estrutura existente.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Site Express: até 5 dias úteis. Site Institucional Completo: até 10 dias úteis. O prazo começa a contar a partir da aprovação da direção visual.",
  },
  {
    question: "Você atende só em Natal/RN?",
    answer:
      "Não. Estou em Natal/RN e atendo empresas de Natal e região, mas todo o processo é online — WhatsApp e chamada de vídeo —, então dá pra fazer o seu site de qualquer cidade do Brasil.",
  },
  {
    question: "Quantos ajustes posso pedir?",
    answer:
      "Express: 2 rodadas de ajustes. Completo: 4 rodadas de ajustes. Cada rodada é um conjunto de alterações dentro do escopo original — trocar textos, imagens, corrigir informações, ajustar ordem ou detalhes pequenos.",
  },
  {
    question: "Qual a diferença entre Express e Completo?",
    answer:
      "O Express é uma página única com scroll, ideal pra validar presença online rápido. O Completo tem até 5 páginas com rotas próprias, o que melhora o SEO porque cada página pode ranquear por uma palavra-chave diferente.",
  },
  {
    question: "O que é SEO?",
    answer:
      "SEO é o conjunto de técnicas que ajuda seu site a aparecer nas primeiras posições do Google quando alguém pesquisa algo relacionado ao seu negócio — tipo 'dentista em Natal' ou 'advogado trabalhista perto de mim'. Quanto melhor o SEO, mais gente encontra seu site de graça, sem você pagar por anúncio. O Site Institucional Completo é mais forte nisso porque cada página pode ranquear por uma palavra-chave diferente.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Todo site sai preparado pra isso: títulos e textos pensados pra quem pesquisa o seu serviço na sua cidade (tipo 'instalação de ar-condicionado em Natal'), cadastro do site no Google e conexão com o seu perfil no Google Maps. No Completo, também crio ou otimizo o seu Perfil da Empresa no Google. A posição exata depende da concorrência e das avaliações do seu negócio — por isso ninguém sério promete primeiro lugar —, mas o seu site sai do jeito certo pra disputar.",
  },
  {
    question: "E se eu quiser parar de pagar a mensalidade?",
    answer:
      "Existe um prazo de tolerância antes de qualquer ação. Depois dele, o site é suspenso — mas seus arquivos ficam preservados por um período determinado. Se quiser reativar, é só regularizar o pagamento e o site volta ao ar normalmente.",
  },
];

export const aboutSummary =
  'Me chamo Lucas, sou o desenvolvedor por trás da agência digital "Bora Pro Ar". Curo cada projeto pessoalmente — da direção visual ao código.';
