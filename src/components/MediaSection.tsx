import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Calendar, Eye, Play } from 'lucide-react';

const MediaSection = () => {
  const mediaItems = [
    {
      id: 1,
      title: 'Família corre contra o tempo para salvar Davi Luiz, com doença rara',
      source: 'VIP Social',
      logo: 'https://www.vipsocial.com.br/images/logo42.png',
      url: 'https://www.vipsocial.com.br/noticia/familia-corre-contra-o-tempo-para-salvar-davi-luiz-de-6-anos-com-doenca-rara/51462',
      date: '2024-12-08',
      summary:
        'Reportagem especial sobre a arrecadação para o Elevidys e a urgência do tratamento o quanto antes.',
      category: 'Reportagem',
      type: 'article'
    },
    {
      id: 2,
      title: 'Você pode ajudar! Menino de Canelinha precisa de R$ 17 milhões para tratamento',
      source: 'Olho Vivo Canelinha',
      logo: 'https://www.olhovivocan.com.br/wp-content/uploads/2021/09/LOGO-MODIFICADA.png',
      url: 'https://www.olhovivocan.com.br/voce-pode-ajudar-menino-de-canelinha/',
      date: '2024-12-10',
      summary: 'Portal local destaca a campanha solidária para o Davi Luiz e como doar.',
      category: 'Reportagem',
      type: 'article'
    },
    {
      id: 3,
      title: 'Menino com doença rara precisa de remédio de R$ 17 milhões e busca ajuda',
      source: 'Visor Notícias',
      logo: 'https://visornoticias.com.br/wp-content/themes/visor-theme/assets/images/logo-visor.png?=1',
      url: 'https://visornoticias.com.br/menino-de-canelinha-com-doenca-rara-precisa-de-remedio-de-r-17-milhoes-e-busca-ajuda/',
      date: '2024-12-12',
      summary: 'Cobertura sobre a condição do Davi e a corrida contra o tempo para financiar o Elevidys.',
      category: 'Reportagem',
      type: 'article'
    },
    {
      id: 4,
      title: 'Corrente do bem por Davi Luiz: ajuda via fatura de água',
      source: 'Câmara de Canelinha',
      logo: 'https://www.camaracanelinha.sc.gov.br/img/header-logo.png',
      url: 'https://www.camaracanelinha.sc.gov.br/imprensa/noticias/0/1/2025/633896',
      date: '2025-01-15',
      summary: 'Iniciativa municipal para facilitar doações na fatura de água dos moradores.',
      category: 'Institucional',
      type: 'article'
    },
    {
      id: 5,
      title: 'Reportagem VIP Social - Caso Davi Luiz',
      source: 'VIP Social',
      logo: 'https://www.vipsocial.com.br/images/logo42.png',
      url: 'https://www.youtube.com/watch?v=gRe2CHgy8Y4',
      date: '2024-12-08',
      summary: 'Vídeo-reportagem sobre a história do Davi e a mobilização da comunidade.',
      category: 'Vídeo',
      type: 'video'
    }
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="midia" className="py-16 sm:py-20 bg-gradient-to-br from-[#D5E57C] to-[#D5E57C]/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-davi-blue/10 text-davi-blue text-sm font-medium mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Cobertura na mídia
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-davi-green-dark mb-6">
            Na <span className="text-davi-blue">mídia</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Veja como a história do Davi está sensibilizando jornais, portais e TVs — e mobilizando mais pessoas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {mediaItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.type === 'video'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-davi-yellow/20 text-davi-green-dark'
                            }`}
                        >
                          {item.type === 'video' && <Play className="w-3 h-3 mr-1" />}
                          {item.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(item.date)}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={item.logo}
                          alt={`Logo ${item.source}`}
                          className="h-8 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="text-davi-blue font-semibold text-sm">{item.source}</div>
                      </div>

                      <CardTitle className="text-lg font-bold text-davi-green-dark leading-tight group-hover:text-davi-blue transition-colors line-clamp-3">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                      <p className="text-gray-700 mb-6 leading-relaxed text-sm line-clamp-3">{item.summary}</p>

                      <div className="flex items-center justify-between">
                        <Button
                          onClick={() => window.open(item.url, '_blank')}
                          size="sm"
                          className="bg-davi-blue hover:bg-davi-blue/90 text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {item.type === 'video' ? 'Assistir' : 'Ler matéria'}
                        </Button>

                        <div className="text-sm text-gray-500">
                          {item.type === 'video' ? '🎥 Vídeo' : '📰 Imprensa'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-davi-green-light/10 to-davi-blue/10 border border-davi-green-light/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Você é jornalista ou influenciador?</h3>
            <p className="text-gray-700 mb-6">
              Ajude a amplificar a história do Davi e acelerar a campanha. Entre em contato para pautas e entrevistas.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/5548996175837?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20a%20cobertura%20da%20campanha%20do%20Davi', '_blank')}
              variant="outline"
              className="border-davi-green-dark text-davi-green-dark hover:bg-davi-green-dark hover:text-white font-semibold px-8 py-3"
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
