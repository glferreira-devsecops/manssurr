import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-medical-600 text-white px-4 py-2 rounded-md shadow-lg font-bold transition-transform"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;