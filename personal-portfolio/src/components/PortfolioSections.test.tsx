import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "./LanguageProvider";
import { PortfolioSections } from "./PortfolioSections";

describe("PortfolioSections", () => {
  it("renders the pilot assessment GitHub repository as a safe external link", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <PortfolioSections />
      </LanguageProvider>,
    );

    expect(markup).toContain(
      'href="https://github.com/Foreverlongdamai/pilot-assessment-AI-system"',
    );
    expect(markup).toContain('target="_blank"');
    expect(markup).toContain('rel="noopener noreferrer"');
    expect(markup).toContain("GitHub Repository");
  });
});
