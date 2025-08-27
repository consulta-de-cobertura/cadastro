import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, Zap, Crown } from 'lucide-react';

interface ExitIntentPopupProps {
  onRedirect: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onRedirect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let exitIntentTriggered = false;

    // Desktop: Mouse leave detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !exitIntentTriggered) {
        exitIntentTriggered = true;
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Mobile: Back button detection
    const handlePopState = () => {
      if (!hasShown && !exitIntentTriggered) {
        exitIntentTriggered = true;
        setIsOpen(true);
        setHasShown(true);
        // Push state back to prevent actual navigation
        window.history.pushState(null, '', window.location.href);
      }
    };

    // Page visibility change (mobile tab switch/minimize)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !hasShown && !exitIntentTriggered) {
        exitIntentTriggered = true;
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Add initial history state for mobile back button detection
    window.history.pushState(null, '', window.location.href);

    // Event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasShown]);

  const handleStay = (e: React.MouseEvent) => {
    setIsOpen(false);
    onRedirect();
  };

  const handleLeave = () => {
    setIsOpen(false);
    // Allow user to leave
    window.history.back();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-300" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-[650px] max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-300 animate-pulse-glow">
            
            <Dialog.Title asChild>
              <VisuallyHidden.Root>
                Oferta Especial - Não Saia Ainda
              </VisuallyHidden.Root>
            </Dialog.Title>

            {/* Header with gradient and pulsing effect - VERMELHO DE URGÊNCIA */}
            <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-6 rounded-t-2xl text-white text-center relative overflow-hidden animate-gradient-x">
              <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-2">
                  <h2 className="text-2xl font-bold animate-pulse">ESPERE!</h2>
                </div>
                <p className="text-lg font-semibold">Você vai mesmo perder essa oportunidade única?</p>
                <p className="text-base mt-2">OFERTA POR TEMPO LIMITADO</p>
              </div>
              
              {/* Pulsing border effect */}
              <div className="absolute inset-0 border-4 border-yellow-400 rounded-t-2xl animate-pulse opacity-50"></div>
            </div>

            {/* Content with enhanced styling */}
            <div className="p-6 relative">
              {/* Floating elements for visual appeal */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute top-4 right-8 w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 animate-pulse">
                  🚨 ÚLTIMA CHANCE - OFERTA ESPECIAL! 🚨
                </h3>
                <p className="text-gray-700 mb-4">
                  Você estava prestes a sair sem garantir seu chip com <strong className="text-red-600 animate-pulse">FRETE GRÁTIS</strong> e internet ilimitada por apenas <strong className="text-green-600 text-xl">R$ 69,90/mês</strong>!
                </p>
              </div>

              {/* Special offer highlights with enhanced design */}
              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 border-2 border-yellow-400 rounded-xl p-5 mb-6 relative overflow-hidden animate-pulse-border">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent animate-shimmer"></div>
                
                <div className="flex items-center justify-center mb-4 relative z-10">
                  <Crown className="h-7 w-7 text-orange-600 mr-2 animate-bounce" />
                  <span className="font-bold text-orange-700 text-lg">BÔNUS EXCLUSIVO PARA QUEM FICA:</span>
                </div>
                
                <div className="space-y-3 text-sm relative z-10">
                  <div className="flex items-center bg-white/50 rounded-lg p-2 transform hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5 text-green-500 mr-3 animate-pulse" />
                    <span>✅ <strong>Frete grátis</strong> para todo o Brasil</span>
                  </div>
                  <div className="flex items-center bg-white/50 rounded-lg p-2 transform hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span>✅ <strong>Ativação prioritária</strong> em até 24h</span>
                  </div>
                  <div className="flex items-center bg-white/50 rounded-lg p-2 transform hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5 text-purple-500 mr-3 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <span>✅ <strong>Suporte VIP contínuo</strong> - enquanto for associado</span>
                  </div>
                  <div className="flex items-center bg-white/50 rounded-lg p-2 transform hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5 text-orange-500 mr-3 animate-pulse" style={{ animationDelay: '0.6s' }} />
                    <span>✅ <strong>Garantia estendida</strong> de 7 dias</span>
                  </div>
                </div>
              </div>

              {/* Enhanced urgency message - VERMELHO DE URGÊNCIA */}
              <div className="bg-gradient-to-r from-red-100 to-red-200 border-2 border-red-600 rounded-lg p-4 mb-6 relative overflow-hidden animate-pulse-subtle">
                <div className="absolute inset-0 bg-red-200/50 animate-pulse"></div>
                <p className="text-red-800 text-center font-semibold relative z-10">
                  ⚠️ <span className="animate-pulse">Esta oferta especial expira quando você sair desta página!</span><br/>
                  <span className="text-sm">Não perca a chance de economizar centenas de reais por ano!</span>
                </p>
              </div>

              {/* Enhanced action buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleStay}
                  className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <span className="relative z-10">🎯 SIM! QUERO GARANTIR MINHA OFERTA AGORA</span>
                </button>
                
                <button
                  onClick={handleLeave}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors text-sm"
                >
                  Sim, quero sair e continuar pagando caro na minha operadora atual
                </button>
              </div>

              {/* Enhanced social proof */}
              <div className="mt-4 text-center bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-gray-600">
                  🔥 <strong className="text-red-600 animate-pulse">{Math.floor(Math.random() * 50) + 200} pessoas</strong> aproveitaram esta oferta hoje<br/>
                  ⭐ <strong className="text-yellow-600">4.9/5 estrelas</strong> - Mais de 100.000 avaliações positivas
                </p>
              </div>
            </div>

            {/* Enhanced close button */}
            <button
              onClick={handleLeave}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
              aria-label="Fechar"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ExitIntentPopup;