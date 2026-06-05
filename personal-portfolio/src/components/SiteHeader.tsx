"use client";

import { Globe2 } from "lucide-react";
import { siteContent } from "@/content/site";
import { getLocalizedText } from "@/content/types";
import { useLanguage } from "./LanguageProvider";

export function SiteHeader() {
  const { locale, toggleLocale } = useLanguage();
  const switchLabel = locale === "en" ? "中文" : "EN";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090d12]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-6 lg:px-8">
        <a href="#home" className="brand-link" aria-label="Mai Long home">
          <span>ML</span>
          <strong>Mai Long</strong>
        </a>
        <nav className="header-nav" aria-label="Primary navigation">
          {siteContent.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {getLocalizedText(item.label, locale)}
            </a>
          ))}
        </nav>
        <button type="button" className="language-button" onClick={toggleLocale}>
          <Globe2 aria-hidden="true" size={16} />
          <span>{switchLabel}</span>
        </button>
      </div>
    </header>
  );
}
