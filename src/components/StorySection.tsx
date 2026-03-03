import { Card } from '@/components/ui/card';
import { Heart, Star, Smile } from 'lucide-react';

const StorySection = () => {
  return (
    <section id="historia" className="py-16 sm:py-20 bg-[#D5E57C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-blue/20 text-davi-blue text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Conheça o nosso guerreiro
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6 leading-tight">
            Um sorriso que luta pela vida:
            <br />
            <span className="text-davi-blue">a história do Davi</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Davi é curioso e ama desenhar. Mesmo sentindo o peso da Distrofia Muscular de Duchenne, ele
            continua sonhando em ser um super-herói — e nós queremos garantir que ele tenha tempo para isso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4 flex items-center">
                <Smile className="w-6 h-6 mr-2 text-davi-yellow" />
                O menino por trás da luta
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Davi é alegre, conversa sobre superpoderes e pede para brincar mais um pouco todos os dias. As quedas
                frequentes e o cansaço vêm aumentando, mas ele não perde a vontade de explorar o mundo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Quando descobrimos a DMD, o susto virou determinação. Cada consulta, exame e cuidado agora têm um
                objetivo: ganhar tempo para o Davi viver com qualidade.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">A descoberta que mudou tudo</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O diagnóstico de Distrofia Muscular de Duchenne explicou as quedas, a dificuldade em subir escadas e o
                cansaço. Também deixou claro que o tempo é decisivo: o tratamento precisa acontecer o quanto antes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Desde então, a família concentra forças em arrecadar os recursos e em compartilhar a história do Davi,
                para que mais pessoas abracem essa causa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Card className="overflow-hidden rounded-2xl">
              <img
                src="/images/davi-1.webp"
                alt="Davi brincando"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </Card>
            <Card className="overflow-hidden rounded-2xl mt-8">
              <img
                src="/images/davi-2.webp"
                alt="Momentos do Davi"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </Card>
            <Card className="overflow-hidden rounded-2xl -mt-8">
              <img
                src="/images/davi-3.webp"
                alt="Davi sorrindo"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </Card>
            <Card className="overflow-hidden rounded-2xl">
              <img
                src="/images/davi-4.webp"
                alt="Davi e sua família"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-light/10 to-davi-blue/10 border-davi-green-light/30 p-8">
          <div className="text-center">
            <Star className="w-8 h-8 text-davi-yellow mx-auto mb-4" />
            <blockquote className="text-xl lg:text-2xl text-davi-green-dark font-medium italic mb-6">
              “Nosso filho é nossa maior força. Lutamos por ele e contamos com cada coração generoso que possa nos ajudar
              nesta batalha.”
            </blockquote>
            <div className="text-davi-green-dark font-semibold">
              <p>Pais do Davi</p>
              <p className="text-sm text-gray-600 mt-1">Família em luta pela vida</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StorySection;
