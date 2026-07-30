import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  navigation: [
    { id: "home", label: { en: "Home", zh: "首页" } },
    { id: "about", label: { en: "About", zh: "简介" } },
    { id: "research", label: { en: "Research Fields", zh: "研究领域" } },
    { id: "projects", label: { en: "Projects", zh: "项目" } },
    { id: "thoughts", label: { en: "Thoughts", zh: "观点" } },
    { id: "education", label: { en: "Education", zh: "教育" } },
    { id: "awards", label: { en: "Awards", zh: "奖项" } },
    { id: "skills", label: { en: "Skills", zh: "技能" } },
    { id: "contact", label: { en: "Contact", zh: "联系" } },
  ],
  profile: {
    name: { en: "Mai Long", zh: "Mai Long" },
    role: {
      en: "Computer Science graduate student in embodied intelligence and eVTOL training assessment",
      zh: "研究具身智能与 eVTOL 训练评估的计算机科学硕士研究生",
    },
    tagline: {
      en: "I build interpretable AI and simulation systems for embodied agents and evidence-based eVTOL pilot training assessment.",
      zh: "我构建面向具身智能体与 eVTOL 飞行员训练评估的可解释 AI 和仿真系统。",
    },
    intro: {
      en: "I am pursuing an M.S. in Computer Science at Shandong University of Science and Technology. My work spans interpretable multimodal assessment for eVTOL flight training, underwater visual detection, traffic simulation, and web development, alongside research in embodied intelligence.",
      zh: "我目前在山东科技大学攻读计算机科学硕士。我的经历涵盖 eVTOL 飞行训练的可解释多模态评估、水下视觉检测、交通场景仿真和 Web 开发，并持续开展具身智能方向的研究。",
    },
    location: { en: "Qingdao, Shandong, China", zh: "中国山东青岛" },
    email: "long204323@gmail.com",
    phone: "+86 17685762976",
    focus: [
      { en: "Embodied Intelligence", zh: "具身智能" },
      {
        en: "eVTOL Pilot Training Effectiveness",
        zh: "eVTOL 飞行员训练有效性",
      },
    ],
    actions: {
      primary: { en: "View Projects", zh: "查看项目" },
      secondary: { en: "Contact Me", zh: "联系我" },
    },
  },
};
