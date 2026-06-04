import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import agentChat from "../assets/agentChat1.png";
import agentChat2 from "../assets/agentChat2.png";
import planning1 from "../assets/planning1.png";
import planning2 from "../assets/planning2.png";
import planning3 from "../assets/planning3.png";
import material1 from "../assets/material1.png";
import bom1 from "../assets/bom1.png";
import factory1 from "../assets/factory1.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Sparkles } from "lucide-react";

type FeatureKey =
  | "scheduling_agent"
  | "gantt_overview"
  | "org_management"
  | "custom_strategy"
  | "strategy_analysis"
  | "equipment_utilization"
  | "flexible_planning";

interface FeatureConfig {
  key: FeatureKey;
  title: string;
  subtitle: string;
  description: string;
  features: readonly string[];
  images: string[];
}

export const Features = () => {
  const { locale } = useLanguage();
  const t = translations[locale].features;

  const featureList: FeatureConfig[] = useMemo(
    () => [
      {
        key: "scheduling_agent",
        title:
          t.items.find((item) => item.key === "scheduling_agent")?.title ??
          "",
        subtitle:
          t.items.find((item) => item.key === "scheduling_agent")?.subtitle ??
          "",
        description:
          t.items.find((item) => item.key === "scheduling_agent")?.description ??
          "",
        features:
          t.items.find((item) => item.key === "scheduling_agent")?.bullets ??
          [],
        images: [agentChat, agentChat2],
      },
      {
        key: "gantt_overview",
        title: t.items.find((item) => item.key === "gantt_overview")?.title ?? "",
        subtitle:
          t.items.find((item) => item.key === "gantt_overview")?.subtitle ?? "",
        description:
          t.items.find((item) => item.key === "gantt_overview")?.description ?? "",
        features:
          t.items.find((item) => item.key === "gantt_overview")?.bullets ?? [],
        images: [planning1, planning2, planning3],
      },
      {
        key: "org_management",
        title:
          t.items.find((item) => item.key === "org_management")?.title ?? "",
        subtitle:
          t.items.find((item) => item.key === "org_management")?.subtitle ?? "",
        description:
          t.items.find((item) => item.key === "org_management")?.description ?? "",
        features:
          t.items.find((item) => item.key === "org_management")?.bullets ?? [],
        images: [material1, bom1, factory1],
      },
    ],
    [t]
  );

  const [activeKey, setActiveKey] = useState<FeatureKey>("scheduling_agent");
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
      className="py-24 lg:px-8 px-4"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-strong px-4 py-1.5 text-sm text-label-soft mb-4">
            <Sparkles className="size-4 text-accent-blue-base" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-figtree text-label-title">
            {t.heading}
          </h2>
          <p className="mt-4 text-label-base max-w-2xl">
            {t.intro}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {featureList.map((feature) => {
            const isActive = feature.key === activeKey;
            return (
              <button
                key={feature.key}
                onClick={() => setActiveKey(feature.key)}
                data-active={isActive}
                className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200
                  data-[active=true]:bg-accent-blue-base data-[active=true]:text-white
                  data-[active=false]:bg-bg-strong data-[active=false]:text-label-base
                  hover:bg-bg-shade border border-bg-translucent-strong"
              >
                {feature.title}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] items-center">
          <Card className="text-left border border-bg-translucent-strong bg-bg-strong shadow-none">
            <CardHeader className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-shade px-3 py-1 text-xs text-accent-blue-base w-fit">
                {t.coreBadge}
              </div>
              <CardTitle className="text-2xl md:text-3xl font-figtree text-label-title">
                {activeFeature.title}
              </CardTitle>
              <p className="text-sm text-label-soft md:text-base">
                {activeFeature.subtitle}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-label-base leading-relaxed">
                {activeFeature.description}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {activeFeature.features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-bg-shade/50 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-blue-soft text-accent-blue-base text-md">
                      ✓
                    </span>
                    <span className="text-sm text-label-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="border border-bg-translucent-strong bg-bg-strong overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CardContent className="p-0 bg-white">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={activeFeature.images[activeImageIndex]}
                  alt={activeFeature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-2 pb-4 bg-white">
              {activeFeature.images.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full cursor-pointer transition-all duration-300",
                    index === activeImageIndex
                      ? "w-6 bg-accent-blue-base"
                      : "bg-bg-shade"
                  )}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
