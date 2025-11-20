import React from 'react';

export const Gallery: React.FC = () => {
  // Placeholders profissionais para simular "IMAGENS (em anexo)"
  const images = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      caption: "Ambiente Clínico"
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      caption: "Materiais Esterilizados"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      caption: "Consultório"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-medical-600 font-bold text-xs tracking-[0.2em] uppercase mb-3 block">GALERIA</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Nosso Espaço</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-md aspect-[4/3]">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};