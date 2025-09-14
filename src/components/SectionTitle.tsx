import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-decorative font-bold text-[#0a2a25] leading-tight mb-4 sm:mb-6 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
