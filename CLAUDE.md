# Bora Pro Ar — Site Institucional

Site institucional multi-página da própria Bora Pro Ar (agência digital de Lucas
Santana, antiga Vibe Digital). Vende Site Express (R$999) e Site Institucional
Completo (R$1.499), ambos com recorrência de R$49,90/mês, e menciona o
Ecossistema Digital personalizado (CRM, agentes de IA, automação — preço a
consultar). Objetivo: servir de portfólio vivo e gerar leads via WhatsApp.

Contexto de negócio completo está em `../guias-claude-code/01-contexto-e-referencias.md`
e `../guias-claude-code/02-briefing-claude-code.md` (fora deste repo).

## Stack e arquitetura

- Next.js 16 (App Router) + React 19 + TypeScript, todas as páginas estáticas
- Tailwind CSS v4 — tokens de design via `@theme inline` em `src/app/globals.css`
  (sempre usar os tokens: `bg`, `surface`, `surface-raised`, `surface-light`,
  `accent`, `accent-muted`, `text-primary`, `text-secondary`, `ink`, `border`)
- Fontes via `next/font/google`: JetBrains Mono (`font-heading`) e Inter (`font-sans`).
  O wordmark "BORA PRO AR" do header é imagem (`public/logo-wordmark.png`,
  recortada da logo oficial), não fonte
- Ícones: `lucide-react` 1.x **não tem ícones de marca** — ficam em
  `src/components/ui/icons/` como SVG próprio
- Rotas: `/`, `/servicos`, `/portfolio`, `/sobre`, `/faq`, `/contato`
- Sem backend: todo contato vira link `wa.me` pré-preenchido (`buildWhatsappLink`
  em `src/lib/constants.ts`)

## Decisões importantes

- **Layout "cartão flutuante"** (`PageShell.tsx`) usa `overflow-clip` (não
  `overflow-hidden`): recorta os cantos arredondados sem criar contêiner de
  rolagem, o que permite o header ficar fixo (`sticky top-0`) com fundo sólido.
  Trocar de volta pra `overflow-hidden` quebra o header fixo.
- **Header**: menu desktop só a partir de `lg` (1024px); abaixo disso é hambúrguer
  (em 768px o menu completo não cabia e sobrepunha o botão).
- **Botões** (`src/components/ui/Button.tsx`): cada variante tem hover com moldura
  de cor contrastante com o próprio fundo do botão; nunca usar hover da mesma cor
  do card onde o botão está (bug antigo do "Quero o Completo").
- **Widget do hero** (`src/components/QualificationWidget.tsx`): fluxo fixo sem IA,
  só cliques; recomendação vem da tabela `decisionTable`. Loja/Comércio tem pergunta
  extra — catálogo grande recomenda Ecossistema Digital.
- **Mensagens de WhatsApp por produto**: `whatsappMessage` em cada `pricingPlans`
  (`src/lib/site-data.ts`) e `ecosystemWhatsappMessage` em `PricingSection.tsx`.
- **Portfólio**: cada item de `portfolioItems` tem print desktop + mobile em
  `public/portfolio/`; `DeviceMockup` troca pelo print mobile abaixo de `sm`.
  Na home os cases são cards verticais (`PortfolioCard`); em `/portfolio` são
  blocos horizontais (`PortfolioCaseHorizontal`). Cards abrem o site real do cliente.
- Nunca somar classes Tailwind conflitantes via `className` (ex.: `py-3` sobre um
  size que já define `py`) — a ordem do CSS não garante qual vence.

## Pendências antes/depois do deploy

- `SITE_URL` em `src/lib/constants.ts` está como `https://boraproar.com.br` —
  confirmar domínio real (afeta sitemap, robots e metadata).
- Deploy feito na Vercel (conta `asclada`, projeto `bpa-website`), conectado ao
  GitHub `asclada/bpa-website`: todo push em `master` publica em produção.
  URL atual: https://bpa-website-sage.vercel.app (`bpa-website.vercel.app` é de
  outra conta). Ver estado com `vercel ls bpa-website`.
- Domínio próprio ainda não configurado na Vercel.
- Nunca incluir Claude como co-autor em commits/PRs — só o Lucas é autor.

## Como descobrir o estado atual

- Rotas: `src/app/*/page.tsx`
- Preços, textos, FAQ, portfólio: `src/lib/site-data.ts`; contato/URLs: `src/lib/constants.ts`
- Componentes: `src/components/` (ui/, layout/, sections/, cards/)
- Rodar: `npm run dev` (porta 3000, `.claude/launch.json`). Se o dev server servir
  erro antigo mesmo após mudanças, checar processo `node.exe` zumbi na porta 3000
  (já aconteceu) antes de apagar `.next`
- Validar antes de commitar: `npm run lint` e `npm run build`

## Última atualização

2026-09-22 — README, remoção do Claude como co-autor do histórico e deploy
na Vercel. Antes, na mesma data: widget de qualificação no hero, prints reais do portfólio (HK
Advocacia e KLL Promotora), página Sobre com foto, número real de WhatsApp e
auditoria de responsividade (320px a 1440px) para deploy.
