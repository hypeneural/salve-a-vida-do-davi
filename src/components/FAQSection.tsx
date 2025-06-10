
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como posso ter certeza de que minha doação será usada para o Davi?",
      answer: "Mantemos total transparência através de relatórios regulares, documentos médicos disponíveis e um canal direto de comunicação. Todos os recursos são destinados exclusivamente ao tratamento do Davi e custos relacionados. Você pode acompanhar o progresso em tempo real e entrar em contato conosco a qualquer momento."
    },
    {
      question: "Qual a idade limite exata para o tratamento do Davi?",
      answer: "O Elevidys é mais eficaz quando aplicado em crianças antes dos 7 anos de idade. Davi atualmente tem 6 anos, então temos uma janela limitada de tempo. Quanto mais cedo conseguirmos aplicar o tratamento, maiores são as chances de sucesso em frear a progressão da DMD."
    },
    {
      question: "O tratamento Elevidys garante a cura?",
      answer: "O Elevidys não é uma cura, mas sim o único tratamento aprovado que pode significativamente frear a progressão da DMD. Estudos clínicos mostram que pode preservar a função muscular e melhorar a qualidade de vida por anos. É nossa melhor e única esperança para dar ao Davi uma vida mais longa e com melhor qualidade."
    },
    {
      question: "Como a DMD afeta o Davi no dia a dia?",
      answer: "Atualmente, Davi tem dificuldades para correr, subir escadas e cai com mais frequência. Ele ainda consegue andar e brincar, mas já sente o cansaço em atividades que antes fazia facilmente. Sem tratamento, essas limitações irão aumentar progressivamente até afetar funções vitais como respiração e coração."
    },
    {
      question: "Posso doar de outro país?",
      answer: "Sim! Aceitamos doações internacionais através de transferência bancária internacional ou plataformas online que suportam doações globais. Entre em contato conosco através do WhatsApp ou email para orientações específicas sobre como doar do seu país."
    },
    {
      question: "Como posso ajudar além de doar?",
      answer: "Existem várias formas: compartilhe a história do Davi nas redes sociais, organize eventos de arrecadação, divulgue para empresas e conhecidos, junte-se ao nosso grupo de voluntários, ou simplesmente espalhe a palavra. Cada ação multiplica nossa força e nos aproxima do objetivo."
    },
    {
      question: "Quem são os responsáveis pela campanha?",
      answer: "A campanha é organizada diretamente pelos pais do Davi, com o apoio de familiares e amigos próximos. Somos uma família comum enfrentando uma situação extraordinária e contamos com a generosidade da comunidade. Todos os contatos e informações dos responsáveis estão disponíveis na seção de transparência."
    },
    {
      question: "Onde o tratamento será realizado?",
      answer: "O tratamento Elevidys deve ser realizado em centros médicos especializados e aprovados. Estamos em contato com hospitais no Brasil e no exterior que têm autorização para aplicar este medicamento. Assim que atingirmos a meta, iniciaremos imediatamente os procedimentos para agendamento."
    },
    {
      question: "Por que o tratamento é tão caro?",
      answer: "O Elevidys custa aproximadamente R$ 17 milhões porque é uma terapia genética de última geração que levou mais de uma década para ser desenvolvida. O processo de produção é extremamente complexo e personalizado. Apesar do alto custo, é o preço da esperança e da vida do Davi."
    },
    {
      question: "O que acontece se não conseguirmos arrecadar todo o valor?",
      answer: "Estamos confiantes de que, juntos, conseguiremos atingir a meta. Nossa fé na solidariedade humana é total. Caso não seja possível, todos os doadores serão informados sobre as alternativas disponíveis e terão total transparência sobre o destino dos recursos, sempre priorizando o melhor interesse do Davi."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-davi-blue/20 text-davi-blue text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Tire suas dúvidas
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-davi-green-dark mb-6">
            Perguntas <span className="text-davi-blue">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre a campanha, o tratamento e como você pode ajudar o Davi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-davi-green-light/30">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left font-semibold text-davi-green-dark hover:text-davi-blue transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed py-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="mt-8 bg-gradient-to-r from-davi-yellow/10 to-davi-blue/10 border border-davi-yellow/30 p-8 text-center">
            <HelpCircle className="w-12 h-12 text-davi-green-dark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-davi-green-dark mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nossa equipe está sempre pronta para esclarecer qualquer questão. 
              Entre em contato conosco através dos canais abaixo e responderemos o mais rápido possível.
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
            
            <p className="text-sm text-gray-600 mt-4">
              📞 Tempo de resposta: até 24 horas
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
