// src/pages/HomePage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Componentes/ServiceCard';
import SuggestionModal from '../Componentes/SuggestionModal';
import FooterComponent from '../Componentes/Footer';

// Interfaces e Dados de Serviço/FAQ movidos para o componente
interface ServiceItem { id: number; title: string; description: string; }
interface FaqItem { id: number; question: string; answer: string; }

const SERVICE_DATA: ServiceItem[] = [/* ... dados de 6 serviços ... */
  {id: 1, title: "Pronto Atendimento", description: "O Pronto-Atendimento Central funciona 24h..."}, 
  {id: 2, title: "Internação Domiciliar", description: "O Programa de Cuidado Integral no Lar..."},
  {id: 3, title: "Pronto Socorro Adulto", description: "O Pronto Socorro Adulto é destinado..."},
  {id: 4, title: "Pronto Socorro Ortopedia", description: "O Pronto Socorro de Ortopedia é referência..."},
  {id: 5, title: "Unidades de Terapia Intensiva", description: "A Unidade é destinada à assistência..."},
  {id: 6, title: "Ambulatório de Especialidades", description: "O Ambulatório de Especialidades do HC..."}
];

const FAQ_DATA: FaqItem[] = [/* ... dados de 9 FAQs ... */
  { id: 1, question: "Quais especialidades médicas o hospital oferece?", answer: "..." },
  { id: 2, question: "Como faço para agendar uma consulta?", answer: "..." },
  { id: 3, question: "O hospital realiza exames laboratoriais e de imagem", answer: "..." },
  { id: 4, question: "Como funciona o processo de internação", answer: "..." },
  { id: 5, question: "O hospital tem pronto atendimento 24h?", answer: "..." },
  { id: 6, question: "Quais casos são atendidos na emergência?", answer: "..." },
  { id: 7, question: "Como agendar exames no hospital?", answer: "..." },
  { id: 8, question: "Onde fica o Hospital das Clínicas?", answer: "..." },
  { id: 9, question: "Como faço para fazer uma doação para o Hospital", answer: `As doações podem ser feitas por meio da Fundação Faculdade de Medicina (FFM) ou através de campanhas oficiais divulgadas pelo próprio hospital. É recomendável visitar o site oficial para informações seguras: <a href="http://www.hc.fm.usp.br" class="text-white hover:text-blue-200">www.hc.fm.usp.br</a>` },
];


const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => setIsModalOpen(true); 

  return (
    <div className="min-h-screen bg-white text-[#003366] flex flex-col">
      
      {/* HEADER */}
      <header className="flex justify-between items-center p-4 sm:px-8 bg-white shadow-md">
        <img src="/loogo.png" alt="Logo HC FMUSP" className="h-[150px]" />
        <div className="flex gap-4 items-center">
          <Link to="/time" className="text-[#003366] font-bold hidden sm:block hover:text-[#0077c2]">Integrantes</Link>
          <button className="py-2 px-4 bg-gray-300 border-none rounded-lg cursor-pointer hover:bg-gray-400 text-sm sm:text-base">Solicitar um agendamento</button>
          <Link to="/cadastro" className="text-[#003366] font-bold hover:text-[#0077c2] text-sm sm:text-base">Cadastre-se</Link>
        </div>
      </header>

      <main className="flex-grow">
        
        {/* NAVBAR */}
        <nav className="flex justify-center mb-[-10px] z-10 relative">
          <div className="bg-white p-2 rounded-2xl shadow-lg ring-4 ring-gray-200/50 flex flex-wrap justify-center">
            {['Paciente', 'O hospital', 'Ensino e Pesquisa', 'Inovação', 'Planos de Saúde', 'Doações', 'Transparência'].map(item => (
                <a key={item} href="#" className="text-[#003366] p-2 sm:px-4 sm:py-2 border-r border-gray-300 last:border-r-0 hover:bg-gray-200/40 rounded-lg">{item}</a>
            ))}
          </div>
        </nav>

        {/* CARROSSEL / HERO */}
        <section className="bg-[url('/Medico.png')] bg-cover bg-center h-[500px]">
          <div className="pt-12 pl-[50%]">
            <div className="bg-white py-1 px-4 rounded-2xl inline-block mb-4 text-[#0077c2]">❤️ O melhor para você</div>
            <h1 className="text-2xl sm:text-3xl mb-4 text-[#0077c2] font-bold">Contribuindo para a Saúde Pública no HC da USP</h1>
            <button className="py-3 px-6 bg-[#0087dc] text-white border-none rounded-[30px] font-bold cursor-pointer mt-[20%] ml-[50%]">AGENDAR EXAME</button>
          </div>
        </section>

        {/* STATS */}
        <section className="flex flex-wrap justify-around p-8 bg-white">
          <div><h2 className="text-[#0087dc] text-3xl sm:text-4xl font-bold">80+</h2><p>Anos de experiência</p></div>
          <div><h2 className="text-[#0087dc] text-3xl sm:text-4xl font-bold">15+</h2><p>Unidades pelo Brasil</p></div>
          <div><h2 className="text-[#0087dc] text-3xl sm:text-4xl font-bold">20.000+</h2><p>Funcionários prontos<br/>para te auxiliar</p></div>
          <div><h2 className="text-[#0087dc] text-3xl sm:text-4xl font-bold">9+</h2><p>Parceiros que apoiam<br/>nossa causa</p></div>
        </section>

        {/* SEÇÃO DE SERVIÇOS (RENDERIZAÇÃO DINÂMICA) */}
        <section className="flex flex-col lg:flex-row w-full items-center py-12">
          <div className="flex flex-row lg:flex-col items-center w-full lg:w-[200px] mb-8 lg:mb-0 lg:ml-16">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-[#003366] transform lg:rotate-180 lg:writing-mode-vertical-rl lg:text-orientation-sideways lg:mr-16">SERVIÇOS</h1>
            <h2 className="text-xl text-[#0077c2] lg:mt-[150%] ml-4 lg:ml-0">HOSPITAL DAS CLINICAS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center w-full max-w-6xl p-4 lg:p-0 lg:ml-20">
            {SERVICE_DATA.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
        
        <section className="flex flex-col w-full items-center p-8 bg-gray-50">
          <div className="mb-10">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-[#0a3d6c] text-center">PERGUNTAS FREQUENTES</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-7xl">
            {FAQ_DATA.map((faq) => (
              <div key={faq.id} className="shadow-xl w-full max-w-xs h-[300px] p-4 flex flex-col gap-4 justify-between transition-all duration-300 ease-in-out hover:scale-[1.05] hover:bg-[#0077c2] hover:text-white mx-auto">
                <h2 className="text-xl font-bold">{faq.question}</h2>
                <p className="leading-5 text-sm" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO DE FORMULÁRIO (Simplificada: campos não controlados para fins visuais) */}
        <section className="bg-blue-500 py-10 px-4">
          <div className="flex flex-col lg:flex-row justify-center max-w-5xl mx-auto gap-10">
            <div className="w-full lg:w-1/2 p-0">
              <form className="flex flex-col gap-3" onSubmit={(e) => {e.preventDefault(); alert("Formulário de Contato Enviado (Simulação)");}}>
                <label htmlFor="name" className="text-white font-normal text-sm">Seu Nome </label>
                <input type="text" id="name" name="name" required className="w-full bg-transparent border-none border-b-2 border-white text-white p-1 focus:border-blue-300 outline-none transition-colors" />
                <label htmlFor="email" className="text-white font-normal text-sm mt-3">Seu E-mail </label>
                <input type="email" id="email" name="email" required className="w-full bg-transparent border-none border-b-2 border-white text-white p-1 focus:border-blue-300 outline-none transition-colors" />
                <label htmlFor="phone" className="text-white font-normal text-sm mt-3">Seu Telefone </label>
                <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border-none border-b-2 border-white text-white p-1 focus:border-blue-300 outline-none transition-colors" />
                <label htmlFor="message" className="text-white font-normal text-sm mt-3">Mensagem </label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-transparent border-none border-b-2 border-white text-white p-1 focus:border-blue-300 outline-none transition-colors"></textarea>
                <div className="flex items-center mt-4">
                  <input type="checkbox" id="robot" required className="w-auto mr-2 accent-blue-700" />
                  <label htmlFor="robot" className="text-white text-sm m-0">I'm not a robot</label>
                </div>
                <button type="submit" className="bg-[#035d99] text-white border-none py-2 px-6 w-32 rounded-md font-bold cursor-pointer mt-4 hover:bg-blue-700 transition-colors">ENVIAR</button>
              </form>
            </div>
            <div className="text-white w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Fale Conosco!</h2>
              <p className="text-lg font-normal mb-3">Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.*</p>
              <p className="text-4xl font-bold text-white mt-2">(19) 3521-2121</p>
            </div>
          </div>
        </section>
      </main>
      
      <FooterComponent onOpenModal={openModal} /> 
      <SuggestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;