import { Card } from '@/components/ui/card';
import { Shield, FileText, Phone, TrendingUp } from 'lucide-react';
import ProgressBar from './ProgressBar';

const TransparencySection = () => {
  const currentAmount = 52855.92;
  const targetAmount = 17000000;

  const documents = [
    {
      title: 'Laudo médico completo',
      description: 'Diagnóstico detalhado da DMD do Davi',
      type: 'PDF',
      size: '2.3 MB'
    },
    {
      title: 'Orçamento do tratamento',
      description: 'Detalhamento dos custos do Elevidys',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      title: 'Relatório de gastos',
      description: 'Prestação de contas atualizada',
      type: 'PDF',
      size: '950 KB'
    }
  ];

  const expenses = [
    {
      category: 'Tratamento Elevidys',
      amount: 17000000,
      percentage: 94.2,
      description: 'Custo direto do medicamento'
    },
    {
      category: 'Exames e consultas',
      amount: 150000,
      percentage: 0.8,
      description: 'Preparação para o tratamento'
    },
    {
      category: 'Logística e viagem',
      amount: 80000,
      percentage: 0.4,
      description: 'Transporte para aplicação'
    },
    {
      category: 'Campanha e divulgação',
      amount: 50000,
      percentage: 0.3,
      description: 'Custos de comunicação'
    }
  ];

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);

  return (
    <section id="transparencia" className="py-16 sm:py-20 bg-gray-50">
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

        <Card className="p-8 mb-12 border-2 border-davi-green-light/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Status atual da campanha</h3>
          </div>

          <ProgressBar current={currentAmount} target={targetAmount} className="mb-6" />

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-davi-green-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-davi-green-dark" />
              </div>
              <h4 className="font-semibold text-davi-green-dark">Arrecadado</h4>
              <p className="text-lg font-bold text-gray-700">{formatCurrency(currentAmount)}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-davi-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-davi-blue" />
              </div>
              <h4 className="font-semibold text-davi-green-dark">Apoiadores</h4>
              <p className="text-lg font-bold text-gray-700">250+</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-davi-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-davi-green-dark" />
              </div>
              <h4 className="font-semibold text-davi-green-dark">Dias de campanha</h4>
              <p className="text-lg font-bold text-gray-700">45</p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-2 border-davi-blue/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-blue/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-davi-blue" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Documentos importantes</h3>
              <p className="text-gray-600">Acesso aos laudos, orçamentos e relatórios financeiros da campanha.</p>
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

          <Card className="p-8 border-2 border-davi-yellow/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-davi-yellow/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-davi-green-dark" />
              </div>
              <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Destino dos recursos</h3>
              <p className="text-gray-600">Como cada real será aplicado.</p>
            </div>

            <div className="space-y-4">
              {expenses.map((expense) => (
                <div key={expense.category} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-davi-green-dark">{expense.category}</h4>
                    <span className="text-sm font-medium text-davi-blue">{expense.percentage}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{expense.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div
                        className="bg-gradient-to-r from-davi-green-light to-davi-blue h-2 rounded-full"
                        style={{ width: `${Math.min(expense.percentage, 100)}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-700 whitespace-nowrap">{formatCurrency(expense.amount)}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

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
                <h4 className="font-semibold text-davi-green-dark mb-2">Email para dúvidas</h4>
                <p className="text-davi-blue">transparencia@salveavidadodavi.com</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-davi-green-dark mb-2">WhatsApp direto</h4>
                <p className="text-davi-blue">(11) 99999-9999</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-davi-green-dark mb-2">Responsáveis</h4>
                <p className="text-gray-700">Família do Davi</p>
                <p className="text-sm text-gray-600">Pais e organizadores da campanha</p>
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
