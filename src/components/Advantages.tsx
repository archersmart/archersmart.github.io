import { MedalIcon, ChartIcon, PlaneIcon, MagnifierIcon } from "./Icons";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Sparkles } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  wash: string;
}

export const Advantages = () => {
  const { locale } = useLanguage();
  const t = translations[locale].advantages;

  const icons = [<MedalIcon />, <ChartIcon />, <MagnifierIcon />, <PlaneIcon />];
  const washes = [
    "from-[#3B82F6]/30",
    "from-[#00A0FE]/30",
    "from-[#22D3EE]/30",
    "from-[#F6A0D3]/30",
  ];

  const features: FeatureProps[] = t.cards.map((card, index) => ({
    icon: icons[index] ?? <MedalIcon />,
    title: card.title,
    description: card.description,
    wash: washes[index] ?? "from-[#3B82F6]/30",
  }));

  return (
    <section id="advantages" className="py-24 lg:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-strong px-4 py-1.5 text-sm text-label-soft mb-4">
            <Sparkles className="size-4 text-accent-blue-base" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-figtree text-label-title">
            {t.titlePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue-base to-cyan-base">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-label-base max-w-2xl">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map(({ icon, title, description, wash }: FeatureProps) => (
            <div
              key={title}
              className="relative group rounded-2xl border border-bg-translucent-strong bg-bg-strong p-6 md:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color wash background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${wash} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="size-12 rounded-full bg-bg-shade flex items-center justify-center mb-4 group-hover:bg-accent-blue-base transition-colors duration-300 [&_svg]:fill-accent-blue-base group-hover:[&_svg]:fill-white">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold font-figtree text-label-title mb-3">
                  {title}
                </h3>
                <p className="text-sm text-label-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
