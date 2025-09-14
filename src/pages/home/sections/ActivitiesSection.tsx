import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import SectionDescription from "../../../components/SectionDescription";

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      id: 1,
      name: "Swimming",
      price: "P100",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "Paintball",
      price: "P150",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Camping",
      price: "P800",
      image:
        "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section className="h-[64vh] bg-white py-16">
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle>Activities</SectionTitle>
          <SectionDescription className="max-w-4xl mx-auto">
            Step into the heart of nature and make every moment unforgettable.
            Choose from a variety of thrilling activities designed for fun,
            relaxation, and adventure.
          </SectionDescription>
        </div>

        {/* Activities Grid */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
              >
                {/* Activity Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Price Overlay */}
                  <div className="absolute top-4 right-4 bg-green-400 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {activity.price}
                  </div>
                </div>

                {/* Activity Footer */}
                <div className="bg-[#1a4731] px-6 py-4 flex items-center justify-between">
                  <h3 className="text-white text-xl font-bold">
                    {activity.name}
                  </h3>
                  <button className="bg-[#1a4731] hover:bg-[#0f2f1f] text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 border border-white/20 hover:border-white/40">
                    Book Activity
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
