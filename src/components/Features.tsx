import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import agentChat from "../assets/agentChat1.png";
import agentChat2 from "../assets/agentChat2.png";
import planning1 from "../assets/planning1.png";
import planning2 from "../assets/planning2.png";
import planning3 from "../assets/planning3.png";
import material1 from "../assets/material1.png";
import bom1 from "../assets/bom1.png";
import factory1 from "../assets/factory1.png";

type FeatureKey =
  | "scheduling_agent"
  | "gantt_overview"
  | "custom_strategy"
  | "strategy_analysis"
  | "equipment_utilization"
  | "org_management"
  | "flexible_planning";

interface FeatureConfig {
  key: FeatureKey;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
}

const featureList: FeatureConfig[] = [
  {
    key: "scheduling_agent",
    title: "AI 排产智能体",
    subtitle: "越用越懂你工厂的排产专家",
    description:
      "一套真正理解客户数据与排产知识的智能体，在大幅降低使用复杂度的同时，能够持续输出专业、可执行的排产建议，为企业提供等同于 7×24 小时在线的生产管理专家级支持。",
    features: ["7x24 小时在线的生产管理专家", "越来越懂你的生产要求"],
    images: [agentChat, agentChat2],
  },
  {
    key: "gantt_overview",
    title: "生产全景图",
    subtitle: "多维视图看清全厂节奏",
    description:
      "从工单到设备负载，以时间轴为核心，直观展示生产节奏与瓶颈，帮助管理者快速识别风险与优化空间。",
    features: ["多层级甘特视图联动", "异常工单与延误高亮提醒"],
    images: [planning1, planning2, planning3],
  },
  {
    key: "org_management",
    title: "工厂管理",
    subtitle: "整合所有生产资源，优化生产效率",
    description:
      "整合所有生产资源，包括设备、产能、物料、库存等，实现资源的最大利用率，让排产更加可预测、可控制。",
    features: ["整合所有生产资源", "优化生产效率"],
    images: [material1, bom1, factory1],
  },
  // {
  //   key: "equipment_utilization",
  //   title: "设备利用率分析",
  //   subtitle: "让每一台设备都物尽其用",
  //   description:
  //     "结合排产计划与实际执行数据，分析设备开机率、负载率与停机原因，为扩产与设备投资提供决策依据。",
  //   features: ["设备负载分布与对比分析", "异常停机原因结构化统计"],
  //   images: [image4, image3, image4],
  // },
//   {
//     key: "custom_strategy",
//     title: "排产自定义策略",
//     subtitle: "适配你的工厂业务规则",
//     description:
//       "支持按行业、工艺、客户要求配置排产策略，将经验固化为可执行规则，让不同排产员也能排出一致品质的计划。",
//     features: ["支持多种排产策略组合", "可视化调整优先级与约束"],
//     images: [image, image, image],
//   },
//   {
//     key: "strategy_analysis",
//     title: "排产策略分析",
//     subtitle: "排完之后，再看是否合理",
//     description:
//       "从交期达成率、在制品、设备利用率等维度评估排产结果，帮助团队持续优化策略，而不是只看当天计划是否排满。",
//     features: ["多维度策略效果评估", "关键指标变化趋势追踪"],
//     images: [image4, image3, image4],
//   },
];

export const Features = () => {
  const [activeKey, setActiveKey] = useState<FeatureKey>(featureList[0].key);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const activeFeature =
    featureList.find((feature) => feature.key === activeKey) ?? featureList[0];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeKey]);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % activeFeature.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeKey, isHovering, activeFeature.images.length]);

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-14 md:space-y-14"
    >
      <div className="flex flex-col gap-2 text-center">
        <div className="inline-flex items-center justify-center">
          <label className="bg-secondary/80 text-[#3C4046] px-4 py-2 rounded-full text-sm">
            产品核心能力
          </label>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mt-4">
          AI 排产与生产智能体一体化方案
        </h2>
        <p className="text-[#3C4046] text-md mt-2 max-w-2xl mx-auto">
          以排产智能体为核心，将排产策略、可视化分析与设备利用率洞察整合在一套系统中，
          帮助中大型工厂真正做到“看得清、排得好、调得快”。
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-center gap-3">
        {featureList.map((feature) => {
          const isActive = feature.key === activeKey;
          return (
            <Button
              key={feature.key}
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full px-5 py-2 text-sm border",
                isActive
                  ? "border-transparent bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md hover:text-muted"
                  : "border-sky-100 bg-white/70 text-[#3C4046] hover:bg-white"
              )}
              onClick={() => setActiveKey(feature.key)}
            >
              {feature.title}
            </Button>
          );
        })}
      </div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] items-center">
        <Card className="text-left border-none shadow-none bg-transparent">
          <CardHeader className="space-y-3 p-0">
            <Badge
              variant="secondary"
              className="mb-1 w-fit rounded-full bg-sky-50 text-sky-800"
            >
              核心功能
            </Badge>
            <CardTitle className="text-2xl md:text-3xl">
              {activeFeature.title}
            </CardTitle>
            <p className="text-sm text-sky-700 md:text-base">
              {activeFeature.subtitle}
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-0 pt-4">
            <p className="text-[#3C4046] leading-relaxed">
              {activeFeature.description}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {activeFeature.features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-md">
                    ✓
                  </span>
                  <span className="text-sm text-[#3C4046]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-none shadow-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <CardContent className="flex items-center justify-center p-2 md:p-2">
            <img
              src={activeFeature.images[activeImageIndex]}
              alt={activeFeature.title}
              className="w-full  max-y-[600px] rounded-xl"
            />
          </CardContent>
          <CardFooter className="flex justify-center gap-2 pb-4">
            {activeFeature.images.map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-1.5 w-1.5 rounded-full bg-sky-200 cursor-pointer transition-all duration-300",
                  index === activeImageIndex && "w-6 bg-sky-500"
                )}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
