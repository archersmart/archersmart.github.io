import { Mail, CalendarDays } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="container p-40"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">联系我们</h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          如果您希望与我们取得联系，请预约会议，我们会尽快与您沟通。
        </p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">想用邮件联系？</h3>
          <a
            href="mailto:contact@archersmart.ai"
            className="inline-flex items-center gap-3 text-primary hover:underline"
          >
            <Mail className="h-5 w-5" />
            <span>contact@archersmart.ai</span>
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">立即预约会议？</h3>
          <a
            href="https://calendly.com/1block-ai2/30-minute-llmos-intro-discussion-clone"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 text-primary hover:underline"
          >
            <CalendarDays className="h-5 w-5" />
            <span>Meet with us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
