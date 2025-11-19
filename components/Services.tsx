import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-medical-600 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block">Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Procedimentos Realizados</h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Foco exclusivo em pequenas cirurgias ambulatoriais. Procedimentos realizados com <strong className="font-medium text-slate-800">anestesia local</strong>, garantindo precisão, segurança e rápida recuperação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 border border-slate-100 hover:border-medical-200 flex flex-col items-start group relative overflow-hidden h-full"
              >
                {/* Decorative background blob on hover */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-medical-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 pointer-events-none"></div>
                
                <div className="relative z-10 mb-6 inline-flex p-3.5 bg-medical-50 rounded-xl text-medical-600 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-glow">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-700 transition-colors pr-4">
                  {service.title}
                </h3>
                
                <p className="relative z-10 text-slate-600 leading-relaxed text-sm md:text-base flex-grow">
                  {service.description}
                </p>
                
                <div className="relative z-10 mt-6 w-8 h-1 bg-medical-100 rounded-full group-hover:w-full group-hover:bg-medical-200 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};