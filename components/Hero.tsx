import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-medical-100 text-medical-800 text-xs md:text-sm font-semibold mb-8 shadow-soft hover:shadow-md transition-shadow duration-300 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Avaliação Online Gratuita Disponível
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Excelência em <br className="hidden lg:block" />
              <span className="text-medical-600 relative inline-block">
                Pequenas Cirurgias
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-medical-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                </svg>
              </span> e Biópsias
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              <strong className="font-medium text-slate-800">{DOCTOR_INFO.experience}.</strong> Atendimento humanizado, pontual e seguro no Rio de Janeiro. Resolva nódulos, cistos e verrugas com um especialista sênior.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={`https://wa.me/${DOCTOR_INFO.whatsappClean}?text=Olá,%20gostaria%20de%20uma%20avaliação%20gratuita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-medical-600 text-white rounded-xl font-semibold hover:bg-medical-700 transition-all shadow-lg shadow-medical-600/20 hover:shadow-medical-600/30 flex items-center justify-center gap-2 active:scale-[0.98] group"
              >
                Agendar Avaliação
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex items-center justify-center active:scale-[0.98]"
              >
                Ver Procedimentos
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="bg-green-100 p-1 rounded-full text-green-700">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </div>
                <span className="font-medium text-slate-700">{DOCTOR_INFO.crm}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-green-100 p-1 rounded-full text-green-700">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </div>
                <span className="font-medium text-slate-700">40+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2.5">
                 <div className="bg-green-100 p-1 rounded-full text-green-700">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </div>
                <span className="font-medium text-slate-700">Formação UFRJ</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mx-auto max-w-md lg:max-w-none w-full mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-medical-600 rounded-[2.5rem] rotate-3 opacity-5 blur-3xl transform translate-x-4 translate-y-4"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group h-[450px] md:h-[580px]">
              {/* Image optimized for "Senior Doctor" look */}
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. J. Mansur - Médico Cirurgião Sênior" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Subtle gradient for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-3xl font-bold tracking-wide mb-1">{DOCTOR_INFO.name}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                     <span className="text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-md border border-white/30">
                       Cirurgião Responsável
                     </span>
                     <span className="text-xs text-slate-300 font-normal tracking-wider border-l border-white/30 pl-3">
                       {DOCTOR_INFO.crm}
                     </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};