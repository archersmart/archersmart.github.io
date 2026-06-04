import { Mail, CalendarDays } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export const Contact = () => {
  const { locale } = useLanguage();
  const t = translations[locale].contact;

  return (
    <section
      id="contact"
      className="container p-40"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">{t.heading}</h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          {t.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t.emailTitle}</h3>
          <a
            href="mailto:contact@archersmart.ai"
            className="inline-flex items-center gap-3 text-primary hover:underline"
          >
            <Mail className="h-5 w-5" />
            <span>contact@archersmart.ai</span>
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t.meetingTitle}</h3>
          <a
            href="https://calendly.com/1block-ai2/30-minute-llmos-intro-discussion-clone"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 text-primary hover:underline"
          >
            <CalendarDays className="h-5 w-5" />
            <span>{t.meetingLink}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
