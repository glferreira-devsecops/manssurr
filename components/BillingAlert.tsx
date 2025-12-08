import React, { useState, useEffect } from 'react';
import { ShieldAlert, Lock, AlertTriangle, FileWarning, X } from 'lucide-react';

export const BillingAlert: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Bloqueia o scroll quando o modal está aberto para forçar a atenção
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isExpanded]);

  return (
    <>
      {/* --- ESTADO 1: MODAL DE BLOQUEIO TOTAL (OVERLAY) --- */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden border-t-4 border-red-600">
            {/* Header do Modal */}
            <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-full animate-pulse">
                <ShieldAlert size={32} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Suspensão de Licença</h2>
                <p className="text-xs font-mono text-slate-500 uppercase">Error Code: PAYMENT_REQUIRED_402</p>
              </div>
            </div>

            {/* Corpo do Modal */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-50 text-red-800 rounded-md text-sm border border-red-100">
                <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
                <p className="font-medium">
                  Este domínio encontra-se temporariamente restrito devido a pendências administrativas contratuais.
                </p>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong>Prezado Administrador (Dr. Mansur),</strong>
                </p>
                <p>
                  A licença de uso deste software de agendamento e triagem cirúrgica foi suspensa. Conforme estipulado na Lei de Direitos Autorais e Propriedade Intelectual, o código-fonte e a interface visual permanecem propriedade do desenvolvedor até a liquidação integral dos honorários técnicos.
                </p>
                <p className="font-semibold text-slate-800">
                  Todas as funcionalidades de conversão (Links de WhatsApp) estão operando em modo degradado.
                </p>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end">
              <button 
                onClick={() => setIsExpanded(false)}
                className="px-4 py-2 text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors"
              >
                Visualizar em Modo Restrito
              </button>
              <a 
                href="https://www.linkedin.com/in/devferreirag"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Lock size={14} />
                Regularizar Acesso Agora
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- ESTADO 2: BARRA PERSISTENTE (STICKY FOOTER) --- */}
      {/* Esta barra fica sobrepondo o conteúdo, especialmente botões de ação no rodapé */}
      {!isExpanded && (
        <div className="fixed bottom-0 left-0 w-full z-[9999] bg-yellow-400 text-yellow-950 border-t-2 border-yellow-500 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <FileWarning size={20} className="text-yellow-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest opacity-70">Modo de Demonstração</span>
                <span className="text-sm font-bold leading-tight">Software não licenciado. Aguardando pagamento.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                 onClick={() => setIsExpanded(true)}
                 className="hidden md:block text-xs font-bold underline decoration-yellow-700/50 hover:decoration-yellow-900"
              >
                Ver Detalhes
              </button>
              <a 
                href="https://www.linkedin.com/in/devferreirag"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white text-xs px-4 py-2 rounded font-bold hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Contatar Desenvolvedor
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};