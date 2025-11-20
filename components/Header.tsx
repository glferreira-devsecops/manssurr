import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Bloqueia a rolagem da página quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#home" 
                className="flex flex-col group" 
                onClick={closeMenu}
                aria-label="Dr Mansur - Voltar ao início"
              >
                <span className="font-serif text-xl md:text-2xl font-bold text-medical-900 group-hover:text-medical-700 transition-colors">Dr Mansur</span>
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
                Agende agora no whatsapp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-medical-900 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors z-50 relative"
                aria-expanded={isMenuOpen}
                aria-label="Alternar menu de navegação"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'visible' : 'invisible delay-300'
        }`}
      >
        {/* Backdrop (Fundo escuro) */}
        <div 
          className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Side Drawer (Menu Lateral) */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header do Menu Lateral */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
             <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-medical-900">Menu</span>
             </div>
             <button
                onClick={closeMenu}
                className="p-2 rounded-full bg-white text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm border border-slate-100"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
          </div>

          {/* Links de Navegação */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between w-full px-5 py-4 rounded-xl text-lg font-medium text-slate-600 hover:text-medical-700 hover:bg-medical-50 transition-all duration-200 active:scale-[0.99]"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-medical-400 transition-colors" />
              </a>
            ))}
          </nav>

          {/* Footer do Menu (CTA) */}
          <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 w-full bg-medical-600 text-white px-4 py-4 rounded-xl font-bold shadow-lg shadow-medical-600/20 active:bg-medical-700 hover:bg-medical-700 transition-all hover:-translate-y-0.5 text-sm"
            >
              <Phone size={20} />
              <span>Agende agora no whatsapp</span>
            </a>
            <div className="text-center text-xs text-slate-400">
               Dr Mansur - CRM {DOCTOR_INFO.crm}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};