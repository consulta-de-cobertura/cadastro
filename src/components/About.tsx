import React from 'react';
import { Trophy, Users, Building, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Conheça a Federal Associados</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Somos a Federal Associados, uma empresa sólida com mais de 14 anos de mercado, sede própria, mais de 5 escritórios pelo Brasil, 5 troféus como a melhor associação, e uma base de mais de 100.000 associados satisfeitos.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Nosso objetivo é democratizar o acesso à internet de qualidade, com planos acessíveis, liberdade total e benefícios exclusivos.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <Trophy className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">5 troféus</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Reconhecida como melhor associação</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">100.000+ associados</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Satisfeitos em todo Brasil</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <Building className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">5+ escritórios</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Presença física em todo o país</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">14+ anos</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">De experiência no mercado</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white relative z-10 border border-blue-500 shadow-lg">
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
              </div>
              
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold mb-2 text-white">Matriz:</h4>
                <p className="text-sm md:text-base text-white">Avenida Contorno, 3790, Bairro Santa Clara, Goianésia-GO.</p>
              </div>
              
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold mb-2 text-white">Atendimento Nacional:</h4>
                <p className="text-sm md:text-base text-white">Presença nacional com milhares de consultores.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-white">Suporte:</h4>
                <p className="text-sm md:text-base text-white">Central de Atendimento WhatsApp 24h.</p>
              </div>
              
              <div className="mt-6 md:mt-8 relative rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  controlsList="nodownload"
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                  src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/video/5%20federal%20associados%20prova.mp4"
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
              </div>
            </div>
            
            <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-2xl transform rotate-12"></div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-2xl transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;