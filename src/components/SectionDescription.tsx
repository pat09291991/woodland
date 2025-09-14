import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`space-y-4 text-lg leading-relaxed text-[#0a2a25] ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionDescription;
