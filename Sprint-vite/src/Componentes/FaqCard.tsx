import React from "react";

interface FaqCardProps {
  title: string;
  description: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ title, description }) => {
  return (
    <div className="faqservice shadow-md border border-gray-200 p-6 rounded-lg hover:scale-105 transition bg-white hover:bg-[#0077c2] hover:text-white">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-sm leading-6">{description}</p>
    </div>
  );
};

export default FaqCard;
