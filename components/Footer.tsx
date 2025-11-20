import React from 'react';
import { Instagram } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold font-serif mb-2">{DOCTOR_INFO.name}, {DOCTOR_INFO.crm}</h3>
          <p className="text-slate-400 mt-2 text-base">Consultório: {DOCTOR_INFO.address}.</p>
          <p className="text-slate-400 mt-1 text-base">Telefone {DOCTOR_INFO.phone}</p>
        </div>

        <div className="mb-8">
           <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">REDES SOCIAIS</h4>
           <div className="flex justify-center gap-6">
              <a 
                href={`https://instagram.com/${DOCTOR_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-500 transition-colors p-3 bg-slate-900 rounded-full group"
                aria-label={`Siga ${DOCTOR_INFO.name} no Instagram`}
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
           </div>
        </div>

        <div className="border-t border-slate-900 pt-8">
          <p>&copy; {new Date().getFullYear()} Dr Mansur Biópsias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};