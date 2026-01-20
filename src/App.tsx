import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Cases } from "./components/Cases";
import { Sponsors } from "./components/Sponsors";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./App.css";

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <Hero />
      <Sponsors />
      <Advantages />
      <Features />
      <Cases />
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <About />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
