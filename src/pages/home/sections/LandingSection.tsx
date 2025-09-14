import React from "react";

const LandingSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/src/assets/videos/forest_trees.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Cloud Overlay Image */}
      <div className="absolute inset-0 z-5">
        <img
          src="/src/assets/overlays/cloud-overlay.png"
          alt="Cloud overlay"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Centered Branding */}
      <div className="relative z-10 flex h-full items-center justify-center mt-32">
        <div className="text-center">
          {/* Main Logo with Company Name */}
          <div className="flex justify-center">
            <img
              src="/src/assets/logos/woodland-branding-logo_green_text.png"
              alt="Woodland Villa Logo"
              className="h-[45vh] w-auto object-contain"
            />
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mt-[-24px] px-4 sm:px-6 lg:px-8">
            Your all-in-one destination for relaxation, adventure, and
            gatherings. Nestled in the heart of Nagcarlan, Laguna, this
            nature-centered haven offers spacious villas, refreshing campsites,
            and exciting activities perfect for intimate getaways and large
            group events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
