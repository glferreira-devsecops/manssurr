import React from 'react';

export const Gallery: React.FC = () => {
  // Imagens fornecidas e suas legendas associadas (devem estar na pasta public)
  const clinicalCases = [
    { url: "/img_5042.jpg", caption: "Lipoma" },
    { url: "/img_5035.jpg", caption: "Sinal / Nevo" },
    { url: "/img_5048.jpg", caption: "Lesão Cutânea" },
    { url: "/img_5038.jpg", caption: "Verrugas" },
    { url: "/img_5040.jpg", caption: "Nódulo" },
    { url: "/img_5046.jpg", caption: "Cisto Facial" },
    { url: "/img_5045.jpg", caption: "Lesão de Pele" },
    { url: "/img_5043.jpg", caption: "Dermatite" }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-medical-600 font-bold text-xs tracking-[0.2em] uppercase mb-3 block">GALERIA DE CASOS</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Casos Tratáveis</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Exemplos de patologias que tratamos com segurança e eficiência.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {clinicalCases.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-md aspect-square bg-slate-100">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-100 flex items-end p-4">
                <p className="text-white font-medium text-sm border-l-2 border-medical-500 pl-2">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};