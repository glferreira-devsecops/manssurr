import React, { useState } from 'react';
import { Send, Smartphone, Instagram } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, me chamo ${name}. ${message ? `\n\n${message}` : '\nGostaria de agendar uma avaliação gratuita.'}`;
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappClean}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-medical-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="lg:w-5/12 pt-4">
            <span className="text-medical-400 font-bold text-xs tracking-[0.2em] uppercase mb-3 block">CONTATO</span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Agende agora por mensagens de whatsapp
            </h2>
            
            <div className="bg-green-600/20 border border-green-500/30 p-6 rounded-xl mb-8 backdrop-blur-sm space-y-2">
               <p className="text-white font-bold text-lg leading-relaxed">
                 Faça sua consulta on line para avalição sem compromisso gratuitamente <span className="text-green-400 whitespace-nowrap">{DOCTOR_INFO.phone}</span>
               </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-medical-200 font-medium">WHATSAPP</p>
                  <p className="text-xl font-bold">{DOCTOR_INFO.phone}</p>
                </div>
              </div>

              <a 
                href={`https://instagram.com/${DOCTOR_INFO.instagram.replace('@', '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="bg-white p-3 rounded-full group-hover:bg-pink-50 transition-colors duration-300">
                  <Instagram className="text-[#E1306C]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-medical-200 font-medium">INSTAGRAM</p>
                  <p className="text-xl font-bold group-hover:text-pink-400 transition-colors duration-300">{DOCTOR_INFO.instagram}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-7/12 w-full">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 text-slate-800">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">FORMULÁRIO DE CONTATO</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Seu Nome</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-500 outline-none"
                    placeholder="Nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Mensagem</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-500 outline-none resize-none"
                    placeholder="Descreva o procedimento que deseja..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Agende agora no whatsapp
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};