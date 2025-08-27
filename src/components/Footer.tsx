import React from 'react';
import { Wifi, Phone, Mail, MapPin } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = React.useState(false);

  return (
    <footer className="bg-white text-gray-900 pt-8 md:pt-16 pb-6 md:pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <div className="flex items-center mb-3 md:mb-4">
              <Wifi className="h-6 w-6 md:h-8 md:w-8 text-blue-400 mr-2" />
              <span className="text-lg md:text-xl font-bold text-gray-900">Federal Associados</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Democratizando o acesso à internet de qualidade, com planos acessíveis, liberdade total e benefícios exclusivos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Links Rápidos</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#beneficios" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors">Benefícios</a></li>
              <li><a href="#planos" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors">Cadastre-se</a></li>
              <li><a href="#sobre" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Contato</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600">Central de Atendimento 24h</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600">contato@federalassociados.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600">Avenida Contorno, 3790, Bairro Santa Clara, Goianésia-GO</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Horário de Atendimento</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Nossa central de suporte está disponível 24 horas por dia, 7 dias por semana, incluindo feriados.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 md:pt-8 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Federal Associados. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-gray-600 hover:text-blue-600 text-xs md:text-sm transition-colors"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-xs md:text-sm">
              CNPJ 29.383.343/0001-64
            </p>
          </div>
        </div>
      </div>

      <Dialog.Root open={isPrivacyPolicyOpen} onOpenChange={setIsPrivacyPolicyOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 text-gray-800 shadow-lg focus:outline-none z-50 overflow-y-auto">
            <Dialog.Title className="text-2xl font-bold mb-4">
              Política de Privacidade
            </Dialog.Title>
            <div className="prose prose-sm max-w-none">
              <p className="text-sm text-gray-600 mb-4">Este Aviso de Privacidade entrou em vigor em 09 de junho de 2022.</p>
              
              <div className="space-y-4 text-gray-600">
                <p>Na Federal Associados, reconhecemos a importância de proteger suas informações pessoais e estamos comprometidos em processá-las com responsabilidade e em conformidade com as leis de proteção de dados.</p>

                <p>A Federal Associados coleta, usa e, às vezes, compartilha informações para executar suas operações cotidianas. Este Aviso de Privacidade descreve as práticas gerais de privacidade da Federal Associados que se aplicam à coleta e uso de informações pessoais.</p>

                <p>Este Aviso não se aplica a informações pessoais relacionadas a funcionários, candidatos a emprego e contratados temporários que prestam serviços à Federal Associados, incluindo outros em relacionamentos com tais pessoas que sejam relevantes para seu relacionamento com a Federal Associados (como para fins de contato emergencial e benefícios). Para obter informações sobre o processamento desses dados pela Federal Associados, continue a leitura deste documento.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">TIPOS DE INFORMAÇÕES PESSOAIS QUE COLETAMOS</h3>
                <p>Ao descrever nossa coleta, uso e compartilhamento de informações neste Aviso, nos referimos à nossa coleta e uso de "Informações Pessoais". "Informações Pessoais", conforme usado neste Aviso, é qualquer informação relacionada a uma pessoa física identificada ou identificável. Exemplos de informações pessoais incluem nome e sobrenome, endereço para correspondência, endereço de e-mail, informações de faturamento, endereço IP, outras informações de contato on-line ou número de telefone.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">COMO COLETAMOS SUAS INFORMAÇÕES PESSOAIS</h3>
                <p>Nós coletamos informações pessoais de três maneiras:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Coletamos as informações que você nos fornece em envios voluntários opcionais, como formulários de inscrição, perfis de usuários, inscrições promocionais, sorteios / inscrições em concursos, Ficha de Afiliação do associado, downloads de softwares e aplicativos móveis.</li>
                  <li>Podemos coletar algumas informações pessoais automaticamente. Isso é descrito abaixo em "Coleta de dados passiva".</li>
                  <li>Também podemos obter informações, incluindo informações pessoais, de fontes de terceiros. Se combinarmos informações de terceiros diretamente com as Informações Pessoais que coletamos, trataremos as informações combinadas como Informações Pessoais e lidaremos com elas de acordo com este Aviso.</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3">Coleta Passiva de Dados</h3>
                <h4 className="font-semibold mt-4 mb-2">Serviços baseados em localização</h4>
                <p>Podemos coletar, usar e compartilhar (com parceiros da Federal Associados, provedores de serviços e licenciados) dados de localização precisos, incluindo a localização em tempo real do seu dispositivo de local fixo ou móvel.</p>

                <h4 className="font-semibold mt-4 mb-2">Ferramentas de análise</h4>
                <p>Usamos ferramentas de análise e outras tecnologias de terceiros, como Google Analytics, Facebook Analytics e DoubleClick Cookies, para coletar informações não pessoais na forma de várias métricas de uso e usuário ao usar o site da Federal Associados ou usar nossos serviços.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">Cookies</h3>
                <p>Podemos usar uma variedade de métodos, incluindo "cookies" para coletar informações.</p>

                <h4 className="font-semibold mt-4 mb-2">O que é um cookie?</h4>
                <p>Cookies são arquivos de texto contendo pequenas quantidades de informações que são baixadas para o seu dispositivo quando você visita um site. Os cookies são enviados de volta ao site de origem em cada visita subsequente ou a outro site que reconheça esse cookie.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">COMO USAMOS SUAS INFORMAÇÕES PESSOAIS</h3>
                <p>Nós só usamos seus dados conforme expressamente estabelecido neste Aviso. Se surgir uma necessidade de usar seus dados para um propósito secundário, forneceremos a você um Aviso prévio de tal uso.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">RAZÕES QUE COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS</h3>
                <p>Nós não compartilhamos suas informações pessoais com terceiros, exceto conforme indicado neste documento. Podemos compartilhar suas informações pessoais conforme necessário para manter operações comerciais, como com fornecedores trabalhando em nosso nome; conforme exigido por lei ou para responder ao processo legal; manter a segurança de nossos produtos; proteger os clientes, funcionários, direitos ou propriedade da Federal Associados; como parte de uma fusão ou aquisição; ou com o seu consentimento expresso.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">COMO GARANTIMOS SUAS INFORMAÇÕES PESSOAIS</h3>
                <p>O Federal Associados usa uma variedade de tecnologias e procedimentos de segurança para ajudar a proteger seus dados pessoais de acesso, uso ou divulgação não autorizados.</p>

                <h3 className="text-lg font-bold mt-6 mb-3">CONTATO</h3>
                <p>Federal Associados</p>
                <p>CNPJ: 29.383.343/0001-64</p>
                <p>contato@federalassociados.com.br</p>

                <h3 className="text-lg font-bold mt-6 mb-3">ALTERAÇÕES AO AVISO</h3>
                <p>Por favor, note que este Aviso de Privacidade pode mudar de tempos em tempos. Você é encorajado a revisar periodicamente este Aviso de Privacidade para se manter informado sobre como estamos protegendo suas informações pessoais.</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsPrivacyPolicyOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </footer>
  );
};

export default Footer;