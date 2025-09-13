import React from "react";

interface NavbarProps {
  isScrolled?: boolean;
  isHoveringTop?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled = false,
  isHoveringTop = false,
}) => {
  return (
    <nav className="relative z-10 group/nav">
      <div className="w-full flex items-center justify-between px-40 py-6 group-hover/nav:backdrop-blur-md group-hover/nav:bg-gray-900/10 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={
              isScrolled && isHoveringTop
                ? "/src/assets/logos/woodland-branding-logo_icon-Gold.png"
                : "/src/assets/logos/white_woodland-branding-logo_Icon_green.png"
            }
            alt="Woodland Villa Logo"
            className="h-20 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-16">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-xl"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-xl"
          >
            Activities
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-xl"
          >
            Accommodation
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-xl"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-xl"
          >
            House Rules
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors text-xl"
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
  );
};

export default Navbar;
