import Marquee from "react-fast-marquee";
import BamaTeaImg from "../assets/sponsors/Bama-tea.png";
import IgarashiImg from "../assets/sponsors/IGARASHI.png";
import JomooImg from "../assets/sponsors/jomoo.png";
import QwenImg from "../assets/sponsors/Qwen.png";
import DeepSeekImg from "../assets/sponsors/DeepSeek.png";
import RegentImg from "../assets/sponsors/Regent.png";
import SuseImg from "../assets/sponsors/SUSE.png";

interface SponsorProps {
  image: string;
  name: string;
  width?: number;
  height?: number;
}

const sponsors: SponsorProps[] = [
  {
    image: BamaTeaImg,
    name: "八马茶业",
    width: 200,
  },
  {
    image: DeepSeekImg,
    name: "DeepSeek",
    width: 200,
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
    image: QwenImg,
    name: "Qwen",
    width: 180,
  },
  {
    image: RegentImg,
    name: "Regent",
    width: 200,
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-16 sm:py-28"
    >
      <h2 className="text-center text-md lg:text-3xl font-bold mb-10 text-dark">
        客户与合作伙伴
      </h2>

      <div className="mx-auto max-w-full max-h-full object-contain">
        <Marquee
          className="gap-[3rem]"
          pauseOnHover
          gradient
        >
          {sponsors.map(({ image, name, width, height }: SponsorProps) => (
            <div
              key={name}
              className="flex items-center justify-center w-32 h-16 md:w-48 md:h-24 lg:w-64 lg:h-36 mx-8"
            >
              <img
                src={image}
                alt={name}
                style={{ width, height }}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
