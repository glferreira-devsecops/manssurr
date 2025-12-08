import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="mb-10 text-center">
          <h3 className="text-white text-2xl font-bold font-serif mb-3 tracking-wide">{DOCTOR_INFO.name}</h3>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-semibold mb-6 text-medical-500">CRM {DOCTOR_INFO.crm}</p>
          
          <div className="space-y-2 text-slate-400 font-light text-base">
            <p>{DOCTOR_INFO.address}</p>
            <p>Rio de Janeiro - RJ</p>
          </div>
        </div>

        <div className="mb-12">
           <div className="flex justify-center gap-6">
              <a 
                href={`https://instagram.com/${DOCTOR_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-pink-500 transition-all duration-300 p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-900 hover:shadow-lg hover:-translate-y-1"
                aria-label={`Siga ${DOCTOR_INFO.name} no Instagram`}
              >
                <Instagram size={22} />
              </a>
           </div>
        </div>

        <div className="w-full border-t border-slate-900/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs">&copy; {new Date().getFullYear()} Dr Mansur Biópsias. Todos os direitos reservados.</p>
          
          {/* Assinatura Profissional - Gabriel Ferreira */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-slate-700">Desenvolvido por</span>
            <a 
              href="https://www.linkedin.com/in/devferreirag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-medical-400 transition-colors duration-300 group"
            >
              Gabriel Ferreira
              <Linkedin size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-0" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};