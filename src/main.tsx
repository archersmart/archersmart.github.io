import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { Contact } from "@/components/Contact.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ScrollToTop } from "@/components/ScrollToTop.tsx";
import { LanguageProvider } from "@/i18n/LanguageContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <ThemeProvider>
          <Routes>
            <Route
              path="/"
              element={<App />}
            />
            <Route
              path="/en"
              element={<App />}
            />
            <Route
              path="/contact-us"
              element={
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                  <ScrollToTop />
                </>
              }
            />
            <Route
              path="/en/contact-us"
              element={
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>
);
