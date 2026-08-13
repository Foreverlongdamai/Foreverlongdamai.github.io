import { describe, expect, it } from "vitest";
import { siteContent } from "./site";
import { projects } from "./projects";
import {
  hobby,
  portfolioSections,
  researchAreas,
  skillGroups,
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

    expect(siteContent.navigation.some((item) => item.id === "about")).toBe(false);
    expect(portfolioSections.some((section) => section.id === "about")).toBe(false);
  });

  it("contains bilingual identity and regional contact information", () => {
    expect(siteContent.profile.name.en).toBe("Mai Long");
    expect(siteContent.profile.name.zh).toBe("Mai Long");
    expect(siteContent.profile.role).toEqual({
      en: "Graduate Student in Computer Technology at Shandong University of Science and Technology",
      zh: "山东科技大学计算机技术研究生",
    });
    expect(siteContent.profile.intro.en).toContain("graduate student in Computer Technology");
    expect(siteContent.profile.intro.zh).toContain("计算机技术专业研究生");
    expect(siteContent.profile.intro.en).not.toContain("M.S. in Computer Science");
    expect(siteContent.profile.intro.zh).not.toContain("计算机科学硕士");
    expect(siteContent.profile.contacts).toEqual([
      {
        id: "cranfield",
        current: true,
        label: { en: "United Kingdom", zh: "英国" },
        organization: {
          en: "Cranfield University",
          zh: "英国克兰菲尔德大学",
        },
        address: {
          en: "College Road, Cranfield, Bedfordshire, MK43 0AL, UK",
          zh: "College Road, Cranfield, Bedfordshire, MK43 0AL, UK",
        },
        email: "Mai.Long.358@cranfield.ac.uk",
      },
      {
        id: "china",
        current: false,
        label: { en: "China", zh: "中国" },
        organization: {
          en: "Shandong University of Science and Technology",
          zh: "山东科技大学",
        },
        address: {
          en: "Qingdao, Shandong, China",
          zh: "中国山东省青岛市",
        },
        email: "long204323@gmail.com",
        phone: "+86 17685762976",
      },
    ]);
  });

  it("records games and DIY game content as a personal interest", () => {
    expect(hobby.title).toEqual({
      en: "Games & Game Content Creation",
      zh: "游戏与内容创作",
    });
    expect(hobby.body.zh).toContain("游戏");
    expect(hobby.body.zh).toContain("DIY");
    expect(hobby.body.zh).toContain("《文明 VII》");
    expect(hobby.body.zh).toContain("Steam 创意工坊");
    expect(hobby.repositoryUrl).toBe(
      "https://github.com/Foreverlongdamai/Civilization_mod_Lelouch-Lamperouge",
    );
    expect(hobby.workshopUrl).toBe(
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3780386007",
    );
  });

  it("keeps Shandong and Cranfield affiliations available for the hero", () => {
    expect(
      siteContent.profile.contacts.map((contact) => contact.organization.en),
    ).toEqual([
      "Cranfield University",
      "Shandong University of Science and Technology",
    ]);
    expect(
      siteContent.profile.contacts.filter((contact) => contact.current),
    ).toHaveLength(1);
  });

  it("contains project entries with bilingual descriptions and technologies", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "pilot-assessment-ai-system",
      "underwater-fouling-detection",
      "traffic-scene-simulation",
    ]);
    expect(
      projects.some((project) => project.slug === "simple-ecommerce-webpage"),
    ).toBe(false);

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
    expect(skillGroups.map((group) => group.title.en)).toEqual([
      "AI & Vision",
      "Simulation",
      "Research Fields",
    ]);
    expect(skillGroups.some((group) => group.title.en === "Web Development")).toBe(false);
  });

  it("presents the approved bilingual AI Agent practice narrative", () => {
    const practiceSection = portfolioSections.find(
      (section) => section.id === "thoughts",
    );
    const narrative = Reflect.get(
      sectionContent,
      "aiAgentPracticeNarrative",
    );

    expect(siteContent.navigation).toContainEqual({
      id: "thoughts",
      label: { en: "AI Practice", zh: "AI 实践" },
    });
    expect(practiceSection).toEqual({
      id: "thoughts",
      eyebrow: { en: "AI Agent Experience", zh: "AI Agent 实践经历" },
      title: {
        en: "My AI Agent Practice: From Requirements to Delivery",
        zh: "我的 AI Agent 实践：从需求到交付",
      },
      description: {
        en: "Deep, hands-on experience using AI agents to turn requirements into working systems.",
        zh: "以 AI Agent 为核心，把需求转化为可运行系统的深度实践。",
      },
    });
    expect(narrative).toEqual({
      en: "I am a long-term, intensive user of Codex and Claude Code, and my cumulative usage across two ChatGPT accounts is approximately 10 billion tokens. Many of my current projects are delivered through AI-agent-centered workflows spanning requirements analysis, specification design, implementation, debugging, testing, documentation, and final delivery. Through sustained practice, I have become convinced that the speed and accuracy of AI depend heavily on how complete the idea it receives is: when goals, context, constraints, and acceptance criteria are clear and organized through specifications or continued dialogue into context the model can understand, AI can turn ideas into working results with remarkable speed. My advantage is not simply proficiency with the tools; it is the ability to understand real requirements quickly from documents and communication, identify and resolve ambiguity, translate requirements into executable specifications for agents, and continuously verify and steer the implementation until the project is delivered accurately and efficiently.",
      zh: "我长期深度使用 Codex 与 Claude Code，并在两个 ChatGPT 账号中累计使用约 100 亿 token。如今，我的许多项目都通过以 AI Agent 为核心的工作流完成，覆盖需求分析、规格设计、代码实现、调试、测试、文档与最终交付。在持续实践中，我越来越确信，AI 的实现效率和准确性高度取决于输入想法的完整度：当目标、背景、约束和验收标准足够清晰，并通过规格文档或持续沟通组织为 AI 能够理解的上下文时，AI 可以非常迅速地把想法转化为可运行成果。我的优势不只是熟练使用工具，而是能够从文档和沟通中快速理解真实需求、识别并消除歧义、把需求转化为 Agent 可执行的规格，并在实现过程中持续验证结果、修正方向，最终推动项目准确、高效地落地。",
    });
  });

  it("features the pilot assessment system with its public GitHub repository", () => {
    const pilotProject = projects.find(
      (project) => project.slug === "pilot-assessment-ai-system",
    );

    expect(projects).toHaveLength(3);
    expect(projects[0]?.slug).toBe("pilot-assessment-ai-system");
    expect(pilotProject).toBeDefined();

    if (!pilotProject) {
      return;
    }

    expect(pilotProject.title.en).toBe(
      "eVTOL Pilot Training Effectiveness Assessment System",
    );
    expect(pilotProject.title.zh).toBe("eVTOL 飞行员训练效果评估系统");
    expect(pilotProject.category.en).toBe(
      "Cranfield University / eVTOL Pilot Training Assessment",
    );
    expect(pilotProject.scenario.en).toContain("primary project at Cranfield University");
    expect(pilotProject.scenario.zh).toContain("英国 Cranfield University");
    expect(pilotProject.work.en).toContain("front end and back end");
    expect(pilotProject.work.zh).toContain("前后端的整体设计与实现");
    expect(Reflect.get(pilotProject, "repositoryUrl")).toBe(
      "https://github.com/Foreverlongdamai/pilot-assessment-AI-system",
    );
    expect(pilotProject.impact.en).toContain("downloadable Windows x64 package");
    expect(pilotProject.impact.zh).toContain("可直接下载运行的 Windows x64 软件包");
    expect(pilotProject.impact.en).not.toContain("user acceptance");
    expect(pilotProject.impact.en).not.toContain("scientific validation");
  });

  it("introduces the projects section in clear product-focused language", () => {
    const projectsSection = portfolioSections.find(
      (section) => section.id === "projects",
    );

    expect(projectsSection).toEqual({
      id: "projects",
      eyebrow: { en: "Selected Work", zh: "代表项目" },
      title: { en: "Projects I Have Built", zh: "我做过的实践项目" },
      description: {
        en: "These projects show the products I have built and reflect my ability to learn quickly and turn ideas into working results.",
        zh: "这些项目展示了我目前做过的产品，也体现了我快速学习并把想法变成实际成果的能力。",
      },
    });
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
