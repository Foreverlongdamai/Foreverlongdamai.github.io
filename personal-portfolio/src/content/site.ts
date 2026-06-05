import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  navigation: [
    { id: "home", label: { en: "Home", zh: "首页" } },
    { id: "about", label: { en: "About", zh: "简介" } },
    { id: "research", label: { en: "Research", zh: "研究" } },
    { id: "projects", label: { en: "Projects", zh: "项目" } },
    { id: "thoughts", label: { en: "Thoughts", zh: "观点" } },
    { id: "education", label: { en: "Education", zh: "教育" } },
    { id: "awards", label: { en: "Awards", zh: "奖项" } },
    { id: "contact", label: { en: "Contact", zh: "联系" } },
  ],
  profile: {
    name: { en: "Mai Long", zh: "Mai Long" },
    role: {
      en: "Computer Science graduate student focused on embodied intelligence",
      zh: "专注具身智能方向的计算机科学硕士研究生",
    },
    tagline: {
      en: "I build practical AI and simulation systems, with interests in VLA models, perception, and real-world intelligent agents.",
      zh: "我关注 VLA 模型、感知系统与现实场景中的智能体，也喜欢把 AI 与仿真技术落到可运行的工程项目里。",
    },
    intro: {
      en: "I am pursuing an M.S. in Computer Science at Shandong University of Science and Technology. My work spans underwater visual detection, traffic simulation, and web application development, with a longer-term interest in embodied intelligence systems that understand environments, tasks, and actions.",
      zh: "我目前在山东科技大学攻读计算机科学硕士。我的经历包括水下视觉检测、交通场景仿真和 Web 页面开发，长期兴趣是构建能够理解环境、任务与动作的具身智能系统。",
    },
    location: { en: "Qingdao, Shandong, China", zh: "中国山东青岛" },
    email: "long204323@gmail.com",
    phone: "+86 17685762976",
    focus: [
      { en: "Embodied Intelligence", zh: "具身智能" },
      { en: "Vision-Language-Action Models", zh: "视觉-语言-动作模型" },
      { en: "Computer Vision", zh: "计算机视觉" },
      { en: "Simulation Systems", zh: "仿真系统" },
    ],
    actions: {
      primary: { en: "View Projects", zh: "查看项目" },
      secondary: { en: "Contact Me", zh: "联系我" },
    },
  },
};
