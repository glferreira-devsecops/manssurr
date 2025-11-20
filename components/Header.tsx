import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="flex flex-col group" 
              onClick={closeMenu}
              aria-label="Dr. Mansur - Voltar ao início"
            >
              <span className="font-serif text-xl md:text-2xl font-bold text-medical-900 group-hover:text-medical-700 transition-colors">Dr. Mansur</span>
              <span className="text-xs uppercase tracking-widest text-medical-600 font-bold group-hover:text-medical-500 transition-colors">Biópsias.com</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-medical-600 transition-colors font-medium hover:underline decoration-2 underline-offset-4 decoration-medical-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-medical-600 text-white px-6 py-2 rounded-full hover:bg-medical-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 font-medium"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-medical-900 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Alternar menu de navegação"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-in slide-in-from-top-5 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-medical-700 hover:bg-medical-50 transition-colors border-l-4 border-transparent hover:border-medical-500"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-2">
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-center bg-medical-600 text-white px-4 py-3 rounded-lg font-bold shadow-md active:bg-medical-700 hover:bg-medical-700 transition-colors flex justify-center items-center gap-2"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};