import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <a href="#home" className="block mb-6">
              <h3 className="text-white text-2xl font-bold font-serif">Dr. J. Mansur</h3>
              <span className="text-xs uppercase tracking-widest text-medical-500">Cirurgia e Biópsias</span>
            </a>
            <p className="leading-relaxed text-slate-500 mb-6 pr-4">
              Medicina cirúrgica com excelência, ética e pontualidade. Cuidando da sua saúde com a experiência de quem dedica a vida à medicina.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone size={18} className="text-medical-600 mt-0.5 flex-shrink-0 group-hover:text-medical-500 transition-colors" />
                <a href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`} className="hover:text-white transition-colors text-slate-400">
                  {DOCTOR_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-medical-600 mt-0.5 flex-shrink-0 group-hover:text-medical-500 transition-colors" />
                <span className="text-slate-400">{DOCTOR_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-white hover:translate-x-1 transition-all inline-block">Início</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all inline-block">Sobre o Médico</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Procedimentos</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Technical / Legal */}
          <div className="col-span-1">
            <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Responsável Técnico</h3>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-colors">
              <p className="font-bold text-slate-200 text-base mb-1">{DOCTOR_INFO.name}</p>
              <p className="text-medical-500 font-mono text-xs tracking-wide">{DOCTOR_INFO.crm}</p>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-800">
                O conteúdo deste site tem caráter informativo e não substitui a consulta médica.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-xs text-slate-600">
            <p>&copy; {currentYear} Clínica Dr. Mansur. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Desenvolvido por</span>
            <a 
              href="https://linkedin.com/in/devferreirag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-slate-500 hover:text-medical-400 transition-colors border-b border-slate-800 hover:border-medical-400 pb-0.5"
            >
              Gabriel Ferreira
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};