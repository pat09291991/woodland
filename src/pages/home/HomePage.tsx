import React from "react";
import LandingSection from "./sections/LandingSection";
import AboutSection from "./sections/AboutSection";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <LandingSection />

      {/* Gold Logo - Between sections */}
      <div className="absolute bottom-[1rem] right-[-29rem] z-20 opacity-20">
        <img
          src="/src/assets/logos/woodland-branding-logo_icon-Gold.png"
          alt="Woodland Villa Gold Icon"
          className="h-[60rem] w-auto object-contain"
        />
      </div>

      <AboutSection />
    </div>
  );
};

export default HomePage;
