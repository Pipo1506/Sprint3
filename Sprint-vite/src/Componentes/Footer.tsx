// src/components/FooterComponent.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    onOpenModal?: () => void; 
}

const FooterComponent: React.FC<FooterProps> = ({ onOpenModal }) => {
    return (
        <footer className="bg-white p-10 border-t border-gray-300 mt-auto relative">
            <div className="flex flex-col sm:flex-row justify-around max-w-6xl mx-auto text-[#003366] gap-8">
                
                <div className="flex flex-col items-start">
                    <img src="/loogo.png" alt="Logo HC FMUSP" className="h-40 mb-4" />
                    
                    <button 
                        className="py-2 px-4 bg-gray-300 border-none rounded-md hover:bg-gray-400"
                        onClick={onOpenModal} 
                        disabled={!onOpenModal} 
                    >
                        Deixe sua sugestão
                    </button>
                </div>
                
                <div className="sm:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Hospital das Clínicas - FMUSP</h3>
                    <ul className="list-none p-0">
                        <li>Av. Dr. Enéas de Carvalho Aguiar, 255</li>
                        <li>Cerqueira César, São Paulo - SP</li>
                        <li>CEP 05403-000</li>
                        <li>Tel: (11) 2661-8000</li>
                    </ul>
                </div>
                
                <div className="sm:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Institucional</h3>
                    <ul className="list-none p-0">
                        <li><Link to="#" className="hover:text-[#0077c2]">Quem Somos</Link></li>
                        <li><Link to="#" className="hover:text-[#0077c2]">Missão, Visão e Valores</Link></li>
                        <li><Link to="#" className="hover:text-[#0077c2]">História</Link></li>
                        <li><Link to="#" className="hover:text-[#0077c2]">Transparência</Link></li>
                    </ul>
                </div>
                
                <div className="sm:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Transparência</h3>
                    <ul className="list-none p-0">
                        <li><Link to="#" className="hover:text-[#0077c2]">Transparência Ativa</Link></li>
                        <li><Link to="#" className="hover:text-[#0077c2]">Portal da Transparência</Link></li>
                        <li><Link to="#" className="hover:text-[#0077c2]">Editais e Licitações</Link></li>
                        <li><Link to="#" className="hover:text-[#0077c2]">Relatórios</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;