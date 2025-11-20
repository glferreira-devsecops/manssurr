import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Star, User } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // URL da imagem do médico carregada diretamente do GitHub (Raw)
  // Utilizando o commit hash específico fornecido pelo usuário
  const HERO_IMAGE_URL = "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/drmansur.jpeg";

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-medical-50 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-medical-100/30 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-slate-100/60 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 mb-16 lg:mb-0 text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-serif font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Dr Mansur <br />
              <span className="text-medical-600 relative inline-block">
                Biópsias.com
              </span>
            </h1>
            
            <div className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed space-y-4">
              <p>
                <strong className="font-semibold text-slate-800 block text-xl mb-2">{DOCTOR_INFO.education}.</strong>
                {DOCTOR_INFO.experience}, {DOCTOR_INFO.crm}.
              </p>
            </div>

            {/* Destaque solicitado */}
            <div className="bg-green-50 border border-green-100 p-4 rounded-xl mb-10 max-w-xl mx-auto lg:mx-0 shadow-sm">
              <p className="text-green-800 font-bold text-sm md:text-base flex items-center justify-center lg:justify-start gap-2">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                Faça sua consulta on line para avaliação sem compromisso gratuitamente
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={`https://wa.me/${DOCTOR_INFO.whatsappClean}?text=Olá,%20gostaria%20de%20uma%20avaliação%20gratuita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/30 hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Agende agora no whatsapp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center"
              >
                Ver Serviços
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-600">
               <div className="flex items-center gap-2">
                 <ShieldCheck size={18} className="text-medical-600" />
                 <span className="font-medium">{DOCTOR_INFO.crm}</span>
               </div>
               <div className="flex items-center gap-2">
                 <Star size={18} className="text-medical-600" />
                 <span className="font-medium">40+ Anos de Experiência</span>
               </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-100 aspect-[4/5] lg:h-[600px] flex items-center justify-center group">
              {!imageError ? (
                <>
                  <img 
                    src={HERO_IMAGE_URL} 
                    alt="Dr Mansur" 
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                  {/* Legenda/Overlay Nome do Médico */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-medical-900/90 to-transparent p-8 pt-24 text-center">
                     <span className="text-white font-serif text-3xl font-bold block">Dr Mansur</span>
                     <span className="text-medical-200 text-sm uppercase tracking-widest font-medium">Especialista</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-10 text-center bg-slate-50 w-full h-full">
                  <User size={80} className="text-medical-300 mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-slate-800">Dr Mansur</h3>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};