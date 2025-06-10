
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProgressBar from './ProgressBar';
import { Heart, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentAmount = 52855.92;
  const targetAmount = 17000000;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-davi-hero opacity-10"></div>
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-yellow/20 text-davi-green-dark text-sm font-medium mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Tempo é vida para o Davi
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-davi-green-dark mb-6 leading-tight">
              Oi, eu sou o <span className="text-davi-blue">Davi</span>.
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">
                Você pode me ajudar a ter uma chance de viver?
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Conheça a história do Davi, um menino alegre de 6 anos, diagnosticado com 
              <strong className="text-davi-green-dark"> Distrofia Muscular de Duchenne (DMD)</strong>, 
              uma doença rara e grave. Precisamos arrecadar{' '}
              <strong className="text-davi-blue">R$ 17 milhões</strong> para o tratamento Elevidys, 
              a única esperança para frear a progressão da doença antes que seja tarde demais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('#ajudar')}
                size="lg"
                className="bg-davi-green-dark hover:bg-davi-green-dark/90 text-white font-bold px-8 py-4 text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 mr-2" />
                QUERO AJUDAR O DAVI
              </Button>
              
              <Button
                onClick={() => scrollToSection('#historia')}
                variant="outline"
                size="lg"
                className="border-davi-green-dark text-davi-green-dark hover:bg-davi-green-dark hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-200"
              >
                Conheça a História
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-davi-blue/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-davi-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Apoiadores</p>
                  <p className="font-bold text-davi-green-dark">250+</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-davi-yellow/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-davi-green-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Idade Limite</p>
                  <p className="font-bold text-davi-green-dark">7 anos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Video and Progress */}
          <div className="relative animate-fade-in">
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              {/* YouTube Video Principal */}
              <div className="relative mb-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Hg709BnHEHE"
                    title="Vídeo do Davi Luiz"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-davi-green-dark font-semibold text-lg">🧒 Davi Luiz Pellizzari Rodrigues</p>
                  <p className="text-gray-600 text-sm">🌎 Canelinha/SC</p>
                  <p className="text-gray-600 text-sm">📝 Diagnosticado com DMD</p>
                  <p className="text-davi-blue text-sm font-medium">🏦 Pix: CPF 141.897.869-85</p>
                </div>
              </div>

              {/* Progress Section */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-davi-green-dark mb-2">
                  Progresso da Campanha
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cada doação nos aproxima da cura do Davi
                </p>
              </div>

              <ProgressBar 
                current={currentAmount} 
                target={targetAmount}
                className="mb-6"
              />

              {/* Urgency Banner */}
              <div className="bg-gradient-to-r from-davi-yellow/10 to-davi-blue/10 border border-davi-yellow/30 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-davi-green-dark mb-1">
                  ⏰ URGENTE: Tratamento deve ser aplicado antes dos 7 anos
                </p>
                <p className="text-xs text-gray-600">
                  Cada dia conta na luta pela vida do Davi
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Vídeo do Pai - Seção adicional */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-davi-green-dark mb-4">
              Palavras do Pai
            </h2>
            <p className="text-gray-700">
              Ouça o relato emocionante do pai do Davi sobre a luta pela vida de seu filho
            </p>
          </div>
          
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yQDyZ7aF88Y"
                title="Relato do pai do Davi Luiz"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-davi-green-light/10 rounded-full -translate-x-16 translate-y-16"></div>
      <div className="absolute top-20 right-0 w-24 h-24 bg-davi-yellow/10 rounded-full translate-x-12 -translate-y-12"></div>
    </section>
  );
};

export default HeroSection;
