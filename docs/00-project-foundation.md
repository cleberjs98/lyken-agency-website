# 00 — Project Foundation

## Lyken Agency Website

## Objetivo desta fase

A Fase 00 tem como objetivo preparar a base técnica do projeto antes de qualquer desenvolvimento visual, animação, seção ou funcionalidade.

Esta fase não deve focar em “deixar bonito”.  
Ela deve garantir que o projeto esteja:

- corretamente criado
- organizado
- documentado
- limpo
- pronto para escalar
- fácil de auditar
- fácil de ser trabalhado pelo Codex/Copilot
- preparado para receber o sistema visual da Lyken

A Fase 00 é a fundação. Se ela for mal feita, o restante do projeto tende a ficar confuso.

---

# 00.1 — Nome oficial do projeto

## Nome recomendado

```txt
lyken-agency-website
```

## Regra

O nome deve ser usado de forma consistente em:

- pasta do projeto
- repositório GitHub
- projeto na Vercel
- documentação
- README
- configurações internas

## Evitar nomes como

```txt
site-lyken
lyken
lyken-site-final
lyken-new
teste-lyken
landing-page
```

Esses nomes parecem temporários e podem gerar confusão depois.

## Critério de aprovação

A pasta principal do projeto deve se chamar:

```txt
lyken-agency-website
```

---

# 00.2 — Stack técnico inicial

## Stack recomendado

O projeto deve usar:

```txt
React
Vite
Tailwind CSS
Framer Motion
Lucide React
JavaScript
Vercel
```

## Por que React

React permite criar o site como um conjunto de componentes reutilizáveis.

Exemplo:

```txt
Navbar
Hero
Services
Process
Contact
Footer
```

Isso facilita:

- manutenção
- auditoria
- ajustes visuais
- reaproveitamento
- criação de animações
- integração bilíngue

## Por que Vite

Vite é leve, rápido e adequado para projetos modernos em React.

Ele ajuda em:

- desenvolvimento local rápido
- build otimizado
- integração simples com Vercel
- configuração menos pesada

## Por que Tailwind CSS

Tailwind permite aplicar o sistema visual da Lyken diretamente no layout.

Ele ajuda a controlar:

- cores
- espaçamentos
- responsividade
- grid
- botões
- cards
- tipografia
- estados de hover

Tailwind combina bem com um projeto onde a estética precisa ser premium, controlada e consistente.

## Por que Framer Motion

Framer Motion será usado para animações sofisticadas e controladas.

Ele será importante para:

- loading conceitual
- entrada do Hero
- scroll reveal
- hover premium
- transições suaves
- movimento da narrativa
- sensação de transformação

Atenção: Framer Motion deve ser usado com moderação.  
O site deve parecer vivo, não exagerado.

## Por que Lucide React

Lucide React oferece ícones lineares, modernos e minimalistas.

Ele combina com a identidade da Lyken porque os ícones do branding são:

- finos
- elegantes
- dourados
- simples
- institucionais

Os ícones devem ser customizados visualmente para parecerem parte da marca.

## Por que JavaScript, não TypeScript no início

Para este projeto, a primeira versão pode ser feita em JavaScript porque:

- é mais simples para auditar
- reduz complexidade inicial
- facilita o uso com IA
- acelera a construção visual
- é suficiente para uma landing page premium

TypeScript pode ser considerado depois, caso o site evolua para uma plataforma maior.

## Por que Vercel

Vercel é ideal para publicar projetos React/Vite.

Ela oferece:

- deploy rápido
- integração com GitHub
- preview automático
- boa performance
- facilidade para conectar domínio
- builds automáticos

---

# 00.3 — O que esta fase não deve fazer

A Fase 00 **não deve** construir ainda:

- loading animado
- Hero final
- seções do site
- sistema bilíngue completo
- formulário funcional
- animações definitivas
- cards finais
- mesh digital final
- SEO completo
- integração com e-mail
- integração com WhatsApp
- deploy final

Ela deve apenas criar a base correta.

---

# 00.4 — Estrutura inicial de pastas

A estrutura base recomendada é:

```txt
lyken-agency-website/
  public/
    favicon/
    images/
    logos/

  src/
    assets/
      logos/
      textures/
      mesh/
      icons/

    components/
      common/
      layout/
      sections/
      motion/
      ui/

    data/
      content/
      navigation/
      services/

    hooks/

    styles/

    utils/

    App.jsx
    main.jsx
    index.css

  docs/

  LYKEN_WEBSITE_BRIEF.md
  ENGINEERING_DOCUMENTATION.md
  README.md
  package.json
```

---

# 00.5 — Explicação da estrutura de pastas

## public/

A pasta `public` deve conter arquivos públicos e estáticos que podem ser acessados diretamente pelo navegador.

Exemplos:

```txt
favicon
logos públicos
imagens estáticas
arquivos de metadata
```

## public/favicon/

Uso:

```txt
ícones do site
favicon padrão
favicon em diferentes tamanhos
ícone para navegador
ícone para preview
```

Exemplo futuro:

```txt
public/favicon/favicon.ico
public/favicon/favicon-32x32.png
public/favicon/apple-touch-icon.png
```

## public/images/

Uso:

```txt
imagens públicas gerais
imagens institucionais
imagens que não precisam passar pelo bundler
```

Atenção: imagens importantes de interface podem ir em `src/assets`.

## public/logos/

Uso:

```txt
logo principal da Lyken
logo horizontal
monograma LK
versões públicas do logo
```

---

# 00.6 — Pasta src/

A pasta `src` é onde ficará a aplicação principal.

Tudo que for componente, estilo, dado, lógica e estrutura visual deve ficar aqui.

## src/assets/

A pasta `assets` deve conter recursos visuais usados pelo projeto.

Ela deve ser organizada por tipo.

## src/assets/logos/

Uso:

```txt
logo principal
logo horizontal
monograma LK
versão clara
versão escura
marca d’água
```

Regras:

- nunca distorcer o logo
- nunca alterar cores aleatoriamente
- nunca aplicar sombra exagerada
- respeitar área de respiro
- manter legibilidade

## src/assets/textures/

Uso:

```txt
textura de fundo
ruído fino
vinheta
papel premium
tecido escuro
camadas visuais
```

Essas texturas serão importantes para evitar um fundo chapado.

## src/assets/mesh/

Uso:

```txt
elementos da malha digital
imagens ou SVGs de partículas
fundos abstratos
ondas digitais
```

A malha digital é um dos elementos centrais da experiência da Lyken.

## src/assets/icons/

Uso:

```txt
ícones customizados
ícones auxiliares
ícones do brand system
```

Mesmo usando Lucide React, esta pasta pode guardar ícones próprios caso necessário.

---

# 00.7 — Pasta components/

A pasta `components` deve guardar todos os componentes reutilizáveis do site.

## src/components/common/

Componentes comuns e reutilizáveis.

Exemplos:

```txt
Container.jsx
SectionHeader.jsx
SectionLabel.jsx
GoldDivider.jsx
Button.jsx
Card.jsx
```

Esses componentes podem aparecer em várias seções.

## src/components/layout/

Componentes de estrutura principal.

Exemplos:

```txt
Navbar.jsx
Footer.jsx
Layout.jsx
MobileMenu.jsx
```

Esses elementos formam o “esqueleto” do site.

## src/components/sections/

Componentes das seções principais do site.

Exemplos futuros:

```txt
Hero.jsx
TheSpark.jsx
TheStructure.jsx
TheIdentity.jsx
DigitalPresence.jsx
Intelligence.jsx
Growth.jsx
Services.jsx
Process.jsx
Solutions.jsx
WhyLyken.jsx
Contact.jsx
```

Cada seção deve ter responsabilidade clara.

## src/components/motion/

Componentes ligados a animações.

Exemplos futuros:

```txt
PageLoader.jsx
MotionReveal.jsx
AnimatedLine.jsx
DigitalMesh.jsx
ParticleField.jsx
```

Separar animações ajuda a manter o projeto organizado.

## src/components/ui/

Componentes pequenos de interface.

Exemplos:

```txt
Input.jsx
Textarea.jsx
Select.jsx
LanguageSwitcher.jsx
IconButton.jsx
```

Esses componentes serão usados em formulários, botões e elementos de interface.

---

# 00.8 — Pasta data/

A pasta `data` deve guardar conteúdo e dados estruturados.

Isso é essencial para o sistema bilíngue.

## src/data/content/

Uso:

```txt
textos em inglês
textos em português
conteúdo das seções
frases do Hero
CTA
footer
formulário
```

Possível estrutura futura:

```txt
src/data/content/en.js
src/data/content/pt.js
```

ou:

```txt
src/data/content.js
```

## src/data/navigation/

Uso:

```txt
links do menu
âncoras
labels bilíngues
ordem de navegação
```

## src/data/services/

Uso:

```txt
serviços da Lyken
descrições
ícones
categorias
soluções
```

Separar os dados facilita atualização depois.

---

# 00.9 — Pasta hooks/

A pasta `hooks` deve guardar lógicas reutilizáveis.

Exemplos futuros:

```txt
useLanguage.js
useScrollProgress.js
useMousePosition.js
useReducedMotion.js
```

Na Fase 00, essa pasta pode estar vazia.

---

# 00.10 — Pasta styles/

A pasta `styles` pode guardar estilos complementares.

Exemplos:

```txt
fonts.css
animations.css
textures.css
```

Mesmo usando Tailwind, alguns estilos globais podem ficar aqui.

---

# 00.11 — Pasta utils/

A pasta `utils` deve guardar funções auxiliares.

Exemplos futuros:

```txt
scrollToSection.js
formatContent.js
validateForm.js
```

Na Fase 00, essa pasta pode estar vazia.

---

# 00.12 — Pasta docs/

A pasta `docs` deve conter documentos separados por fase.

Estrutura recomendada:

```txt
docs/
  00-project-foundation.md
  01-visual-system.md
  02-bilingual-system.md
  03-layout-navigation.md
  04-loading-experience.md
  05-hero-section.md
  06-narrative-journey.md
  07-services-solutions.md
  08-motion-interactions.md
  09-contact-conversion.md
  10-responsive-experience.md
  11-performance-seo-accessibility.md
  12-deploy.md
  13-final-audit.md
```

Esses documentos vão ajudar o Codex a trabalhar etapa por etapa sem misturar tudo.

---

# 00.13 — Arquivos principais do React

## src/App.jsx

Responsável por montar a aplicação principal.

Na Fase 00, ele pode conter apenas uma tela temporária.

Exemplo conceitual:

```txt
Temporary homepage
Project name
Foundation status
```

Não precisa ainda conter o site real.

## src/main.jsx

Responsável por inicializar o React.

Esse arquivo não deve ser alterado desnecessariamente.

## src/index.css

Responsável por importar Tailwind e estilos globais.

Nesta fase, deve conter apenas:

- imports do Tailwind
- estilos globais mínimos
- reset básico se necessário
- definição inicial de background

---

# 00.14 — Documentos obrigatórios da raiz

## LYKEN_WEBSITE_BRIEF.md

Este documento já representa a direção criativa e visual.

Ele deve conter:

- conceito
- identidade visual
- cores
- tipografia
- movimento
- narrativa
- loading
- Hero
- experiência desejada

Ele será usado como guia criativo.

## ENGINEERING_DOCUMENTATION.md

Este documento representa o roadmap técnico geral.

Ele deve conter:

- fases
- subfases
- critérios de aprovação
- stack
- estrutura técnica
- visão de engenharia

Ele será usado como guia técnico macro.

## README.md

O README deve ser simples e funcional.

Ele deve conter:

```txt
nome do projeto
descrição curta
stack usado
como instalar
como rodar localmente
como gerar build
como fazer deploy
```

Exemplo de estrutura:

```txt
# Lyken Agency Website

Premium interactive bilingual website for Lyken Agency.

## Stack

React, Vite, Tailwind CSS, Framer Motion, Lucide React.

## Install

npm install

## Run

npm run dev

## Build

npm run build
```

---

# 00.15 — Página temporária da Fase 00

Nesta fase, o site deve renderizar apenas uma página temporária.

Objetivo:

- confirmar que o projeto roda
- confirmar que Tailwind funciona
- confirmar que a estrutura inicial está correta
- confirmar que não há erro no terminal

Conteúdo sugerido da página temporária:

```txt
Lyken Agency Website
Project Foundation Ready
Phase 00
```

Visual mínimo:

- fundo verde escuro
- texto claro/dourado
- centralizado
- sem animações finais

A página temporária não deve tentar representar o layout final ainda.

---

# 00.16 — Regras de organização

## Regra 1 — Não misturar fases

Durante a Fase 00, não criar:

- Hero final
- loading final
- sistema bilíngue completo
- cards finais
- animações complexas
- formulário final

Apenas fundação.

## Regra 2 — Cada pasta deve ter função clara

Não colocar tudo em uma única pasta.

Evitar:

```txt
src/components/
  tudo.jsx
```

ou:

```txt
src/
  Hero.jsx
  Navbar.jsx
  Services.jsx
  Contact.jsx
  tudo misturado
```

## Regra 3 — Evitar arquivos genéricos demais

Evitar nomes como:

```txt
Component.jsx
Section.jsx
Test.jsx
New.jsx
Final.jsx
Page.jsx
```

Preferir nomes descritivos:

```txt
Navbar.jsx
Hero.jsx
GoldDivider.jsx
LanguageSwitcher.jsx
PageLoader.jsx
```

## Regra 4 — Não criar código sem necessidade

A Fase 00 é de preparação.

Código demais nesta fase pode gerar retrabalho.

## Regra 5 — Documentação deve ficar acessível

Os documentos devem ficar na raiz e em `docs/`.

Isso permite que o Codex leia facilmente as instruções do projeto.

---

# 00.17 — Primeira auditoria técnica

Ao final da Fase 00, verificar:

## Terminal

- O projeto roda?
- Existe erro?
- Existe warning importante?
- O servidor local abre corretamente?

## Estrutura

- As pastas estão criadas?
- Os documentos estão na raiz?
- A pasta `docs` existe?
- Os arquivos principais estão no lugar?

## Tailwind

- Tailwind está funcionando?
- Classes aparecem na tela?
- O fundo pode receber a cor da marca?
- O CSS global está limpo?

## Organização

- Não existem arquivos desnecessários?
- Não existem nomes confusos?
- A estrutura está pronta para a Fase 01?

---

# 00.18 — Critérios oficiais de aprovação

A Fase 00 só pode ser considerada concluída quando todos os critérios abaixo forem verdadeiros:

## Projeto

- O projeto foi criado com Vite + React.
- O nome do projeto é `lyken-agency-website`.
- O projeto roda localmente.

## Dependências

- Tailwind CSS está instalado e funcionando.
- Framer Motion está instalado.
- Lucide React está instalado.

## Estrutura

- A estrutura de pastas principal existe.
- A pasta `docs/` existe.
- As pastas dentro de `src/` estão organizadas.

## Documentação

- `LYKEN_WEBSITE_BRIEF.md` está na raiz.
- `ENGINEERING_DOCUMENTATION.md` está na raiz.
- `README.md` está na raiz.
- O documento `00-project-foundation.md` estará dentro de `docs/`.

## Tela temporária

- Existe uma página temporária renderizando.
- A página temporária não tenta ser o site final.
- A página temporária confirma que a fundação está pronta.

## Qualidade

- Não há erro no terminal.
- Não há erro crítico no console.
- Não há estrutura bagunçada.
- Não há código desnecessariamente complexo.
- Não há tentativa de construir fases futuras antes da hora.

---

# 00.19 — Resultado esperado da Fase 00

Ao final desta fase, o projeto deve estar pronto para receber a Fase 01.

Resultado esperado:

```txt
Projeto criado
Dependências instaladas
Tailwind funcionando
Pastas organizadas
Documentos na raiz
Docs iniciado
Página temporária funcionando
Ambiente limpo
Sem erros
```

A partir desse ponto, o projeto poderá avançar para:

```txt
01-visual-system.md
```

---

# 00.20 — Pergunta de validação da Fase 00

Antes de aprovar esta fase, responder:

```txt
A fundação técnica está organizada, limpa e pronta para receber o sistema visual premium da Lyken?
```

Se a resposta for sim, a Fase 00 está aprovada.

Se a resposta for não, corrigir a base antes de continuar.
