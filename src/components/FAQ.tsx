import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Archer 智能排产系统是否免费？",
    answer: "您可以联系我们免费试用 Archer 智能排产系统，也可以联系我们购买专业版。",
    value: "item-1",
  },
  {
    question: "Archer 智能排产系统的专业版是否有时间限制？",
    answer:
      "Archer 智能排产系统的专业版是一个无时间限制的版本，您可以根据自己的需求进行使用。",
    value: "item-2",
  },
  {
    question:
      "Archer 智能排产系统的专业版是否有功能限制？",
    answer:
      "无限制，Archer 智能排产系统的专业版功能完善，覆盖了智能排产、库存管理、订单管理、AI 助手等多个方面。",
    value: "item-3",
  },
  {
    question: "Archer 智能排产系统的专业版是否有技术支持？",
    answer: "您可以通过电话、短信、邮件等方式联系我们获取专业版的技术支持和咨询服务。",
    value: "item-4",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-clip-text">
          常见问题{" "}
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        还有其他问题吗？{""}
        <a
          rel="noreferrer noopener"
          href="/contact-us"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          联系我们
        </a>
      </h3>
    </section>
  );
};
