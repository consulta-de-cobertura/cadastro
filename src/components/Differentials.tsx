import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface DifferentialsProps {
  onRedirect: () => void;
}

const Differentials: React.FC<DifferentialsProps> = ({ onRedirect }) => {
  return (
    <section className="py-6 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">Por que escolher a Federal Associados?</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos planos oferecem vantagens reais que as operadoras tradicionais não conseguem igualar.
            </p>
          </div>
        </AnimatedSection>

        {/* Nova seção com imagem estratégica - BADGES COM TAMANHO FIXO ABSOLUTO */}
        <div className="mb-8 md:mb-16">
          <AnimatedSection animation="fade" delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Imagem com lazy loading e otimizações */}
              <div className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                  {/* Placeholder enquanto carrega */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse"></div>
                  
                  <img
                    src="/images/photo_2025-06-15_06-04-45 (1).jpg"
                    alt="Pessoas conectadas e felizes usando internet Federal Associados"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 relative z-10"
                    loading="lazy"
                    decoding="async"
                    onLoad={(e) => {
                      // Remove placeholder quando imagem carrega
                      const placeholder = e.currentTarget.previousElementSibling;
                      if (placeholder) placeholder.style.display = 'none';
                    }}
                    onError={(e) => {
                      // Fallback se imagem não carregar
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent z-20"></div>
                  
                  {/* Badge "100k+ Conectados" - MOVIDO PARA O LADO DIREITO */}
                  <div 
                    className="absolute bg-white/95 backdrop-blur-sm rounded-full shadow-lg z-30" 
                    style={{ 
                      top: '8px', 
                      right: '8px',
                      padding: '4px 8px',
                      fontSize: '9px',
                      lineHeight: '1.2',
                      maxWidth: 'fit-content'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <div style={{ 
                        width: '4px', 
                        height: '4px', 
                        backgroundColor: '#10b981', 
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite'
                      }}></div>
                      <span style={{ 
                        color: '#1f2937', 
                        fontWeight: '600',
                        fontSize: '9px',
                        whiteSpace: 'nowrap'
                      }}>100k+ Conectados</span>
                    </div>
                  </div>

                  {/* Estatística "4.9★" flutuante - MANTIDO NO LADO DIREITO */}
                  <div 
                    className="absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-30" 
                    style={{ 
                      bottom: '8px', 
                      right: '8px',
                      padding: '4px 6px',
                      textAlign: 'center',
                      minWidth: 'auto'
                    }}
                  >
                    <div style={{ fontSize: '10px', fontWeight: '700', color: '#2563eb', lineHeight: '1' }}>4.9★</div>
                    <div style={{ fontSize: '7px', color: '#6b7280', lineHeight: '1', marginTop: '1px' }}>Satisfação</div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>

              {/* Conteúdo textual reformulado */}
              <div className="order-1 lg:order-2">
                <AnimatedSection animation="slideUp" delay={0.3}>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                    Conectando pessoas em 
                    <span className="block text-blue-600">todo o Brasil</span>
                  </h3>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.4}>
                  <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-8 leading-relaxed">
                    Mais de <strong className="text-blue-600">100.000 brasileiros</strong> já descobriram a liberdade de estar sempre conectado, sem limites, sem surpresas.
                  </p>
                </AnimatedSection>

                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      title: "Liberdade Total",
                      description: "Internet ilimitada para você usar como quiser, quando quiser, onde quiser."
                    },
                    {
                      title: "Sem Pegadinhas",
                      description: "Transparência total. O que prometemos é exatamente o que você recebe."
                    },
                    {
                      title: "Para Todos os Brasileiros",
                      description: "Sem consulta ao SPC/SERASA. Acesso democrático à internet de qualidade."
                    }
                  ].map((item, index) => (
                    <AnimatedSection
                      key={index}
                      animation="slideUp"
                      delay={0.5 + (index * 0.1)}
                      className="flex items-start space-x-4 p-3 md:p-4 rounded-lg hover:bg-white transition-colors border border-gray-200"
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection animation="slideUp" delay={0.8}>
                  <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">Junte-se à nossa família!</h4>
                        <p className="text-sm text-gray-600">Milhares de pessoas conectadas e satisfeitas</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl md:text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-gray-600">Recomendariam</div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Seção original de diferenciais - reformulada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: "Cobertura nacional com as melhores operadoras", 
                  description: "Conexão garantida com a Vivo, Tim e Claro. Você estará sempre conectado, em qualquer lugar do Brasil, com a melhor rede disponível em sua cidade."
                },
                {
                  title: "Alta estabilidade e segurança",
                  description: "Navegue com alta velocidade, E tenha a confiança de uma internet que funciona onde você mais precisa."
                },
                {
                  title: "Planos para você, sem complicação",
                  description: "Nada de contratos corporativos ou letras miúdas. Nossos planos foram feitos para você, usar sem medo e sem enrolação."
                },
                {
                  title: "Sem ligações chatas nem spam te incomodando. Aqui sua privacidade é sagrada.",
                  description: "Você não recebe ligações chatas de telemarketing, não recebe spam. Só entregamos o serviço que você realmente merece."
                },
                {
                  title: "Fatura fixa, sem sustos extras",
                  description: "Aqui você paga sempre o mesmo valor. Nada de cobranças escondidas, taxas extras ou reajustes inesperados."
                }
              ].map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                  className="bg-white rounded-lg p-4 md:p-6 hover:bg-blue-50 transition-colors border border-blue-200 shadow-sm"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <AnimatedSection animation="fade" delay={0.3}>
              <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 relative z-10 border border-blue-200">
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Exclusivo
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center text-gray-900">Nossos Associados Recebem:</h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "MAIS GIGAS PARA USAR À VONTADE",
                    "LIGAÇÕES ILIMITADAS PARA TODO O BRASIL",
                    "SEM FIDELIZAÇÃO, SEM MULTAS, SEM DOR DE CABEÇA",
                    "ENVIO DO CHIP GRÁTIS PARA TODO O BRASIL",
                    "SEM BUROCRACIA, ACESSÍVEL PARA QUALQUER HISTÓRICO FINANCEIRO"
                  ].map((benefit, index) => (
                    <AnimatedSection
                      key={index}
                      animation="slideUp"
                      delay={0.4 + (index * 0.1)}
                      className="flex items-start"
                    >
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-600">{benefit}</span>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* CTA Estratégico após diferenciais */}
        <div className="text-center mt-8 md:mt-12">
          <AnimatedSection animation="slideUp" delay={0.2}>
            <button
              onClick={onRedirect}
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 shadow-lg text-lg py-3 px-6 mb-3"
            >
              Quero Fazer Parte Dessa Família
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Differentials;