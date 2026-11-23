import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PageShell } from "@/components/layout/PageShell";
import { BusinessJsonLd } from "@/components/StructuredData";
import { BUSINESS_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} em Natal/RN`,
    template: "%s | Bora Pro Ar",
  },
  description:
    "Criação de sites profissionais em Natal/RN e online para todo o Brasil. Site Express por R$ 999 e Institucional por R$ 1.499, prontos para aparecer no Google.",
  // Sem title/description aqui: cada página herda o <title> e a descrição próprios
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bora Pro Ar - Criação de Sites e Sistemas",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black">
        <BusinessJsonLd />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
