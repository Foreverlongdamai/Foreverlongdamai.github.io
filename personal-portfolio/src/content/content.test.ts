import { describe, expect, it } from "vitest";
import { siteContent } from "./site";
import { projects } from "./projects";
import { portfolioSections, researchAreas, skillGroups } from "./sections";
import * as sectionContent from "./sections";
import { getLocalizedText, isLocale } from "./types";

describe("localized content model", () => {
  it("recognizes supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("zh")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("returns localized text for both languages", () => {
    const label = { en: "Projects", zh: "项目" };

    expect(getLocalizedText(label, "en")).toBe("Projects");
    expect(getLocalizedText(label, "zh")).toBe("项目");
  });

  it("keeps navigation targets aligned with page sections", () => {
    const sectionIds = new Set(["home", ...portfolioSections.map((section) => section.id)]);

    for (const item of siteContent.navigation) {
      expect(sectionIds.has(item.id)).toBe(true);
    }
  });

  it("contains bilingual identity and contact information", () => {
    expect(siteContent.profile.name.en).toBe("Mai Long");
    expect(siteContent.profile.name.zh).toBe("Mai Long");
    expect(siteContent.profile.location).toEqual({
      en: "Shandong University of Science and Technology · Cranfield University, UK",
      zh: "山东科技大学 · 英国克兰菲尔德大学",
    });
    expect(siteContent.profile.email).toContain("@");
    expect(siteContent.profile.phone).toMatch(/\d/);
  });

  it("contains project entries with bilingual descriptions and technologies", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);

    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.title.en.length).toBeGreaterThan(0);
      expect(project.title.zh.length).toBeGreaterThan(0);
      expect(project.scenario.en.length).toBeGreaterThan(20);
      expect(project.scenario.zh.length).toBeGreaterThan(10);
      expect(project.work.en.length).toBeGreaterThan(20);
      expect(project.work.zh.length).toBeGreaterThan(10);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });

  it("uses the two current research fields across the profile and research section", () => {
    expect(siteContent.profile.focus).toEqual([
      { en: "Embodied Intelligence", zh: "具身智能" },
      {
        en: "eVTOL Pilot Training Effectiveness",
        zh: "eVTOL 飞行员训练有效性",
      },
    ]);

    const researchSection = portfolioSections.find((section) => section.id === "research");
    expect(researchSection?.eyebrow).toEqual({ en: "Research Fields", zh: "研究领域" });
    expect(researchAreas.map((area) => area.title.en)).toEqual([
      "Embodied Intelligence",
      "eVTOL Pilot Training Effectiveness",
    ]);

    const researchSkillGroup = skillGroups.find(
      (group) => group.title.en === "Research Fields",
    );
    expect(researchSkillGroup?.title.zh).toBe("研究领域");
    expect(researchSkillGroup?.skills).toEqual([
      "Embodied Intelligence",
      "eVTOL Pilot Training Effectiveness",
    ]);
  });

  it("features the pilot assessment system with its public GitHub repository", () => {
    const pilotProject = projects.find(
      (project) => project.slug === "pilot-assessment-ai-system",
    );

    expect(projects).toHaveLength(4);
    expect(projects[0]?.slug).toBe("pilot-assessment-ai-system");
    expect(pilotProject).toBeDefined();

    if (!pilotProject) {
      return;
    }

    expect(pilotProject.title.en).toBe(
      "AI-Based System for Evaluating eVTOL Pilot Training Effectiveness",
    );
    expect(Reflect.get(pilotProject, "repositoryUrl")).toBe(
      "https://github.com/Foreverlongdamai/pilot-assessment-AI-system",
    );
    expect(pilotProject.impact.en).toContain("engineering prerelease");
    expect(pilotProject.impact.zh).toContain("工程预发布");
  });

  it("records the ongoing Cranfield University research internship", () => {
    const experience = Reflect.get(sectionContent, "experience");

    expect(siteContent.navigation).toContainEqual({
      id: "experience",
      label: { en: "Experience", zh: "经历" },
    });
    expect(experience).toEqual([
      {
        period: {
          en: "May 2026 – November 2026 (Ongoing)",
          zh: "2026 年 5 月 – 11 月（进行中）",
        },
        title: { en: "Research Intern", zh: "研究实习生" },
        organization: {
          en: "Cranfield University, United Kingdom",
          zh: "英国克兰菲尔德大学",
        },
        description: {
          en: expect.stringContaining("Dr Linghai Lu"),
          zh: expect.stringContaining("Linghai Lu"),
        },
      },
    ]);
  });
});
