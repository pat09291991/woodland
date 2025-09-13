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

      {/* Navigation Header */}
      <nav className="relative z-10">
        <div className="container mx-auto flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/logos/white_woodland-branding-logo_Icon_green.png"
              alt="Woodland Villa Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-16">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors text-2xl"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors text-2xl"
            >
              Activities
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors text-2xl"
            >
              Accommodation
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors text-2xl"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors text-2xl"
            >
              House Rules
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors text-2xl"
            >
              Tour
            </a>
          </div>

          {/* Book Now Button */}
          <button className="bg-[#123120] hover:bg-green-900 text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M352,0H64C28.704,0,0,28.704,0,64v192c0,35.296,28.704,64,64,64v80c0,6.24,3.648,11.936,9.312,14.528C75.456,415.52,77.728,416,80,416c3.744,0,7.456-1.312,10.4-3.84L197.92,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z" />
              <path d="M448,96v160c0,52.928-43.072,96-96,96H209.76l-70.368,60.288C145.92,414.528,152.768,416,160,416h154.08l107.488,92.16c2.976,2.528,6.688,3.84,10.432,3.84c2.272,0,4.576-0.48,6.688-1.472C444.384,507.936,448,502.24,448,496v-80c35.296,0,64-28.704,64-64V160C512,124.704,483.296,96,448,96z" />
            </svg>
            <span className="text-2xl">Book Now</span>
          </button>
        </div>
      </nav>

      {/* Centered Branding */}
      <div className="relative z-10 flex h-full items-center justify-center mt-8">
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
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-[-24px]">
            Discover Woodland Villa, a nature-centered getaway for intimate
            moments or big celebrations. Campsite, villas, and activities—all in
            one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
