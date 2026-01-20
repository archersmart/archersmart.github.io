import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
	return (
		<section id="about" className="container py-14 sm:py-14">
			<div className="bg-muted/50 border rounded-lg py-10">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<div className="md:w-[400px] md:max-h-[450px] overflow-hidden rounded-lg">
						<img
							src={pilot}
							alt=""
							className="w-full h-full object-cover object-[50%_50%]"
						/>
					</div>
					<div className="bg-green-0 flex flex-col justify-between">
						<div className="pb-2">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-gradient-to-b text-dark bg-clip-text">
									关于我们{" "}
								</span>
							</h2>
							<p className="text-md text-muted-foreground mt-4">
								ArcherSmart 由一支深耕制造与 AI
								的工程师团队创建，专注于将大模型与工业决策深度结合。
								我们致力于为制造业构建新一代智能决策系统(Production
								OS)，帮助企业在复杂多变的生产环境中，实现更精准的计划、更高效的执行与更可持续的运营。
							</p>
							<div className="pt-4 pb-2">
								<a
									href="mailto:contact@archersmart.ai"
									className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
								>
									加入我们
								</a>
							</div>
						</div>

						{/* team culture */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-5">
							<div className="text-center">
								<h3 className="text-xl font-semibold text-foreground mb-2">
									团队文化
								</h3>
								<p className="text-sm text-[#3C4046]">
									敢为极致、多元兼容、开放共赢
								</p>
							</div>
							<div className="text-center">
								<h3 className="text-xl font-semibold text-foreground mb-2">
									使命
								</h3>
								<p className="text-sm text-[#3C4046]">
									以 AI 驱动工业升级，让制造更简单、更智能、更高效
								</p>
							</div>
							<div className="text-center">
								<h3 className="text-xl font-semibold text-foreground mb-2">
									价值观
								</h3>
								<p className="text-sm text-[#3C4046]">
									技术为本、客户为先，求真务实、持续创新
								</p>
							</div>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
