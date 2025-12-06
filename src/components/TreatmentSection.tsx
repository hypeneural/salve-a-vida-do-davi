import { Card } from '@/components/ui/card';
import { Sparkles, Clock, DollarSign, Target } from 'lucide-react';

const TreatmentSection = () => {
  return (
    <section id="tratamento" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-green-light/20 text-davi-green-dark text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Uma luz no fim do túnel
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6 leading-tight">
            <span className="text-davi-blue">Elevidys:</span> a esperança
            <br />
            para o futuro do Davi
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Terapia gênica aprovada que pode frear a progressão da DMD. O tempo ideal para aplicação é antes dos 7 anos —
            exatamente a idade do Davi.
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
                O Elevidys é a primeira terapia gênica aprovada para DMD. Ele entrega uma versão funcional do gene da
                distrofina aos músculos, permitindo que o corpo produza a microdistrofina e desacelere a perda muscular.
              </p>

              <div className="bg-davi-blue/10 p-4 rounded-lg border border-davi-blue/30">
                <h4 className="font-semibold text-davi-green-dark mb-2">Como funciona</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Leva o gene corrigido direto para os músculos.</li>
                  <li>• Permite produção de uma distrofina funcional (microdistrofina).</li>
                  <li>• Ajuda a preservar a força e a mobilidade já existentes.</li>
                </ul>
              </div>

              <p>
                <strong>Resultado esperado:</strong> frear a progressão da doença e manter a qualidade de vida do Davi
                por muito mais tempo.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-yellow/30 bg-gradient-to-br from-davi-yellow/5 to-davi-green-light/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-yellow/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Por que é nossa única chance?</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-davi-yellow/10 p-4 rounded-lg border border-davi-yellow/30">
                <p className="font-semibold text-davi-green-dark mb-2">Aprovação recente</p>
                <p className="text-sm">
                  Aprovado pela FDA em 2023 após estudos clínicos rigorosos que mostraram segurança e eficácia.
                </p>
              </div>

              <div className="bg-davi-green-light/10 p-4 rounded-lg border border-davi-green-light/30">
                <p className="font-semibold text-davi-green-dark mb-2">Indicado para o Davi</p>
                <p className="text-sm">
                  Desenvolvido especificamente para DMD, com janela ideal antes dos 7 anos. Uma aplicação única pode
                  trazer benefícios duradouros.
                </p>
              </div>

              <p className="font-semibold text-red-600">
                Sem o Elevidys, a DMD segue o curso natural e devastador. Com ele, temos uma chance real de mudar o
                futuro do Davi.
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
              <h3 className="text-2xl font-bold text-red-600 mb-4">Urgência do tratamento</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-red-600 mb-2">Janela de oportunidade</p>
                <p className="text-gray-700 text-sm">
                  A aplicação é mais eficaz antes dos 7 anos, quando ainda há musculatura preservada.
                </p>
              </div>

              <p className="text-gray-700">
                Cada mês que passa sem o Elevidys representa perda muscular irreversível. Começar logo é decisivo para
                manter mobilidade e proteger coração e pulmões.
              </p>

              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <p className="font-bold text-red-600 text-center">Cada dia conta na vida do Davi.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-blue/30 bg-davi-blue/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-blue/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-davi-blue" />
              </div>
              <h3 className="text-2xl font-bold text-davi-blue mb-4">O custo do tratamento</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-davi-blue/30">
                <p className="font-semibold text-davi-blue mb-2">Valor total estimado</p>
                <p className="text-3xl font-bold text-davi-green-dark">R$ 17.000.000</p>
                <p className="text-sm text-gray-600 mt-1">(aproximadamente US$ 3,2 milhões)</p>
              </div>

              <div className="space-y-2 text-gray-700 text-sm">
                <p className="font-semibold">Por que é tão caro?</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Pesquisa e desenvolvimento de mais de uma década.</li>
                  <li>Tecnologia de terapia gênica de última geração.</li>
                  <li>Produção personalizada e complexa.</li>
                  <li>Aplicação única, com potencial de benefício por anos.</li>
                </ul>
              </div>

              <div className="bg-davi-yellow/10 p-4 rounded-lg border border-davi-yellow/30">
                <p className="font-semibold text-davi-green-dark mb-2">Nossa perspectiva</p>
                <p className="text-sm text-gray-700">
                  É um valor alto, mas é o preço da vida e do futuro do Davi. Nenhuma família consegue arcar sozinha —
                  por isso precisamos de uma corrente de solidariedade.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-dark via-davi-green-light to-davi-blue text-white p-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            O Elevidys não é apenas um medicamento — é esperança materializada
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Com sua ajuda, podemos dar ao Davi a chance de crescer, brincar, estudar e realizar seus sonhos.
          </p>
          <div className="bg-white/20 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="font-bold text-xl mb-2">
              “Onde há vida, há esperança. Onde há comunidade, há milagres.”
            </p>
            <p className="text-sm opacity-80">Juntos, podemos transformar o impossível em realidade para o Davi.</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TreatmentSection;
