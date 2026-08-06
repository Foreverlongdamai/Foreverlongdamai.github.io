import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "pilot-assessment-ai-system",
    title: {
      en: "eVTOL Pilot Training Effectiveness Assessment System",
      zh: "eVTOL 飞行员训练效果评估系统",
    },
    category: {
      en: "Cranfield University / eVTOL Pilot Training Assessment",
      zh: "Cranfield University / eVTOL 飞行训练评估",
    },
    scenario: {
      en: "This is my primary project at Cranfield University. VR flight training produces large volumes of flight-state, control, first-person visual, eye-tracking, and physiological data, but task completion alone cannot show how a pilot completed the flight or which skills still need improvement. This project turns those data into interpretable and traceable evidence, helping researchers and flight-training experts design more systematic ways to evaluate pilot training effectiveness.",
      zh: "这是我目前在英国 Cranfield University 主要开展的项目。VR 飞行训练会产生飞行状态、操纵输入、第一视角画面、眼动和生理信号等大量数据，但仅看任务是否完成，很难判断飞行员是如何完成操作的，以及哪些能力仍需加强。这个项目将这些数据转化为可解释、可追溯的评估依据，帮助研究人员和飞行训练专家更系统地设计飞行员训练效果评估方法。",
    },
    work: {
      en: "I designed and implemented the application's front end and back end, turning the research concept into a self-contained Windows desktop product. Through its visual interface, researchers can import flight data, define how assessment evidence is calculated, edit Bayesian networks, create separate assessment schemes for different training tasks, run assessments, view results, and trace each result back to the data and model configuration used. The interface is built with WinUI 3/.NET, supported by a local Python and SQLite backend.",
      zh: "我负责软件前后端的整体设计与实现，并将研究构想落地为一款可在 Windows 本地独立运行的桌面软件。研究人员可以通过可视化界面导入飞行数据、定义评估证据的计算规则、编辑贝叶斯网络、为不同训练任务设计独立的评估方案，并运行评估、查看结果和追溯每项结果所使用的数据与模型配置。软件前端使用 WinUI 3/.NET，后端使用 Python 和 SQLite。",
    },
    impact: {
      en: "I open-sourced the complete project on GitHub and published a downloadable Windows x64 package. The product's core functions and release workflow have been tested; after extraction, users can launch PilotAssessment.exe directly without separately installing Python, a database, or a development environment. The software supports the main workflow for designing assessment methods, importing data, editing models, running assessments, and tracing results, providing an extensible platform for researchers and domain experts to develop task-specific pilot assessment methods.",
      zh: "我已将完整项目开源到 GitHub，并发布了可直接下载运行的 Windows x64 软件包。产品的核心功能和发布流程已经完成测试；用户解压后即可启动 PilotAssessment.exe，无需另外安装 Python、数据库或开发环境。软件已经支持评估方法设计、数据导入、模型编辑、评估运行和结果追溯等主要流程，为研究人员和领域专家进一步设计不同训练任务的飞行员评估方法提供了一套可扩展的平台。",
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
