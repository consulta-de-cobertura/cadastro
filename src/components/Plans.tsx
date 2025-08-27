import React, { useState } from 'react';
import { Smartphone, Wifi, Home, Phone, PhoneOff } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Button from './Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PlansProps {
  onRedirect: () => void;
}

const Plans: React.FC<PlansProps> = ({ onRedirect }) => {
  const [currentBill, setCurrentBill] = useState('');
  const [calculationResult, setCalculationResult] = useState<string | null>(null);
  const [showSignUpButton, setShowSignUpButton] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState<'Vivo' | 'Tim' | 'Claro'>('Vivo');
  const [selectedPlanType, setSelectedPlanType] = useState<'withCalls' | 'withoutCalls'>('withCalls');

  const operatorPlans = [
    {
      operator: 'Vivo',
      color: 'from-purple-600 to-purple-800',
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <rect x="10" y="8" width="80" height="24" rx="12" fill="#660099"/>
          <text x="50" y="24" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">VIVO</text>
        </svg>
      ),
      withCalls: [
        { data: '80GB', price: '69,90' },
        { data: '150GB', price: '99,90' },
        { data: '200GB', price: '149,90' },
        { data: '300GB', price: '199,90' },
        { data: '400GB', price: '279,90' }
      ],
      withoutCalls: [
        { data: '15GB', price: '29,90' },
        { data: '40GB', price: '49,90' },
        { data: '60GB', price: '69,90' },
        { data: '150GB', price: '99,90' }
      ],
      zeroRatedApps: ['WhatsApp', 'Waze', 'Moovit']
    },
    {
      operator: 'Tim',
      color: 'from-blue-600 to-blue-800',
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <rect x="10" y="8" width="80" height="24" rx="12" fill="#0066CC"/>
          <text x="50" y="24" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TIM</text>
        </svg>
      ),
      withCalls: [
        { data: '40GB', price: '49,90' },
        { data: '100GB', price: '69,90' }
      ],
      withoutCalls: [
        { data: '200GB', price: '159,90' },
        { data: '300GB', price: '199,90' }
      ],
      zeroRatedApps: ['WhatsApp', 'Facebook', 'Instagram', 'Messenger', 'Twitter (X)']
    },
    {
      operator: 'Claro',
      color: 'from-red-600 to-red-800',
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <rect x="10" y="8" width="80" height="24" rx="12" fill="#CC0000"/>
          <text x="50" y="24" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">CLARO</text>
        </svg>
      ),
      withCalls: [
        { data: '40GB', price: '49,90' },
        { data: '80GB', price: '69,90' }
      ],
      withoutCalls: [],
      zeroRatedApps: ['WhatsApp', 'Waze', 'TikTok', 'Instagram', 'Facebook']
    }
  ];

  const formatCurrency = (value: string) => {
    // Remove any non-numeric characters except comma and period
    let cleanValue = value.replace(/[^\d,.]/g, '');
    
    // Replace comma with period for calculation
    cleanValue = cleanValue.replace(',', '.');
    
    // Ensure only one decimal point
    const parts = cleanValue.split('.');
    if (parts.length > 2) {
      cleanValue = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Limit to 2 decimal places
    if (parts[1]?.length > 2) {
      cleanValue = parseFloat(cleanValue).toFixed(2);
    }
    
    return cleanValue;
  };

  const calculateSavings = () => {
    const currentValue = parseFloat(formatCurrency(currentBill));
    const federalValue = 69.90;

    if (isNaN(currentValue) || currentValue <= 0) {
      setCalculationResult("Informe um valor maior que R$ 0 para simular.");
      setShowSignUpButton(false);
      return;
    }

    const monthlySavings = currentValue - federalValue;
    const yearlySavings = monthlySavings * 12;

    if (monthlySavings > 0) {
      setCalculationResult(
        `Você pode economizar até R$ ${monthlySavings.toFixed(2).replace('.', ',')} por mês (R$ ${yearlySavings.toFixed(2).replace('.', ',')} por ano) mudando agora para a Federal Associados.`
      );
      setShowSignUpButton(true);
    } else {
      setCalculationResult(
        `Com a Federal Associados você tem muito mais benefícios pelo mesmo valor ou até mais em conta!`
      );
      setShowSignUpButton(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatCurrency(e.target.value);
    setCurrentBill(value);
  };

  const handleDirectRedirect = () => {
    window.open('https://formulario.conecteseagora.com.br', '_blank');
  };

  const renderPlanCard = (plan: any, operator: any, hasVoice: boolean, index: number) => (
    <div
      key={`${operator.operator}-${hasVoice ? 'voice' : 'data'}-${index}`}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative h-full"
    >
      <div className="relative h-2 bg-gray-200 overflow-hidden">
        <div 
          className="absolute inset-0 bg-red-500"
          style={{
            animation: 'drainProgress 240s linear infinite',
            transformOrigin: 'right'
          }}
        />
      </div>

      <div className="text-center py-2 bg-gray-100">
        <p className="text-red-500 text-sm font-semibold animate-pulse">
          Oferta por tempo limitado
        </p>
      </div>

      <div className={`bg-gradient-to-r ${operator.color} p-4 md:p-6 text-white text-center relative`}>
        {/* Badge "Recomendado" apenas para planos específicos */}
        {hasVoice && operator.operator === 'Vivo' && (plan.data === '80GB' || plan.data === '150GB') && (
          <div className="absolute top-2 right-2 z-10">
            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
              Recomendado
            </div>
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-bold mb-2">{operator.operator}</h3>
        <div className="text-3xl md:text-4xl font-bold mb-2">{plan.data}</div>
        <div className="flex items-center justify-center mb-2">
          <span className="text-lg md:text-xl">R$</span>
          <span className="text-4xl md:text-5xl font-bold mx-2">{plan.price}</span>
          <span>/mês</span>
        </div>
        <div className="flex items-center justify-center">
          {hasVoice ? (
            <div className="flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Com Ligações</span>
            </div>
          ) : (
            <div className="flex items-center bg-gray-500/20 backdrop-blur-sm rounded-full px-3 py-1">
              <PhoneOff className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Sem Ligações</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="mb-4 md:mb-6 flex-1">
          {hasVoice ? (
            <div>
              <h4 className="text-gray-900 text-sm font-semibold mb-2">Incluso:</h4>
              <div className="flex items-center text-green-600 mb-3">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Ligações ilimitadas para todo o Brasil</span>
              </div>
              <h5 className="text-gray-900 text-sm font-semibold mb-2">Aplicativos que não descontam da franquia:</h5>
              <div className="flex flex-wrap gap-2">
                {operator.zeroRatedApps.map((app: string, i: number) => (
                  <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-gray-900 text-sm font-semibold mb-2">Aplicativos que não descontam da franquia:</h4>
              <div className="flex flex-wrap gap-2">
                {operator.zeroRatedApps.map((app: string, i: number) => (
                  <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <Button
          onClick={onRedirect}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 button-glow mt-auto"
        >
          QUERO ME ASSOCIAR AGORA
        </Button>
      </div>
    </div>
  );

  const currentOperatorData = operatorPlans.find(op => op.operator === selectedOperator);
  const currentPlans = selectedPlanType === 'withCalls' ? currentOperatorData?.withCalls : currentOperatorData?.withoutCalls;

  return (
    <section id="planos" className="py-6 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
            Conheça nossos planos relâmpago disponíveis para cada operadora:
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Escolha sua operadora e tipo de plano preferido
          </p>

          {/* Botões das Operadoras */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {operatorPlans.map((operator) => (
              <button
                key={operator.operator}
                onClick={() => {
                  setSelectedOperator(operator.operator as 'Vivo' | 'Tim' | 'Claro');
                  // Auto-select plan type based on availability
                  if (operator.operator === 'Claro' && selectedPlanType === 'withoutCalls') {
                    setSelectedPlanType('withCalls');
                  }
                }}
                className={`flex items-center justify-center px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedOperator === operator.operator
                    ? operator.operator === 'Vivo' 
                      ? 'bg-purple-600 text-white shadow-lg'
                      : operator.operator === 'Tim'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {operator.logo}
              </button>
            ))}
          </div>

          {/* Filtros de Tipo de Plano */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 mr-2">✨</span>
              <h3 className="text-xl font-bold text-gray-900">Agora escolha o tipo de plano</h3>
              <span className="text-blue-500 ml-2">✨</span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPlanType('withCalls')}
                disabled={currentOperatorData?.withCalls.length === 0}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedPlanType === 'withCalls'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : currentOperatorData?.withCalls.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Com Ligações
              </button>
              
              <button
                onClick={() => setSelectedPlanType('withoutCalls')}
                disabled={currentOperatorData?.withoutCalls.length === 0}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedPlanType === 'withoutCalls'
                    ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
                    : currentOperatorData?.withoutCalls.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Sem Ligações
              </button>
            </div>
          </div>
        </div>

        {/* Planos Filtrados */}
        {currentPlans && currentPlans.length > 0 ? (
          <div className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {selectedOperator} - {selectedPlanType === 'withCalls' ? 'Planos com Ligações Ilimitadas' : 'Planos Somente Internet'}
              </h3>
              <div className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium ${
                selectedPlanType === 'withCalls' 
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {selectedPlanType === 'withCalls' ? (
                  <>
                    <Phone className="h-4 w-4 mr-1" />
                    Recomendado - Inclui ligações para todo o Brasil
                  </>
                ) : (
                  <>
                    <Wifi className="h-4 w-4 mr-1" />
                    Apenas dados móveis
                  </>
                )}
              </div>
            </div>
            
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 }
              }}
              loop={currentPlans.length > 3}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={true}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              className="plans-swiper"
            >
              {currentPlans.map((plan, index) => (
                <SwiperSlide key={index} className="h-auto">
                  {renderPlanCard(plan, currentOperatorData, selectedPlanType === 'withCalls', index)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-orange-50 border border-orange-300 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Planos Indisponíveis
              </h3>
              <p className="text-orange-600">
                A operadora {selectedOperator} não possui planos {selectedPlanType === 'withCalls' ? 'com ligações' : 'sem ligações'} disponíveis no momento.
              </p>
              <p className="text-sm text-orange-500 mt-2">
                Tente selecionar outro tipo de plano ou operadora.
              </p>
            </div>
          </div>
        )}

        {/* Bloco de Esclarecimento Estratégico */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-12">
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                Por que existem vários planos diferentes na Federal Associados se a internet é ilimitada?
              </h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                Aqui na Federal Associados, você <strong>nunca fica sem internet</strong>. Todos os planos possuem navegação ilimitada, o que muda é a velocidade e a experiência que você deseja.
              </p>
            </div>

            <div className="mb-4 md:mb-6">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 text-center">Veja como funciona:</h4>
              
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-start p-2 md:p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 text-blue-800 font-bold px-2 md:px-3 py-1 rounded-full text-xs md:text-sm mr-2 md:mr-4 flex-shrink-0">
                    40GB
                  </div>
                  <div>
                    <p className="text-xs md:text-base text-gray-600">
                      <strong>Redes sociais, mensagens, uso leve</strong> - Perfeito para quem usa principalmente WhatsApp, Instagram e navegação básica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-2 md:p-4 rounded-lg border-2 border-green-300 bg-green-50">
                  <div className="bg-green-600 text-white font-bold px-2 md:px-3 py-1 rounded-full text-xs md:text-sm mr-2 md:mr-4 flex-shrink-0">
                    80GB
                  </div>
                  <div>
                    <p className="text-xs md:text-base text-gray-600">
                      <strong>O mais escolhido pelos nossos associados!</strong> Assistir vídeos, trabalho home-office, estudos, jogos online.
                    </p>
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-1 md:mt-2">
                      Mais Popular
                    </span>
                  </div>
                </div>

                <div className="flex items-start p-2 md:p-4 rounded-lg border border-gray-200">
                  <div className="bg-purple-100 text-purple-800 font-bold px-2 md:px-3 py-1 rounded-full text-xs md:text-sm mr-2 md:mr-4 flex-shrink-0">
                    150GB
                  </div>
                  <div>
                    <p className="text-xs md:text-base text-gray-600">
                      <strong>Uso em Wi-Fi com toda a família</strong> - Roteador, modem, TV, múltiplos dispositivos conectados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-2 md:p-4 rounded-lg border border-gray-200">
                  <div className="bg-orange-100 text-orange-800 font-bold px-2 md:px-3 py-1 rounded-full text-xs md:text-sm mr-2 md:mr-4 flex-shrink-0">
                    200GB+
                  </div>
                  <div>
                    <p className="text-xs md:text-base text-gray-600">
                      <strong>Empresas, equipes, uso intenso e profissional</strong> - Para quem precisa de máxima performance e velocidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm md:text-lg font-semibold text-gray-900">
                <strong>Ou seja:</strong> todos os planos realmente têm internet ilimitada, o que muda é a velocidade e a finalidade de cada um.
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                Escolha o plano que melhor se adapta ao seu estilo de vida e necessidades!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg max-w-xl mx-auto mt-6 md:mt-12 text-center border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-300 p-4 md:p-6 rounded-2xl shadow-lg max-w-xl mx-auto mt-6 md:mt-12 text-white text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">💸 Está pagando caro demais?</h2>
            <p className="text-sm text-white mb-4">
              Descubra agora quanto você está desperdiçando com sua operadora atual.
            </p>

            <input
              type="text"
              value={currentBill}
              onChange={handleInputChange}
              placeholder="Digite o valor da sua fatura atual (R$)"
              className="w-full p-3 rounded-md text-black font-semibold mb-4 text-center border border-blue-300 bg-white"
            />

            <button
              onClick={calculateSavings}
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-6 rounded-full transition-all button-glow"
            >
              Simular economia
            </button>

            {calculationResult && (
              <div className="mt-4 md:mt-6 text-base md:text-lg font-semibold text-white">
                {calculationResult}
                {showSignUpButton && (
                  <div className="mt-4">
                    <Button
                      onClick={onRedirect}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 button-glow"
                    >
                      QUERO ME ASSOCIAR AGORA
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="text-center mb-4 md:mb-6 mt-6 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">VOCÊ PODE UTILIZAR SEU PLANO EM:</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex items-center px-4 md:px-6 py-2 md:py-3 rounded-lg bg-blue-600 text-white">
                <Smartphone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                <span className="text-sm md:text-base">Celulares & Tablets</span>
              </div>
              <div className="flex items-center px-4 md:px-6 py-2 md:py-3 rounded-lg bg-blue-600 text-white">
                <Wifi className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                <span className="text-sm md:text-base">Modem Móvel</span>
              </div>
              <div className="flex items-center px-4 md:px-6 py-2 md:py-3 rounded-lg bg-blue-600 text-white">
                <Home className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                <span className="text-sm md:text-base">Modem Externo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;