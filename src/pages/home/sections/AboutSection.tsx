import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group min-h-[400px]">
            {/* Left Column - Video */}
            <div className="relative group-hover:col-span-2 transition-all duration-1000 ease-in-out">
              <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ease-in-out group-hover:h-[700px] group-hover:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Woodland Villa Experience"
                  className="w-full h-96 object-cover group-hover:h-full transition-all duration-1000 ease-in-out"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-black group-hover:bg-opacity-40 transition-all duration-1000 ease-in-out">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="#123120"
                      className="ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6 text-center px-8 group-hover:hidden">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                YOUR ALL-IN-ONE PLACE
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-center">
                <p>
                  Destination for relaxation, adventure, and gatherings. Nestled
                  in the heart of{" "}
                  <span className="font-bold text-gray-800">
                    Nagcarlan, Laguna
                  </span>
                  , this nature-centered haven is perfect for both intimate
                  getaways and large group events. With spacious villas, a
                  refreshing campsite, and a variety of activities, Woodland
                  Villa is designed to bring people together in a serene and
                  refreshing environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
