import { useNavigate, useLocation } from "react-router-dom";
// import { LogoIcon } from "./Icons";
import footerBg from "../assets/footer-bg.png";
import logo from "../assets/icon.png";



export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http")) return;
    
    e.preventDefault();

    const hashIndex = href.indexOf("#");
    const targetId = hashIndex !== -1 ? href.substring(hashIndex + 1) : null;

    if (targetId) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(targetId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer id="footer" className="relative">
      <div
        className="absolute inset-0 z-[-1] opacity-10"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            {/* <LogoIcon /> */}
            <img src={logo} alt="ArcherSmart.AI" className="w-10 h-10 mr-1" />
            ArcherSmart.AI
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/archersmart"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/q5aGfeBQ"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">产品</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Archer 智能排产(APS)
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://llmos.1block.ai/docs/"
              className="opacity-60 hover:opacity-100"
            >
              LLMOS(AI Infra)
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#advantages"
              onClick={(e) => handleLinkClick(e, "#advantages")}
              className="opacity-60 hover:opacity-100"
            >
              核心优势
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              onClick={(e) => handleLinkClick(e, "#features")}
              className="opacity-60 hover:opacity-100"
            >
              产品功能
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              onClick={(e) => handleLinkClick(e, "#faq")}
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2026 ArcherSmart.AI All Rights Reserved
        </h3>
      </section>
    </footer>
  );
};
