import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const FloatingCTA: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
};