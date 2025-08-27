import React, { useState, useEffect, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, Play, Pause, RefreshCw } from 'lucide-react';

interface VideoTestimonialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const videos = [
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/1.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/2.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/4.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/5.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/6.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/7.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/8.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/9.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/10.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/11.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/12.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/13.mp4'
];

const VideoTestimonialsModal: React.FC<VideoTestimonialsModalProps> = ({ isOpen, onClose }) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
  const [errorStates, setErrorStates] = useState<Record<number, string>>({});
  const [retryCount, setRetryCount] = useState<Record<number, number>>({});

  const resetVideoState = useCallback(() => {
    if (playingVideo !== null) {
      const video = document.querySelector(`[data-video-index="${playingVideo}"]`) as HTMLVideoElement;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    setPlayingVideo(null);
  }, [playingVideo]);

  useEffect(() => {
    if (!isOpen) {
      resetVideoState();
      setLoadingStates({});
      setErrorStates({});
      setRetryCount({});
    }
  }, [isOpen, resetVideoState]);

  const handleVideoLoad = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
    setErrorStates(prev => ({ ...prev, [index]: '' }));
  };

  const handleVideoError = async (index: number) => {
    const currentRetries = retryCount[index] || 0;
    if (currentRetries < 3) {
      setRetryCount(prev => ({ ...prev, [index]: currentRetries + 1 }));
      setLoadingStates(prev => ({ ...prev, [index]: true }));
      
      // Retry loading after a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      const video = document.querySelector(`[data-video-index="${index}"]`) as HTMLVideoElement;
      if (video) {
        video.load();
      }
    } else {
      setLoadingStates(prev => ({ ...prev, [index]: false }));
      setErrorStates(prev => ({ 
        ...prev, 
        [index]: 'Não foi possível carregar o vídeo. Tente novamente mais tarde.'
      }));
    }
  };

  const handleVideoClick = async (index: number, video: HTMLVideoElement) => {
    try {
      if (errorStates[index]) {
        // Reset error state and retry loading
        setErrorStates(prev => ({ ...prev, [index]: '' }));
        setRetryCount(prev => ({ ...prev, [index]: 0 }));
        video.load();
        return;
      }

      if (playingVideo === index) {
        if (video.paused) {
          setLoadingStates(prev => ({ ...prev, [index]: true }));
          await video.play();
          setLoadingStates(prev => ({ ...prev, [index]: false }));
        } else {
          video.pause();
        }
      } else {
        resetVideoState();
        setLoadingStates(prev => ({ ...prev, [index]: true }));
        await video.play();
        setLoadingStates(prev => ({ ...prev, [index]: false }));
        setPlayingVideo(index);
      }
    } catch (error) {
      console.error(`Error playing video ${index}:`, error);
      handleVideoError(index);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[1200px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none z-50 overflow-y-auto">
          <Dialog.Title asChild>
            <VisuallyHidden.Root>
              Depoimentos em Vídeo
            </VisuallyHidden.Root>
          </Dialog.Title>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((videoUrl, index) => (
              <div 
                key={index} 
                className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md"
              >
                <video
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  data-video-index={index}
                  onLoadedData={() => handleVideoLoad(index)}
                  onError={() => handleVideoError(index)}
                  onEnded={resetVideoState}
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
                </video>

                <div 
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  onClick={(e) => {
                    const video = e.currentTarget.parentElement?.querySelector('video');
                    if (video) {
                      handleVideoClick(index, video);
                    }
                  }}
                >
                  {loadingStates[index] ? (
                    <div className="relative z-10 bg-white/90 rounded-full p-3">
                      <RefreshCw className="h-6 w-6 text-blue-600 animate-spin" />
                    </div>
                  ) : errorStates[index] ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="text-center p-4">
                        <p className="text-white text-sm mb-2">{errorStates[index]}</p>
                        <button 
                          className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-white"
                          onClick={() => {
                            const video = document.querySelector(`[data-video-index="${index}"]`) as HTMLVideoElement;
                            if (video) {
                              handleVideoClick(index, video);
                            }
                          }}
                        >
                          Tentar novamente
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                      <div className="relative z-10 bg-white/90 rounded-full p-3 transform group-hover:scale-110 transition-transform">
                        {playingVideo === index ? (
                          <Pause className="h-6 w-6 text-blue-600" />
                        ) : (
                          <Play className="h-6 w-6 text-blue-600" />
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoTestimonialsModal;