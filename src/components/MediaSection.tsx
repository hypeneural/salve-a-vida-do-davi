
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Eye } from 'lucide-react';

const MediaSection = () => {
  const mediaItems = [
    {
      id: 1,
      title: "Família corre contra o tempo para salvar Davi Luiz, de 6 anos, com doença rara",
      source: "VIP Social",
      url: "https://www.vipsocial.com.br/noticia/familia-corre-contra-o-tempo-para-salvar-davi-luiz-de-6-anos-com-doenca-rara/51462",
      date: "2024-12-08",
      summary: "Reportagem especial sobre a luta da família para arrecadar recursos para o tratamento do Davi, destacando a urgência do caso e os desafios enfrentados.",
      category: "Reportagem"
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
    <section id="midia" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-davi-blue/10 text-davi-blue text-sm font-medium mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Cobertura na Mídia
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-davi-green-dark mb-6">
            Na <span className="text-davi-blue">Mídia</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Veja como a história do Davi está sensibilizando a mídia e mobilizando pessoas em todo o país
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {mediaItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-davi-yellow/20 text-davi-green-dark">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                </div>
                
                <CardTitle className="text-xl md:text-2xl font-bold text-davi-green-dark leading-tight group-hover:text-davi-blue transition-colors">
                  {item.title}
                </CardTitle>
                
                <div className="text-davi-blue font-semibold text-sm">
                  {item.source}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button
                    onClick={() => window.open(item.url, '_blank')}
                    className="bg-davi-blue hover:bg-davi-blue/90 text-white font-semibold px-6 py-3 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ler Matéria Completa
                  </Button>
                  
                  <div className="text-sm text-gray-500">
                    📰 Imprensa
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-davi-green-light/10 to-davi-blue/10 border border-davi-green-light/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-davi-green-dark mb-4">
              Você é jornalista ou influenciador?
            </h3>
            <p className="text-gray-700 mb-6">
              Ajude a amplificar a história do Davi e acelerar nossa campanha. Entre em contato conosco para mais informações.
            </p>
            <Button 
              onClick={() => window.open('mailto:contato@exemplo.com?subject=Cobertura da Campanha do Davi', '_blank')}
              variant="outline" 
              className="border-davi-green-dark text-davi-green-dark hover:bg-davi-green-dark hover:text-white font-semibold px-8 py-3"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
