# Salve a Vida do Davi

Landing page solidaria criada por **Anderson Marques Vieira** para mobilizar a arrecadacao de recursos para o tratamento Elevidys do Davi (6 anos), diagnosticado com Distrofia Muscular de Duchenne (DMD). O site conta a historia, explica a doenca, mostra o tratamento e orienta doacao e transparencias.

## Visao geral do produto
- Single page responsiva e mobile-first (navegacao suave por ancoras).
- Hero com CTA dupla, barra de progresso, videos do Davi e do pai e dados-chave (apoiadores, idade limite).
- Secoes dedicadas: historia, sobre a DMD, tratamento Elevidys, como doar (PIX/QR, vakinha, transferencia), transparencias, midia e FAQ.
- Dialogo de PIX com geracao de BR Code + QR Code e copia segura para a area de transferencia.
- Carrossel de midia, FAQ em acordeao, cards de custos e documentos, e convite a voluntariado.
- Nova camada SEO: metatags otimizadas (title/description/OG/Twitter), canonical, theme-color e favicon configurados em `index.html`.

## Tech stack e arquitetura
- **React 18 + TypeScript** com **Vite 5**.
- **Tailwind CSS** com tokens/temas em `index.css` e `tailwind.config.ts` (cores `davi-*`, animacoes, gradientes, padding responsivo).
- **shadcn/ui + Radix UI** para componentes acessiveis (accordion, dialog, toast, carousel via Embla).
- **React Query** pronto para integrar dados dinamicos (progressos, estatisticas).
- **Lucide React** e **react-icons** para icones; **qrcode** para gerar QR Code PIX.
- Estruturado por secoes em `src/components`, montado em `src/pages/Index.tsx`, com providers (React Query, Tooltip, Toast) em `App.tsx`.

## Estrutura de pastas
```
src/
  main.tsx               # Entrada Vite/React
  App.tsx                # Providers e rotas (Index + 404)
  pages/
    Index.tsx            # Landing page completa
    NotFound.tsx         # Fallback 404
  components/
    Header.tsx, Footer.tsx
    HeroSection.tsx      # Videos, CTA, progresso
    StorySection.tsx     # Narrativa do Davi
    DMDSection.tsx       # Explicacao da DMD e linha do tempo
    TreatmentSection.tsx # Detalhes do Elevidys e urgencia
    DonationSection.tsx  # PIX, vakinha, transferencia, compartilhamento
    DonationPixDialog.tsx# Geracao de BR Code + QR
    TransparencySection.tsx
    MediaSection.tsx
    FAQSection.tsx
    ProgressBar.tsx      # Barra animada de arrecadacao
    ui/*                 # Biblioteca shadcn/ui adaptada
  lib/pix.ts             # Gerador de BR Code PIX (payload + CRC16)
  hooks/use-toast.ts     # Gerenciamento de toasts
index.html               # Shell com SEO/OG/Twitter/canonical/theme-color
```

## Como rodar localmente
1. Requisitos: Node.js 18+ e npm.
2. Instale dependencias: `npm install`
3. Dev server: `npm run dev` (http://localhost:5173)
4. Build prod: `npm run build`
5. Preview do build: `npm run preview`
6. Lint: `npm run lint` (avisos conhecidos de Fast Refresh nos componentes shadcn/ui)

## Funcionalidades principais
- **Header**: navegação suave, CTA de doacao, menu mobile.
- **Hero**: videos incorporados, CTA dupla, progresso animado e destaque de urgencia (idade limite).
- **Historia / DMD / Tratamento**: conteudo humanizado, linha do tempo da doenca e urgencia do Elevidys.
- **Doacao**: PIX (QR + copia e cola), vakinha, dados bancarios, botoes de compartilhamento e convite a voluntariado.
- **Transparencia**: barra de progresso, documentos, distribuicao de custos e contatos oficiais.
- **Midia**: carrossel de materias e video-reportagens com datas formatadas.
- **FAQ**: acordeao com respostas frequentes e contatos.
- **Footer**: contatos, redes, links utilitarios.

## Melhorias recentes
- Mobile-first reforcado: paddings responsivos no container e espacamentos ajustados entre secoes.
- Hero e secoes reescritos com textos limpos e CTA claros.
- Dialogo de PIX com validacao, presets, QR e fallback de copia.
- SEO do shell: title/description focados na campanha, canonical, OG/Twitter, theme-color e favicon.
- Gradientes/overlays utilitarios para fundo leve e profissional.

## Dados a validar/substituir
- Chave PIX, contatos (email/WhatsApp), dados bancarios e links de redes/vakinha/midia (placeholder).
- Valores de arrecadacao e meta: hoje estaticos (R$ 52.855,92 / R$ 17.000.000); conectar a uma fonte (API/planilha) com React Query para progresso em tempo real.
- Imagem social (`og-image.jpg`): trocar por ativo real otmizado (1200x630).

## Pistas de evolucao
- Backend/source of truth para progresso, documentos e midia.
- Imagens otimizadas e `loading="lazy"` nos embeds onde aplicavel.
- Metricas/analytics com consentimento e sitemap/robots alinhados ao dominio final.
- Testes de componentes (React Testing Library) e checagens de acessibilidade (axe).
- Internacionalizacao, se necessario atingir publico externo.

## Creditos
Projeto desenvolvido por **Anderson Marques Vieira** em apoio a campanha do Davi e a causa contra a Distrofia Muscular de Duchenne. Cada doacao, compartilhamento ou contribuicao tecnica ajuda a salvar vidas.
