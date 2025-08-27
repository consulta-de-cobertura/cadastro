import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, Calendar } from 'lucide-react';

interface PBICalculatorProps {
  onRedirect: () => void;
}

const PBICalculator: React.FC<PBICalculatorProps> = ({ onRedirect }) => {
  const [indicacoes, setIndicacoes] = useState<number>(0);
  const [planoValor, setPlanoValor] = useState<number>(69.90);
  const [showResult, setShowResult] = useState(false);

  const planos = [
    { value: 29.90, label: "VIVO 15GB SEM LIGAÇÃO - R$ 29,90" },
    { value: 49.90, label: "VIVO 40GB SEM LIGAÇÃO - R$ 49,90" },
    { value: 49.90, label: "TIM 40GB COM LIGAÇÃO - R$ 49,90" },
    { value: 49.90, label: "CLARO 40GB COM LIGAÇÃO - R$ 49,90" },
    { value: 69.90, label: "VIVO 60GB SEM LIGAÇÃO - R$ 69,90" },
    { value: 69.90, label: "VIVO 80GB COM LIGAÇÃO - R$ 69,90" },
    { value: 69.90, label: "TIM 100GB COM LIGAÇÃO - R$ 69,90" },
    { value: 69.90, label: "CLARO 80GB COM LIGAÇÃO - R$ 69,90" },
    { value: 99.90, label: "VIVO 150GB SEM LIGAÇÃO - R$ 99,90" },
    { value: 99.90, label: "VIVO 150GB COM LIGAÇÃO - R$ 99,90" },
    { value: 149.90, label: "VIVO 200GB COM LIGAÇÃO - R$ 149,90" },
    { value: 159.90, label: "TIM 200GB SEM LIGAÇÃO - R$ 159,90" },
    { value: 199.90, label: "VIVO 300GB COM LIGAÇÃO - R$ 199,90" },
    { value: 199.90, label: "TIM 300GB SEM LIGAÇÃO - R$ 199,90" },
    { value: 279.90, label: "VIVO 400GB COM LIGAÇÃO - R$ 279,90" }
  ];

  const calcular = () => {
    if (!indicacoes || indicacoes <= 0) {
      alert('Digite um número válido de indicações.');
      return;
    }
    setShowResult(true);
  };

  // Comissão na adesão (87%)
  const ganhoAdesao = planoValor * 0.87 * indicacoes;
  
  // Comissão recorrente: 10% até 69,90, 20% acima
  const comissaoRecorrente = planoValor <= 69.90 ? 0.10 : 0.20;
  const ganhoRecorrente = planoValor * comissaoRecorrente * indicacoes;
  
  // Gerar dados para 12 meses
  const gerarDadosMensais = () => {
    const dados = [];
    let recorrenciaAcumulada = 0;
    
    for (let mes = 1; mes <= 12; mes++) {
      recorrenciaAcumulada += ganhoRecorrente;
      dados.push({
        mes,
        indicacoes,
        ganhoAdesao,
        recorrenciaAcumulada,
        totalMes: ganhoAdesao + recorrenciaAcumulada
      });
    }
    
    return dados;
  };

  const dadosMensais = gerarDadosMensais();
  const totalAno = ganhoAdesao + (ganhoRecorrente * 12);

  // Função para formatar valores em Real brasileiro
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="bg-white rounded-2xl p-3 md:p-8 border border-gray-200 max-w-4xl mx-auto shadow-lg">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-5 w-5 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3" />
          <h3 className="text-lg md:text-3xl font-bold text-gray-900">
            💰 Calcule seus ganhos com o PBI
          </h3>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
          Informe o número de indicações, o plano e o tempo para ver seus ganhos com o PBI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Indicações no mês
          </label>
          <input
            type="number"
            value={indicacoes || ''}
            onChange={(e) => setIndicacoes(parseInt(e.target.value) || 0)}
            placeholder="Indicações no mês"
            className="w-full p-2 md:p-3 text-sm md:text-base rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Plano escolhido
          </label>
          <select
            value={planoValor}
            onChange={(e) => setPlanoValor(parseFloat(e.target.value))}
            className="w-full p-2 md:p-3 text-xs md:text-base rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {planos.map((plano, index) => (
              <option key={index} value={plano.value}>
                {plano.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <div className="bg-blue-50 rounded-lg p-2 md:p-3 text-center w-full border border-blue-200">
            <Calendar className="h-4 w-4 md:h-6 md:w-6 text-blue-600 mx-auto mb-1" />
            <div className="text-xs md:text-sm text-gray-600">Projeção</div>
            <div className="text-sm md:text-lg font-bold text-gray-900">12 meses</div>
          </div>
        </div>
      </div>

      <div className="text-center mb-4 md:mb-6">
        <button
          onClick={calcular}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-8 text-sm md:text-base rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
        >
          <Calculator className="h-4 w-4 md:h-5 md:w-5 inline mr-2" />
          Calcular Ganhos
        </button>
      </div>

      {showResult && indicacoes > 0 && (
        <div className="bg-blue-50 rounded-xl p-3 md:p-6 border border-blue-200">
          <div className="text-center mb-4">
            <TrendingUp className="h-5 w-5 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="text-lg md:text-xl font-bold text-gray-900">📊 Sua Projeção de Ganhos</h4>
          </div>

          {/* Resumo inicial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
            <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                R$ {formatCurrency(ganhoAdesao)}
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                💵 Ganho único no 1º mês com adesão ({indicacoes} indicações)
              </p>
            </div>

            <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                R$ {formatCurrency(ganhoRecorrente)}/mês
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                ♻️ Ganho recorrente mensal ({indicacoes} indicados ativos)
              </p>
            </div>
          </div>

          {/* Tabela de crescimento mensal */}
          <div className="mb-4 md:mb-8">
            <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 text-center">
              📈 Crescimento Mensal com {indicacoes} Indicações
            </h5>
            
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600">
                    <tr>
                      <th className="px-1 py-2 md:px-3 md:py-3 text-left text-xs md:text-sm font-semibold text-white">Mês</th>
                      <th className="px-1 py-2 md:px-3 md:py-3 text-left text-xs md:text-sm font-semibold text-white">Indic.</th>
                      <th className="px-1 py-2 md:px-3 md:py-3 text-left text-xs md:text-sm font-semibold text-white">Adesão</th>
                      <th className="px-1 py-2 md:px-3 md:py-3 text-left text-xs md:text-sm font-semibold text-white">Recorrente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dadosMensais.map((dados, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-1 py-2 md:px-3 md:py-3 text-xs md:text-sm text-gray-900 font-semibold">{dados.mes}º</td>
                        <td className="px-1 py-2 md:px-3 md:py-3 text-xs md:text-sm text-gray-700">{dados.indicacoes}</td>
                        <td className="px-1 py-2 md:px-3 md:py-3 text-xs md:text-sm text-gray-700">R$ {formatCurrency(dados.ganhoAdesao)}</td>
                        <td className="px-1 py-2 md:px-3 md:py-3 text-xs md:text-sm text-gray-700">R$ {formatCurrency(dados.recorrenciaAcumulada)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Total acumulado */}
          <div className="text-center p-3 md:p-6 bg-blue-100 rounded-lg mb-4 md:mb-6 border border-blue-300">
            <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              R$ {formatCurrency(totalAno)}
            </div>
            <p className="text-sm md:text-base text-gray-600">
              💰 Total acumulado em 12 meses
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              (Adesão única + Recorrência acumulada)
            </p>
          </div>

          {/* Mensagem especial quando internet fica grátis */}
          {indicacoes >= 10 && planoValor <= 69.90 && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 md:p-6 text-center">
              <h5 className="text-lg md:text-xl font-bold text-yellow-700 mb-3">
                🎉 Parabéns! Sua internet ficará GRÁTIS!
              </h5>
              <p className="text-sm md:text-base text-yellow-600 mb-4">
                Com {indicacoes} indicados ativos, o valor da sua mensalidade já está pago pela recorrência!
              </p>
              
              <button
                onClick={onRedirect}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-4 md:px-8 text-sm md:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
              >
                🚀 QUERO COMEÇAR AGORA E TER INTERNET GRÁTIS! <ArrowRight className="inline h-4 w-4 md:h-5 md:w-5 ml-2" />
              </button>
            </div>
          )}

          {/* Mensagem de urgência para todos os casos */}
          {!(indicacoes >= 10 && planoValor <= 69.90) && (
            <div className="bg-white rounded-lg p-3 md:p-6 text-center border border-gray-200">
              <h5 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                ⏰ Quanto antes você começar, mais rápido cresço!
              </h5>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Visualize o potencial de crescimento exponencial com indicações constantes.
              </p>
              
              <button
                onClick={onRedirect}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 text-sm md:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 QUERO COMEÇAR AGORA! <ArrowRight className="inline h-4 w-4 md:h-5 md:w-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PBICalculator;