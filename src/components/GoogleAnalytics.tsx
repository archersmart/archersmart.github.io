import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || "G-PHWNV83MSL";

  useEffect(() => {
    if (!gaId) return;

    // Check if script already exists to prevent duplicate injection
    const scriptId = "google-analytics-script";
    if (document.getElementById(scriptId)) return;

    // Inject Google Analytics script
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);

    // Make gtag available globally
    window.gtag = gtag;
  }, [gaId]);

  return null;
};

export default GoogleAnalytics;
