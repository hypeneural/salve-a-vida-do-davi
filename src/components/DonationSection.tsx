import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DonationPixDialog from './DonationPixDialog';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { BsQrCode, BsBank } from 'react-icons/bs';
import { FiShare2, FiUsers, FiHeart, FiCreditCard } from 'react-icons/fi';
import { AiOutlineGift } from 'react-icons/ai';

const DonationSection = () => {
  const { toast } = useToast();
  const [copiedPix, setCopiedPix] = useState(false);
  const [pixDialogOpen, setPixDialogOpen] = useState(false);

  const pixKey = '141.897.869-85';
  const whatsappGroup = 'https://chat.whatsapp.com/Hw1msaUqK7X80WUiJJUyde?mode=gi_t';
  const vakinhaUrl = 'https://www.vakinha.com.br/vaquinha/salve-a-vida-de-davi-luiz-fernando-rodrigues-2';
  const rifaUrl = 'https://loja.salveavidadedavi.com.br/campanha/camisa-da-sele-o-brasileira-autografada-pelo-neymar';

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiedPix(true);
      toast({
        title: 'PIX copiado!',
        description: 'A chave PIX foi copiada para a sua área de transferência.'
      });
      setTimeout(() => setCopiedPix(false), 3000);
    } catch {
      toast({
        title: 'Não foi possível copiar',
        description: 'Copie manualmente: ' + pixKey,
        variant: 'destructive'
      });
    }
  };

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(
        'Ajude a salvar a vida do Davi! Precisamos do tratamento Elevidys contra a DMD. Saiba mais e doe: https://salveavidadodavi.com'
      )}`,
      color: 'text-green-600 hover:bg-green-50'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com',
      color: 'text-purple-600 hover:bg-purple-50'
    }
  ];

  return (
    <section id="ajudar" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-yellow/20 text-davi-green-dark text-sm font-medium mb-4">
            <FiHeart className="w-4 h-4 mr-2" />
            Sua doação transforma o futuro do Davi
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6">
            Faça parte desta
            <br />
            <span className="text-davi-blue">corrente de amor</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Cada contribuição nos aproxima do Elevidys. Se não puder doar agora, compartilhe: isso também salva vidas.
          </p>

          <div className="bg-gradient-to-r from-davi-yellow/10 to-davi-blue/10 border border-davi-yellow/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-davi-green-dark mb-2">Cada gesto importa</p>
            <p className="text-gray-700">Doe, compartilhe ou convide amigos. Juntos, chegaremos lá.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-2 border-davi-green-light/30 bg-gradient-to-br from-davi-green-light/5 to-white">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-davi-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCreditCard className="w-8 h-8 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-2">PIX imediato</h3>
              <p className="text-gray-600">Transferência instantânea e segura</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setPixDialogOpen(true)}
                className="w-full bg-davi-green-light hover:bg-davi-green-light/90 text-white font-bold py-3"
              >
                <BsQrCode className="w-5 h-5 mr-2" />
                Gerar QR Code PIX
              </Button>

              <div className="bg-white p-4 rounded-lg border border-davi-green-light/30">
                <p className="font-semibold text-davi-green-dark mb-2">Chave PIX (CPF)</p>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded border">
                  <span className="font-mono text-sm md:text-base">{pixKey}</span>
                  <Button
                    onClick={handleCopyPix}
                    variant="outline"
                    size="sm"
                    className={copiedPix ? 'bg-green-100 text-green-600' : ''}
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    {copiedPix ? 'Copiado!' : 'Copiar'}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-blue/30 bg-gradient-to-br from-davi-blue/5 to-white">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-davi-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AiOutlineGift className="w-8 h-8 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-2">Vakinha online</h3>
              <p className="text-gray-600">Contribua de forma fácil e segura</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                A vakinha online ajuda a família a avançar rumo aos R$ 17 milhões necessários para o Elevidys. Qualquer
                valor faz diferença.
              </p>

              <Button
                onClick={() => window.open(vakinhaUrl, '_blank')}
                className="w-full bg-davi-blue hover:bg-davi-blue/90 text-white font-bold py-3"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Doar na vakinha
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-2 border-davi-yellow/30 bg-gradient-to-br from-davi-yellow/5 to-white">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-davi-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BsBank className="w-8 h-8 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-2">Transferência bancária</h3>
              <p className="text-gray-600">Opções tradicionais para quem prefere banco</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-davi-yellow/30">
                <h4 className="font-semibold text-davi-green-dark mb-2">Dados bancários</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Banco:</strong> Banco do Brasil
                  </p>
                  <p>
                    <strong>Agência:</strong> 5385-6
                  </p>
                  <p>
                    <strong>Conta Poupança:</strong> 11.564-9
                  </p>
                  <p>
                    <strong>Variação:</strong> 51
                  </p>
                  <p>
                    <strong>Titular:</strong> Davi Luiz Pellizzari Rodrigues
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open(whatsappGroup, '_blank')}
                variant="outline"
                className="w-full border-davi-green-dark text-davi-green-dark hover:bg-davi-green-dark hover:text-white"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Falar com a família
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-2 border-pink-300/30 bg-gradient-to-br from-pink-50/50 to-white">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-pink-100/60 rounded-full flex items-center justify-center mx-auto mb-4">
                <AiOutlineGift className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-2">Rifa online</h3>
              <p className="text-gray-600">Concorra a prêmios e ajude o Davi</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                Participe da nossa rifa online! Além de ajudar o Davi, você concorre a prêmios incríveis.
              </p>

              <Button
                onClick={() => window.open(rifaUrl, '_blank')}
                className="w-full bg-pink-500 hover:bg-pink-500/90 text-white font-bold py-3"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Participar da rifa
              </Button>
            </div>
          </Card>
        </div>



        <div className="mb-16">
          <Card className="bg-gradient-to-r from-davi-yellow/10 to-davi-blue/10 border border-davi-yellow/30 p-8">
            <div className="text-center mb-6">
              <FiShare2 className="w-12 h-12 text-davi-green-dark mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Não pode doar agora? Ajude seguindo e compartilhando!</h3>
              <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                Sua rede pode chegar a quem tem condições de doar. Compartilhe a história do Davi e nos ajude a acelerar
                essa meta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
              {shareOptions.map((option) => (
                <Button
                  key={option.name}
                  onClick={() => window.open(option.url, '_blank')}
                  variant="outline"
                  className={`${option.color} border-current transition-all duration-200 justify-center`}
                >
                  <option.icon className="w-5 h-5 mr-2" />
                  {option.name}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-davi-green-dark to-davi-blue text-white p-8 text-center">
          <FiUsers className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Seja um multiplicador da esperança</h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Entre no grupo de voluntários e apoiadores. Ajude a organizar eventos, divulgar para empresas ou simplesmente
            amplie a campanha.
          </p>
          <Button
            onClick={() => window.open(whatsappGroup, '_blank')}
            className="bg-white text-davi-green-dark hover:bg-gray-100 font-bold px-8 py-3 text-lg"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            Entrar no grupo de apoio
          </Button>
        </Card>
      </div>

      <DonationPixDialog open={pixDialogOpen} onOpenChange={setPixDialogOpen} />
    </section>
  );
};

export default DonationSection;
