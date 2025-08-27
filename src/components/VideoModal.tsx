import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black z-50" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Title asChild>
            <VisuallyHidden.Root>
              Player de Vídeo
            </VisuallyHidden.Root>
          </Dialog.Title>
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-contain bg-black"
              controls
              controlsList="nodownload"
              autoPlay
              playsInline
              src={videoUrl}
              onContextMenu={(e) => e.preventDefault()}
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
                `}
              </style>
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white/100 transition-colors z-10"
              aria-label="Fechar vídeo"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoModal;