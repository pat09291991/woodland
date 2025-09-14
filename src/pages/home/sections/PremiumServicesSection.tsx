import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import SectionDescription from "../../../components/SectionDescription";

const PremiumServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [isHoveringImage, setIsHoveringImage] = useState<boolean>(false);

  const services = [
    {
      id: 0,
      title: "All-In Wedding Package",
      description:
        "A complete, worry-free wedding experience from start to finish.",
    },
    {
      id: 1,
      title: "Resort Exclusive",
      description:
        "Enjoy the entire property privately for your special event.",
    },
    {
      id: 2,
      title: "Camping & Recreation",
      description:
        "Embrace the outdoors with our scenic campsites and fun activities.",
    },
  ];

  const images = [
    "https://img.freepik.com/premium-photo/bride-beautiful-interior-generative-ai_446633-13981.jpg",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  return (
    <section className="h-[65vh] bg-white py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 h-full">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          {/* Left Column - Text Content */}
          <div>
            {/* Section Title with Crown Icon */}
            <div className="flex items-center space-x-4 mb-8">
              <SectionTitle className="mb-0">Premium Services</SectionTitle>
              <img
                src="/src/assets/icons/crown_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Crown Icon"
                className="h-12 w-auto"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(58%) sepia(100%) saturate(2000%) hue-rotate(20deg) brightness(0.9) contrast(1.3)",
                }}
              />
            </div>

            {/* Description */}
            <SectionDescription className="mb-12">
              <p>Elevate your celebration with our exclusive offerings:</p>
            </SectionDescription>

            {/* Services List */}
            <div className="relative">
              {/* Single Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>

              <div>
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`flex items-center space-x-4 cursor-pointer group relative  ${
                      index === services.length - 1 ? "pb-0" : "pb-8"
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    {/* Vertical Line Indicator */}
                    <div className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-1 ${
                          selectedService === service.id
                            ? "bg-[#1a4731] h-20"
                            : "bg-gray-300 h-8"
                        }`}
                      />
                    </div>

                    {/* Service Content */}
                    <div className="flex-1 max-w-md">
                      <h3
                        className={`font-bold ${
                          selectedService === service.id
                            ? "text-xl text-[#1a4731]"
                            : "text-sm text-gray-600"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`${
                          selectedService === service.id
                            ? "text-xl text-gray-700"
                            : "text-xs text-gray-500"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="relative h-80 lg:h-96 rounded-2xl overflow-hidden"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            <img
              src={images[0]}
              alt="Premium Services"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHoveringImage ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={images[1]}
              alt="Premium Services Hover"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHoveringImage ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Call to Action Button - Inside Image */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-[#1a4731] hover:bg-[#0f2f1f] text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-lg">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;
