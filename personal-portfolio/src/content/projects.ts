import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "pilot-assessment-ai-system",
    title: {
      en: "AI-Based System for Evaluating eVTOL Pilot Training Effectiveness",
      zh: "基于 AI 的 eVTOL 飞行员训练有效性评估系统",
    },
    category: {
      en: "eVTOL / Interpretable Multimodal Assessment",
      zh: "eVTOL / 可解释多模态评估",
    },
    scenario: {
      en: "VR flight training produces flight-state, control, imagery, gaze/AOI, and physiological data, while task completion alone cannot explain how a pilot controlled the vehicle, allocated attention, or responded to workload.",
      zh: "VR 飞行训练会产生飞行状态、操纵输入、画面、眼动/AOI 和生理信号等多模态数据，但仅看任务是否完成，无法解释飞行员如何操纵飞行器、分配注意力或应对工作负荷。",
    },
    work: {
      en: "I designed and implemented an offline Windows platform with a WinUI 3/.NET 10 frontend and Python 3.11/SQLite assessment core. Typed EvidenceRecipe pipelines model X/U/I/G/P interfaces, while missing-modality handling, task-specific schemes, editable Bayesian-network/CPT inference, and immutable RunSnapshots make each assessment interpretable and traceable.",
      zh: "我设计并实现了一个离线 Windows 平台，采用 WinUI 3/.NET 10 前端与 Python 3.11/SQLite 评估核心。系统通过类型化 EvidenceRecipe 管线建模 X/U/I/G/P 接口，并以缺失模态处理、任务化方案、可编辑贝叶斯网络/CPT 推断和不可变 RunSnapshot 保证评估过程可解释、可追溯。",
    },
    impact: {
      en: "Published the self-contained Windows x64 RC.4 engineering prerelease. Its release gate recorded 143 tests with 0 failures, Ruff passed, and the x64 Release build completed with 0 warnings and 0 errors; user acceptance and scientific validation remain pending.",
      zh: "已发布自包含的 Windows x64 RC.4 工程预发布版本。发布门记录 143 项测试、0 项失败，Ruff 通过，x64 Release 构建为 0 警告、0 错误；用户验收与科学验证仍待完成。",
    },
    technologies: [
      "WinUI 3",
      ".NET 10",
      "Python 3.11",
      "SQLite",
      "Bayesian Network",
      "JSON-RPC",
    ],
    repositoryUrl: "https://github.com/Foreverlongdamai/pilot-assessment-AI-system",
    featured: true,
  },
  {
    slug: "underwater-fouling-detection",
    title: { en: "Underwater Fouling Detection", zh: "水下附着物检测" },
    category: { en: "Computer Vision / Industrial AI", zh: "计算机视觉 / 工业 AI" },
    scenario: {
      en: "Before ship cleaning companies provide quotations, they need to estimate the coverage of underwater fouling such as barnacles, mussels, seaweed, tubeworms, and sediment from ship images.",
      zh: "船舶清洗公司在报价前需要评估清洗难度，其中关键步骤是从船体水下图像中估计藤壶、贻贝、海藻、管虫、沉积物等附着物的覆盖面积。",
    },
    work: {
      en: "I used YOLOv11 to detect fouling categories, passed detected bounding boxes into SAM for segmentation, and calculated the proportion of fouling pixels against the full image to estimate coverage.",
      zh: "我先使用 YOLOv11 检测多类附着物，再将检测框输入 SAM 进行区域分割，最后计算附着物像素占整张图像的比例来估计覆盖面积。",
    },
    impact: {
      en: "The project was delivered successfully, and the algorithm was deployed for practical company use.",
      zh: "该项目已成功交付，算法部署后进入公司实际业务使用。",
    },
    technologies: ["YOLOv11", "SAM", "Python", "Computer Vision", "Image Segmentation"],
    featured: true,
  },
  {
    slug: "traffic-scene-simulation",
    title: { en: "Traffic Scene Simulation Demonstration", zh: "交通场景仿真演示" },
    category: { en: "Unity3D / Simulation", zh: "Unity3D / 仿真系统" },
    scenario: {
      en: "Traffic accident reconstruction requires reliable real-time data from vehicles, roadside units, and regional base stations to reproduce the incident and explain communication behavior.",
      zh: "交通事故场景复现需要车辆、路侧单元和区域基站等设备提供可靠的实时数据，用于重构事故现场并演示通信机制。",
    },
    work: {
      en: "I built an urban traffic environment in Unity3D and implemented vehicle, RSU, base station, pedestrian, and object movement plus communication logic using C# scripts.",
      zh: "我使用 Unity3D 构建城市场景和交通环境，并通过 C# 脚本实现车辆、路侧单元、基站、行人等对象的运动逻辑和通信机制。",
    },
    impact: {
      en: "The simulation created a visual demonstration environment for explaining data flow during accident scenarios.",
      zh: "该仿真系统为事故场景中的数据流转与通信过程提供了可视化演示环境。",
    },
    technologies: ["Unity3D", "C#", "Simulation", "Traffic Systems", "Data Communication"],
    featured: true,
  },
  {
    slug: "simple-ecommerce-webpage",
    title: { en: "Simple E-Commerce Webpage Development", zh: "简易电商网页开发" },
    category: { en: "Web Development", zh: "Web 开发" },
    scenario: {
      en: "The project explored a basic shopping webpage structure with product display and common e-commerce interface patterns.",
      zh: "该项目探索了基础购物网页结构，包括商品展示和常见电商界面交互模式。",
    },
    work: {
      en: "I developed a simple shopping webpage using Spring Boot and Vue, practicing full-stack page construction and front-end/back-end coordination.",
      zh: "我使用 Spring Boot 和 Vue 开发了一个简易购物网页，练习了全栈页面搭建以及前后端协作流程。",
    },
    impact: {
      en: "The work helped establish a practical foundation for web application development.",
      zh: "这个项目帮助我建立了 Web 应用开发的实践基础。",
    },
    technologies: ["Spring Boot", "Vue", "Java", "Web UI"],
    featured: false,
  },
];
