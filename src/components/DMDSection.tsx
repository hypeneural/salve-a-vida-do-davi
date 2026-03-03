import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, Heart, TrendingDown } from 'lucide-react';

const DMDSection = () => {
  const stages = [
    {
      age: '0-7 anos',
      symptoms: 'Dificuldade para correr, subir escadas e quedas frequentes',
      impact: 'Brincadeiras ficam mais limitadas',
      color: 'davi-yellow'
    },
    {
      age: '7-12 anos',
      symptoms: 'Perda gradual da marcha e necessidade de cadeira de rodas',
      impact: 'Autonomia reduzida de forma significativa',
      color: 'davi-blue'
    },
    {
      age: '13+ anos',
      symptoms: 'Comprometimento cardíaco e respiratório severo',
      impact: 'Risco de vida elevado',
      color: 'red-500'
    }
  ];

  return (
    <section id="dmd" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Uma corrida contra o tempo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6 leading-tight">
            Entenda a <span className="text-red-600">Distrofia Muscular</span>
            <br />
            de Duchenne (DMD)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A DMD é uma doença genética rara e progressiva. Sem tratamento, ela avança rapidamente e compromete a
            capacidade de andar, respirar e manter o coração funcionando.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-2 border-red-100">
            <div className="mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">O que é a DMD?</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                A Distrofia Muscular de Duchenne é causada pela ausência da proteína distrofina. Sem ela, os músculos
                se degeneram de forma contínua, afetando movimentos simples e, com o tempo, funções vitais.
              </p>
              <p>
                <strong>Como afeta o Davi:</strong> cada dia sem tratamento significa perda muscular irreversível. O
                Elevidys é a chance de frear esse processo o quanto antes.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-blue/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-blue/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-davi-blue" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Como afeta o Davi hoje</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-davi-yellow/10 p-4 rounded-lg border border-davi-yellow/30">
                <p className="font-semibold text-davi-green-dark mb-2">Sintomas atuais</p>
                <ul className="space-y-2 text-sm">
                  <li>• Dificuldade para subir escadas e correr</li>
                  <li>• Quedas frequentes</li>
                  <li>• Cansaço em atividades simples</li>
                  <li>• Músculos da panturrilha aumentados (pseudohipertrofia)</li>
                </ul>
              </div>

              <p>
                <strong>Por que agir agora:</strong> Davi ainda anda e brinca, mas a doença já limita seu ritmo. Sem o
                tratamento, a perda de força se acelera.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-davi-green-dark mb-8">
            Progressão da DMD sem tratamento
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Por que o tempo é crucial: quanto antes tratarmos, mais músculos preservados.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card
                key={stage.age}
                className={`p-6 border-2 ${index === 0
                  ? 'border-davi-yellow/30 bg-davi-yellow/5'
                  : index === 1
                    ? 'border-davi-blue/30 bg-davi-blue/5'
                    : 'border-red-300 bg-red-50'
                  }`}
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${index === 0 ? 'bg-davi-yellow/20' : index === 1 ? 'bg-davi-blue/20' : 'bg-red-100'
                      }`}
                  >
                    <Clock
                      className={`w-6 h-6 ${index === 0 ? 'text-davi-green-dark' : index === 1 ? 'text-davi-blue' : 'text-red-600'
                        }`}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{stage.age}</h4>
                  {index === 1 && (
                    <span className="inline-block px-3 py-1 bg-davi-green-dark text-white text-xs rounded-full font-semibold mt-2">
                      Davi está aqui
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Sintomas</p>
                    <p className="text-sm text-gray-600">{stage.symptoms}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Impacto</p>
                    <p className="text-sm text-gray-600">{stage.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-dark to-davi-blue text-white p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Davi está na idade crítica para o tratamento
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Quanto mais cedo começarmos, maiores são as chances de frear a progressão da DMD e preservar a qualidade de
            vida.
          </p>
          <div className="bg-white/15 p-4 rounded-lg">
            <p className="font-bold text-xl">
              Cada dia conta. Cada doação importa. Compartilhar também salva vidas.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DMDSection;
