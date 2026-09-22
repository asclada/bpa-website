# Bora Pro Ar — Site Institucional

Site institucional da **Bora Pro Ar**, agência digital que cria sites para
pequenas e médias empresas. O próprio site funciona como portfólio vivo e
como canal de geração de leads: todo contato termina em uma conversa no
WhatsApp com mensagem já preenchida de acordo com o que o visitante escolheu.

## Destaques

- **Widget de qualificação no hero** — o visitante responde algumas perguntas
  com cliques (segmento, objetivo, tamanho do catálogo) e recebe a recomendação
  do formato ideal: Site Express, Site Institucional Completo ou Ecossistema
  Digital. Sem IA, sem backend: a recomendação vem de uma tabela de decisão.
- **Planos com CTA específico** — cada plano abre o WhatsApp com uma mensagem
  própria, então a conversa já começa sabendo o que o cliente quer.
- **Portfólio com cases reais** — prints desktop e mobile dentro de mockups de
  dispositivo, trocando automaticamente para o print mobile em telas pequenas.
- **Responsivo de 320px a 1440px** — layout em "cartão flutuante" com header
  fixo e menu hambúrguer abaixo de 1024px.
- **SEO técnico** — páginas estáticas, metadata por rota, `sitemap.xml` e
  `robots.txt` gerados pelo Next.js.

## Páginas

| Rota          | Conteúdo                                              |
| ------------- | ----------------------------------------------------- |
| `/`           | Hero com widget, planos, processo, portfólio e CTA    |
| `/servicos`   | Detalhes dos planos e do Ecossistema Digital          |
| `/portfolio`  | Cases completos com mockups                           |
| `/sobre`      | História e quem está por trás da agência              |
| `/faq`        | Perguntas frequentes                                  |
| `/contato`    | Formulário que monta a mensagem e abre o WhatsApp     |

## Stack

- [Next.js 16](https://nextjs.org) (App Router, todas as páginas estáticas)
- React 19 + TypeScript
- Tailwind CSS v4 com design tokens definidos em `src/app/globals.css`
- `next/font` com JetBrains Mono e Inter
- `lucide-react` para ícones (ícones de marca como SVG próprio)

## Estrutura

```
src/
├── app/            # rotas, layout, sitemap e robots
├── components/
│   ├── layout/     # Header, Footer, PageShell
│   ├── sections/   # blocos das páginas (Hero, PricingSection...)
│   ├── cards/      # cards de plano, portfólio, processo
│   └── ui/         # Button, Badge, Container, ícones
└── lib/
    ├── site-data.ts   # textos, planos, FAQ e portfólio
    └── constants.ts   # WhatsApp, Instagram, URL do site
```

Todo o conteúdo editável (preços, textos, perguntas, cases) fica centralizado
em `src/lib/site-data.ts`, então atualizar o site não exige mexer em componente.

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

O site sobe em [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run lint    # verificação de código
npm run build   # build de produção
npm run start   # serve o build de produção
```

## Autor

Desenvolvido por **Lucas Santana** — [Bora Pro Ar](https://instagram.com/boraproar).
