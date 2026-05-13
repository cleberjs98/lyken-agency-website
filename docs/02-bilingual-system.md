# 02 — Bilingual System

## Lyken Agency Website

## Objetivo desta fase

A Fase 02 tem como objetivo criar o sistema bilíngue do site da Lyken Agency.

O site deve funcionar em:

- English
- Português

A versão em inglês deve ser o idioma principal, pois reforça o posicionamento internacional da Lyken.  
A versão em português deve ter o mesmo nível de qualidade, sofisticação e clareza estratégica.

Esta fase não deve apenas “traduzir textos”.  
Ela deve criar uma estrutura técnica e editorial para que o site funcione corretamente em dois idiomas, sem duplicação desorganizada e sem textos esquecidos no código.

---

# 02.1 — Objetivo estratégico do sistema bilíngue

O sistema bilíngue deve permitir que a Lyken se comunique com públicos diferentes sem perder identidade.

O site precisa atender:

- clientes internacionais
- clientes brasileiros
- clientes de língua portuguesa
- negócios locais que preferem inglês
- negócios que precisam entender a proposta com clareza em português

O idioma não deve mudar a essência da marca.

A experiência deve continuar sendo:

```txt
premium
tecnológica
estratégica
sofisticada
viva
internacional
```

---

# 02.2 — Idiomas oficiais

## Idioma principal

```txt
English
```

## Idioma secundário

```txt
Português
```

## Identificadores técnicos

Usar identificadores simples:

```txt
en
pt
```

## Regra

Não usar identificadores longos ou inconsistentes como:

```txt
english
portuguese
pt-br
br
en-us
```

Para esta primeira versão, usar apenas:

```txt
en
pt
```

---

# 02.3 — Idioma padrão

O idioma padrão do site deve ser:

```txt
English
```

Motivo:

- reforça a percepção internacional
- combina com a identidade premium
- posiciona a Lyken como agência com visão global
- facilita apresentação para clientes fora do Brasil

---

# 02.4 — Regras de tom para o inglês

A versão em inglês deve ter tom:

- professional
- premium
- elegant
- strategic
- clear
- confident
- international
- not exaggerated

Evitar:

```txt
overhyped startup language
cheap marketing phrases
too much slang
informal language
generic agency clichés
```

Preferir:

```txt
short strategic sentences
clear value proposition
measured confidence
premium brand language
```

---

# 02.5 — Regras de tom para o português

A versão em português deve ter tom:

- profissional
- premium
- elegante
- estratégico
- claro
- confiável
- comercial
- sem exagero

Evitar:

```txt
tradução literal fraca
tom informal demais
frases genéricas
linguagem de propaganda barata
excesso de entusiasmo
```

Preferir:

```txt
clareza estratégica
frases curtas e fortes
linguagem sofisticada
tom consultivo
```

---

# 02.6 — O que deve ser bilíngue

Todos os textos visíveis ao usuário devem ser bilíngues.

## Elementos obrigatórios

- Navbar
- Menu mobile
- Botões
- Hero
- Loading phrase
- Seções narrativas
- Serviços
- Processo
- Soluções
- Diferenciais
- Formulário
- Labels
- Placeholders
- Mensagens de validação
- CTA final
- Footer
- Metadata básica, quando aplicável

## Regra

Não pode existir texto fixo visível diretamente dentro dos componentes se ele precisar mudar com o idioma.

---

# 02.7 — Estrutura recomendada de conteúdo

Criar uma estrutura centralizada para os textos.

Opção recomendada:

```txt
src/data/content/
  en.js
  pt.js
```

Cada arquivo deve exportar o conteúdo daquele idioma.

Exemplo conceitual:

```txt
src/data/content/en.js
src/data/content/pt.js
```

Alternativa aceitável:

```txt
src/data/content.js
```

com:

```txt
content.en
content.pt
```

## Recomendação

Para organização e escalabilidade, preferir arquivos separados:

```txt
en.js
pt.js
```

---

# 02.8 — Estrutura interna sugerida do conteúdo

O conteúdo deve ser organizado por área do site.

Estrutura conceitual:

```txt
content = {
  navigation,
  loading,
  hero,
  journey,
  services,
  transformationLayers,
  process,
  solutions,
  whyLyken,
  contact,
  footer
}
```

Isso evita textos espalhados.

---

# 02.9 — Conteúdo de navegação

A navegação deve ter labels por idioma.

## English

```txt
About
Services
Process
Solutions
Contact
```

## Português

```txt
Sobre
Serviços
Processo
Soluções
Contato
```

## Regras

Cada item deve ter:

- label
- target section
- ordem
- identificador estável

Exemplo conceitual:

```txt
id: about
label: About
href: #about
```

O `id` deve ser o mesmo nos dois idiomas.  
Apenas o `label` muda.

---

# 02.10 — Language Switcher

O seletor de idioma deve ser:

```txt
EN / PT
```

## Localização

Deve aparecer:

- no navbar desktop
- no menu mobile

## Visual

Deve ser:

- discreto
- elegante
- integrado ao menu
- legível
- sem parecer um botão pesado

## Estado ativo

O idioma ativo deve ficar visualmente indicado.

Exemplo:

```txt
EN ativo em dourado
PT inativo em texto claro suave
```

ou o contrário.

---

# 02.11 — Comportamento do switcher

Ao clicar em EN ou PT:

- todo o conteúdo principal muda
- a navegação muda
- botões mudam
- formulário muda
- footer muda
- idioma ativo é atualizado
- a página não deve recarregar de forma agressiva
- a experiência deve continuar fluida

## Regra

A troca deve parecer parte natural do site.

Não deve quebrar animações, layout ou scroll.

---

# 02.12 — Persistência do idioma

O idioma escolhido deve ser mantido durante a sessão do usuário.

Opções possíveis:

```txt
localStorage
sessionStorage
state global simples
```

## Recomendação

Usar `localStorage` para manter a preferência quando o usuário voltar ao site.

Chave sugerida:

```txt
lyken-language
```

Valores possíveis:

```txt
en
pt
```

---

# 02.13 — Hook de idioma

Criar ou planejar um hook para idioma.

Nome sugerido:

```txt
useLanguage.js
```

Funções esperadas:

- idioma atual
- função para trocar idioma
- conteúdo atual
- persistência do idioma

Exemplo conceitual:

```txt
language
setLanguage
content
```

## Regra

Não espalhar lógica de idioma em vários componentes.

Centralizar.

---

# 02.14 — Controle de textos hardcoded

Textos hardcoded são textos escritos diretamente dentro de componentes.

Nesta fase, evitar:

```txt
<h1>We turn ideas into living digital brands.</h1>
```

Preferir:

```txt
<h1>{content.hero.headline}</h1>
```

## Regra

Textos visíveis devem vir do conteúdo bilíngue.

Exceções possíveis:

- nomes técnicos internos
- atributos não visíveis
- textos temporários de desenvolvimento

---

# 02.15 — Loading bilíngue

A frase do loading deve mudar conforme o idioma.

## English

```txt
From idea to living brand.
```

## Português

```txt
Da ideia à marca viva.
```

## Observação

Se o loading aparece antes da preferência ser carregada, usar o idioma salvo no localStorage.  
Se não houver idioma salvo, usar inglês.

---

# 02.16 — Hero bilíngue

## English headline

```txt
We turn ideas into living digital brands.
```

## Portuguese headline

```txt
Transformamos ideias em marcas digitais vivas.
```

## English subheadline

```txt
Lyken Agency combines strategy, branding, technology and intelligence to transform ideas into structured, memorable and scalable digital experiences.
```

## Portuguese subheadline

```txt
A Lyken Agency combina estratégia, branding, tecnologia e inteligência para transformar ideias em experiências digitais estruturadas, memoráveis e escaláveis.
```

## CTAs

English:

```txt
Start a Project
Explore the Transformation
```

Portuguese:

```txt
Iniciar um Projeto
Explorar a Transformação
```

---

# 02.17 — Seções narrativas bilíngues

A jornada deve ter conteúdo em ambos os idiomas.

## The Spark

EN:

```txt
Every brand begins as a possibility.
```

PT:

```txt
Toda marca começa como uma possibilidade.
```

## The Structure

EN:

```txt
Strategy transforms possibility into direction.
```

PT:

```txt
A estratégia transforma possibilidade em direção.
```

## The Identity

EN:

```txt
A brand becomes real when it can be seen, understood and remembered.
```

PT:

```txt
Uma marca se torna real quando pode ser vista, compreendida e lembrada.
```

## The Digital Presence

EN:

```txt
We transform brands into digital experiences.
```

PT:

```txt
Transformamos marcas em experiências digitais.
```

## The Intelligence

EN:

```txt
Technology turns presence into performance.
```

PT:

```txt
A tecnologia transforma presença em performance.
```

## The Growth

EN:

```txt
A living brand evolves, adapts and grows.
```

PT:

```txt
Uma marca viva evolui, se adapta e cresce.
```

---

# 02.18 — Serviços bilíngues

## Título da seção

EN:

```txt
What We Bring to Life
```

PT:

```txt
O Que Trazemos à Vida
```

## Serviços

Cada serviço deve ter:

- id estável
- título EN
- título PT
- descrição EN
- descrição PT
- ícone
- ordem

Serviços oficiais:

```txt
Brand Strategy
Visual Identity
Digital Presence
Growth Marketing
Web Platforms
AI Solutions
```

Português:

```txt
Estratégia de Marca
Identidade Visual
Presença Digital
Marketing de Crescimento
Plataformas Web
Soluções com IA
```

---

# 02.19 — Processo bilíngue

## Título

EN:

```txt
A structured process for creative transformation.
```

PT:

```txt
Um processo estruturado para transformação criativa.
```

## Etapas

EN:

```txt
Discover
Define
Design
Build
Launch
Evolve
```

PT:

```txt
Descobrir
Definir
Criar
Construir
Lançar
Evoluir
```

## Regra

As etapas devem manter a mesma ordem em ambos os idiomas.

---

# 02.20 — Soluções por estágio bilíngues

## Título

EN:

```txt
Designed for every stage of your business.
```

PT:

```txt
Soluções para cada estágio do seu negócio.
```

## Cards

EN:

```txt
New Brands
Repositioning
Digital Expansion
Intelligent Operations
```

PT:

```txt
Novas Marcas
Reposicionamento
Expansão Digital
Operações Inteligentes
```

---

# 02.21 — Why Lyken bilíngue

## Título

EN:

```txt
Because modern brands need more than design.
```

PT:

```txt
Porque marcas modernas precisam de mais do que design.
```

## Pontos em inglês

```txt
Strategy before execution
Branding connected to business goals
Digital experiences built for growth
AI-enhanced workflows
Premium visual direction
Flexible solutions for different business stages
```

## Pontos em português

```txt
Estratégia antes da execução
Branding conectado aos objetivos do negócio
Experiências digitais criadas para crescimento
Fluxos de trabalho otimizados com IA
Direção visual premium
Soluções flexíveis para diferentes estágios de negócio
```

---

# 02.22 — Formulário bilíngue

## Campos em inglês

```txt
Name
Business Name
Email
Phone
Service Needed
Message
```

## Campos em português

```txt
Nome
Nome da Empresa
Email
Telefone
Serviço Desejado
Mensagem
```

## Botão

EN:

```txt
Start a Project
```

PT:

```txt
Iniciar um Projeto
```

---

# 02.23 — Mensagens de validação

Caso o formulário tenha validação nesta ou em fase futura, as mensagens também devem ser bilíngues.

Exemplos:

EN:

```txt
Please enter your name.
Please enter a valid email.
Please select a service.
```

PT:

```txt
Por favor, informe seu nome.
Por favor, informe um email válido.
Por favor, selecione um serviço.
```

---

# 02.24 — Footer bilíngue

## Tagline institucional

EN:

```txt
Intelligent Strategy. Unforgettable Brands.
```

PT:

```txt
Estratégia Inteligente. Marcas Inesquecíveis.
```

## Footer deve incluir

- logo
- tagline
- links
- contato
- social placeholders
- direitos autorais

## Regra

Links do footer devem acompanhar o idioma ativo.

---

# 02.25 — SEO e metadata bilíngue

Nesta fase, SEO completo ainda não é obrigatório, mas o conteúdo deve prever metadata por idioma.

## English title

```txt
Lyken Agency — Intelligent Strategy. Unforgettable Brands.
```

## Portuguese title

```txt
Lyken Agency — Estratégia Inteligente. Marcas Inesquecíveis.
```

## English description

```txt
Lyken Agency combines branding, digital marketing, technology and AI-powered solutions to help businesses build, position and grow.
```

## Portuguese description

```txt
A Lyken Agency une branding, marketing digital, tecnologia e soluções com inteligência artificial para ajudar negócios a construir, posicionar e crescer.
```

---

# 02.26 — Bilingual content quality rules

## English quality rules

- Avoid excessive adjectives.
- Avoid generic agency claims.
- Use strategic vocabulary.
- Keep copy concise.
- Use premium tone.

## Portuguese quality rules

- Avoid literal translation when it sounds weak.
- Prefer natural professional Portuguese.
- Keep premium tone.
- Avoid informal phrasing.
- Maintain clarity.

---

# 02.27 — Layout impact of language change

Portuguese text is often longer than English.

The layout must handle this.

## Verificar

- botões com texto maior
- títulos quebrando em mobile
- cards com alturas diferentes
- navbar com labels maiores
- formulário com labels maiores
- CTA final em duas linhas

## Regra

O layout não pode quebrar quando muda para português.

---

# 02.28 — Mobile bilingual behavior

No mobile, o idioma deve continuar acessível.

## Opções

- EN/PT dentro do menu mobile
- EN/PT no topo do menu mobile
- EN/PT próximo ao CTA

## Regra

O seletor não deve desaparecer no mobile.

---

# 02.29 — Acessibilidade do switcher

O switcher deve ser acessível.

## Regras

- botões clicáveis
- foco visível
- labels compreensíveis
- não depender apenas de cor
- usar estado ativo claro

---

# 02.30 — O que a Fase 02 não deve fazer

A Fase 02 não deve construir ainda:

- todas as seções finais completas
- animações completas
- layout final do Hero
- formulário funcional final
- SEO completo
- deploy
- integração com API

Ela deve focar no sistema de conteúdo e idioma.

---

# 02.31 — Auditoria da Fase 02

Ao final, verificar:

## Idioma

- EN funciona?
- PT funciona?
- idioma padrão é EN?
- idioma escolhido persiste?

## Conteúdo

- Hero muda?
- Navbar muda?
- Serviços mudam?
- Processo muda?
- Footer muda?
- Formulário muda?

## Qualidade

- PT parece premium?
- EN parece internacional?
- não há tradução fraca?
- não há texto hardcoded perdido?

## Layout

- português não quebra layout?
- mobile continua bom?
- navbar continua legível?

---

# 02.32 — Critérios oficiais de aprovação

A Fase 02 só pode ser considerada concluída quando:

- o idioma padrão é inglês
- o usuário pode alternar entre EN e PT
- o idioma ativo é visualmente indicado
- todos os principais textos são bilíngues
- o conteúdo está centralizado em arquivos de dados
- textos visíveis não estão espalhados nos componentes
- a versão portuguesa tem qualidade premium
- a versão inglesa tem qualidade internacional
- mobile suporta troca de idioma
- o layout não quebra ao trocar idioma

---

# 02.33 — Resultado esperado da Fase 02

Resultado esperado:

```txt
Sistema de idioma criado
Conteúdo EN/PT estruturado
Language switcher planejado ou implementado
Textos principais centralizados
Persistência de idioma definida
Layout preparado para textos maiores
Tom premium mantido nos dois idiomas
```

A partir desse ponto, o projeto poderá avançar para:

```txt
03-layout-navigation.md
```

---

# 02.34 — Pergunta de validação da Fase 02

Antes de aprovar esta fase, responder:

```txt
O sistema bilíngue permite que a Lyken se apresente com a mesma força, clareza e sofisticação em inglês e português?
```

Se a resposta for sim, a Fase 02 está aprovada.

Se a resposta for não, revisar conteúdo, switcher, estrutura e qualidade editorial antes de continuar.
