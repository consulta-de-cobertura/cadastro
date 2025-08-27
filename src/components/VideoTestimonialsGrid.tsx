import React, { useState } from 'react';
import { Play, RefreshCw } from 'lucide-react';

const videos = [
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/1.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/2.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/4.mp4',
  'https://njmrvklwyzbofuhqrpbt.supabase.co/storage/v1/object/public/depoimentos/5.mp4'
];

const VideoTestimonialsGrid = () => {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
  const [errorStates, setErrorStates] = useState<Record<number, string>>({});

  const handleVideoLoad = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
    setErrorStates(prev => ({ ...prev, [index]: '' }));
  };

  const handleVideoError = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
    setErrorStates(prev => ({ 
      ...prev, 
      [index]: 'Não foi possível carregar o vídeo'
    }));
  };

  const handleVideoClick = async (video: HTMLVideoElement) => {
    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        await (video as any).webkitRequestFullscreen();
      } else if ((video as any).mozRequestFullScreen) {
        await (video as any).mozRequestFullScreen();
      }
      await video.play();
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md bg-gray-100">
          <video
            src={video}
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            playsInline
            onLoadedData={() => handleVideoLoad(index)}
            onError={() => handleVideoError(index)}
            onClick={(e) => handleVideoClick(e.currentTarget)}
          />
          <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
            {loadingStates[index] ? (
              <div className="relative z-10 bg-white/90 rounded-full p-3">
                <RefreshCw className="h-6 w-6 text-blue-600 animate-spin" />
              </div>
            ) : errorStates[index] ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-sm">{errorStates[index]}</p>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="relative z-10 bg-white/90 rounded-full p-3 transform group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTestimonialsGrid;