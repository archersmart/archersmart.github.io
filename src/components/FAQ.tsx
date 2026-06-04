import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Sparkles, MessageCircle } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQ = () => {
  const { locale } = useLanguage();
  const t = translations[locale].faq;
  const contactPath = locale === "en" ? "/en/contact-us" : "/contact-us";
  const FAQList: readonly FAQProps[] = t.items;

  return (
    <section
      id="faq"
      className="py-24 lg:px-8 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-strong px-4 py-1.5 text-sm text-label-soft mb-4">
            <Sparkles className="size-4 text-accent-blue-base" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-figtree text-label-title">
            {t.heading}
          </h2>
          <p className="mt-4 text-label-base max-w-xl">
            {t.subtitle}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="rounded-2xl border border-bg-translucent-strong bg-bg-strong px-6 data-[state=open]:border-accent-blue-base/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-label-title font-medium hover:text-accent-blue-base transition-colors no-underline hover:no-underline">
                {question}
              </AccordionTrigger>

              <AccordionContent>
                {answer.split("\n").map((line, i) => (
                  <p key={i} className={i > 0 ? "mt-2 text-label-base" : "text-label-base"}>
                    {line}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-bg-translucent-strong bg-bg-strong">
          <MessageCircle className="size-8 text-accent-blue-base" />
          <h3 className="text-lg font-semibold font-figtree text-label-title">
            {t.more}
          </h3>
          <p className="text-sm text-label-soft">
            {t.support}
          </p>
          <Link
            to={contactPath}
            className="inline-flex items-center gap-2 rounded-full bg-accent-blue-base text-white px-6 py-3 text-sm font-semibold hover:bg-accent-blue-base-hover transition-colors"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  );
};
