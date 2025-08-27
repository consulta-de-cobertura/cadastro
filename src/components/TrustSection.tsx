import React from 'react';
import { Shield, Award, Building, Clock, Users, CheckCircle } from 'lucide-react';

interface TrustSectionProps {
  onRedirect: () => void;
}

const TrustSection: React.FC<TrustSectionProps> = ({ onRedirect }) => {
  const securityFeatures = [
    "CNPJ: 29.383.343/0001-64 - Empresa regularizada",
    "Sede própria com endereço físico verificável",
    "Certificação SSL para proteção de dados",
    "Garantia de 7 dias para devolução total",
    "Atendimento 24h com suporte especializado",
    "Transparência total em contratos e valores"
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
            Por que Confiar na Federal Associados?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Não somos apenas mais uma empresa. Somos uma instituição sólida, transparente e comprometida com a satisfação dos nossos associados.
          </p>
        </div>

        {/* IMAGEM ESTRATÉGICA 2: Equipe de suporte com headsets */}
        <div className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-1 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                Suporte 24h real
                <span className="block text-blue-600">com pessoas de verdade</span>
              </h3>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Nosso <strong className="text-blue-600">atendimento humanizado</strong> está sempre disponível para resolver qualquer questão. Sem robôs, sem chatbots automáticos.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Atendimento Humano",
                    description: "Pessoas reais prontas para ajudar você a qualquer hora do dia."
                  },
                  {
                    title: "Suporte via WhatsApp",
                    description: "Canal direto e rápido para todas as suas necessidades."
                  },
                  {
                    title: "Resolução Imediata",
                    description: "Problemas resolvidos na primeira conversa, sem enrolação."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-2 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                <img
                  src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/imagens//photo_2025-06-28_18-38-25.jpg"
                  alt="Equipe de suporte Federal Associados com headsets - Atendimento 24h via WhatsApp"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                
                {/* Badge de suporte - MOVIDO PARA BAIXO À DIREITA */}
                <div className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full px-3 py-2 shadow-lg">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    <span className="text-sm font-bold">Suporte 24h</span>
                  </div>
                </div>

                {/* Estatística flutuante - MOVIDA PARA BAIXO À ESQUERDA */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-600">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-xl border border-blue-200">
            <div className="text-center mb-6 md:mb-8">
              <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Segurança Garantida
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Todos os aspectos que comprovam nossa idoneidade e compromisso com você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-xl border border-blue-300">
              <div className="text-center">
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  🏆 Empresa Certificada e Reconhecida
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Você pode verificar nossa empresa no site da Receita Federal e conferir todos os nossos certificados de excelência.
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
                  <span className="bg-blue-100 text-blue-600 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Empresa Ativa
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Certificada
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Premiada
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Estratégico após construir confiança */}
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={onRedirect}
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 shadow-lg text-lg py-3 px-6 mb-3"
            >
              Confio na Federal Associados
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;