import Marquee from "react-fast-marquee";
import MiraclePlusImg from "../assets/miracleplus-logo.png";
import IgarashiImg from "../assets/sponsors/IGARASHI.png";
import JomooImg from "../assets/sponsors/Jomoo.png";
import SuseImg from "../assets/sponsors/SUSE.png";
import BaiyaImg from "../assets/sponsors/Baiya.png";
import BamaImg from "../assets/sponsors/Bama.png";
import DslImg from "../assets/sponsors/DSL.png";
import LianjianImg from "../assets/sponsors/Lianjian.png";
import LideImg from "../assets/sponsors/Lide.png";
import MujiImg from "../assets/sponsors/Muji.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Sparkles } from "lucide-react";

interface SponsorProps {
  image: string;
  name: string;
  width?: number;
  height?: number;
}

const sponsors: SponsorProps[] = [
  {
    image: MiraclePlusImg,
    name: "MiraclePlus",
    width: 220,
  },
  {
    image: BamaImg,
    name: "八马茶业",
    width: 160,
  },
  {
    image: IgarashiImg,
    name: "IGARASHI",
    width: 180,
  },
  {
    image: JomooImg,
    name: "九牧",
    width: 140,
  },
  {
    image: SuseImg,
    name: "Suse",
    width: 220,
  },
  {
    image: BaiyaImg,
    name: "百亚",
    width: 200,
  },
  {
    image: DslImg,
    name: "DSL",
    width: 220,
  },
  {
    image: LianjianImg,
    name: "联建",
    width: 80,
  },
  {
    image: LideImg,
    name: "利德",
    width: 160,
  },
  {
    image: MujiImg,
    name: "muji",
    width: 160,
  },
];

export const Sponsors = () => {
  const { locale } = useLanguage();
  const t = translations[locale].sponsors;

  return (
    <section
      id="sponsors"
      className="py-24 lg:px-8 px-4 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-strong px-4 py-1.5 text-sm text-label-soft mb-4">
            <Sparkles className="size-4 text-accent-blue-base" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-figtree text-label-title">
            {t.title}
          </h2>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white">
        <Marquee
          pauseOnHover
          gradient
          gradientColor="#ffffff"
          className="py-6 sponsors-marquee"
        >
          {sponsors.map(({ image, name, width, height }: SponsorProps) => (
            <div
              key={name}
              className="sponsor-item flex flex-shrink-0 items-center justify-center w-32 h-16 md:w-48 md:h-24 lg:w-64 lg:h-36 mx-8"
            >
              <img
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                style={{ width, height }}
                className="block max-w-full max-h-full object-contain object-center transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
