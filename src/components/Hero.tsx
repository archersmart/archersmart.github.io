import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";
import { HeroCards } from "./HeroCards";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Sparkles, ShieldCheck, Zap, ArrowRight } from "lucide-react";

type TypingProps = {
  strings?: readonly string[];
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
    <span id="typing-wrapper" className="inline-block pb-[2px]">
      <span id="typing">{currentText}</span>
      <span className="ml-2 inline-block w-0 h-[0.8em] align-baseline border-r-2 border-accent-blue-base animate-cursor-blink translate-y-[2px]" />
    </span>
  );
};

export const Hero = () => {
  const { locale } = useLanguage();
  const t = translations[locale].hero;
  const navigate = useNavigate();
  const location = useLocation();
  const basePath = locale === "en" ? "/en" : "/";
  const contactPath = locale === "en" ? "/en/contact-us" : "/contact-us";
  const handleInPageNav = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const scroll = (retries: number) => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (retries > 0) {
        window.requestAnimationFrame(() => scroll(retries - 1));
      }
    };

    if (location.pathname !== basePath) {
      navigate(basePath);
      window.setTimeout(() => scroll(30), 0);
      return;
    }

    scroll(1);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue-soft blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-soft blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-blue-soft/50 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge / pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-translucent-strong bg-bg-strong px-4 py-1.5 text-sm text-label-soft mb-6">
            <Sparkles className="size-4 text-accent-blue-base" />
            <span>{t.pill}</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter-tight tracking-tight max-w-5xl">
            <span className="inline bg-gradient-to-r from-accent-blue-base via-cyan-base to-accent-blue-base text-transparent bg-clip-text">
              ArcherSmart.AI
            </span>
            <br />
            <span className="text-label-title">
              {t.headlinePrefix}
              {locale === "en" ? " " : ""}
              <Typing strings={t.typing} />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-label-base max-w-2xl">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              className="rounded-full px-8 py-6 text-base font-semibold bg-accent-blue-base text-white hover:bg-accent-blue-base-hover shadow-accent-glow-sm hover:shadow-accent-glow transition-all duration-300"
              asChild
            >
              <Link to={contactPath}>
                {t.cta}
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold border-bg-translucent-strong text-label-base hover:text-label-title hover:bg-bg-shade"
              asChild
            >
              <a href="#features" onClick={(e) => handleInPageNav(e, "features")}>
                {t.secondaryCta}
              </a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-label-soft text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent-blue-base" />
              {t.trust[0]}
            </span>
            <span className="flex items-center gap-2">
              <Zap className="size-4 text-accent-blue-base" />
              {t.trust[1]}
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="size-4 text-cyan-base" />
              {t.trust[2]}
            </span>
          </div>
        </div>

        {/* Hero video showcase */}
        <div className="mt-16 max-w-5xl mx-auto">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};
