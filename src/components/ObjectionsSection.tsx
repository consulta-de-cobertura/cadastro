import React from 'react';
import { Shield, MapPin, Smartphone, Clock, CreditCard, Users } from 'lucide-react';

interface ObjectionsSectionProps {
  onRedirect: () => void;
}

const ObjectionsSection: React.FC<ObjectionsSectionProps> = ({ onRedirect }) => {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Pronto para se associar?</h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-white">
              Clique no botão abaixo e faça seu cadastro agora mesmo!
            </p>
            <button
              onClick={onRedirect}
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
            >
              Fazer Cadastro Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;