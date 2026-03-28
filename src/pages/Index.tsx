import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import BubbleParticles from "@/components/BubbleParticles";
import NavigationDots from "@/components/NavigationDots";
import HeroSection from "@/components/sections/HeroSection";
import ShallowsSection from "@/components/sections/ShallowsSection";
import TwilightSection from "@/components/sections/TwilightSection";
import AbyssSection from "@/components/sections/AbyssSection";
import DiscoverySection from "@/components/sections/DiscoverySection";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("[id^='section-']");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, i) => {
        const el = section as HTMLElement;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <BubbleParticles />
          <NavigationDots activeSection={activeSection} />

          <main>
            <div id="section-0"><HeroSection /></div>
            <div id="section-1"><ShallowsSection /></div>
            <div id="section-2"><TwilightSection /></div>
            <div id="section-3"><AbyssSection /></div>
            <div id="section-4"><DiscoverySection /></div>
          </main>
        </>
      )}
    </>
  );
};

export default Index;
