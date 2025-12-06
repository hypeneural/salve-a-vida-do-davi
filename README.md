# Salve a Vida do Davi

Landing page solidária criada por **Anderson Marques Vieira** para mobilizar a arrecadação de recursos em prol do tratamento do Davi, diagnosticado com Distrofia Muscular de Duchenne (DMD). O site conta a história, explica a doença, apresenta o tratamento Elevidys e orienta diferentes formas de doação e transparência.

## Visão geral
- Single page responsiva com navegação suave entre seções (história, DMD, tratamento, doações, transparência, mídia e FAQ).
- Hero com vídeos incorporados (apelo inicial e depoimento do pai), CTA para doação e barra de progresso da campanha.
- Seção de doações com geração de PIX dinâmico (QR Code e “copia e cola”), valores sugeridos, botões de compartilhar e convite para voluntariado.
- Painel de transparência com status da campanha, documentos e divisão estimada de custos.
- Carrossel de matérias na mídia e FAQ em acordeão para dúvidas frequentes.
- Componentes de UI reutilizáveis (botões, cartões, acordeão, toasts, tooltip) com feedback visual.

## Tecnologias e arquitetura
- **React 18 + TypeScript** rodando com **Vite 5**.
- **Tailwind CSS** com design tokens centralizados em `index.css` e tema da campanha configurado em `tailwind.config.ts` (cores `davi-*`, animações e gradientes).
- **shadcn/ui + Radix UI** para componentes acessíveis (accordion, dialog, toast, carousel com Embla).
- **React Query** preparado para futuros consumos de API.
- **Lucide React** e **react-icons** para ícones; **qrcode** para gerar a imagem do QR Code PIX.
- Estrutura baseada em componentes modulares em `src/components` e seções agregadas em `src/pages/Index.tsx`.

## Estrutura de pastas
```
src/
  main.tsx               # Entrada Vite/React
  App.tsx                # Providers (React Query, Tooltip, Toast) e rotas
  pages/
    Index.tsx            # Landing page com todas as seções
    NotFound.tsx         # Fallback 404 simples
  components/
    Header.tsx, Footer.tsx
    HeroSection.tsx      # Vídeos, CTA e progresso
    StorySection.tsx     # História do Davi
    DMDSection.tsx       # Explicação da DMD e linha do tempo
    TreatmentSection.tsx # Detalhes do Elevidys e urgência
    DonationSection.tsx  # PIX, vakinha, transferências, compartilhamento
    DonationPixDialog.tsx# Geração de BR Code + QR
    TransparencySection.tsx
    MediaSection.tsx
    FAQSection.tsx
    ProgressBar.tsx      # Barra animada de arrecadação
    ui/*                 # Biblioteca shadcn/ui adaptada
  lib/pix.ts             # Gerador de BR Code PIX (payload + CRC16)
  hooks/use-toast.ts     # Gerenciamento de toasts
```

## Como rodar localmente
1) Requisitos: Node.js 18+ e npm instalados.  
2) Instale dependências: `npm install`  
3) Ambiente de desenvolvimento: `npm run dev` (abre em `http://localhost:5173`).  
4) Build de produção: `npm run build`  
5) Preview do build: `npm run preview`  
6) Lint: `npm run lint`

## Principais componentes e fluxos
- **Header**: menu desktop/mobile com rolagem suave e CTA de doação.
- **HeroSection**: vídeo principal no YouTube, números-chave, CTA dupla e barra de progresso animada.
- **StorySection**: narrativa humanizada com cards ilustrativos.
- **DMDSection**: explicação da doença, sintomas por faixa etária e alerta de urgência.
- **TreatmentSection**: visão do Elevidys, eficácia, custo estimado (R$ 17 milhões) e janela crítica de aplicação.
- **DonationSection**: 
  - PIX: geração de BR Code e QR Code (via `lib/pix.ts` + `qrcode`), cópia para área de transferência e presets de valores.
  - Links para vakinha, dados bancários (placeholder) e botão para WhatsApp.
  - Valores sugeridos e botões de compartilhamento (WhatsApp/Instagram) + convite a voluntariado.
- **TransparencySection**: barra de progresso, cartões de documentos e divisão estimada de despesas.
- **MediaSection**: carrossel de matérias e vídeo-reportagens com logos e datas formatadas.
- **FAQSection**: acordeão com perguntas recorrentes e contatos adicionais.
- **Footer**: contatos, redes e links utilitários.

## Pontos de atenção e melhorias recomendadas
- **Dados estáticos/placeholder**: valores arrecadados, links de WhatsApp/Instagram, dados bancários e URLs de mídia precisam ser conferidos e substituídos por dados reais. Ajuste também o CPF/chave PIX definitivo.
- **Fonte de verdade para a meta**: hoje os números (R$ 52.855,92 / R$ 17.000.000) estão hardcoded. Integrar com uma API/planilha/JSON versionado e usar React Query para exibir progresso em tempo real.
- **Codificação e acentuação**: alguns textos apresentam caracteres corrompidos (encoding). Unificar arquivos em UTF-8 e revisar acentos/emoji.
- **Acessibilidade**: revisar contraste, rótulos de botões/links, `aria-label` em iframes e navegação por teclado.
- **SEO e compartilhamento**: adicionar metatags (title/description/OG/Twitter), favicon atualizado, `sitemap.xml` e `robots` adequados; considerar Google Analytics/Pixel com consentimento.
- **Performance**: otimizar imagens externas (usar `loading="lazy"`/thumbs otimizadas) e remover assets não usados (`App.css` do template Vite).
- **Confiabilidade do PIX**: validar geração do BR Code, oferecer fallback para cópia manual em navegadores sem `clipboard`, e expor a chave via config/env.
- **Testes e qualidade**: adicionar testes de componentes (React Testing Library), checagens de acessibilidade (axe) e CI de lint/build.
- **Internacionalização**: hoje o conteúdo está em português; avaliar i18n caso precise atingir público externo.

## Créditos
Projeto desenvolvido por **Anderson Marques Vieira** em apoio à campanha do Davi e à causa contra a Distrofia Muscular de Duchenne. Cada contribuição, compartilhamento ou sugestão técnica ajuda a salvar vidas.
