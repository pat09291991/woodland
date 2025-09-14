import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import SectionDescription from "../../../components/SectionDescription";

const AddOnServicesSection: React.FC = () => {
  const addOnServices = [
    {
      icon: "/src/assets/Icons/instant_mix_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Sound & Light Setup",
      description:
        "Professional audio and lighting to create the perfect mood.",
      iconColor: "#95633B",
    },
    {
      icon: "/src/assets/Icons/airport_shuttle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Transportation",
      description: "Hassle-free travel arrangements for you and your guests.",
      iconColor: "#B98C60",
    },
    {
      icon: "/src/assets/Icons/fork_spoon_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Catering",
      description:
        "Delectable menus tailored to your preferences and dietary needs.",
      iconColor: "#95633B",
    },
    {
      icon: "/src/assets/Icons/camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Photography & Videography",
      description: "Capture every memory with a skilled creative team.",
      iconColor: "#B98C60",
    },
    {
      icon: "/src/assets/Icons/event_note_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
      title: "Event Planning",
      description:
        "From concept to execution, our planners handle the details so you can enjoy your special day.",
      iconColor: "#95633B",
    },
  ];

  return (
    <section className="bg-white py-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-decorative font-bold text-[#0a2a25] leading-tight mb-4 sm:mb-6">
            Add-On Services
          </h2>
          <div className="space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#0a2a25] max-w-xl mx-auto">
            <p>
              Customize your experience with our optional services designed to
              make your occasion seamless and stress-free:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {addOnServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 transition-colors duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <div
                  className="w-20 h-20"
                  style={{
                    maskImage: `url(${service.icon})`,
                    WebkitMaskImage: `url(${service.icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    backgroundColor: service.iconColor,
                  }}
                />
              </div>
              <h3 className="text-sm font-bold text-[#0a2a25] leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-[#0a2a25] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnServicesSection;
