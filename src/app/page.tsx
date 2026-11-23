import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PortfolioHighlight } from "@/components/sections/PortfolioHighlight";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <PricingSection />
      <HowItWorks />
      <PortfolioHighlight />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
