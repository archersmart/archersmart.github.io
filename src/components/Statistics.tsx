import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

type StatsProps = {
  quantity: string;
  description: string;
};

const DAY_MS = 24 * 60 * 60 * 1000;
const START_DATE_UTC_MS = Date.UTC(2026, 5, 4);

const getLocalDayUtcMs = (date: Date) =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

const mulberry32 = (seed: number) => {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const getOrdersIncrementForDayIndex = (dayIndex: number) => {
  const rng = mulberry32(0x3b0d_6e2f ^ dayIndex);
  return 2_000 + Math.floor(rng() * 1_001);
};

const getDownloadsIncrementForWeekIndex = (weekIndex: number) => {
  const rng = mulberry32(0x91a7_c3d1 ^ weekIndex);
  return 5 + Math.floor(rng() * 6);
};

const useCountUp = (target: number, durationMs: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const startMs = performance.now();

    const tick = (nowMs: number) => {
      const t = Math.min(1, (nowMs - startMs) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));

      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    setValue(0);
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [durationMs, target]);

  return value;
};

const formatOrdersK = (orders: number) =>
  `${Math.floor(orders / 1000).toLocaleString()}K+`;
const formatPlusInt = (value: number) => `${value.toLocaleString()}+`;
const formatInt = (value: number) => value.toLocaleString();

export const Statistics = () => {
  const { locale } = useLanguage();
  const t = translations[locale].statistics;

  const [todayUtcMs, setTodayUtcMs] = useState(() =>
    getLocalDayUtcMs(new Date())
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = getLocalDayUtcMs(new Date());
      setTodayUtcMs((prev) => (prev === next ? prev : next));
    }, 60_000);

    return () => window.clearInterval(id);
  }, []);

  const targets = useMemo(() => {
    const daysSinceStart = todayUtcMs >= START_DATE_UTC_MS
      ? Math.floor((todayUtcMs - START_DATE_UTC_MS) / DAY_MS) + 1
      : 0;

    let orders = 150_000;
    for (let day = 1; day <= daysSinceStart; day += 1) {
      orders += getOrdersIncrementForDayIndex(day);
    }

    const uptimeDays = 300 + daysSinceStart;

    const weeksSinceStart =
      daysSinceStart > 0 ? Math.floor((daysSinceStart - 1) / 7) + 1 : 0;
    let downloads = 500;
    for (let week = 1; week <= weeksSinceStart; week += 1) {
      downloads += getDownloadsIncrementForWeekIndex(week);
    }

    const products = 2;

    return { orders, uptimeDays, downloads, products };
  }, [todayUtcMs]);

  const ordersAnimated = useCountUp(targets.orders, 1200);
  const uptimeAnimated = useCountUp(targets.uptimeDays, 900);
  const downloadsAnimated = useCountUp(targets.downloads, 900);
  const productsAnimated = useCountUp(targets.products, 700);

  const stats: StatsProps[] = [
    { quantity: formatOrdersK(ordersAnimated), description: t.orders },
    { quantity: formatPlusInt(uptimeAnimated), description: t.uptimeDays },
    { quantity: formatPlusInt(downloadsAnimated), description: t.downloads },
    { quantity: formatInt(productsAnimated), description: t.products },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-inter-tight text-accent-blue-base">
              {quantity}
            </h2>
            <p className="text-sm text-label-soft">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
