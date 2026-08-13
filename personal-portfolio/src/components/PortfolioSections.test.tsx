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
    expect(markup).toContain("My AI Agent Practice: From Requirements to Delivery");
    expect(markup).toContain("approximately 10 billion tokens");
    expect(markup).toContain('class="lead-panel ai-agent-practice-panel"');
    expect(markup).not.toContain('class="thought-list"');
    expect(markup).not.toContain('class="thought-item"');
    expect(markup).not.toContain("Clear Ideas Determine Implementation Quality");
  });

  it("renders China and Cranfield contact routes", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <PortfolioSections />
      </LanguageProvider>,
    );

    expect(markup).toContain("Cranfield University");
    expect(markup).toContain(
      "College Road, Cranfield, Bedfordshire, MK43 0AL, UK",
    );
    expect(markup).toContain('href="mailto:Mai.Long.358@cranfield.ac.uk"');
    expect(markup).toContain("Mai.Long.358@cranfield.ac.uk");
    expect(markup).toContain("Shandong University of Science and Technology");
    expect(markup).toContain('href="mailto:long204323@gmail.com"');
    expect(markup).toContain('href="tel:+8617685762976"');
  });

  it("renders game-content creation as a personal interest with safe links", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <PortfolioSections />
      </LanguageProvider>,
    );

    expect(markup).toContain("Games &amp; Game Content Creation");
    expect(markup).toContain("Lelouch / Zero");
    expect(markup).toContain(
      'href="https://github.com/Foreverlongdamai/Civilization_mod_Lelouch-Lamperouge" target="_blank" rel="noopener noreferrer"',
    );
    expect(markup).toContain(
      'href="https://steamcommunity.com/sharedfiles/filedetails/?id=3780386007" target="_blank" rel="noopener noreferrer"',
    );
  });
});
