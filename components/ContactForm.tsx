import React, { useState } from 'react';
import { Send, MessageCircle, MapPin } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Olá, me chamo ${name}. ${message ? `\n\n${message}` : '\nGostaria de agendar uma avaliação gratuita.'}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsappClean}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-medical-950 text-white relative overflow-hidden">
      {/* Subtle patterned background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="lg:w-5/12 pt-4">
            <span className="text-medical-400 font-bold text-xs tracking-[0.2em] uppercase mb-3 block">Fale Conosco</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight tracking-tight">
              Agende sua <br /><span className="text-medical-400">Avaliação</span>
            </h2>
            <p className="text-medical-100 text-lg mb-10 leading-relaxed font-light opacity-90">
              Entre em contato diretamente pelo WhatsApp. Tire suas dúvidas, consulte valores ou agende seu procedimento com a agilidade que você precisa.
            </p>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="bg-green-500 p-3.5 rounded-full shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-medical-200 mb-1 font-medium">WhatsApp & Telefone</p>
                  <p className="text-xl font-bold tracking-wide text-white">{DOCTOR_INFO.phone}</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="bg-medical-700 p-3.5 rounded-full group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-medical-200 mb-1 font-medium">Localização</p>
                  <p className="text-base font-semibold mb-1 text-white leading-snug">{DOCTOR_INFO.address}</p>
                  <p className="text-xs text-medical-400 uppercase tracking-wider font-bold mt-2">Próximo ao Metrô</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 w-full">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20 text-slate-800 border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Envie uma mensagem</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-4 focus:ring-medical-100 focus:border-medical-500 transition-all outline-none placeholder:text-slate-400 text-base"
                    placeholder="Como gostaria de ser chamado?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Como podemos ajudar?</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:ring-4 focus:ring-medical-100 focus:border-medical-500 transition-all outline-none resize-none placeholder:text-slate-400 text-base"
                    placeholder="Descreva brevemente sua necessidade (opcional)..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] shadow-lg shadow-green-600/25 flex items-center justify-center gap-3 text-lg mt-2"
                >
                  <Send size={20} />
                  Iniciar Conversa no WhatsApp
                </button>
                
                <p className="text-xs text-center text-slate-400 mt-6 leading-normal mx-auto max-w-xs">
                  Ao enviar, você será redirecionado para o WhatsApp do consultório.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};