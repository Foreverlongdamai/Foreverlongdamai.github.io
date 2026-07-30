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

  it("renders the Cranfield University research internship", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <PortfolioSections />
      </LanguageProvider>,
    );

    expect(markup).toContain('id="experience"');
    expect(markup).toContain("Research Intern");
    expect(markup).toContain("Cranfield University, United Kingdom");
    expect(markup).toContain("Dr Linghai Lu");
  });

  it("renders AI Agent experience as one continuous narrative", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <PortfolioSections />
      </LanguageProvider>,
    );

    expect(markup).toContain('id="thoughts"');
    expect(markup).toContain("From Codex and Claude Code to AI-Native Delivery");
    expect(markup).toContain("approximately 10 billion tokens");
    expect(markup).toContain('class="lead-panel ai-agent-practice-panel"');
    expect(markup).not.toContain('class="thought-list"');
    expect(markup).not.toContain('class="thought-item"');
    expect(markup).not.toContain("Clear Ideas Determine Implementation Quality");
  });
});
