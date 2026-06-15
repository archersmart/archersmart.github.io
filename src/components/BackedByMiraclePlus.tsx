import miraclePlusLogo from "../assets/miracleplus-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface BackedByMiraclePlusProps {
  className?: string;
}

export const BackedByMiraclePlus = ({ className }: BackedByMiraclePlusProps) => {
  const { locale } = useLanguage();
  const t = translations[locale].footer;

  return (
    <a
      href="https://www.miracleplus.com/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="MiraclePlus"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-lg border border-black/5 hover:bg-white transition-colors",
        className
      )}
    >
      <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
        {t.backedBy}
      </span>
      <img
        src={miraclePlusLogo}
        alt="MiraclePlus"
        className="h-5 md:h-6 w-auto object-contain"
      />
    </a>
  );
};
