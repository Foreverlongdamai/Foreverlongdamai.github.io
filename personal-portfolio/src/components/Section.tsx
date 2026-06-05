import type { ReactNode } from "react";
import type { PortfolioSection } from "@/content/types";
import { getLocalizedText, type Locale } from "@/content/types";

type SectionProps = {
  section: PortfolioSection;
  locale: Locale;
  children: ReactNode;
  className?: string;
};

export function Section({ section, locale, children, className = "" }: SectionProps) {
  return (
    <section id={section.id} className={`section-band scroll-mt-28 ${className}`}>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_2fr] lg:px-8">
        <div className="section-heading">
          <p className="eyebrow">{getLocalizedText(section.eyebrow, locale)}</p>
          <h2>{getLocalizedText(section.title, locale)}</h2>
          <p>{getLocalizedText(section.description, locale)}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
