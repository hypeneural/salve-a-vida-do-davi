
import { Card } from '@/components/ui/card';
import { Heart, Star, Smile } from 'lucide-react';

const StorySection = () => {
  return (
    <section id="historia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-blue/20 text-davi-blue text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Conheça o nosso guerreiro
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6">
            Um Sorriso que Luta Pela Vida:
            <br />
            <span className="text-davi-blue">A História do Davi</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Davi é um menino de 6 anos cheio de sonhos, alegria e uma força incrível que nos inspira todos os dias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4 flex items-center">
                <Smile className="w-6 h-6 mr-2 text-davi-yellow" />
                O Menino por Trás da Luta
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Davi é uma criança especial, cheia de vida e energia. Ele adora brincar, desenhar e sonha em ser um super-herói quando crescer. 
                Seu sorriso contagiante e sua personalidade alegre conquistam todos que o conhecem.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Apesar dos desafios que enfrenta, Davi mantém sua alegria e curiosidade sobre o mundo. Ele não entende completamente 
                o que está acontecendo, mas confia nos adultos ao seu redor e continua sendo a luz da família.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">A Descoberta que Mudou Tudo</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Os primeiros sinais começaram de forma sutil. Davi começou a ter dificuldades para subir escadas, 
                caia com mais frequência e demonstrava cansaço em atividades que antes fazia com facilidade.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Após uma longa jornada de exames e consultas médicas, veio o diagnóstico que mudou a vida de toda a família: 
                <strong className="text-davi-green-dark"> Distrofia Muscular de Duchenne (DMD)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                O mundo dos pais desabou, mas rapidamente se transformou em determinação. Se existe uma chance de ajudar o Davi, 
                eles farão de tudo para proporcionar essa oportunidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&q=80"
                alt="Davi brincando"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80"
                alt="Momentos em família"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden -mt-8">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
                alt="Esperança e natureza"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=400&q=80"
                alt="Alegria infantil"
                className="w-full h-48 object-cover"
              />
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-light/10 to-davi-blue/10 border-davi-green-light/30 p-8">
          <div className="text-center">
            <Star className="w-8 h-8 text-davi-yellow mx-auto mb-4" />
            <blockquote className="text-xl lg:text-2xl text-davi-green-dark font-medium italic mb-6">
              "Nosso filho é nossa maior força. Davi nos ensina todos os dias que mesmo diante das maiores dificuldades, 
              é possível manter a esperança e o sorriso. Lutamos por ele, mas sabemos que não conseguimos sozinhos. 
              Precisamos de vocês, precisamos de cada coração generoso que possa nos ajudar nesta batalha."
            </blockquote>
            <div className="text-davi-green-dark font-semibold">
              <p>— Pais do Davi</p>
              <p className="text-sm text-gray-600 mt-1">Família em luta pela vida</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StorySection;
