import type { Locale } from "./types";

export const zh = {
  navbar: {
    brand: "ArcherSmart.AI",
    mobileTitle: "ArcherSmart.AI",
    links: {
      advantages: "核心优势",
      features: "产品功能",
      cases: "客户案例",
      faq: "FAQ",
    },
    github: "Github",
    switchToEn: "EN",
    switchToZh: "中文",
  },
  hero: {
    headline: "让我们帮您把企业生产与决策",
    beforeTyping: "变得",
    typing: ["更简单", "更高效", "更智能"],
    subline: "一站式 AI 协同平台，让工厂像自动驾驶一样运行",
    pill: "离散制造的 AI 驾驶舱",
    headlinePrefix: "让排产",
    subtitle:
      "AI 驱动的 Harness 协同网络：实时感知、智能决策、持续进化，为离散制造企业打造新一代生产驾驶舱。",
    cta: "预约体验",
    secondaryCta: "了解更多",
    trust: [
      "已完成千人工厂落地验证",
      "排产效率提升 20 倍",
      "大模型 + Self-training 算法",
    ],
  },
  sponsors: {
    title: "客户与合作伙伴",
    badge: "客户认可",
  },
  advantages: {
    badge: "值得信赖",
    titlePrefix: "我们的",
    titleHighlight: "核心优势",
    description:
      "ArcherSmart 已在多家工厂落地，带来可量化提效与交付改善，获得客户持续使用与认可。",
    cards: [
      {
        title: "秒级生成可执行排产计划",
        description:
          "融合大模型与优化算法，秒级综合订单、设备、工艺、物料与交期，生成可直接下发的计划。",
      },
      {
        title: "订单及时交付率提升 10-15%",
        description:
          "整体优化优先级、瓶颈产能、物料与节拍，降低插单冲击与计划偏差，交付更稳定。",
      },
      {
        title: "沟通成本降低 60%",
        description:
          "实时输出可追溯建议与影响评估，减少跨部门沟通与对账，让调整有据可依、可衡量。",
      },
      {
        title: "大模型 + 算法的最优智能引擎",
        description:
          "大模型理解业务与不确定性，优化算法高质量求解，两者融合，决策更稳更准。",
      },
    ],
  },
  features: {
    badge: "核心能力",
    heading: "AI 排产能力",
    intro:
      "以排产智能体为核心，一套系统整合策略、分析与洞察，做到“看得清、排得好、调得快”。",
    coreBadge: "核心功能",
    items: [
      {
        key: "scheduling_agent",
        title: "AI 排产智能体",
        subtitle: "越用越懂你工厂的排产专家",
        description:
          "理解工厂数据与排产知识，降低使用门槛，持续输出专业、可执行建议，提供 7×24 小时专家级支持。",
        bullets: ["7x24 小时在线的生产管理专家", "越来越懂你的生产要求"],
      },
      {
        key: "gantt_overview",
        title: "生产全景图",
        subtitle: "多维视图看清全厂节奏",
        description:
          "以时间轴串联工单与设备负载，直观呈现节奏与瓶颈，快速定位风险与优化点。",
        bullets: ["多层级甘特视图联动", "异常工单与延误高亮提醒"],
      },
      {
        key: "org_management",
        title: "工厂管理",
        subtitle: "整合所有生产资源，优化生产效率",
        description:
          "统一设备、产能、物料与库存等资源，提高利用率，让排产更可预测、更可控。",
        bullets: ["整合所有生产资源", "优化生产效率"],
      },
    ],
  },
  cases: {
    heading: "客户案例",
    badge: "客户案例",
    intro:
      "客户为多品种小批量离散制造企业，在交期压力下从经验排产转向 AI 智能排产。",
    items: [
      {
        title: "排产挑战",
        description:
          "规模扩大后复杂度上升，插单与异常频发，传统经验难以支撑。",
        bullets: [
          "多品种、小批量、交期各异，传统排产方式耗时长且容易出错。",
          "排产结果高度依赖个人经验，计划不稳定且难以沉淀为组织能力。",
          "插单、设备故障、物料延迟频发，计划频繁被推翻，生产与计划脱节。",
        ],
      },
      {
        title: "解决方案",
        description:
          "构建 AI 决策引擎，接入订单与产能约束数据，打造贴合真实生产的智能排产系统。",
        bullets: [
          "同步 ERP 系统，统一接入订单、设备能力、物料状态等关键数据，构建完整生产约束模型。",
          "结合大模型与优化算法，秒级生成排产方案，并量化交期、产能利用率和换线成本的权衡。",
          "把插单和异常视为常态，自动评估影响范围并给出更优调整方案，实现持续滚动排产。",
        ],
      },
      {
        title: "实施效果",
        description:
          "排产从耗时易乱升级为稳定可控的智能决策流程，计划更稳，生产更可控。",
        bullets: [
          "排产效率提升90%，原本每周数小时的排程计划现在可缩短到分钟级完成。",
          "计划员从“拍脑袋排产”转变为在多方案中选择最优解, 换料与等待时间减少15%。",
          "插单和异常被控制在可预测范围内，客户订单及时交付率提升20%。",
        ],
      },
    ],
  },
  faq: {
    heading: "常见问题",
    subtitle: "关于 ArcherSmart 的常见疑问",
    more: "还有其他问题吗？",
    support: "我们的团队很乐意解答您的疑问",
    contact: "联系我们",
    items: [
      {
        value: "item-1",
        question: "什么是 ArcherSmart？与传统 APS/MES 有什么不同？",
        answer:
          "ArcherSmart 不是传统排产软件或 MES。\n传统 APS/MES 依赖固定规则与人工经验，面对插单与异常容易失效。\nArcherSmart 打通 ERP/MES/WMS 与设备，融合大模型+优化算法做实时决策。\n它更像工厂的智能“驾驶舱”，可持续进化。",
      },
      {
        value: "item-2",
        question: "ArcherSmart 能解决工厂哪些具体痛点？",
        answer:
          "解决三类痛点：\n复杂度失控（排产耗时、频繁返工）；\n异常频发（插单/故障/延迟推翻计划）；\n经验难沉淀（依赖个人）。\nArcherSmart 打通数据、AI 实时决策并支持知识复制，把排产从小时压缩到分钟级，让异常更可控。",
      },
      {
        value: "item-3",
        question: "部署 ArcherSmart 需要多长时间？会改造现有系统吗？",
        answer:
          "典型部署约 6 周。\n在现有 IT 系统之上增量部署，对接 ERP/MES/WMS 与产线设备，无需替换原系统。\n我们协作完成对接、初始化与调优，确保快速上线与平稳过渡。",
      },
      {
        value: "item-4",
        question: "ArcherSmart 支持哪些行业？有成功案例吗？",
        answer:
          "已覆盖汽车零部件、PCBA（电子组装）、船舶制造等行业。\n在两家千人级工厂付费落地，稳定运行超 6 个月。\n架构可跨行业复用，A 工厂验证策略可快速复制到其他工厂。",
      },
      {
        value: "item-5",
        question: "ArcherSmart 的 ROI 如何评估？",
        answer:
          "客户数据显示：\n排产效率提升 20 倍（每周 4-6 小时→分钟级），\n订单及时交付率提升 10-20%，换料等待减少 15%，沟通成本降低 60%。\n通常 3-6 个月回本，并可在部署前提供定制 ROI 评估。",
      },
      {
        value: "item-6",
        question: "ArcherSmart 如何实现跨工厂的知识复制？",
        answer:
          "大模型持续从生产运营中沉淀行业 know-how（策略、工艺参数、决策规则等）。\n知识结构化为可复用资产：A 工厂验证策略可一键部署到 B/C 工厂。\n同一工厂也会越用越懂、持续进化。",
      },
    ],
  },
  about: {
    heading: "关于我们",
    badge: "关于我们",
    description:
      "ArcherSmart 由深耕制造与 AI Infra 的工程师团队打造，融合大模型与工业决策，构建新一代智能协同系统（Harness Manufacturing OS），让计划更准、执行更高效、运营更可持续。",
    joinUs: "加入我们",
    cultureTitle: "团队文化",
    cultureValue: "敢为极致、多元兼容、开放共赢",
    missionTitle: "使命",
    missionValue: "以 AI 驱动工业升级，让制造更简单、更智能、更高效",
    valuesTitle: "价值观",
    valuesValue: "技术为本、客户为先，求真务实、持续创新",
  },
  statistics: {
    orders: "处理订单",
    uptimeDays: "稳定运行（天）",
    downloads: "下载量",
    products: "核心产品",
  },
  contact: {
    heading: "联系我们",
    intro: "欢迎预约会议，我们会尽快与您沟通。",
    emailTitle: "想用邮件联系？",
    meetingTitle: "立即预约会议？",
    meetingLink: "预约会议",
  },
  footer: {
    followUs: "Follow US",
    products: "产品",
    about: "About",
    tagline: "AI 驱动的离散制造 Harness 协同网络",
    backedBy: "Backed by",
    nav: {
      advantages: "核心优势",
      features: "产品功能",
      faq: "FAQ",
    },
    productLinks: {
      aps: "Archer 智能排产(APS)",
      llmos: "LLMOS(AI Infra)",
    },
    copyright: "© 2026 ArcherSmart.AI All Rights Reserved",
  },
};

export const en = {
  navbar: {
    brand: "ArcherSmart.AI",
    mobileTitle: "ArcherSmart.AI",
    links: {
      advantages: "Advantages",
      features: "Features",
      cases: "Case Studies",
      faq: "FAQ",
    },
    github: "Github",
    switchToEn: "EN",
    switchToZh: "中文",
  },
  hero: {
    headline: "Make production and decisions",
    beforeTyping: "",
    typing: ["Simpler", "Efficient", "Smarter"],
    subline:
      "One-stop AI collaboration platform, run factories like autopilot.",
    pill: "AI cockpit for discrete manufacturing",
    headlinePrefix: "Make scheduling",
    subtitle:
      "AI collaboration for discrete manufacturing: real-time sensing, smart decisions, continuous improvement.",
    cta: "Book a Demo",
    secondaryCta: "Learn more",
    trust: [
      "Proven in 1,000+ employee factories",
      "20× scheduling efficiency",
      "LLMs + self-training algorithms",
    ],
  },
  sponsors: {
    title: "Customers & Partners",
    badge: "Customer Recognition",
  },
  advantages: {
    badge: "Trusted",
    titlePrefix: "Our ",
    titleHighlight: "Advantages",
    description:
      "Proven in multiple factories with measurable efficiency and delivery improvements—earning long-term adoption and trust.",
    cards: [
      {
        title: "Executable schedules generated in seconds",
        description:
          "LLMs + optimization synthesize orders, machines, materials, and due dates in seconds to produce shop-floor-ready schedules.",
      },
      {
        title: "On-time delivery up by 10-15%",
        description:
          "Optimize priorities, bottlenecks, materials, and takt time to reduce plan deviation and stabilize delivery.",
      },
      {
        title: "Communication cost reduced by 60%",
        description:
          "Traceable recommendations and impact analysis reduce coordination and reconciliation—making changes measurable.",
      },
      {
        title: "The best engine: LLM + optimization",
        description:
          "LLMs capture business context and uncertainty; optimization solves reliably—together delivering robust decisions.",
      },
    ],
  },
  features: {
    badge: "Capabilities",
    heading: "AI Scheduling",
    intro:
      "An AI scheduling agent plus strategy, analytics, and insights—so factories see clearly, schedule well, and adapt fast.",
    coreBadge: "Core Feature",
    items: [
      {
        key: "scheduling_agent",
        title: "AI Scheduling Agent",
        subtitle: "A scheduling expert that learns your factory over time",
        description:
          "Understands your data and rules, lowers complexity, and outputs executable recommendations—24/7.",
        bullets: ["A 24/7 production expert", "Learns your requirements over time"],
      },
      {
        key: "gantt_overview",
        title: "Production Panorama",
        subtitle: "Multi-dimensional views of your whole factory rhythm",
        description:
          "Time-based views of orders and loads to spot bottlenecks and risks fast.",
        bullets: ["Linked multi-level Gantt views", "Highlight delays and exceptions"],
      },
      {
        key: "org_management",
        title: "Factory Management",
        subtitle: "Unify production resources to maximize efficiency",
        description:
          "Unify machines, capacity, materials, and inventory for higher utilization and predictable scheduling.",
        bullets: ["Unify all production resources", "Improve production efficiency"],
      },
    ],
  },
  cases: {
    heading: "Case Study",
    badge: "Case Study",
    intro:
      "A high-mix, low-volume manufacturer moved from experience-based scheduling to an AI-driven system under tighter due dates.",
    items: [
      {
        title: "Scheduling Challenges",
        description:
          "As complexity and exceptions rose, traditional experience began to fail.",
        bullets: [
          "High-mix, diverse due dates make scheduling slow and error-prone.",
          "Heavy reliance on individuals makes plans unstable and hard to standardize.",
          "Rush orders, failures, and material delays frequently overturn plans.",
        ],
      },
      {
        title: "Solution",
        description:
          "We built an AI decision engine and integrated order + capacity constraints to fit real production.",
        bullets: [
          "Sync ERP and unify orders, machine capability, and material status into one constraint model.",
          "Use LLMs + optimization to schedule in seconds and quantify trade-offs.",
          "Treat exceptions as normal with impact assessment and rolling rescheduling.",
        ],
      },
      {
        title: "Impact",
        description:
          "Scheduling became stable and controllable—planning and execution became manageable.",
        bullets: [
          "Scheduling efficiency improved by 90%: weekly planning shrank from hours to minutes.",
          "Planners moved from intuition-based scheduling to choosing the best option among alternatives; waiting and material-change time decreased by 15%.",
          "Exceptions became predictable and controlled; on-time delivery increased by 10-15%.",
        ],
      },
    ],
  },
  faq: {
    heading: "FAQ",
    subtitle: "Common questions about ArcherSmart",
    more: "Still have questions?",
    support: "Our team is happy to help.",
    contact: "Contact us",
    items: [
      {
        value: "item-1",
        question: "What is ArcherSmart, and how is it different from APS/MES?",
        answer:
          "ArcherSmart is not a traditional scheduling tool or MES.\nAPS/MES rely on fixed rules and human experience, and often fail under frequent disruptions.\nArcherSmart connects ERP/MES/WMS and shop-floor devices, fusing LLMs with optimization for real-time decisions.\nIt’s a continuously evolving factory cockpit.",
      },
      {
        value: "item-2",
        question: "What factory pain points does ArcherSmart solve?",
        answer:
          "It solves three problems:\n1) Complexity: scheduling takes hours and needs rework.\n2) Disruptions: rush orders/failures/delays overturn plans.\n3) No accumulation: scheduling depends on individuals.\nArcherSmart breaks silos, enables real-time AI decisions, and replicates proven knowledge across factories—shrinking scheduling to minutes and making disruptions controllable.",
      },
      {
        value: "item-3",
        question: "How long does deployment take? Do we need to rebuild existing systems?",
        answer:
          "Typical deployment: ~6 weeks.\nArcherSmart is an incremental layer on top of your existing stack.\nWe connect to ERP/MES/WMS and shop-floor devices without replacing current systems.\nWe collaborate on integration, initialization, and tuning for a smooth go-live.",
      },
      {
        value: "item-4",
        question: "Which industries does ArcherSmart support? Any proven success cases?",
        answer:
          "Supported verticals include automotive parts, PCBA (electronics assembly), and shipbuilding.\nDeployed in two 1,000+ employee factories with stable paid usage for 6+ months.\nProven strategies can be replicated across factories quickly.",
      },
      {
        value: "item-5",
        question: "How do you evaluate ROI?",
        answer:
          "Customer data shows:\n20× scheduling efficiency (weekly 4–6 hours → minutes),\n10–15% better on-time delivery,\n15% less changeover waiting,\n60% less cross-team communication cost.\nTypical payback: 3–6 months, with a pre-deployment ROI assessment available.",
      },
      {
        value: "item-6",
        question: "How does ArcherSmart replicate knowledge across factories?",
        answer:
          "LLMs continuously capture domain know-how from operations (strategies, parameters, decision rules).\nWe structure it into reusable assets: a proven strategy in Factory A can be deployed to Factories B/C with one click.\nEach factory keeps learning and improving over time.",
      },
    ],
  },
  about: {
    heading: "About Us",
    badge: "About Us",
    description:
      "Built by engineers with deep expertise in manufacturing and AI infrastructure, ArcherSmart fuses LLMs with industrial decision-making. We’re building Harness Manufacturing OS to make planning more accurate, execution more efficient, and operations more sustainable.",
    joinUs: "Join Us",
    cultureTitle: "Culture",
    cultureValue: "Pursue excellence, embrace diversity, win together",
    missionTitle: "Mission",
    missionValue:
      "Make manufacturing simpler, smarter, and more efficient",
    valuesTitle: "Values",
    valuesValue: "Customer and technology first; pragmatic and innovative",
  },
  statistics: {
    orders: "Orders Processed",
    uptimeDays: "Uptime (days)",
    downloads: "Downloads",
    products: "Core Products",
  },
  contact: {
    heading: "Contact Us",
    intro:
      "Book a meeting and we’ll get back to you shortly.",
    emailTitle: "Prefer email?",
    meetingTitle: "Book a meeting now",
    meetingLink: "Meet with us",
  },
  footer: {
    followUs: "Follow Us",
    products: "Products",
    about: "About",
    tagline: "An AI-driven harness network for discrete manufacturing",
    backedBy: "Backed by",
    nav: {
      advantages: "Advantages",
      features: "Features",
      faq: "FAQ",
    },
    productLinks: {
      aps: "Archer Smart Scheduling (APS)",
      llmos: "LLMOS (AI Infra)",
    },
    copyright: "© 2026 ArcherSmart.AI All Rights Reserved",
  },
};

export const translations = { zh, en } satisfies Record<Locale, typeof zh>;
