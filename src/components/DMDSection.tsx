
import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, Heart, TrendingDown } from 'lucide-react';

const DMDSection = () => {
  const stages = [
    {
      age: "0-6 anos",
      symptoms: "Dificuldades para correr, subir escadas, quedas frequentes",
      impact: "Brincadeiras se tornam mais limitadas",
      color: "davi-yellow"
    },
    {
      age: "7-12 anos",
      symptoms: "Perda da capacidade de caminhar, uso de cadeira de rodas",
      impact: "Independência reduzida significativamente",
      color: "davi-blue"
    },
    {
      age: "13+ anos",
      symptoms: "Problemas cardíacos e respiratórios graves",
      impact: "Risco de vida aumenta drasticamente",
      color: "red-500"
    }
  ];

  return (
    <section id="dmd" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Uma corrida contra o tempo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6">
            Entenda a <span className="text-red-600">Distrofia Muscular</span>
            <br />
            de Duchenne (DMD)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A DMD é uma doença genética rara que afeta aproximadamente 1 em cada 3.500 meninos nascidos. 
            É progressiva e sem o tratamento adequado, pode ser fatal.
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
                A Distrofia Muscular de Duchenne é uma <strong>doença genética rara</strong> que causa a 
                degeneração progressiva dos músculos devido à ausência ou deficiência da proteína distrofina.
              </p>
              <p>
                <strong>Como afeta o Davi:</strong> Sem a distrofina, os músculos do Davi se enfraquecem 
                gradualmente, afetando sua capacidade de andar, brincar e, eventualmente, respirar e 
                manter o coração funcionando adequadamente.
              </p>
              <p>
                <strong>Progressão:</strong> A doença é implacável e progressiva. Cada dia que passa 
                sem tratamento, mais músculos se deterioram de forma irreversível.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-blue/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-blue/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-davi-blue" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Como Afeta o Davi Hoje</h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-davi-yellow/10 p-4 rounded-lg border border-davi-yellow/30">
                <p className="font-semibold text-davi-green-dark mb-2">Sintomas Atuais:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Dificuldade para subir escadas e correr</li>
                  <li>• Quedas mais frequentes</li>
                  <li>• Cansaço em atividades simples</li>
                  <li>• Músculos da panturrilha aumentados (pseudohipertrofia)</li>
                </ul>
              </div>
              
              <p>
                <strong>O que isso significa:</strong> Davi ainda consegue andar e brincar, mas já sente 
                as limitações da doença. Sem tratamento, essas dificuldades irão aumentar rapidamente.
              </p>
              <p className="text-red-600 font-semibold">
                ⚠️ A janela de oportunidade para o tratamento está se fechando. 
                Precisamos agir antes que Davi complete 7 anos.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-davi-green-dark mb-8">
            Progressão da DMD Sem Tratamento
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Entenda como a doença progride e por que o tempo é crucial para o Davi
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={index} className={`p-6 border-2 ${
                index === 0 ? 'border-davi-yellow/30 bg-davi-yellow/5' :
                index === 1 ? 'border-davi-blue/30 bg-davi-blue/5' :
                'border-red-300 bg-red-50'
              }`}>
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                    index === 0 ? 'bg-davi-yellow/20' :
                    index === 1 ? 'bg-davi-blue/20' :
                    'bg-red-100'
                  }`}>
                    <Clock className={`w-6 h-6 ${
                      index === 0 ? 'text-davi-green-dark' :
                      index === 1 ? 'text-davi-blue' :
                      'text-red-600'
                    }`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{stage.age}</h4>
                  {index === 0 && (
                    <span className="inline-block px-3 py-1 bg-davi-green-dark text-white text-xs rounded-full font-semibold mt-2">
                      DAVI ESTÁ AQUI
                    </span>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Sintomas:</p>
                    <p className="text-sm text-gray-600">{stage.symptoms}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Impacto:</p>
                    <p className="text-sm text-gray-600">{stage.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-dark to-davi-blue text-white p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            🚨 Davi está na idade crítica para o tratamento
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Quanto mais cedo começarmos o tratamento, maiores são as chances de frear a progressão da DMD 
            e dar ao Davi uma vida mais longa e com qualidade.
          </p>
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="font-bold text-xl">
              Cada dia conta. Cada doação importa. Cada compartilhamento salva vidas.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DMDSection;
