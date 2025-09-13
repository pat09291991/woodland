import React from "react";

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
      className="h-screen flex flex-col"
      style={{ backgroundColor: "#f7f8f8" }}
    >
      <div className="w-full flex-1 flex flex-col">
        {/* Section Header */}
        <div className="text-center py-16 px-8">
          <h2 className="text-6xl font-bold text-[#1a4731] mb-6">VILLAS</h2>
          <p className="text-lg text-[#4a4a4a] max-w-4xl mx-auto leading-relaxed">
            Pick the perfect villa for your stay and enjoy the comfort you
            deserve. Whether you're here to relax or explore, Woodland Villa
            offers a peaceful retreat to rest, recharge, and make lasting
            memories.
          </p>
        </div>

        {/* Infinite Carousel - Full Width */}
        <div className="relative overflow-hidden w-full flex-1 flex items-start pt-8">
          <div className="flex animate-scroll">
            {duplicatedVillas.map((villa, index) => (
              <div
                key={`${villa.id}-${index}`}
                className="flex-shrink-0 w-80 mx-4 group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  {/* Villa Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={villa.image}
                      alt={villa.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Villa Details */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-[#1a4731] mb-2">
                      {villa.name}
                    </h3>
                    <p className="text-lg text-[#4a4a4a] mb-4">{villa.price}</p>
                    <button className="bg-[#a06a4a] hover:bg-[#8a5a3a] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
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
