import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import SectionDescription from "../../../components/SectionDescription";

const GetInTouchSection: React.FC = () => {
  const contactMethods = [
    {
      icon: "/assets/Icons/chat_bubble_50dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg",
      title: "Facebook Messenger",
      description: "Instant booking & inquiries.",
      secondDescription: "Fastest response time",
      buttonText: "Message Us",
      buttonStyle: "bg-[#B98C60] text-white hover:bg-[#7a4f2f]",
    },
    {
      icon: "/assets/Icons/phone_in_talk_50dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg",
      title: "Phone Call",
      description: "Direct line to our team",
      secondDescription: "+63 917 123 4567",
      buttonText: "Call Now",
      buttonStyle:
        "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
    },
    {
      icon: "/assets/Icons/mail_50dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg",
      title: "Email",
      description: "Send us detailed inquiries",
      secondDescription: "info@woodlandvillaph.com",
      buttonText: "Send Email",
      buttonStyle:
        "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
    },
  ];

  return (
    <section className="bg-white py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <SectionDescription>
              <p>
                Ready to book your perfect getaway? Contact us through your
                preferred method and let us help you plan an unforgettable
                experience.
              </p>
            </SectionDescription>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg py-4 sm:py-6 hover:shadow-md transition-shadow duration-300 px-4 sm:px-8 lg:px-16"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div
                      className="w-8 h-8"
                      style={{
                        maskImage: `url(${method.icon})`,
                        WebkitMaskImage: `url(${method.icon})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        backgroundColor: "#0a2a25",
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0a2a25] mb-2">
                      {method.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                      <p className="text-xs text-[#0a2a25] mb-4 leading-relaxed flex flex-col">
                        <span>{method.description}</span>
                        <span className="font-bold">
                          {method.secondDescription}
                        </span>
                      </p>
                      <button
                        className={`px-6 py-2 w-full sm:w-36 rounded-lg text-xs transition-colors duration-300 ${method.buttonStyle}`}
                      >
                        {method.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Location and Social */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="bg-[#0a2a25] rounded-lg pt-8 px-2 pb-2 text-center text-white">
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-sm leading-relaxed">
                Brgy. Taytay, Nagcarlan Laguna
              </p>
              <p className="text-sm mb-4 leading-relaxed">4002, Philippines</p>
              <div className="rounded-lg h-48 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.4813926734205!2d121.41464557596117!3d14.1077637863223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5a43f5018d99%3A0xe6499bd1432cfe89!2sWoodland%20Villa!5e0!3m2!1sen!2sph!4v1757817238360!5m2!1sen!2sph"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Connect with Us Card */}
            <div className="bg-white border border-gray-200 rounded-lg px-4 sm:px-8 lg:px-16 py-4 sm:py-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-[#0a2a25] mb-2">
                    Connect with Us
                  </h3>
                  <p className="text-sm text-[#0a2a25] leading-relaxed mb-0">
                    Stay updated with our latest <br /> offers and news
                  </p>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                    style={{
msTextAutospace                      maskImage: `url(/assets/Icons/letter-f_3665895.svg)`,
                      WebkitMaskImage: `url(/assets/Icons/letter-f_3665895.svg)`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      backgroundColor: "#B98C60",
                    }}
                  />
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                    style={{
                      maskImage: `url(/assets/Icons/instagram_3670274.svg)`,
                      WebkitMaskImage: `url(/assets/Icons/instagram_3670274.svg)`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      backgroundColor: "#B98C60",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
