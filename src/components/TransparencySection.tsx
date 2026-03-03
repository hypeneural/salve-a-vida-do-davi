import { Card } from '@/components/ui/card';
import { Shield, FileText, Phone, TrendingUp } from 'lucide-react';

const TransparencySection = () => {
  const documents = [
    {
      title: 'Laudo médico completo',
      description: 'Diagnóstico detalhado da DMD do Davi',
      type: 'PDF',
      size: '2.3 MB'
    }
  ];

  return (
    <section id="transparencia" className="py-16 sm:py-20 bg-[#D5E57C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-green-light/20 text-davi-green-dark text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Acompanhe nossa jornada
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6 leading-tight">
            <span className="text-davi-blue">Transparência:</span>
            <br />
            cada passo da nossa luta
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Compromisso absoluto com a clareza. Cada centavo é destinado ao tratamento do Davi e às despesas diretas da
            campanha.
          </p>
        </div>

        <Card className="p-8 mb-12 border-2 border-davi-blue/30">
          <div className="mb-6">
            <div className="w-12 h-12 bg-davi-blue/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-davi-blue" />
            </div>
            <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Documentos importantes</h3>
            <p className="text-gray-600">Acesso ao laudo médico da campanha.</p>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-davi-blue/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-davi-green-dark">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="inline-block px-2 py-1 bg-davi-blue/10 text-davi-blue text-xs rounded">
                      {doc.type}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{doc.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">Documentos verificados e atualizados regularmente.</p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-davi-green-light/5 to-davi-blue/5 border-2 border-davi-green-light/30">
            <div className="mb-6">
              <Shield className="w-12 h-12 text-davi-green-dark mb-4" />
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Nosso compromisso</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-davi-green-light rounded-full mt-2 flex-shrink-0" />
                <p>
                  <strong>100% dos recursos</strong> são destinados ao tratamento do Davi e despesas diretamente
                  vinculadas.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-davi-blue rounded-full mt-2 flex-shrink-0" />
                <p>
                  <strong>Relatórios mensais</strong> de prestação de contas.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-davi-yellow rounded-full mt-2 flex-shrink-0" />
                <p>
                  <strong>Documentos médicos</strong> e comprovantes disponíveis para consulta.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-davi-green-dark rounded-full mt-2 flex-shrink-0" />
                <p>
                  <strong>Canal direto</strong> para dúvidas e acompanhamentos.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-davi-yellow/5 to-davi-green-light/5 border-2 border-davi-yellow/30">
            <div className="mb-6">
              <Phone className="w-12 h-12 text-davi-blue mb-4" />
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Canal de transparência</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-davi-green-dark mb-2">WhatsApp direto</h4>
                <p className="text-davi-blue">(48) 99617-5837</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-davi-green-dark mb-2">Responsável</h4>
                <p className="text-gray-700">Luiz Fernando Rodrigues</p>
                <p className="text-sm text-gray-600">Pai do Davi</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">Respondemos todas as dúvidas em até 24 horas.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
