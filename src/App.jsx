import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Achievements from "./components/sections/Achievements";
import Academics from "./components/sections/Academics";
import AdmissionsCTA from "./components/sections/AdmissionsCTA";
import Campus from "./components/sections/Campus";
import Hero from "./components/sections/Hero";
import Sports from "./components/sections/Sports";
import Testimonials from "./components/sections/Testimonials";
import WhyTIS from "./components/sections/WhyTIS";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyTIS />
        <Academics />
        <Sports />
        <Campus />
        <Achievements />
        <Testimonials />
        <AdmissionsCTA />
      </main>

      <Footer />
    </>
  );
}