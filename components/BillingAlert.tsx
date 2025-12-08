import React from 'react';
import { AlertTriangle, Lock } from 'lucide-react';

export const BillingAlert: React.FC = () => {
  return (
    <div className="bg-red-600 text-white px-4 py-3 shadow-lg relative z-[9999] border-b border-red-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
        <div className="flex items-center justify-center bg-red-800 p-2 rounded-full animate-pulse">
           <Lock size={16} />
        </div>
        <div className="text-sm font-medium tracking-wide">
          <span className="font-bold opacity-90 block md:inline md:mr-2">AVISO ADMINISTRATIVO:</span>
          Aplicação web em modo de demonstração. Aguardando regularização de honorários de desenvolvimento para ativação definitiva.
        </div>
        <a 
           href="https://www.linkedin.com/in/devferreirag"
           target="_blank"
           rel="noopener noreferrer"
           className="mt-2 md:mt-0 px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-xs font-bold transition-colors uppercase tracking-wider flex items-center gap-2"
        >
          <AlertTriangle size={12} />
          Contatar Desenvolvedor
        </a>
      </div>
    </div>
  );
};