import { useNavigate, useLocation } from "react-router-dom";
import footerBg from "../assets/footer-bg.png";
import logo from "../assets/icon.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { BackedByMiraclePlus } from "@/components/BackedByMiraclePlus";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { locale } = useLanguage();
  const t = translations[locale].footer;
  const brand = translations[locale].navbar.brand;
  const basePath = locale === "en" ? "/en" : "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http")) return;

    e.preventDefault();

    const hashIndex = href.indexOf("#");
    const targetId = hashIndex !== -1 ? href.substring(hashIndex + 1) : null;

    if (targetId) {
      if (location.pathname !== basePath) {
        navigate(basePath);
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
    <footer id="footer" className="relative border-t border-bg-translucent-strong">
      <div
        className="absolute inset-0 z-[-1] opacity-5"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-x-12 gap-y-10">
          <div className="col-span-full xl:col-span-2">
            <button
              type="button"
              onClick={() => navigate(basePath)}
              className="font-bold text-xl flex items-center gap-2"
            >
              <img src={logo} alt="ArcherSmart.AI" className="w-9 h-9" />
              <span className="font-figtree text-label-title">{brand}</span>
            </button>
            <p className="mt-3 text-sm text-label-soft max-w-xs">
              {t.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-label-title font-figtree">{t.followUs}</h3>
            <div>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://github.com/archersmart"
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                Github
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://discord.gg/q5aGfeBQ"
                target="_blank"
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                Discord
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-label-title font-figtree">{t.products}</h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#features"
                onClick={(e) => handleLinkClick(e, "#features")}
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                {t.productLinks.aps}
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://llmos.1block.ai/docs/"
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                {t.productLinks.llmos}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-label-title font-figtree">{t.about}</h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#advantages"
                onClick={(e) => handleLinkClick(e, "#advantages")}
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                {t.nav.advantages}
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#features"
                onClick={(e) => handleLinkClick(e, "#features")}
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                {t.nav.features}
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className="text-sm text-label-soft hover:text-accent-blue-base transition-colors"
              >
                {t.nav.faq}
              </a>
            </div>
          </div>
        </section>

        <section className="pb-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-label-muted">
            {t.copyright}
          </p>
          <BackedByMiraclePlus />
        </section>
      </div>
    </footer>
  );
};
