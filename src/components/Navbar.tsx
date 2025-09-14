import React, { useState } from "react";

interface NavbarProps {
  isScrolled?: boolean;
  isHoveringTop?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled = false,
  isHoveringTop = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-10 group/nav">
      <div className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-40 py-4 sm:py-6 bg-gray-900/20 lg:bg-transparent group-hover/nav:backdrop-blur-md group-hover/nav:bg-gray-900/10 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={
              isScrolled && isHoveringTop
                ? "/src/assets/logos/woodland-branding-logo_icon-Gold.png"
                : "/src/assets/logos/white_woodland-branding-logo_Icon_green.png"
            }
            alt="Woodland Villa Logo"
            className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-16">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-lg xl:text-xl"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-lg xl:text-xl"
          >
            Activities
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-lg xl:text-xl"
          >
            Accommodation
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-lg xl:text-xl"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-lg xl:text-xl"
          >
            House Rules
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-lg xl:text-xl"
          >
            Tour
          </a>
        </div>

        {/* Desktop Book Now Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-[#123120] hover:bg-green-900 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-colors flex items-center space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="white"
              className="w-4 h-4 xl:w-5 xl:h-5"
            >
              <path d="M352,0H64C28.704,0,0,28.704,0,64v192c0,35.296,28.704,64,64,64v80c0,6.24,3.648,11.936,9.312,14.528C75.456,415.52,77.728,416,80,416c3.744,0,7.456-1.312,10.4-3.84L197.92,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z" />
              <path d="M448,96v160c0,52.928-43.072,96-96,96H209.76l-70.368,60.288C145.92,414.528,152.768,416,160,416h154.08l107.488,92.16c2.976,2.528,6.688,3.84,10.432,3.84c2.272,0,4.576-0.48,6.688-1.472C444.384,507.936,448,502.24,448,496v-80c35.296,0,64-28.704,64-64V160C512,124.704,483.296,96,448,96z" />
            </svg>
            <span className="text-lg xl:text-xl">Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="bg-[#123120] hover:bg-green-900 text-white px-4 py-2 rounded-full transition-colors text-sm">
            Book Now
          </button>
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-200 transition-all duration-300 p-2 hover:scale-110 active:scale-95"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="#"
            className={`block text-white hover:text-gray-200 transition-all duration-300 text-lg py-2 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.1s" : "0s" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className={`block text-white hover:text-gray-200 transition-all duration-300 text-lg py-2 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.15s" : "0s" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Activities
          </a>
          <a
            href="#"
            className={`block text-white hover:text-gray-200 transition-all duration-300 text-lg py-2 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.2s" : "0s" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accommodation
          </a>
          <a
            href="#"
            className={`block text-white hover:text-gray-200 transition-all duration-300 text-lg py-2 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.25s" : "0s" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className={`block text-white hover:text-gray-200 transition-all duration-300 text-lg py-2 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.3s" : "0s" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            House Rules
          </a>
          <a
            href="#"
            className={`block text-white hover:text-gray-200 transition-all duration-300 text-lg py-2 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.35s" : "0s" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tour
          </a>
          <div
            className={`pt-4 border-t border-gray-700 transition-all duration-300 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "0.4s" : "0s" }}
          >
            <button className="w-full bg-[#123120] hover:bg-green-900 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95">
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
              <span className="text-lg">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
