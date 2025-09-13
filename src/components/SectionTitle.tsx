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
      className={`text-4xl font-decorative font-bold text-gray-800 leading-tight ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
