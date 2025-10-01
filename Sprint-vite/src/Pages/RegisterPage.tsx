

import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 

const RegisterPage: React.FC = () => {
  const navigate = useNavigate(); 
  
  
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    isNotRobot: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, value, checked } = e.target;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    
    
    console.log("Cadastro simulado. Dados:", formData);
    alert('Cadastro finalizado com sucesso! Redirecionando para a Home.');
    
    
    navigate('/'); 
  };

  return (
   
    <div className="flex justify-center items-center min-h-screen bg-white p-4 sm:p-8">
      
      <div className="flex flex-col items-center w-full max-w-sm p-6 bg-white shadow-xl rounded-lg">
        
        
        <img src="/loogo - cópia.png" alt="Logo HC FMUSP" className="w-[300px] mb-4" /> 
        
        
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
          
          <input type="text" name="fullName" placeholder="Nome completo" value={formData.fullName} onChange={handleChange} required className="p-3 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"/>
          <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required className="p-3 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"/>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-3 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"/>
          <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required className="p-3 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"/>
          <input type="password" name="confirmPassword" placeholder="Confirme a senha" value={formData.confirmPassword} onChange={handleChange} required className="p-3 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"/>
          
          
          <div className="flex items-center gap-2 text-xs text-left mt-2">
            <input type="checkbox" id="termos" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required className="w-4 h-4 text-[#009fe3] border-gray-300 rounded focus:ring-[#009fe3]"/>
            <label htmlFor="termos" className="text-gray-700">EU ACEITO OS TERMOS E COMPROMISSOS</label>
          </div>
          
          
          <div className="flex items-center justify-center gap-2 my-4 text-sm">
            <input type="checkbox" id="nao-robo" name="isNotRobot" checked={formData.isNotRobot} onChange={handleChange} className="w-4 h-4 text-[#009fe3] border-gray-300 rounded focus:ring-[#009fe3]"/>
            <label htmlFor="nao-robo" className="text-gray-700">Eu não sou robô</label>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-7 ml-2" />
          </div>
          
          
          <button type="submit" className="bg-[#009fe3] text-white p-3 border-none rounded cursor-pointer font-bold hover:bg-[#007fb0] transition-colors">
            FINALIZAR
          </button>
        </form>

        <p className="text-xs mt-3 text-gray-600">Já tem uma conta?</p>
        
        
        <Link to="/" className="text-lg text-[#003366] font-bold mt-1 hover:text-[#009fe3] transition-colors">
            Página Inicial
        </Link>

        
        <footer className="mt-6 text-xs text-center text-gray-500">
          <small>
            Ao se inscrever, você concorda <Link to="#" className="text-[#009fe3] hover:underline">Nossos termos</Link><br />
            e nossa <Link to="#" className="text-[#009fe3] hover:underline">política de Privacidade</Link>
          </small>
        </footer>
      </div>
    </div>
  );
};

export default RegisterPage;