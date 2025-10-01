

import React from 'react';
import { useNavigate } from 'react-router-dom';


interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate(); 

  const handleSaibaMais = () => {
    navigate(`/service/${service.id}`); 
  };

  return (
    <div 
      className={`shadow-xl w-full max-w-xs h-[300px] p-4 flex flex-col gap-4 justify-between transition-all duration-300 ease-in-out cursor-pointer 
        hover:scale-[1.05] hover:bg-[#0077c2] hover:text-white mx-auto`}
    >
      <div>
        <img alt="" className="w-10 h-10 bg-gray-200" />
        <h1 className="text-xl font-bold mt-2">{service.title}</h1>
      </div>
      <p className="leading-5 text-sm">{service.description}</p>
      
      <button 
        className="w-[100px] py-1 px-2 text-sm border border-current rounded-md transition-colors hover:bg-white hover:text-[#0077c2]"
        onClick={handleSaibaMais}
      >
        Saiba mais
      </button>
    </div>
  );
};

export default ServiceCard;