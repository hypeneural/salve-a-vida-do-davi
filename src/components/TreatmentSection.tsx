
import { Card } from '@/components/ui/card';
import { Sparkles, Clock, DollarSign, Target } from 'lucide-react';

const TreatmentSection = () => {
  return (
    <section id="tratamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-green-light/20 text-davi-green-dark text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Uma luz no fim do túnel
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6">
            <span className="text-davi-blue">Elevidys:</span> A Esperança
            <br />
            para o Futuro do Davi
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Uma terapia genética revolucionária que pode mudar completamente o futuro do Davi, 
            freando a progressão da DMD e dando a ele a chance de uma vida mais longa e com qualidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-2 border-davi-green-light/30 bg-gradient-to-br from-davi-green-light/5 to-davi-blue/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-green-light/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">O que é o Elevidys?</h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                O <strong>Elevidys</strong> é uma terapia genética inovadora desenvolvida especificamente 
                para tratar a Distrofia Muscular de Duchenne. É a <strong className="text-davi-green-dark">
                primeira e única</strong> terapia genética aprovada para esta condição.
              </p>
              
              <div className="bg-davi-blue/10 p-4 rounded-lg border border-davi-blue/30">
                <h4 className="font-semibold text-davi-green-dark mb-2">Como Funciona:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Entrega uma versão funcional do gene da distrofina diretamente aos músculos</li>
                  <li>• Permite que o corpo produza uma forma modificada da proteína (microdistrofina)</li>
                  <li>• Freia a degeneração muscular progressiva</li>
                  <li>• Pode melhorar a função muscular existente</li>
                </ul>
              </div>

              <p>
                <strong>Resultados esperados:</strong> O tratamento pode significativamente desacelerar 
                a progressão da doença, permitindo que Davi mantenha sua mobilidade e qualidade de vida 
                por muito mais tempo.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-yellow/30 bg-gradient-to-br from-davi-yellow/5 to-davi-green-light/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-yellow/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Por que é Nossa Única Esperança?</h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-davi-yellow/10 p-4 rounded-lg border border-davi-yellow/30">
                <p className="font-semibold text-davi-green-dark mb-2">✅ Aprovação Histórica:</p>
                <p className="text-sm">
                  Aprovado pela FDA (órgão regulador americano) em junho de 2023, 
                  após demonstrar eficácia em estudos clínicos rigorosos.
                </p>
              </div>
              
              <div className="bg-davi-green-light/10 p-4 rounded-lg border border-davi-green-light/30">
                <p className="font-semibold text-davi-green-dark mb-2">🎯 Específico para DMD:</p>
                <p className="text-sm">
                  Desenvolvido especificamente para a condição do Davi. Não é um tratamento experimental, 
                  mas uma terapia comprovada e aprovada.
                </p>
              </div>
              
              <div className="bg-davi-blue/10 p-4 rounded-lg border border-davi-blue/30">
                <p className="font-semibold text-davi-green-dark mb-2">⚡ Tratamento Único:</p>
                <p className="text-sm">
                  Uma única aplicação pode beneficiar Davi por anos, potencialmente 
                  mudando completamente a trajetória de sua vida.
                </p>
              </div>

              <p className="font-semibold text-red-600">
                Sem o Elevidys, Davi enfrentará a progressão natural e devastadora da DMD. 
                Com ele, temos uma chance real de mudar seu futuro.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-2 border-red-300 bg-red-50">
            <div className="mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">⏰ Urgência do Tratamento</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-red-600 mb-2">Janela de Oportunidade:</p>
                <p className="text-gray-700 text-sm">
                  O Elevidys é mais eficaz quando aplicado em crianças <strong>antes dos 7 anos de idade</strong>. 
                  Davi tem apenas alguns meses para iniciar o tratamento.
                </p>
              </div>
              
              <p className="text-gray-700">
                <strong>Por que a idade importa:</strong> Quanto mais músculos estiverem preservados no momento 
                do tratamento, maiores são as chances de sucesso. Cada dia que passa, mais tecido muscular 
                se perde de forma irreversível.
              </p>
              
              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <p className="font-bold text-red-600 text-center">
                  🚨 CADA DIA CONTA NA VIDA DO DAVI
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-blue/30 bg-davi-blue/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-blue/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-davi-blue" />
              </div>
              <h3 className="text-2xl font-bold text-davi-blue mb-4">💰 O Custo do Milagre</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-davi-blue/30">
                <p className="font-semibold text-davi-blue mb-2">Valor Total:</p>
                <p className="text-3xl font-bold text-davi-green-dark">R$ 17.000.000</p>
                <p className="text-sm text-gray-600 mt-1">(aproximadamente US$ 3,2 milhões)</p>
              </div>
              
              <div className="space-y-3 text-gray-700 text-sm">
                <div>
                  <p className="font-semibold mb-1">Por que é tão caro?</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Pesquisa e desenvolvimento de mais de uma década</li>
                    <li>• Tecnologia genética de ponta</li>
                    <li>• Processo de produção extremamente complexo</li>
                    <li>• Tratamento personalizado e único</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-davi-yellow/10 p-4 rounded-lg border border-davi-yellow/30">
                <p className="font-semibold text-davi-green-dark mb-2">💡 Nossa Perspectiva:</p>
                <p className="text-sm text-gray-700">
                  É muito dinheiro, mas é o preço da vida e do futuro do Davi. 
                  Uma única família não consegue arcar sozinha - precisamos nos unir como comunidade.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-dark via-davi-green-light to-davi-blue text-white p-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            O Elevidys não é apenas um medicamento - é esperança materializada
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Com sua ajuda, podemos dar ao Davi a chance de crescer, brincar, estudar e realizar seus sonhos. 
            O futuro dele depende da nossa união neste momento crucial.
          </p>
          <div className="bg-white/20 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="font-bold text-xl mb-2">
              "Onde há vida, há esperança. Onde há comunidade, há milagres."
            </p>
            <p className="text-sm opacity-80">
              Juntos, podemos fazer do impossível uma realidade para o Davi.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TreatmentSection;
