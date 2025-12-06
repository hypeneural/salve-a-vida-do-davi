import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como posso ter certeza de que minha doação será usada para o Davi?',
      answer:
        'Mantemos relatórios e documentos disponíveis, além de um canal direto para dúvidas. Todo o valor é destinado ao tratamento do Davi e às despesas diretamente ligadas à campanha.'
    },
    {
      question: 'Qual a idade limite para o tratamento?',
      answer:
        'O Elevidys é mais eficaz antes dos 7 anos. O Davi está com 6 anos, então precisamos concluir a arrecadação e aplicar o tratamento o quanto antes.'
    },
    {
      question: 'O tratamento Elevidys garante a cura?',
      answer:
        'Ele não é uma cura definitiva, mas é o único tratamento aprovado que pode frear significativamente a progressão da DMD, preservando mobilidade e qualidade de vida.'
    },
    {
      question: 'Como a DMD afeta o Davi no dia a dia?',
      answer:
        'Ele já sente dificuldade para correr, subir escadas e se cansa com mais facilidade. Sem tratamento, essas limitações evoluem até afetar coração e pulmões.'
    },
    {
      question: 'Posso doar de outro país?',
      answer:
        'Sim. Aceitamos doações internacionais via transferência bancária ou plataformas online. Fale conosco pelo WhatsApp ou email para orientações.'
    },
    {
      question: 'Como posso ajudar além de doar?',
      answer:
        'Compartilhe a campanha, organize ações de arrecadação, divulgue para empresas e amigos ou participe do grupo de voluntários. Amplificar a mensagem é fundamental.'
    },
    {
      question: 'Quem são os responsáveis pela campanha?',
      answer:
        'A campanha é conduzida pelos pais do Davi, com apoio de familiares e amigos próximos. Contatos e documentos ficam disponíveis na área de transparência.'
    },
    {
      question: 'Onde o tratamento será realizado?',
      answer:
        'Em centros médicos autorizados no Brasil ou exterior que aplicam o Elevidys. Assim que a meta for atingida, seguiremos com a logística imediatamente.'
    },
    {
      question: 'Por que o tratamento é tão caro?',
      answer:
        'O Elevidys é uma terapia gênica de última geração, fruto de mais de uma década de pesquisa e produção altamente especializada, o que eleva o custo.'
    },
    {
      question: 'O que acontece se não arrecadarmos todo o valor?',
      answer:
        'Vamos lutar até o fim para alcançar a meta. Caso não seja possível, informaremos os doadores sobre alternativas e destino dos recursos, sempre priorizando o melhor para o Davi.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-blue/20 text-davi-blue text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Tire suas dúvidas
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6">Perguntas frequentes</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            As respostas para as principais dúvidas sobre a campanha, o tratamento e como você pode ajudar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-davi-green-light/30">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left font-semibold text-davi-green-dark hover:text-davi-blue transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed py-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="mt-8 bg-gradient-to-r from-davi-yellow/10 to-davi-blue/10 border border-davi-yellow/30 p-8 text-center">
            <HelpCircle className="w-12 h-12 text-davi-green-dark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-davi-green-dark mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar. Entre em contato e responderemos o mais rápido possível.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="bg-white p-4 rounded-lg border border-davi-blue/30">
                <h4 className="font-semibold text-davi-green-dark mb-2">Email</h4>
                <p className="text-davi-blue text-sm">contato@salveavidadodavi.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-davi-green-light/30">
                <h4 className="font-semibold text-davi-green-dark mb-2">WhatsApp</h4>
                <p className="text-davi-green-light text-sm">(11) 99999-9999</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">Tempo médio de resposta: até 24 horas.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
