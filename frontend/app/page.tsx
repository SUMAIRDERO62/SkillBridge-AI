import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CareerPaths from "../components/sections/CareerPaths";
import Cta from "../components/sections/Cta";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import WhySkillBridge from "../components/sections/WhySkillBridge";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CareerPaths />
        <WhySkillBridge />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
