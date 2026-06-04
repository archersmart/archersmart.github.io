import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Locale } from "./types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "archersmart.locale";

const readStoredLocale = (): Locale | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw === "en" || raw === "zh" ? raw : null;
  } catch {
    return null;
  }
};

const writeStoredLocale = (locale: Locale) => {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    return;
  }
};

const getBrowserLocale = (): Locale => {
  try {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    const normalized = languages
      .filter(Boolean)
      .map((lang) => lang.toLowerCase());
    return normalized.some((lang) => lang === "zh" || lang.startsWith("zh-"))
      ? "zh"
      : "en";
  } catch {
    return "en";
  }
};

export const getLocaleFromPathname = (pathname: string): Locale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";

const stripEnPrefix = (pathname: string) => {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
};

const addEnPrefix = (pathname: string) => {
  const zhPath = stripEnPrefix(pathname);
  return zhPath === "/" ? "/en" : `/en${zhPath}`;
};

export const toLocalePathname = (pathname: string, locale: Locale) => {
  const zhPath = stripEnPrefix(pathname);
  return locale === "en" ? addEnPrefix(zhPath) : zhPath;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const didInitRedirect = useRef(false);

  const locale = useMemo(
    () => getLocaleFromPathname(location.pathname),
    [location.pathname]
  );

  useEffect(() => {
    if (didInitRedirect.current) return;
    didInitRedirect.current = true;

    const preferred = readStoredLocale();
    const pathnameHasExplicitLocale =
      location.pathname === "/en" || location.pathname.startsWith("/en/");

    if (preferred) {
      const desiredPath = toLocalePathname(location.pathname, preferred);
      if (desiredPath !== location.pathname) {
        navigate(desiredPath, { replace: true });
      }
      return;
    }

    if (pathnameHasExplicitLocale) {
      writeStoredLocale("en");
      return;
    }

    const browserLocale = getBrowserLocale();
    writeStoredLocale(browserLocale);

    const desiredPath = toLocalePathname(location.pathname, browserLocale);
    if (desiredPath !== location.pathname) {
      navigate(desiredPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      writeStoredLocale(nextLocale);
      const desiredPath = toLocalePathname(location.pathname, nextLocale);
      if (desiredPath !== location.pathname) navigate(desiredPath);
    },
    [location.pathname, navigate]
  );

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
