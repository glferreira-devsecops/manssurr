import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-medical-900">Dr. Mansur</span>
              <span className="text-xs uppercase tracking-widest text-medical-600">Biópsias & Cirurgias</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-medical-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-medical-600 text-white px-6 py-2 rounded-full hover:bg-medical-700 transition-colors flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              Agendar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-medical-900 focus:outline-none p-2"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-medical-600 hover:bg-medical-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-medical-600 text-white px-4 py-3 rounded-md font-bold shadow-sm active:bg-medical-700"
              >
                Agendar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};