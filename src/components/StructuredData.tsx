import {
  BUSINESS_NAME,
  GOOGLE_BUSINESS_URL,
  INSTAGRAM_URL,
  PHONE_E164,
  SITE_URL,
} from "@/lib/constants";
import { pricingPlans } from "@/lib/site-data";

/**
 * Dados estruturados (schema.org) lidos pelo Google e por IAs (Gemini,
 * ChatGPT, Claude...). Dizem quem é a empresa, onde atende, o que vende e
 * ligam site, Instagram e Perfil da Empresa no Google como a mesma entidade.
 * Manter nome, telefone e cidades iguais ao Perfil da Empresa no Google.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify não escapa "<"; o replace impede fechar a tag <script>
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const businessId = `${SITE_URL}/#empresa`;

const businessData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: BUSINESS_NAME,
      alternateName: "Bora Pro Ar",
      description:
        "Criação de sites profissionais e sistemas para pequenas e médias empresas em Natal/RN e em todo o Brasil: sites institucionais, sites express, agentes de IA para WhatsApp, CRM sob medida e automação de processos.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-arrow.png`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: PHONE_E164,
      priceRange: "R$ 999 - R$ 1.499",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Natal",
        addressRegion: "RN",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Natal" },
        { "@type": "City", name: "Parnamirim" },
        { "@type": "State", name: "Rio Grande do Norte" },
        { "@type": "Country", name: "Brasil" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      founder: { "@type": "Person", name: "Lucas Santana" },
      sameAs: [INSTAGRAM_URL, GOOGLE_BUSINESS_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Criação de sites",
        itemListElement: pricingPlans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          description: `${plan.tagline}. ${plan.bullets.join(", ")}. ${plan.recurrence}.`,
          price: plan.amount,
          priceCurrency: "BRL",
          url: `${SITE_URL}/servicos`,
          itemOffered: { "@type": "Service", name: plan.name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: BUSINESS_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": businessId },
    },
  ],
};

export function BusinessJsonLd() {
  return <JsonLd data={businessData} />;
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
