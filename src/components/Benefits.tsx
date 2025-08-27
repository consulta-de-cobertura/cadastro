import React from 'react';
import { Wifi, PhoneCall, FileX, Clock, Navigation, Shield } from 'lucide-react';

interface BenefitsProps {
  onRedirect: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onRedirect }) => {
  const benefits = [
    {
      icon: <Wifi className="h-10 w-10 text-blue-400" />,
      title: "Internet ilimitada 4G/5G",
      description: "Navegue sem preocupações com limites de dados em alta velocidade."
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-blue-400" />,
      title: "Ligações ilimitadas",
      description: "Fale à vontade com qualquer número no Brasil, sem custos adicionais."
    },
    {
      icon: <FileX className="h-10 w-10 text-blue-400" />,
      title: "Sem consulta ao SPC/SERASA",
      description: "Sem burocracia ou verificação de crédito para adquirir seu plano."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-400" />,
      title: "Sem fidelidade",
      description: "Você tem liberdade para cancelar quando quiser, sem multas."
    },
    {
      icon: <Navigation className="h-10 w-10 text-blue-400" />,
      title: "Entrega grátis",
      description: "Receba seu chip em qualquer lugar do Brasil sem custos de envio."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-400" />,
      title: "Suporte 24h",
      description: "Assistência completa a qualquer hora do dia ou da noite."
    }
  ];

  return (
    <section id="beneficios" className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* NOVA SEÇÃO ESTRATÉGICA COM A IMAGEM DO CASAL */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Imagine nunca mais precisar pedir senha do Wi-Fi, nunca mais ficar sem internet quando sair de casa. <strong className="text-blue-600">Essa é a liberdade</strong> que a Federal Associados oferece.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Internet ilimitada 4G/5G",
                    description: "Navegue sem preocupações com limites de dados em alta velocidade."
                  },
                  {
                    title: "Envio do chip grátis",
                    description: "Receba seu chip em qualquer lugar do Brasil sem custos de envio."
                  },
                  {
                    title: "Suporte 24h",
                    description: "Assistência completa a qualquer hora do dia ou da noite."
                  },
                  {
                    title: "Ligações ilimitadas",
                    description: "Fale à vontade com qualquer número no Brasil, sem custos adicionais."
                  },
                  {
                    title: "Internet grátis todo mês com o PBI",
                    description: "Transforme sua conexão em uma fonte de renda extra recorrente."
                  },
                  {
                    title: "Contratação sem consulta ao SPC/SERASA",
                    description: "Sem burocracia ou verificação de crédito para adquirir seu plano."
                  },
                  {
                    title: "Internet sem fidelidade",
                    description: "Você tem liberdade para cancelar quando quiser, sem multas."
                  },
                  {
                    title: "Clube de descontos",
                    description: "Benefícios exclusivos em estabelecimentos parceiros em todo o Brasil."
                  },
                  {
                    title: "Internet o mês todo, sem surpresas",
                    description: "Valor fixo mensal, sem taxas extras ou cobranças inesperadas."
                  },
                  {
                    title: "Renda extra recorrente",
                    description: "Ganhe dinheiro indicando nossos planos para amigos e familiares."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors border border-gray-200"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600 text-sm">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                <img
                  src="/images/image copy copy copy copy copy copy copy copy.png"
                  alt="Casal feliz usando celulares - Liberdade de conexão Federal Associados"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                
                {/* Badge de liberdade */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-3 py-2 shadow-lg">
                  <div className="flex items-center">
                    <Wifi className="h-4 w-4 mr-1" />
                    <span className="text-sm font-bold">Liberdade Total</span>
                  </div>
                </div>

                {/* Estatística flutuante */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Conectados</div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 md:mb-10">
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ao se associar na Federal Associados, você recebe um chip com benefícios exclusivos que vão muito além da internet.
          </p>
        </div>

        {/* IMAGEM ESTRATÉGICA 1: Homem de camisa laranja falando ao telefone */}
        <div className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Mantém a imagem do homem como já está */}
            <div className="relative order-2 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
                <img
                  src="https://wjfmlsgkoehvnhapicrv.supabase.co/storage/v1/object/public/imagens//photo_2025-06-28_18-38-20.jpg"
                  alt="Homem de camisa laranja falando ao telefone - Conectividade profissional Federal Associados"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent"></div>
                
                {/* Badge de conectividade */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-2 shadow-lg">
                  <div className="flex items-center">
                    <PhoneCall className="h-4 w-4 mr-1" />
                    <span className="text-sm font-bold">Conectado 24h</span>
                  </div>
                </div>

                {/* Estatística flutuante */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">100%</div>
                    <div className="text-xs text-gray-600">Cobertura</div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* CTA Estratégico após apresentar benefícios */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={onRedirect}
            className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 shadow-lg text-lg py-3 px-6"
          >
            Quero Esses Benefícios Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;