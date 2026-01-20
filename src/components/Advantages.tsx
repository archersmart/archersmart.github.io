import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, ChartIcon, PlaneIcon, MagnifierIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "秒级生成可执行排产计划",
    description:
      "结合大模型与优化算法，几秒内综合订单、设备、工艺、物料与交期，直接生成可下发到产线的生产计划，让计划员从反复试排转为专注决策",
  },
  {
    icon: <ChartIcon />,
    title: "订单及时交付率提升 20%",
    description:
      "通过对优先级、瓶颈产能、物料与节拍的整体优化，持续降低插单冲击与计划偏差，让工厂从赶交期走向稳定交付",
  },
  {
    icon: <MagnifierIcon />,
    title: "沟通成本降低 60%",
    description:
      "实时给出可追溯的决策建议与影响评估，减少跨部门沟通与对账成本，让每一次调整都基于数据结果，转化为可衡量的人效与收益提升",
  },
  {
    icon: <PlaneIcon />,
    title: "大模型 + 算法的最优智能引擎",
    description:
      "大模型负责理解复杂业务与不确定性，优化算法负责高质量求解，两者融合，实现既懂业务、又稳定可靠的生产决策",
  },
];

export const Advantages = () => {
  return (
		<section id="advantages" className="container text-center py-8 sm:py-12">
			<div className="max-w-3xl mx-auto">
				<div className="inline-block mb-2">
					<label className="bg-primary text-white px-4 py-2 rounded-full text-sm">
						值得信赖
					</label>
				</div>
				<div className="inline-block mb-2">
					<h2 className="text-3xl md:text-4xl font-bold mt-4">
						我们的{""}
						<span className="bg-gradient-to-b from-primary/90 to-primary text-transparent bg-clip-text">
							核心优势
						</span>
					</h2>
					<p className="md:w-3/4 mx-auto mt-4 mb-8 text-md text-muted-foreground">
						ArcherSmart
						已帮助多家工厂成功落地，为他们带来可量化的效率提升与交付改善，并获得客户的持续使用与高度认可。
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
				{features.map(({ icon, title, description }: FeatureProps) => (
					<Card
						key={title}
						className="group bg-muted/50 hover:bg-blue-600 hover:text-white transition-colors"
					>
						<CardHeader>
							<CardTitle className="grid gap-4 place-items-center">
								{icon}
								{title}
							</CardTitle>
						</CardHeader>
						<CardContent>{description}</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
