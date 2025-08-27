import React from 'react';
import { UserPlus, CreditCard, Mail, Truck, Zap, CheckCircle } from 'lucide-react';

interface HowItWorksProps {
  onRedirect: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onRedirect }) => {
  const activationOptions = [
    {
      operator: "Vivo",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Ativação Imediata",
      description: "Compre um chip Vivo lacrado em qualquer loja e solicite a ativação instantânea conosco.",
      highlight: true
    },
    {
      operator: "Tim & Claro",
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Ativação Tradicional",
      description: "Receba seu chip em casa e solicite a ativação após a entrega. Simples e prático.",
      highlight: false
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            Opções de Ativação
          </h3>
        </div>
          
        {/* Activation Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {activationOptions.map((option, index) => (
              <div 
                key={index}
                className={`rounded-xl p-4 md:p-6 border-2 transition-all duration-300 ${
                  option.highlight 
                    ? 'border-yellow-400 bg-yellow-50 shadow-lg' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {option.highlight && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                      ATIVAÇÃO INSTANTÂNEA
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  {option.icon}
                  <h4 className="text-lg md:text-xl font-bold ml-3 text-gray-900">
                    {option.operator}
                  </h4>
                </div>
                
                <h5 className="text-base md:text-lg font-semibold mb-2 text-gray-900">
                  {option.title}
                </h5>
                
                <p className="text-sm md:text-base text-gray-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
              Pronto para Começar?
            </h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 opacity-90 text-white">
              Todo o processo leva menos de 5 minutos. Comece agora e tenha internet ilimitada em suas mãos!
            </p>
            <button
              onClick={onRedirect}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors text-base md:text-lg"
            >
              Iniciar Meu Cadastro Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;