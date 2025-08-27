import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems: FAQItem[] = [
    {
      question: "Eu posso ativar o plano no meu número atual?",
      answer: "Não, você recebe um chip novo com o plano da Federal Associados. O seu número atual permanecerá inalterado."
    },
    {
      question: "Preciso cancelar minha linha atual?",
      answer: "Não, você pode usar dois chips no mesmo aparelho (se ele tiver suporte a Dual SIM) ou simplesmente manter seu número atual em outro dispositivo."
    },
    {
      question: "Qual a diferença do chip Federal Associados para operadoras?",
      answer: "É um plano corporativo exclusivo, ilimitado, sem pegadinhas, sem surpresas. Oferecemos liberdade total sem fidelidade, sem consulta ao SPC/SERASA, e com diversos benefícios exclusivos que as operadoras tradicionais não oferecem."
    },
    {
      question: "Como funciona a entrega do chip?",
      answer: "Após a confirmação da sua associação, enviaremos o chip para o endereço informado, com frete grátis para todo o Brasil. O prazo médio de entrega é de 5 a 10 dias úteis, dependendo da sua localização."
    },
    {
      question: "Existe alguma fidelidade nos planos?",
      answer: "Não! Uma das nossas maiores vantagens é a liberdade total. Você pode cancelar seu plano a qualquer momento, sem multas ou taxas adicionais."
    },
    {
      question: "Como faço para me tornar um associado?",
      answer: "Basta escolher um dos nossos planos disponíveis, preencher seus dados e efetuar o pagamento da primeira mensalidade. Após a confirmação, seu chip será enviado para o endereço informado."
    },
    {
      question: "Quais documentos são necessários para adesão?",
      answer: "Apenas seus documentos pessoais básicos (RG e CPF). Não realizamos consulta ao SPC/SERASA, tornando nossos planos acessíveis para todos, independentemente do histórico financeiro."
    },
    {
      question: "Como funciona o suporte 24h?",
      answer: "Temos uma central de atendimento via WhatsApp disponível 24 horas por dia, 7 dias por semana. Nossos atendentes estão sempre prontos para resolver qualquer dúvida ou problema com seu plano."
    },
    {
      question: "E se não funcionar na minha região?",
      answer: "Trabalhamos com as 3 maiores operadoras do Brasil (Vivo, Tim e Claro). Nossa cobertura alcança 99,8% do território nacional. Se por algum motivo não funcionar na sua região, você tem 7 dias de garantia total para cancelar e receber 100% do seu dinheiro de volta."
    },
    {
      question: "Como sei que não é golpe?",
      answer: "Somos uma empresa com mais de 14 anos no mercado, CNPJ ativo, sede física própria, mais de 5 escritórios pelo Brasil e 100.000+ associados satisfeitos. Você pode verificar nossa empresa no site da Receita Federal e temos garantia de 7 dias para devolução total do valor."
    },
    {
      question: "Posso usar em qualquer aparelho?",
      answer: "Sim! Nosso chip funciona em qualquer celular desbloqueado, tablets, modems móveis e roteadores 4G/5G. Compatível com Android, iPhone e todos os dispositivos que aceitem chip de operadora."
    },
    {
      question: "Quanto tempo demora para ativar?",
      answer: "Para planos Vivo: ativação imediata (você compra um chip lacrado e solicitamos a ativação na hora). Para Tim e Claro: enviamos seu chip em até 24h e você recebe em 5-10 dias úteis com código de rastreio."
    },
    {
      question: "Posso cancelar quando quiser mesmo?",
      answer: "Absolutamente! Não temos fidelidade nem multas. Você pode cancelar a qualquer momento sem pagar nada extra. Somos transparentes: sua liberdade é garantida por contrato."
    },
    {
      question: "E se eu não souber usar ou configurar?",
      answer: "Nosso suporte 24h te ajuda em tudo! Desde a configuração inicial até qualquer dúvida que surgir. Temos tutoriais em vídeo e atendimento personalizado via WhatsApp para garantir que você use seu plano sem problemas."
    }
  ];

  return (
    <section id="faq" className="py-8 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">Perguntas Frequentes</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos planos e serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-3 md:mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-base md:text-lg text-gray-900">{item.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" /> : 
                  <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                }
              </button>
              
              <div 
                className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-4 md:pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-sm md:text-base text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-gray-600">
            Não encontrou a resposta que procurava? Entre em contato com nosso suporte 24h.
          </p>
          <div className="mt-4">
            <button
              onClick={() => window.open('https://formulario.conecteseagora.com.br', '_blank')}
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="text-white mr-2"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
              </svg>
              Falar com Suporte via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;