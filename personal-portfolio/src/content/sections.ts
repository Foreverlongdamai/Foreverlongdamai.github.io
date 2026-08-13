import type {
  Award,
  HobbyContent,
  LocalizedText,
  PortfolioSection,
  ResearchArea,
  SkillGroup,
  TimelineItem,
} from "./types";

export const portfolioSections: PortfolioSection[] = [
  {
    id: "about",
    eyebrow: { en: "Profile", zh: "个人简介" },
    title: { en: "A practical builder with a research-driven direction", zh: "以研究方向驱动工程实践" },
    description: {
      en: "My current path connects embodied intelligence, eVTOL pilot training assessment, computer vision, and simulation. I value systems that can be explained clearly, tested in realistic scenarios, and improved through engineering iteration.",
      zh: "我的当前方向连接具身智能、eVTOL 飞行员训练评估、计算机视觉与仿真系统。我重视能够被清晰解释、在真实场景中验证，并通过工程迭代持续优化的系统。",
    },
  },
  {
    id: "research",
    eyebrow: { en: "Research Fields", zh: "研究领域" },
    title: {
      en: "Embodied Intelligence & eVTOL Pilot Training Effectiveness",
      zh: "具身智能与 eVTOL 飞行员训练有效性",
    },
    description: {
      en: "My research connects intelligent agents that understand environments and tasks with interpretable, evidence-based methods for assessing pilot performance in multimodal VR flight training.",
      zh: "我的研究一方面关注能够理解环境与任务的智能体，另一方面探索面向多模态 VR 飞行训练的可解释、证据驱动飞行员表现评估方法。",
    },
  },
  {
    id: "experience",
    eyebrow: { en: "Experience", zh: "实习经历" },
    title: {
      en: "Research internship at Cranfield University",
      zh: "英国克兰菲尔德大学研究实习",
    },
    description: {
      en: "An ongoing UK internship connecting flight simulation, human factors, and interpretable AI for eVTOL pilot training assessment.",
      zh: "一段正在进行的英国研究实习，围绕飞行仿真、人因与可解释 AI，开展 eVTOL 飞行员训练评估研究。",
    },
  },
  {
    id: "projects",
    eyebrow: { en: "Selected Work", zh: "代表项目" },
    title: { en: "Projects I Have Built", zh: "我做过的实践项目" },
    description: {
      en: "These projects show the products I have built and reflect my ability to learn quickly and turn ideas into working results.",
      zh: "这些项目展示了我目前做过的产品，也体现了我快速学习并把想法变成实际成果的能力。",
    },
  },
  {
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
  },
  {
    id: "education",
    eyebrow: { en: "Education", zh: "教育经历" },
    title: { en: "Computer science and software engineering foundation", zh: "计算机科学与软件工程基础" },
    description: {
      en: "My academic background is rooted in software engineering and computer science, with current graduate work focused toward intelligent systems.",
      zh: "我的学术背景来自软件工程与计算机科学，目前研究生阶段进一步转向智能系统相关方向。",
    },
  },
  {
    id: "awards",
    eyebrow: { en: "Recognition", zh: "奖项证书" },
    title: { en: "Awards and certificates", zh: "奖项与证书" },
    description: {
      en: "Selected recognitions from programming competitions and language qualification.",
      zh: "包括程序设计竞赛奖项与语言能力证书。",
    },
  },
  {
    id: "skills",
    eyebrow: { en: "Toolbox", zh: "技术栈" },
    title: { en: "Skills I use to turn ideas into working systems", zh: "把想法变成可运行系统的技术能力" },
    description: {
      en: "This first version lists skills derived from current project experience. It can grow as new materials are added.",
      zh: "第一版技能来自当前简历和项目经历，后续可以随着新资料继续扩展。",
    },
  },
  {
    id: "contact",
    eyebrow: { en: "Contact", zh: "联系" },
    title: { en: "Open to internships, research, and collaboration", zh: "欢迎实习、研究与项目合作交流" },
    description: {
      en: "I am currently based at Cranfield University in the UK. My Cranfield and China contact details are listed below.",
      zh: "我目前在英国 Cranfield University，英国学校邮箱与中国常用联系方式均列在下方。",
    },
  },
];

export const researchAreas: ResearchArea[] = [
  {
    title: { en: "Embodied Intelligence", zh: "具身智能" },
    description: {
      en: "Building intelligent agents that understand their own state, the surrounding environment, and task goals through multimodal information.",
      zh: "构建能够通过多模态信息理解自身状态、周围环境与任务目标的智能体。",
    },
    keywords: ["agents", "planning", "multimodal learning"],
  },
  {
    title: {
      en: "eVTOL Pilot Training Effectiveness",
      zh: "eVTOL 飞行员训练有效性",
    },
    description: {
      en: "Developing interpretable, evidence-based methods that connect multimodal VR flight behavior to traceable skill assessment and training feedback.",
      zh: "开发可解释、证据驱动的方法，把多模态 VR 飞行行为连接到可追溯的技能评估与训练反馈。",
    },
    keywords: ["multimodal assessment", "Bayesian networks", "VR flight training"],
  },
];

export const aiAgentPracticeNarrative: LocalizedText = {
  en: "I am a long-term, intensive user of Codex and Claude Code, and my cumulative usage across two ChatGPT accounts is approximately 10 billion tokens. Many of my current projects are delivered through AI-agent-centered workflows spanning requirements analysis, specification design, implementation, debugging, testing, documentation, and final delivery. Through sustained practice, I have become convinced that the speed and accuracy of AI depend heavily on how complete the idea it receives is: when goals, context, constraints, and acceptance criteria are clear and organized through specifications or continued dialogue into context the model can understand, AI can turn ideas into working results with remarkable speed. My advantage is not simply proficiency with the tools; it is the ability to understand real requirements quickly from documents and communication, identify and resolve ambiguity, translate requirements into executable specifications for agents, and continuously verify and steer the implementation until the project is delivered accurately and efficiently.",
  zh: "我长期深度使用 Codex 与 Claude Code，并在两个 ChatGPT 账号中累计使用约 100 亿 token。如今，我的许多项目都通过以 AI Agent 为核心的工作流完成，覆盖需求分析、规格设计、代码实现、调试、测试、文档与最终交付。在持续实践中，我越来越确信，AI 的实现效率和准确性高度取决于输入想法的完整度：当目标、背景、约束和验收标准足够清晰，并通过规格文档或持续沟通组织为 AI 能够理解的上下文时，AI 可以非常迅速地把想法转化为可运行成果。我的优势不只是熟练使用工具，而是能够从文档和沟通中快速理解真实需求、识别并消除歧义、把需求转化为 Agent 可执行的规格，并在实现过程中持续验证结果、修正方向，最终推动项目准确、高效地落地。",
};

export const hobby: HobbyContent = {
  title: {
    en: "Games & Game Content Creation",
    zh: "游戏与内容创作",
  },
  body: {
    en: "I enjoy strategy games and extending the experience through DIY game-content creation. I designed and built the “Lelouch / Zero” leader Mod for Sid Meier’s Civilization VII, implementing systems around Geass unit control, the Zero heroic commander, Black Knights, a dedicated promotion path, and Zero Requiem, together with bilingual content and automated tests. The Mod is published on Steam Workshop, and its source and implementation details are open on GitHub.",
    zh: "我热爱策略游戏，也喜欢通过 DIY 游戏内容把自己的想法变成可实际游玩的体验。我为《文明 VII》设计并制作了“Lelouch / Zero”领袖 Mod，围绕 Geass 单位控制、Zero 英雄指挥官、零之骑士、专属晋升和“零之镇魂曲”等机制构建玩法，并配套中英文文本与自动化测试。该 Mod 已发布至 Steam 创意工坊，源码与实现细节同步开源在 GitHub。",
  },
  repositoryUrl:
    "https://github.com/Foreverlongdamai/Civilization_mod_Lelouch-Lamperouge",
  workshopUrl:
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3780386007",
};

export const education: TimelineItem[] = [
  {
    period: { en: "Expected June 2027", zh: "预计 2027 年 6 月毕业" },
    title: { en: "Master of Science in Computer Science", zh: "计算机科学硕士" },
    organization: {
      en: "Shandong University of Science and Technology",
      zh: "山东科技大学",
    },
    description: {
      en: "Graduate study focused on computer science, intelligent systems, embodied intelligence, and eVTOL pilot training effectiveness.",
      zh: "研究生阶段聚焦计算机科学、智能系统、具身智能与 eVTOL 飞行员训练有效性。",
    },
  },
  {
    period: { en: "Graduated June 2024", zh: "2024 年 6 月毕业" },
    title: { en: "Software Engineering", zh: "软件工程" },
    organization: {
      en: "Shandong University of Science and Technology",
      zh: "山东科技大学",
    },
    description: {
      en: "Undergraduate major in software engineering, building the foundation for programming, web development, and systems work.",
      zh: "本科专业为软件工程，建立了编程、Web 开发和系统实现方面的基础。",
    },
  },
];

export const experience: TimelineItem[] = [
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
      en: "Working under the supervision of Dr Linghai Lu, Reader in Flight Dynamics and Simulation, on an AI-based system for evaluating eVTOL pilot training effectiveness, with a focus on interpretable multimodal assessment and traceable training evidence.",
      zh: "在 Linghai Lu 博士指导下，参与基于 AI 的 eVTOL 飞行员训练有效性评估系统研究，重点开展可解释多模态评估与可追溯训练证据设计。",
    },
  },
];

export const awards: Award[] = [
  {
    title: {
      en: "First Prize, C/C++ Group, Shandong Division",
      zh: "山东赛区 C/C++ 组一等奖",
    },
    issuer: {
      en: "16th Blue Bridge Cup National Software and Information Technology Competition",
      zh: "第十六届蓝桥杯全国软件和信息技术专业人才大赛",
    },
  },
  {
    title: { en: "CET-6 Certificate", zh: "大学英语六级证书" },
    issuer: { en: "College English Test", zh: "全国大学英语考试" },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "AI & Vision", zh: "AI 与视觉" },
    skills: ["YOLOv11", "SAM", "Computer Vision", "Image Segmentation", "Python"],
  },
  {
    title: { en: "Simulation", zh: "仿真" },
    skills: ["Unity3D", "C#", "Traffic Scenarios", "Agent Logic"],
  },
  {
    title: { en: "Web Development", zh: "Web 开发" },
    skills: ["Next.js", "React", "TypeScript", "Vue", "Spring Boot"],
  },
  {
    title: { en: "Research Fields", zh: "研究领域" },
    skills: ["Embodied Intelligence", "eVTOL Pilot Training Effectiveness"],
  },
];
