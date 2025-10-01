// src/pages/TimePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import TeamMemberCard from '../Componentes/TeamMemberCard';
import FooterComponent from '../Componentes/Footer';

interface TeamMember { 
    rm: string; 
    name: string; 
    role: string; 
    description: string; 
    image: string; 
}


const TEAM_DATA: TeamMember[] = [
  {
    rm: "RM562917",
    name: "HENRIQUE RODRIGUES",
    role: "PROGRAMADOR (Back-end)",
    description: "Sou programador back-end no HOSPITAL DAS CLÍNICAS, atuando no desenvolvimento e manutenção de sistemas que apoiam os fluxos clínicos e administrativos. Trabalho com linguagens como Python e Java, focando em API's seguras e escaláveis. Tenho experiência com bancos de dados e na integração de sistemas de saúde. Busco sempre aplicar boas práticas de código e contribuir para soluções eficientes.",
    image:  "/Henrique.png",
  },
  {
    rm: "RM565399",
    name: "PHILLPO BARBOSA",
    role: "PROGRAMADOR (Front-end/Chatbot)",
    description: "Tenho 19 anos, atualmente estou cursando “ADS” na FIAP e sou programador responsável pelo front-end no site do Hospital das Clínicas, atuando no desenvolvimento de interfaces intuitivas e acessíveis para sistemas que apoiam os fluxos clínicos e administrativos. Trabalho com tecnologias como HTML, CSS e JavaScript, focando na criação de experiências responsivas e funcionais para os usuários. Também atuo no desenvolvimento de chatbots utilizando ferramentas como IBM Watson Assistant, integrando-os a sistemas internos para facilitar o atendimento e automatizar processos. Busco sempre aplicar boas práticas de usabilidade, acessibilidade e performance, contribuindo para soluções que apoiam a excelência no cuidado à saúde.",
    image: "/Phillipo.png",
  },
];


const TimePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      
      
      <header className="flex justify-between items-center px-4 sm:px-8 py-4 bg-white border-b border-gray-200">
            <img src="/loogo.png" alt="Logo HC FMUSP" className="w-40 h-auto" />
            
            <Link to="/" className="text-[#003366] font-bold text-lg hover:text-[#0077c2] transition-colors">
                Home
            </Link>
      </header>

      <div className="flex flex-col items-center p-5 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-extrabold my-10 text-center text-[#0088CE]">
          CONHEÇA NOSSO TIME!
        </h1>
        
        
        <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-7xl w-full mb-12">
            {TEAM_DATA.map((member) => (
                
                <TeamMemberCard key={member.rm} member={member} />
            ))}
        </div>
      </div>
      
      
      <FooterComponent />
    </div>
  );
};

export default TimePage;