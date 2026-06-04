import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Sparkles, Mail } from "lucide-react";

export const About = () => {
  const { locale } = useLanguage();
  const t = translations[locale].about;

	return (
		<section id="about" className="py-24 lg:px-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-bg-translucent-strong bg-bg-strong overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 p-6 md:p-10">
            <div className="md:w-[400px] md:max-h-[450px] overflow-hidden rounded-xl">
              <img
                src={pilot}
                alt=""
                className="w-full h-full object-cover object-[50%_50%]"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-shade px-3 py-1 text-xs text-label-soft mb-4">
                  <Sparkles className="size-3 text-accent-blue-base" />
                  {t.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-figtree text-label-title">
                  {t.heading}{" "}
                </h2>
                <p className="text-md text-label-base mt-4 leading-relaxed">
                  {t.description}
                </p>
                <div className="pt-6 pb-4">
                  <a
                    href="mailto:contact@archersmart.ai"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-blue-base text-white px-6 py-3 text-sm font-semibold hover:bg-accent-blue-base-hover transition-colors"
                  >
                    <Mail className="size-4" />
                    {t.joinUs}
                  </a>
                </div>
              </div>

              {/* team culture */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-bg-translucent-strong mt-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold font-figtree text-label-title mb-2">
                    {t.cultureTitle}
                  </h3>
                  <p className="text-sm text-label-soft">
                    {t.cultureValue}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold font-figtree text-label-title mb-2">
                    {t.missionTitle}
                  </h3>
                  <p className="text-sm text-label-soft">
                    {t.missionValue}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold font-figtree text-label-title mb-2">
                    {t.valuesTitle}
                  </h3>
                  <p className="text-sm text-label-soft">
                    {t.valuesValue}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-bg-translucent-strong">
                <Statistics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	);
};
