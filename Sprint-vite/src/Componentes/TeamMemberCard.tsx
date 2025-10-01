

import React from 'react';


interface TeamMember {
  rm: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="w-full lg:w-[45%] flex flex-col p-4">
      <section className="flex items-center gap-4 mb-4">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-20 h-20 rounded-full object-cover shadow-md" 
        />
        <h2 className="text-xl font-bold text-[#003366]">{member.name}</h2>
      </section>
      
      <p className="text-sm mb-1 text-gray-500">TURMA: 1TDSA, RM:{member.rm}</p>
      <h3 className="text-base font-semibold text-gray-400 mb-4">{member.role}</h3>
      <p className="text-sm leading-relaxed text-gray-700">
        {member.description}
      </p>
    </div>
  );
};

export default TeamMemberCard;