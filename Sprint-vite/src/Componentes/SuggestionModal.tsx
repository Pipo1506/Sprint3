

import React, { useState } from 'react';

interface SuggestionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuggestionModal: React.FC<SuggestionModalProps> = ({ isOpen, onClose }) => {
    
    const [formData, setFormData] = useState({
        name: '', email: '', telefone: '', sugestao: ''
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, telefone, sugestao } = formData;

        if (name === "" || email === "" || telefone === "" || sugestao === "") {
            alert("Preencha todos os campos");
            return;
        }

        
        alert("Obrigado por entrar em contato. (Dados não armazenados)");
        
        setFormData({ name: '', email: '', telefone: '', sugestao: '' });
        onClose();
    };
    
   
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="flex flex-col justify-center items-center pt-2 bg-[#04c9bc8e] w-[300px] h-[413px] rounded-xl pb-3 shadow-2xl">
                <form className="flex flex-col items-center gap-4 pt-2 w-[300px] h-[360px] relative" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nome: " value={formData.name} onChange={handleChange} className="w-[250px] h-[30px] rounded-md border-none p-2 text-sm focus:ring-[#006eff] focus:border-[#006eff]" />
                    <input type="email" name="email" placeholder="Email: " value={formData.email} onChange={handleChange} className="w-[250px] h-[30px] rounded-md border-none p-2 text-sm focus:ring-[#006eff] focus:border-[#006eff]" />
                    <input type="text" name="telefone" placeholder="Telefone: " value={formData.telefone} onChange={handleChange} className="w-[250px] h-[30px] rounded-md border-none p-2 text-sm focus:ring-[#006eff] focus:border-[#006eff]" />
                    <textarea name="sugestao" placeholder="Deixe sua sugestão" value={formData.sugestao} onChange={handleChange} className="w-[250px] h-[150px] rounded-md border-none p-2 text-sm resize-none focus:ring-[#006eff] focus:border-[#006eff]"></textarea>
                    <button type="submit" className="w-[250px] h-[30px] rounded-md border-none p-0 bg-[#0480f4] text-white font-bold cursor-pointer transition-colors hover:bg-opacity-80">ENVIAR</button>
                </form>
                <button onClick={onClose} className="w-[250px] h-[30px] rounded-md border-none p-0 bg-[#00000054] text-black cursor-pointer transition-colors hover:bg-opacity-80 mt-1">Fechar</button>
            </div>
        </div>
    );
};

export default SuggestionModal;