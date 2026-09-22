import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PageShell } from "@/components/layout/PageShell";
import { SITE_URL } from "@/lib/constants";
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
    default: "Bora Pro Ar — Sites institucionais e express",
    template: "%s | Bora Pro Ar",
  },
  description:
    "Sites que parecem caros. Preço que não é. Sites institucionais e express para negócios que querem ser levados a sério online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
