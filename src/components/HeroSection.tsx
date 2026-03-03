import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-davi-hero" />
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-grid-davi pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-davi-yellow/20 text-davi-green-dark text-sm font-semibold">
              <Clock className="w-4 h-4 mr-2" />
              Tempo é vida para o Davi
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-davi-green-dark/80 font-semibold">
                Distrofia Muscular de Duchenne
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-davi-green-dark leading-tight">
                Oi, eu sou o <span className="text-davi-blue">Davi</span>.
                <br />
                Você pode me ajudar a ter uma chance de viver?
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Conheça a história do Davi, um menino alegre que foi diagnosticado com{' '}
                <strong className="text-davi-green-dark">Distrofia Muscular de Duchenne (DMD)</strong>,
                uma doença rara e grave. Precisamos arrecadar{' '}
                <strong className="text-davi-blue">R$ 17 milhões</strong> para o tratamento com Elevidys,
                a única esperança para frear a progressão da doença antes que seja tarde demais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-stretch">
              <Button
                onClick={() => scrollToSection('#ajudar')}
                size="lg"
                className="w-full sm:w-auto justify-center bg-davi-green-dark hover:bg-davi-green-dark/90 text-white font-bold px-8 py-4 text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 mr-2" />
                Quero ajudar o Davi
              </Button>

              <Button
                onClick={() => scrollToSection('#historia')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-davi-green-dark text-davi-green-dark hover:bg-davi-green-dark hover:text-white font-semibold px-8 py-4 text-base sm:text-lg transition-all duration-200"
              >
                Conheça a história
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-left sm:text-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-davi-blue/15 flex items-center justify-center">
                  <Users className="w-5 h-5 text-davi-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Apoiadores</p>
                  <p className="font-bold text-davi-green-dark text-lg">250+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-4 sm:p-6 bg-white/90 backdrop-blur-md shadow-2xl border border-white/70">
              <div className="relative mb-5 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Hg709BnHEHE"
                    title="Vídeo do Davi Luiz"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="text-center space-y-1 mb-6">
                <p className="text-davi-green-dark font-semibold text-lg">Davi Luiz Pellizzari Rodrigues</p>
                <p className="text-gray-600 text-sm">Canelinha / SC</p>
                <p className="text-gray-600 text-sm">Diagnosticado com DMD</p>
                <p className="text-davi-blue text-sm font-medium">Pix: CPF 141.897.869-85</p>
              </div>

              <div className="bg-gradient-to-r from-davi-yellow/15 to-davi-blue/10 border border-davi-yellow/30 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-davi-green-dark">
                  Cada dia conta na luta pela vida do Davi
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-davi-green-dark mb-2">Palavras do pai</h2>
            <p className="text-gray-700">Ouça o relato emocionante sobre a luta pela vida do Davi.</p>
          </div>

          <Card className="p-4 sm:p-6 bg-white/90 backdrop-blur-md shadow-xl border border-white/70">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yQDyZ7aF88Y"
                title="Relato do pai do Davi Luiz"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </div>

      <div className="absolute -left-10 bottom-0 w-32 h-32 bg-davi-green-light/10 rounded-full blur-3xl" />
      <div className="absolute right-4 top-10 w-24 h-24 bg-davi-yellow/15 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;
