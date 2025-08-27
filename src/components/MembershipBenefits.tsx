import React from 'react';
import { ShoppingBag, Film, Fuel, Stethoscope, Dumbbell, Building } from 'lucide-react';

interface MembershipBenefitsProps {
  onRedirect: () => void;
}

const MembershipBenefits: React.FC<MembershipBenefitsProps> = ({ onRedirect }) => {
  const benefits = [
    {
      image: "https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-56-07.jpg",
      description: "Economize em diversos estabelecimentos parceiros em todo o Brasil."
    },
    {
      image: "https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-56-12.jpg",
      description: "Ingresso gratuito na rede Cinesystem todo mês para nossos associados."
    },
    {
      image: "https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-55-57.jpg",
      description: "Atendimento com valores reduzidos em clínicas médicas e laboratórios parceiros."
    },
    {
      image: "https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-56-01.jpg",
      description: "Economize no combustível com nossos postos parceiros."
    },
    {
      image: "https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-55-45.jpg",
      description: "Preços exclusivos em academias conveniadas por todo o país."
    },
    {
      image: "https://zqkbaizdfmeheownhjeg.supabase.co/storage/v1/object/public/imagens//photo_2025-07-30_17-55-51.jpg",
      description: "Descontos especiais em clínicas odontológicas parceiras."
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">Clube de Benefícios Exclusivos</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ser um associado da Federal Associados é muito mais que ter internet ilimitada. Conheça nossos benefícios exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="mb-4">
                <img
                  src={benefit.image}
                  alt={`Benefício ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Estratégico após benefícios exclusivos */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={onRedirect}
            className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 animate-subtle-pulse hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 shadow-lg text-lg py-3 px-6 mb-3"
          >
            Quero Todos Esses Benefícios
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;