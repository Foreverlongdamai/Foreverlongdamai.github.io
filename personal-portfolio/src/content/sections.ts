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
    title: { en: "Projects that connect AI methods with usable systems", zh: "连接 AI 方法与可用系统的项目" },
    description: {
      en: "These projects show my experience with interpretable multimodal assessment, detection, segmentation, simulation, and web development.",
      zh: "这些项目展示了我在可解释多模态评估、检测、分割、仿真和 Web 开发方面的实践经历。",
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
      en: "The easiest way to reach me is by email. Repository links for open-source work are included with the corresponding projects above.",
      zh: "目前最方便的联系方式是邮箱。开源项目的仓库链接已附在上方对应的项目介绍中。",
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
