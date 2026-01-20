import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { Contact } from "@/components/Contact.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ScrollToTop } from "@/components/ScrollToTop.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
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
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
