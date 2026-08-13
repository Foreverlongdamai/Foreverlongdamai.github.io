import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { siteContent } from "@/content/site";
import { LanguageProvider } from "./LanguageProvider";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("consolidates profile content and both email routes above the fold", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>,
    );

    expect(markup).toContain(
      "Graduate Student in Computer Technology at Shandong University of Science and Technology",
    );
    expect(markup).toContain(siteContent.profile.intro.en);
    expect(markup).toContain('href="mailto:Mai.Long.358@cranfield.ac.uk"');
    expect(markup).toContain('href="mailto:long204323@gmail.com"');
    expect(markup).toContain("Mai.Long.358@cranfield.ac.uk");
    expect(markup).toContain("long204323@gmail.com");
    expect(markup).toContain('href="#contact"');
    expect(markup).toContain("Cranfield University");
    expect(markup).toContain("Shandong University of Science and Technology");
    expect(markup).toContain("<strong>3</strong><span>project tracks</span>");
    expect(markup).not.toContain(
      "I build interpretable AI and simulation systems for embodied agents and evidence-based eVTOL pilot training assessment.",
    );
  });

  it("renders game-content creation in place of the system visual", () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <Hero />
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
    expect(markup).not.toContain("Embodied AI Stack");
    expect(markup).not.toContain('class="system-visual"');
  });
});
