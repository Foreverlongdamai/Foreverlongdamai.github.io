import { describe, expect, it } from "vitest";
import { siteContent } from "./site";
import { projects } from "./projects";
import {
  portfolioSections,
  researchAreas,
  skillGroups,
  thoughts,
} from "./sections";
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

  it("presents the approved bilingual AI viewpoint and practice narrative", () => {
    const thoughtSection = portfolioSections.find((section) => section.id === "thoughts");

    expect(siteContent.navigation).toContainEqual({
      id: "thoughts",
      label: { en: "AI Views", zh: "AI 观点" },
    });
    expect(thoughtSection).toEqual({
      id: "thoughts",
      eyebrow: { en: "AI Viewpoint & Practice", zh: "AI 观点与实践" },
      title: {
        en: "My Perspective on AI and How I Put It into Practice",
        zh: "我对当前 AI 领域的看法与实践",
      },
      description: {
        en: "I see AI as a highly efficient execution partner. When an idea is well developed and expressed through clear specifications or dialogue, AI can turn it into a working result quickly and accurately. My role is to understand the real requirement, structure it into tasks AI can reliably interpret, and verify the outcome.",
        zh: "我认为 AI 是高效率的执行伙伴。当一个想法足够完善，并通过清晰的规格文档或沟通描述表达出来时，AI 可以快速、准确地将其实现。我的作用是理解真实需求，将其组织为 AI 能够可靠理解的任务，并验证最终成果。",
      },
    });
    expect(thoughts).toEqual([
      {
        title: {
          en: "Clear Ideas Determine Implementation Quality",
          zh: "清晰的想法决定实现质量",
        },
        body: {
          en: "AI performs best when goals, context, constraints, and acceptance criteria are explicit. I use specifications, structured documents, and iterative dialogue to turn ideas into executable task descriptions.",
          zh: "当目标、背景、约束和验收标准足够明确时，AI 能发挥出最佳效果。我通过规格文档、结构化说明和迭代沟通，把想法整理成可执行的任务描述。",
        },
      },
      {
        title: {
          en: "Translating Requirements into AI-Ready Specifications",
          zh: "把需求转化为 AI 可理解的规格",
        },
        body: {
          en: "I quickly understand requirements through documents and conversation, resolve ambiguity, and translate them into context, tasks, interfaces, checkpoints, and delivery criteria that AI agents can follow accurately.",
          zh: "我能够通过文档和沟通快速理解需求、消除歧义，并将其转化为 AI Agent 可准确执行的上下文、任务、接口、检查点与交付标准。",
        },
      },
      {
        title: {
          en: "Deep, Hands-On AI Agent Practice",
          zh: "深度 AI Agent 实践",
        },
        body: {
          en: "Many of my projects now use AI-native workflows. I am a long-term, high-frequency user of GPT and Claude; across two ChatGPT accounts, cumulative usage is approximately 10 billion tokens. I am proficient with AI agent tools for research, coding, debugging, documentation, and end-to-end project delivery.",
          zh: "我的许多项目采用 AI 原生工作流完成。我是 GPT 与 Claude 的长期高频深度用户，两个 ChatGPT 账号累计使用约 100 亿 token，并熟练使用多类 AI Agent 工具完成研究、编程、调试、文档与端到端项目交付。",
        },
      },
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
