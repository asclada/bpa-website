import type { Metadata } from "next";
import { NichePage } from "@/components/NichePage";
import { getNiche, nichePath } from "@/lib/niches";

const niche = getNiche("ar-condicionado");

export const metadata: Metadata = {
  title: niche.metaTitle,
  description: niche.metaDescription,
  alternates: { canonical: nichePath(niche) },
};

export default function SitesArCondicionadoPage() {
  return <NichePage niche={niche} />;
}
