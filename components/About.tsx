import React from 'react';
import { GraduationCap, Award, Clock, MapPin } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-medical-600 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block">O Especialista</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">Experiência que Transmite Segurança</h2>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-sm border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">
            
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="border-l-4 border-medical-600 pl-6">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{DOCTOR_INFO.name}</h3>
                <p className="text-medical-700 font-medium text-lg">{DOCTOR_INFO.experience}</p>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed font-light text-justify md:text-left">
                Com uma carreira dedicada à medicina cirúrgica, o Dr Mansur oferece um atendimento de excelência focado na resolução eficiente de pequenas patologias. Sua formação sólida e décadas de prática diária garantem a precisão técnica e o olhar humano que cada paciente merece.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mt-1 text-medical-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Formação Acadêmica</h4>
                    <p className="text-sm text-slate-500 leading-snug">Universidade Federal (UFRJ)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mt-1 text-medical-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Experiência Clínica</h4>
                    <p className="text-sm text-slate-500 leading-snug">+40 anos de atuação contínua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mt-1 text-medical-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Registro Profissional</h4>
                    <p className="text-sm text-slate-500 leading-snug">{DOCTOR_INFO.crm}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mt-1 text-medical-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Localização</h4>
                    <p className="text-sm text-slate-500 leading-snug">Maracanã, Rio de Janeiro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Box - Diferenciais */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
               <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-slate-100 h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-medical-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  
                  <div className="mb-8 relative z-10">
                    <h4 className="font-serif text-2xl font-bold text-slate-800 mb-3">Por que escolher?</h4>
                    <div className="h-1.5 w-16 bg-medical-500 rounded-full"></div>
                  </div>
                  
                  <ul className="space-y-6 relative z-10">
                    {[
                      { text: 'Atendimento estritamente pontual', desc: 'Respeito absoluto ao seu tempo.' },
                      { text: 'Anestesia Local', desc: 'Sem internação, alta imediata.' },
                      { text: 'Biópsia com Laboratório Parceiro', desc: 'Segurança no diagnóstico.' },
                      { text: 'Ambiente Esterilizado', desc: 'Protocolos rigorosos de higiene.' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-2 h-2 w-2 bg-medical-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.6)]"></div>
                        <div>
                          <span className="block font-bold text-slate-700 text-sm">{item.text}</span>
                          <span className="text-xs text-slate-500">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};