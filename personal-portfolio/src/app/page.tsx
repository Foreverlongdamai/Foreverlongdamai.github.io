import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PortfolioSections } from "@/components/PortfolioSections";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <PortfolioSections />
      </main>
    </LanguageProvider>
  );
}
