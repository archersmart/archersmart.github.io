import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/case-study-bg.png";
import { LightbulbIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

interface ServiceProps {
  title: string;
  description?: string;
  bullets?: string[];
  icon: JSX.Element;
}

export const Cases = () => {
  const { locale } = useLanguage();
  const t = translations[locale].cases;

  const serviceList: ServiceProps[] = t.items.map((item) => ({
    title: item.title,
    description: item.description,
    bullets: item.bullets,
    icon: <LightbulbIcon />,
  }));

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden min-h-screen" id="user-cases">
      <div className="absolute inset-0 -z-10">
        <img
          src={cubeLeg}
          className="h-full w-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-bg-base/90" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-strong px-4 py-1.5 text-sm text-label-soft mb-4">
            <Sparkles className="size-4 text-accent-blue-base" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-figtree text-label-title">
            {t.heading}
          </h2>
          <p className="mt-4 text-label-base max-w-2xl">
            {t.intro}
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {serviceList.map(
            ({ icon, title, description, bullets }: ServiceProps, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-bg-strong/90 border border-bg-translucent-strong backdrop-blur-sm">
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-accent-blue-soft p-2 rounded-2xl">
                      <div className="text-accent-blue-base">
                        {icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-label-title font-figtree">{title}</CardTitle>
                      <CardDescription className="text-md mt-2 text-label-base">
                        {description}
                      </CardDescription>
                      {bullets && bullets.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm text-label-soft">
                          {bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2 leading-relaxed"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-accent-blue-base flex-shrink-0" />
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
    </section>
  );
};
