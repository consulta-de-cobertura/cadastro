import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CadastroModal: React.FC<CadastroModalProps> = ({ isOpen, onClose }) => {
  const handleSiteRedirect = () => {
    window.open('https://federalassociados.com.br/pbi/cadastro/110956', '_blank');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white z-50" />
        <Dialog.Content className="fixed inset-0 max-h-[100vh] w-[100vw] bg-white shadow-lg focus:outline-none z-50 overflow-y-auto flex flex-col items-center justify-center">
          <VisuallyHidden.Root>
            <Dialog.Title>Cadastro Federal Associados</Dialog.Title>
          </VisuallyHidden.Root>
          
          <div className="w-full max-w-2xl px-4">
            {/* Header */}
            <div className="text-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Federal Associados</h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">Conheça como funciona nosso processo de associação</p>
            </div>

            {/* Vídeo com tamanho ainda menor */}
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto" style={{ maxWidth: '280px' }}>
              <video
                className="w-full h-auto object-contain bg-black"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster=""
                onContextMenu={(e) => e.preventDefault()}
                src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video//cadastro.mp4"
                onLoadStart={(e) => {
                  // Força orientação correta desde o início
                  const video = e.currentTarget;
                  video.style.transform = 'none';
                  video.style.objectFit = 'contain';
                  video.style.width = '100%';
                  video.style.height = 'auto';
                }}
                onLoadedMetadata={(e) => {
                  // Garante que o vídeo mantenha proporção correta
                  const video = e.currentTarget;
                  video.style.width = '100%';
                  video.style.height = 'auto';
                  video.style.objectFit = 'contain';
                  video.style.transform = 'none';
                }}
              >
                <style>
                  {`
                    video::-webkit-media-controls-overflow-menu-button,
                    video::-webkit-media-controls-overflow-menu-list,
                    video::-webkit-media-controls-download-button {
                      display: none !important;
                    }
                    video::-webkit-media-controls-enclosure {
                      overflow: hidden !important;
                    }
                    video::-webkit-media-controls-panel {
                      overflow: clip !important;
                    }
                    video {
                      object-fit: contain !important;
                      background-color: #000 !important;
                      max-height: 200px !important;
                    }
                  `}
                </style>
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>

            {/* Botão de Cadastro */}
            <div className="text-center">
              <button
                onClick={handleSiteRedirect}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto text-sm md:text-base"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Realizar Cadastro Agora
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CadastroModal;