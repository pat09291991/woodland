import React, { useState, useEffect } from "react";
import LandingSection from "./sections/LandingSection";
import AboutSection from "./sections/AboutSection";
import ActivitiesSection from "./sections/ActivitiesSection";
import VillasSection from "./sections/VillasSection";
import PremiumServicesSection from "./sections/PremiumServicesSection";
import AddOnServicesSection from "./sections/AddOnServicesSection";
import GetInTouchSection from "./sections/GetInTouchSection";
import Navbar from "../../components/Navbar";

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHoveringTop, setIsHoveringTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show blur background when scrolled past 50px
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Only check hover when scrolled and on desktop
    if (!isScrolled) return;

    // Use clientY directly for viewport coordinates (any part of the homepage)
    const y = event.clientY;

    // Check if hovering in top 180px area of the viewport (desktop only)
    setIsHoveringTop(y <= 120);
  };

  const handleMouseLeave = () => {
    // Reset hover state when leaving the page
    setIsHoveringTop(false);
  };

  return (
    <div
      className="min-h-screen relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fixed Navbar - always visible at top with conditional blur */}
      <div
        className={`fixed top-0 left-0 w-full z-50 ${
          isScrolled
            ? `backdrop-blur-md ${
                isHoveringTop
                  ? "bg-gray-900/10 transition-all duration-300"
                  : "bg-gray-900/10 lg:-mt-[180px]"
              }`
            : "lg:bg-transparent"
        }`}
      >
        <Navbar isScrolled={isScrolled} isHoveringTop={isHoveringTop} />
      </div>

      {/* Gold Logo - Between landing and about sections only */}
      <div className="relative overflow-hidden">
        <LandingSection />
        <div className="hidden lg:block absolute bottom-[1rem] right-[-20rem] z-1 opacity-20 pointer-events-none">
          <img
            src="/src/assets/logos/woodland-branding-logo_icon-Gold.png"
            alt="Woodland Villa Gold Icon"
            className="h-[60rem] w-auto object-contain"
          />
        </div>
        <AboutSection />
      </div>

      <VillasSection />

      <ActivitiesSection />

      <PremiumServicesSection />

      <AddOnServicesSection />

      <GetInTouchSection />
    </div>
  );
};

export default HomePage;
