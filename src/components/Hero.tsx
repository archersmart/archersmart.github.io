import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { HeroCards } from "./HeroCards";

type TypingProps = {
  strings?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

const Typing = ({
  strings = ["更简单", "更高效", "更智能"],
  typingSpeed = 200,
  deletingSpeed = 200,
  delayBetweenWords = 3000,
}: TypingProps) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!strings.length) return;

    const currentString = strings[currentStringIndex] ?? "";
    const length = currentString.length;
    const delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex < length) {
      const id = window.setTimeout(
        () => setCurrentCharIndex((v) => v + 1),
        delay
      );
      return () => clearTimeout(id);
    }

    if (isDeleting && currentCharIndex > 0) {
      const id = window.setTimeout(
        () => setCurrentCharIndex((v) => v - 1),
        delay
      );
      return () => clearTimeout(id);
    }

    if (!isDeleting && currentCharIndex === length) {
      const id = window.setTimeout(() => setIsDeleting(true), delayBetweenWords);
      return () => clearTimeout(id);
    }

    if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentStringIndex((v) => (v + 1) % strings.length);
    }
  }, [
    strings,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    currentStringIndex,
    currentCharIndex,
    isDeleting,
  ]);

  const currentText = (strings[currentStringIndex] ?? "").substring(
    0,
    currentCharIndex
  );

  return (
    <span id="typing-wrapper">
      <span id="typing">{currentText}</span>
      <span className="ml-2 inline-block w-0 h-[0.9em] align-baseline border-r-2 border-current animate-cursor-blink" />
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#1fc0f1] via-[#0D66F4] to-[#1668D7] text-transparent bg-clip-text">
              ArcherSmart.AI
            </span>{" "}
            {/* landing page */}
          </h1>{" "} <br/>
          <h4 className="inline">
            <span className="inline bg-gradient-to-r bg-clip-text text-4xl">
              让我们帮您把企业生产与决策
              <br/>变得<Typing strings={["更简单", "更高效", "更智能"]} />
            </span>{" "}
          </h4>
        </main>

        <p className="text-sm text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          您的一站式 AI 智能生产与决策平台
        </p>

        <div className="space-y-4 md:space-y-4 md:space-x-4">
          <Button
            className="w-full md:w-1/3"
            asChild
          >
            <a href="/contact-us">预约体验</a>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
