import React from 'react';

export const Gallery: React.FC = () => {
  // Utilizando URLs RAW completas e específicas para garantir o carregamento correto,
  // especialmente para arquivos com acentuação ou espaços.
  const galleryImages = [
    { 
      // Convertido de blob para raw, mantendo a codificação exata do caractere 'â' (%CC%82)
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/1%20Ca%CC%82ncer%20de%20pele.jpg", 
      caption: "Câncer de Pele" 
    },
    { 
      // Arquivo 6 Verrugas.jpg
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/6%20Verrugas.jpg", 
      caption: "Verrugas" 
    },
    { 
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/7%20Lipoma.jpg", 
      caption: "Lipoma" 
    },
    { 
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/5%20Verrugas.jpg", 
      caption: "Verrugas (Caso 2)" 
    },
    { 
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/10%20Dermatite.jpg", 
      caption: "Dermatite" 
    },
    { 
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/15%20Nodular%20Nonpigmented%20Lesion.jpg", 
      caption: "Nódulo" 
    },
    { 
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/12%20Herpes%20zooster.jpg", 
      caption: "Herpes Zoster" 
    },
    { 
      url: "https://raw.githubusercontent.com/glferreira-devsecops/manssurr/1b190ff8098e9140df2e4dc23eef29c1da9776a8/public/4%20Cancer%20Papilloma%20On%20The%20Skin.jpg", 
      caption: "Papiloma" 
    }
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
          {galleryImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-md aspect-square bg-slate-100">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Fallback visual caso a imagem ainda falhe (não deve acontecer com a URL raw correta)
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-slate-200', 'flex', 'items-center', 'justify-center');
                  if(e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `<span class="text-xs text-slate-400 p-2 text-center">Imagem indisponível</span>`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-100 flex items-end p-4">
                <p className="text-white font-medium text-sm border-l-2 border-medical-500 pl-2 shadow-sm">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};