import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import SectionDescription from "../../../components/SectionDescription";

const VillasSection: React.FC = () => {
  const villas = [
    {
      id: 1,
      name: "Asher",
      price: "₱ 5,900",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "Kamagong",
      price: "₱ 3,200",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Virman",
      price: "₱ 10,000 – ₱ 15,000",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  // Duplicate villas for infinite carousel effect
  const duplicatedVillas = [...villas, ...villas, ...villas];

  return (
    <section
      className="h-screen md:h-[70vh] lg:h-screen flex flex-col"
      style={{ backgroundColor: "#f7f8f8" }}
    >
      <div className="w-full flex-1 flex flex-col">
        {/* Section Header */}
        <div className="text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8 animate-fade-in-up">
          <SectionTitle>Villas</SectionTitle>
          <div className="max-w-5xl mx-auto">
            <SectionDescription>
              <p>
                Pick the perfect villa for your stay and enjoy the comfort you
                deserve. Whether you're here to relax or explore, Woodland Villa
                offers a peaceful retreat to rest, recharge, and make lasting
                memories.
              </p>
            </SectionDescription>
          </div>
        </div>

        {/* Infinite Carousel - Full Width */}
        <div className="relative overflow-hidden w-full flex-1 flex items-start pt-4 sm:pt-8 pb-8">
          <div className="flex animate-scroll">
            {duplicatedVillas.map((villa, index) => (
              <div
                key={`${villa.id}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 lg:w-[28rem] mx-3 sm:mx-4 group cursor-pointer animate-fade-in-up"
                style={{
                  animationDelay: `${(index % 3) * 0.3}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Villa Image */}
                  <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={villa.image}
                      alt={villa.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Villa Details */}
                  <div className="p-4 sm:p-6 lg:p-8 text-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a4731] mb-2 sm:mb-3">
                      {villa.name}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-[#4a4a4a] mb-4 sm:mb-6">
                      {villa.price}
                    </p>
                    <button className="bg-[#a06a4a] hover:bg-[#8a5a3a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300">
                      View Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillasSection;
