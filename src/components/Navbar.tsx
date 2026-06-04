import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { buttonVariants } from "./ui/button";
import { Check, Globe, Menu } from "lucide-react";
import logo from "../assets/icon.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

type SectionKey = "advantages" | "features" | "user-cases" | "faq";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { locale, setLocale } = useLanguage();
  const t = translations[locale].navbar;
  const basePath = locale === "en" ? "/en" : "/";

  const routeList: { id: SectionKey; label: string }[] = [
    { id: "advantages", label: t.links.advantages },
    { id: "features", label: t.links.features },
    { id: "user-cases", label: t.links.cases },
    { id: "faq", label: t.links.faq },
  ];

  const handleSectionClick = (targetId: SectionKey) => {
    setIsOpen(false);

    if (location.pathname !== basePath) {
      navigate(basePath);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const languageOptions = [
    { locale: "zh" as const, label: "中文" },
    { locale: "en" as const, label: "English" },
  ];

  const languageMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Language"
          className={`${buttonVariants({ variant: "ghost", size: "icon" })} bg-transparent hover:bg-transparent text-label-soft hover:text-label-title`}
        >
          <Globe className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[12rem] bg-bg-strong border-bg-translucent-strong">
        {languageOptions.map((opt) => (
          <DropdownMenuItem
            key={opt.locale}
            onSelect={() => setLocale(opt.locale)}
            className="flex items-center justify-between gap-6 text-label-base hover:text-label-title hover:bg-bg-shade"
          >
            <span>{opt.label}</span>
            {locale === opt.locale ? <Check className="h-4 w-4 text-accent-blue-base" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg-base/80 border-b border-bg-translucent-strong">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <button
              type="button"
              onClick={() => navigate(basePath)}
              className="ml-2 font-bold text-xl flex items-center gap-2"
            >
              <img src={logo} alt="ArcherSmart.AI" className="w-9 h-9" />
              <span className="font-figtree text-label-title">{t.brand}</span>
            </button>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden items-center gap-2">
            {languageMenu}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5 text-label-soft"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-bg-base border-bg-translucent-strong">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl font-figtree text-label-title">
                    {t.mobileTitle}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ id, label }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => handleSectionClick(id)}
                      className="text-label-title hover:text-accent-blue-base"
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {routeList.map((route) => (
              <button
                type="button"
                key={route.id}
                onClick={() => handleSectionClick(route.id)}
                className="px-4 py-2 text-sm font-medium text-label-title hover:text-accent-blue-base transition-colors duration-200"
              >
                {route.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {languageMenu}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
