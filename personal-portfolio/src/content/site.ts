import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  navigation: [
    { id: "home", label: { en: "Home", zh: "首页" } },
    { id: "research", label: { en: "Research Fields", zh: "研究领域" } },
    { id: "experience", label: { en: "Experience", zh: "经历" } },
    { id: "projects", label: { en: "Projects", zh: "项目" } },
    { id: "thoughts", label: { en: "AI Practice", zh: "AI 实践" } },
    { id: "education", label: { en: "Education", zh: "教育" } },
    { id: "awards", label: { en: "Awards", zh: "奖项" } },
    { id: "skills", label: { en: "Skills", zh: "技能" } },
    { id: "contact", label: { en: "Contact", zh: "联系" } },
  ],
  profile: {
    name: { en: "Mai Long", zh: "Mai Long" },
    role: {
      en: "Graduate Student in Computer Technology at Shandong University of Science and Technology",
      zh: "山东科技大学计算机技术研究生",
    },
    intro: {
      en: "I am a graduate student in Computer Technology at Shandong University of Science and Technology and undertaking a 2026 research internship at Cranfield University. My work spans interpretable multimodal assessment for eVTOL flight training, underwater visual detection, and traffic simulation, alongside research in embodied intelligence.",
      zh: "我目前是山东科技大学计算机技术专业研究生，并于 2026 年在英国克兰菲尔德大学开展研究实习。我的经历涵盖 eVTOL 飞行训练的可解释多模态评估、水下视觉检测与交通场景仿真，并持续开展具身智能方向的研究。",
    },
    contacts: [
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
    ],
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
