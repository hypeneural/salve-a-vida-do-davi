import { Card } from '@/components/ui/card';
import { Heart, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full gradient-davi-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Salve a Vida do Davi</h3>
                <p className="text-gray-400 text-sm">Juntos pela esperança</p>
              </div>
            </div>
            
            <p className="text-gray-400">
              Nossa missão é proporcionar ao Davi o tratamento necessário para combater a Distrofia Muscular de Duchenne (DMD). 
              Acreditamos que, com a sua ajuda, podemos transformar a vida dele e oferecer um futuro cheio de esperança e possibilidades.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-davi-yellow">Informações de Contato</h4>
            <div className="space-y-4">
              <Card className="bg-gray-800 p-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span>familia@salveavidadodavi.com</span>
                </div>
              </Card>
              <Card className="bg-gray-800 p-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>(11) 99999-9999</span>
                </div>
              </Card>
              <Card className="bg-gray-800 p-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Apoio e Voluntariado</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Social Media and Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-davi-yellow">Siga Nossa Jornada</h4>
            <div className="space-y-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-davi-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-davi-green-light transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
            
            <a
              href="/transparencia"
              className="text-gray-300 hover:text-davi-yellow transition-colors block mb-4"
            >
              Transparência
            </a>
            <a
              href="/faq"
              className="text-gray-300 hover:text-davi-yellow transition-colors block"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Remaining Footer Sections */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Salve a Vida do Davi. Todos os direitos reservados.
          </p>
          <div className="space-x-4">
            <a href="/termos" className="text-gray-500 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="/privacidade" className="text-gray-500 hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
