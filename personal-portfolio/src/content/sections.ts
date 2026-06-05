import type {
  Award,
  PortfolioSection,
  ResearchArea,
  SkillGroup,
  Thought,
  TimelineItem,
} from "./types";

export const portfolioSections: PortfolioSection[] = [
  {
    id: "about",
    eyebrow: { en: "Profile", zh: "个人简介" },
    title: { en: "A practical builder with a research-driven direction", zh: "以研究方向驱动工程实践" },
    description: {
      en: "My current path connects computer vision, simulation, and embodied intelligence. I value systems that can be explained clearly, tested in realistic scenarios, and improved through engineering iteration.",
      zh: "我的当前方向连接计算机视觉、仿真系统与具身智能。我重视那些能够被清晰解释、在真实场景中验证，并通过工程迭代持续优化的系统。",
    },
  },
  {
    id: "research",
    eyebrow: { en: "Research Direction", zh: "研究方向" },
    title: { en: "Embodied intelligence, VLA models, and real-world agents", zh: "具身智能、VLA 模型与现实智能体" },
    description: {
      en: "I am interested in how large models can understand agents, environments, and tasks through multimodal information, then produce reliable plans and actions.",
      zh: "我关注大模型如何通过多模态信息理解智能体自身、环境和任务，并进一步生成可靠的规划与动作。",
    },
  },
  {
    id: "projects",
    eyebrow: { en: "Selected Work", zh: "代表项目" },
    title: { en: "Projects that connect AI methods with usable systems", zh: "连接 AI 方法与可用系统的项目" },
    description: {
      en: "These projects show my experience with detection, segmentation, simulation, and web development. More detailed case studies can be added later.",
      zh: "这些项目展示了我在检测、分割、仿真和 Web 开发方面的实践经历。后续可以继续补充更完整的项目详情页。",
    },
  },
  {
    id: "thoughts",
    eyebrow: { en: "Technical Viewpoint", zh: "技术观点" },
    title: { en: "My current reflections on embodied intelligence", zh: "我对具身智能的当前思考" },
    description: {
      en: "I see the field moving through both end-to-end and modular routes, and I am interested in how these approaches can become robust enough for real industrial tasks.",
      zh: "我认为具身智能正在沿端到端和模块化两条路径推进，我尤其关注这些方法如何变得足够鲁棒并进入真实工业任务。",
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
      en: "The easiest way to reach me is by email. This section can later include GitHub, LinkedIn, Google Scholar, or project demos.",
      zh: "目前最方便的联系方式是邮箱。后续这里可以继续加入 GitHub、LinkedIn、Google Scholar 或项目 Demo 链接。",
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
    title: { en: "Vision-Language-Action Models", zh: "视觉-语言-动作模型" },
    description: {
      en: "Exploring how visual perception and language reasoning can be connected to action generation and control.",
      zh: "探索视觉感知和语言推理如何进一步连接到动作生成与控制。",
    },
    keywords: ["VLA", "robot policy", "large models"],
  },
  {
    title: { en: "Industrial AI Applications", zh: "工业 AI 应用" },
    description: {
      en: "Applying detection, segmentation, and simulation methods to practical scenarios where reliability and deployment matter.",
      zh: "将检测、分割与仿真方法应用到强调可靠性和部署价值的实际场景中。",
    },
    keywords: ["deployment", "computer vision", "simulation"],
  },
];

export const thoughts: Thought[] = [
  {
    title: {
      en: "End-to-end and modular systems are both important routes",
      zh: "端到端与模块化都是重要路线",
    },
    body: {
      en: "End-to-end approaches use large models to map multimodal inputs directly to actions, offering structural simplicity, unified learning, generalization, and zero-shot transfer potential through large-scale pre-training.",
      zh: "端到端方法利用大模型将多模态输入直接映射到动作，具备结构简洁、统一学习、泛化能力强以及通过大规模预训练实现零样本迁移的潜力。",
    },
  },
  {
    title: {
      en: "Interpretability and controllability still matter",
      zh: "可解释性与可控性仍然重要",
    },
    body: {
      en: "Modular architectures separate perception, planning, and control, using large models for high-level reasoning while relying on skill libraries for low-level execution in structured and long-horizon tasks.",
      zh: "模块化架构将感知、规划和控制拆分，用大模型完成高层推理，并通过技能库执行低层动作，在结构化和长时序任务中更具可控性与可解释性。",
    },
  },
  {
    title: {
      en: "The core is a brain that understands agent, environment, and task",
      zh: "核心是理解智能体、环境与任务的“大脑”",
    },
    body: {
      en: "I believe the central challenge is accurate state estimation and effective planning toward task goals. As compute, model architectures, and optimization improve, embodied systems can move from household actions toward stable industrial applications.",
      zh: "我认为核心挑战在于准确的状态估计和面向任务目标的有效规划。随着算力、模型结构和优化方法持续进步，具身系统有机会从家庭动作走向稳定的工业级应用。",
    },
  },
];

export const education: TimelineItem[] = [
  {
    period: { en: "Expected June 2027", zh: "预计 2027 年 6 月毕业" },
    title: { en: "Master of Science in Computer Science", zh: "计算机科学硕士" },
    organization: {
      en: "Shandong University of Science and Technology",
      zh: "山东科技大学",
    },
    description: {
      en: "Graduate study focused toward computer science, intelligent systems, and embodied intelligence research interests.",
      zh: "研究生阶段聚焦计算机科学、智能系统以及具身智能相关研究兴趣。",
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
    title: { en: "Research Interests", zh: "研究兴趣" },
    skills: ["Embodied Intelligence", "VLA Models", "Planning", "Multimodal Systems"],
  },
];
