import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight, Volume2, Play, Pause, VolumeX } from 'lucide-react';

interface HeroProps {
  onRedirect: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRedirect }) => {
  const [typedText, setTypedText] = useState('');
  const [showAudioIcon, setShowAudioIcon] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [viewerCount, setViewerCount] = useState(529);
  
  // REFERÊNCIA PARA O VÍDEO PRINCIPAL
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const fullText = "Conheça a Federal Associados: uma associação autorizada com planos de internet ilimitados, sem burocracia, que vai muito além da conexão. Descubra como mais de 100.000 brasileiros estão economizando todo mês. Com internet ILIMITADA de verdade";
  
  // Efeito para variar o número de pessoas assistindo
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        // Variação aleatória entre -5 e +5
        const change = Math.floor(Math.random() * 11) - 5;
        const newCount = prev + change;
        
        // Mantém entre 200 e 1000
        if (newCount < 200) return 200 + Math.floor(Math.random() * 50);
        if (newCount > 1000) return 950 + Math.floor(Math.random() * 50);
        
        return newCount;
      });
    }, 2000 + Math.random() * 3000); // Varia entre 2-5 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = 30; // Reduzido para ser mais rápido
    
    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextCharacter, typingDelay);
      }
    };

    setTimeout(typeNextCharacter, 500); // Reduzido delay inicial de 1000ms para 500ms

    return () => {
      currentIndex = fullText.length;
    };
  }, []);

  // OBSERVER PARA PARAR VÍDEO QUANDO SAI DA VIEWPORT
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Parar o vídeo quando sai da viewport
            const video = videoRef.current;
            
            if (video && !video.paused) {
              video.pause();
            }
            
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Configuração do vídeo principal
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.muted = true;
      video.volume = 0.8;
      setIsMuted(true);
      setVideoError(false);
      
      // Tentar autoplay após carregar
      video.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    };

    const handleError = () => {
      console.error('Erro ao carregar vídeo');
      setVideoError(true);
      setShowVideo(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    video.muted = true;
    video.volume = 0.8;
    video.preload = 'metadata';
    video.playsInline = true;
    video.loop = true;

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleVideoClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRef.current;
    if (!video) return;

    try {
      if (showAudioIcon || isMuted) {
        // Primeira vez - ativar som e reiniciar
        video.currentTime = 0;
        video.muted = false;
        setIsMuted(false);
        setShowAudioIcon(false);
        
        await video.play();
        setIsPlaying(true);
      } else {
        // Já tem som - toggle play/pause
        if (video.paused || video.ended) {
          if (video.ended) {
            video.currentTime = 0;
          }
          await video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      }
    } catch (error) {
      console.error('Erro ao controlar vídeo:', error);
      
      try {
        video.muted = true;
        setIsMuted(true);
        video.currentTime = 0;
        await video.play();
        setIsPlaying(true);
      } catch (fallbackError) {
        console.error('Erro no fallback:', fallbackError);
        setVideoError(true);
        setShowVideo(false);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-gray-900 pt-16"
    >
      <div className="container mx-auto px-4 pt-2 pb-2 md:pt-4 md:pb-8">
        {/* Título principal */}
        <div className="text-center mb-2 md:mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight animate-pulse-attention text-gray-900">
            Sua internet não dura o mês todo? Você está cansado de depender do Wi-Fi dos outros ao sair<br/>
            de casa?
          </h1>
        </div>

        {/* Pergunta entre título e vídeo */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Um celular sem internet perde 90% da sua utilidade
          </p>
        </div>
        {/* Vídeo principal entre título e botão */}
        {showVideo && !videoError && (
          <div className="text-center mb-2 md:mb-4 mt-4 md:mt-6">
            <div className="relative max-w-xs md:max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onContextMenu={(e) => e.preventDefault()}
                  onClick={handleVideoClick}
                  src="https://zzktwtxeeikhdycduxor.supabase.co/storage/v1/object/public/pbii/video_2025-08-12_19-47-32.mp4"
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

                {/* Overlay com ícone de áudio quando mutado */}
                {(showAudioIcon || isMuted) && (
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                    onClick={handleVideoClick}
                  >
                    <div className="bg-black/90 backdrop-blur-sm rounded-full p-3 shadow-2xl transform hover:scale-110 transition-transform border border-gray-600">
                      <div className="text-center">
                        <VolumeX className="h-4 w-4 text-white mx-auto mb-1" />
                        <p className="text-white font-bold text-xs">Seu vídeo já começou</p>
                        <p className="text-green-400 font-bold text-xs flex items-center justify-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                          {viewerCount} pessoas estão assistindo agora
                        </p>
                        <p className="text-white/80 text-xs">Aperte para ouvir</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Botões */}
        <div className="text-center mb-1 md:mb-4">
          {/* CARD DE BENEFÍCIOS - MOBILE ONLY */}
          <div className="mt-1 md:hidden">
            <div className="p-3">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Agora imagine ter internet 4G/5G verdadeiramente ilimitada para navegar o mês inteiro sem preocupações.</h3>
              
              {/* Imagem e legenda após benefícios - MOBILE */}
              <div className="mb-4">
                <div className="max-w-md mx-auto mb-3">
                  <img
                    src="https://qkbeuebapuqnlpjgcvxb.supabase.co/storage/v1/object/public/imagem/federalassociadosimg2alt.webp"
                    alt="Federal Associados - Internet ilimitada"
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-base text-gray-700 leading-relaxed text-center">
                  Ao se associar na Federal Associados, você recebe um chip com benefícios exclusivos que só os nossos associados têm.
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={onRedirect}
                  className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 shadow-lg text-base py-3 px-6 button-glow"
                >
                  Quero internet ilimitada <ArrowRight className="ml-2 h-6 w-6" />
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">Descubra agora como mais de 100.000 brasileiros já estão usando internet ilimitada de verdade e ainda transformando sua conexão em uma fonte de renda extra recorrente com o nosso programa PBI</p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* COLUNA DIREITA - DESKTOP ONLY */}
          <div className="relative hidden md:block">
            {/* CARD DE BENEFÍCIOS - DESKTOP */}
            <div className="p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Agora imagine ter internet 4G/5G verdadeiramente ilimitada para navegar o mês inteiro sem preocupações.</h3>
              
              {/* Imagem e legenda após benefícios - DESKTOP */}
              <div className="mt-6 mb-6 text-center">
                <div className="max-w-md mx-auto mb-3">
                  <img
                    src="https://qkbeuebapuqnlpjgcvxb.supabase.co/storage/v1/object/public/imagem/federalassociadosimg2alt.webp"
                    alt="Federal Associados - Internet ilimitada"
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Ao se associar na Federal Associados, você recebe um chip com benefícios exclusivos que só os nossos associados têm.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={onRedirect}
                  className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 shadow-lg text-base py-3 px-6 button-glow"
                >
                  Quero internet ilimitada <ArrowRight className="ml-2 h-6 w-6" />
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-700">Descubra agora como mais de 100.000 brasileiros já estão usando internet ilimitada de verdade e ainda transformando sua conexão em uma fonte de renda extra recorrente com o nosso programa PBI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;