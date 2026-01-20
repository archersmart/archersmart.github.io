import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/case-study-bg.png";
import { LightbulbIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  description?: string;
  bullets?: string[];
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "排产挑战",
    description:
      "随着业务规模扩大，订单复杂度上升、插单与异常频繁，传统经验在复杂性面前逐渐失效。",
    bullets: [
      "多品种、多批量、交期各异，传统排产方式耗时长且容易出错。",
      "排产结果高度依赖个人经验，计划不稳定且难以沉淀为组织能力。",
      "插单、设备故障、物料延迟频发，计划频繁被推翻，生产与计划脱节。",
    ],
    icon: <LightbulbIcon />,
  },
  {
    title: "解决方案",
    description:
      "通过构建 AI 决策引擎，接入订单与产能约束数据，打造了贴合真实生产环境的 AI 排产系统。",
    bullets: [
      "同步 SAP 系统，统一接入订单、设备能力、物料状态等关键数据，构建完整生产约束模型。",
      "结合大模型与优化算法，秒级生成多套排产方案，并量化交期、产能利用率和换线成本的权衡。",
      "把插单和异常视为常态，自动评估影响范围并给出更优调整方案，实现持续滚动排产。",
    ],
    icon: <LightbulbIcon />,
  },
  {
    title: "实施效果",
    description:
      "排产从耗时、易乱升级为稳定可控的智能决策过程，计划稳定了，生产开始真正可控。",
    bullets: [
      "排产效率提升90%，原本每周数小时的排程计划现在可缩短到分钟级完成。",
      "计划员从“拍脑袋排产”转变为在多方案中选择最优解, 换料与等待时间减少15%。",
      "插单和异常被控制在可预测范围内，客户订单及时交付率提升20%。", 
    ],
    icon: <LightbulbIcon />,
  },
];

export const Cases = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden min-h-screen" id="user-cases">
      <div className="absolute inset-0 -z-10">
        <img
          src={cubeLeg}
          className="h-full w-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>
      <div className="container relative">
        <div className="lg:max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            客户案例
          </h2>

          <p className="text-white text-md mt-4 mb-8 ">
            客户是一家典型的多品种、多批量的离散制造企业，在订单快速增长与交期压力加大的背景下，从高度依赖传统经验 + 固定规则的排产模式，转向以 AI 驱动的智能排产体系。
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(
              ({ icon, title, description, bullets }: ServiceProps, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="bg-white/80">
                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                      <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        {icon}
                      </div>
                      <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="text-md mt-2">
                          {description}
                        </CardDescription>
                        {bullets && bullets.length > 0 && (
                          <ul className="mt-4 space-y-2 text-sm text-[#3C4046]">
                            {bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-2 leading-relaxed"
                              >
                                <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
