# 01 — Visual System

## Lyken Agency Website

## Objetivo desta fase

A Fase 01 tem como objetivo transformar a identidade visual da Lyken Agency em um sistema técnico reutilizável para o site.

Nesta fase, o foco não é construir seções completas do site.  
O foco é criar a base visual que será usada em todas as fases seguintes.

A Fase 01 deve garantir que o projeto tenha:

- paleta oficial configurada
- fontes oficiais definidas
- hierarquia tipográfica
- sistema de espaçamento
- estilos globais
- fundos com textura
- componentes visuais base
- regras de uso visual
- consistência entre layout, marca e código

A Fase 01 é onde o branding começa a virar interface.

---

# 01.1 — Objetivo estratégico do sistema visual

O sistema visual deve fazer o site da Lyken parecer:

- premium
- tecnológico
- sofisticado
- editorial
- estratégico
- vivo
- elegante
- internacional
- confiável
- moderno

O site não deve parecer:

- template genérico
- agência comum de marketing
- startup colorida
- site SaaS padrão
- página institucional parada
- site futurista exagerado
- visual cyberpunk
- visual de arquitetura, construção ou imobiliária

A identidade da Lyken deve ser percebida por meio de:

- verde profundo
- dourado champagne
- tipografia editorial
- linhas finas
- textura premium
- malha digital
- monograma LK
- movimento sutil
- composição modular

---

# 01.2 — Princípio principal da Fase 01

Toda decisão visual deve passar por esta pergunta:

```txt
Isso parece Lyken?
```

Se a resposta for não, a decisão deve ser revista.

A Fase 01 não deve aceitar soluções visuais genéricas apenas porque funcionam tecnicamente.

O objetivo é construir uma base visual que traduza a marca com precisão.

---

# 01.3 — Paleta oficial

A paleta oficial da Lyken para o site deve ser baseada nas cores extraídas do branding visual.

## Cores principais

```txt
Deep Green: #0B1F1A
Emerald Green: #10362E
Teal Green: #164C3F
Champagne Gold: #D4B47A
Warm Gold: #B8924F
Soft Black: #1A1A1A
```

---

# 01.4 — Função de cada cor

## Deep Green — `#0B1F1A`

Cor principal do site.

Deve ser usada em:

- fundo geral
- Hero
- loading
- footer
- seções premium
- áreas de maior profundidade
- base da atmosfera visual

Essa cor não deve ser substituída por preto puro.

Ela cria o clima sofisticado, escuro e premium da Lyken.

---

## Emerald Green — `#10362E`

Cor secundária de profundidade.

Deve ser usada em:

- cards
- blocos internos
- superfícies secundárias
- áreas de contraste
- hover discreto
- fundos de seções intermediárias

Essa cor ajuda a separar camadas sem quebrar a identidade escura.

---

## Teal Green — `#164C3F`

Cor de apoio tecnológico.

Deve ser usada em:

- efeitos sutis de profundidade
- elementos digitais
- malha
- brilhos frios discretos
- gradientes suaves
- estados interativos secundários

Essa cor não deve dominar a interface.

Ela deve reforçar a sensação tecnológica, sem transformar o site em uma paleta azul comum.

---

## Champagne Gold — `#D4B47A`

Principal cor premium de destaque.

Deve ser usada em:

- linhas finas
- detalhes de botões
- ícones
- highlights
- monograma
- títulos pontuais
- partículas
- estados ativos
- elementos de assinatura visual

O dourado champagne é uma cor nobre.  
Ele deve ser usado com controle.

---

## Warm Gold — `#B8924F`

Dourado secundário.

Deve ser usado em:

- hover
- gradientes metálicos
- sombras douradas suaves
- detalhes secundários
- divisores
- profundidade em ícones

Ele pode complementar o champagne gold, mas não deve competir com ele.

---

## Soft Black — `#1A1A1A`

Cor escura de suporte.

Deve ser usada em:

- contraste
- textos sobre fundos claros, se houver
- detalhes escuros
- sombras
- áreas secundárias

Não deve substituir o Deep Green como base principal.

---

# 01.5 — Proporção recomendada de uso das cores

A proporção visual recomendada é:

```txt
Deep Green: 60% a 70%
Emerald Green: 15% a 20%
Teal Green: 5% a 10%
Champagne Gold: 5% a 8%
Warm Gold: 2% a 4%
Soft Black: uso pontual
```

## Regra importante

O dourado deve parecer valioso.

Se for usado demais, perde sofisticação.

---

# 01.6 — Cores proibidas ou não recomendadas

Evitar:

```txt
roxo neon
rosa neon
azul elétrico dominante
laranja forte
vermelho chamativo
verde limão
branco puro como fundo principal
preto puro como fundo principal
gradientes coloridos estilo cyberpunk
cores aleatórias sem ligação com a marca
```

## Regra

Nenhuma cor nova deve ser adicionada sem justificativa clara.

Se uma nova cor for necessária, ela deve ser documentada.

---

# 01.7 — Tokens técnicos de cor

Os tokens de cor devem ser nomeados de forma clara.

Exemplo conceitual:

```txt
brand.deepGreen
brand.emeraldGreen
brand.tealGreen
brand.champagneGold
brand.warmGold
brand.softBlack
```

Ou, se usando Tailwind:

```txt
lyken.deep
lyken.emerald
lyken.teal
lyken.gold
lyken.goldWarm
lyken.black
```

## Regras de nomeação

Evitar nomes genéricos como:

```txt
green1
green2
gold1
dark
colorPrimary
colorSecondary
```

Preferir nomes conectados à marca:

```txt
deepGreen
champagneGold
emeraldGreen
warmGold
```

---

# 01.8 — Aplicação das cores por elemento

## Background principal

Usar:

```txt
#0B1F1A
```

## Cards

Usar:

```txt
#10362E
```

com borda fina em:

```txt
rgba(212, 180, 122, 0.25)
```

## Textos principais

Usar:

```txt
off-white ou champagne muito claro
```

Sugestão:

```txt
#F4EFE3
```

Atenção: essa cor pode ser usada como cor funcional de texto claro, mas deve ser documentada como apoio, não como cor principal do branding.

## Textos secundários

Usar variações suaves, como:

```txt
rgba(244, 239, 227, 0.72)
rgba(244, 239, 227, 0.60)
```

## Linhas e divisores

Usar:

```txt
rgba(212, 180, 122, 0.30)
```

## Ícones

Usar:

```txt
#D4B47A
```

## Hover dourado

Usar:

```txt
#B8924F
```

---

# 01.9 — Tipografia oficial

O sistema tipográfico deve usar duas famílias principais:

```txt
Playfair Display
Satoshi
```

---

# 01.10 — Playfair Display

## Função

Playfair Display representa a alma premium, editorial e sofisticada da Lyken.

## Usar em:

- Hero headline
- títulos principais
- frases conceituais
- momentos institucionais
- chamadas de impacto
- tagline
- seções narrativas

## Não usar em:

- parágrafos longos
- menus
- labels pequenos
- formulários
- textos técnicos extensos

## Sensação transmitida

- autoridade
- luxo
- elegância
- editorial
- sofisticação
- confiança

---

# 01.11 — Satoshi

## Função

Satoshi representa a clareza moderna, tecnológica e funcional da Lyken.

## Usar em:

- corpo de texto
- menu
- botões
- labels
- formulários
- cards
- descrições
- textos de apoio
- microcopy
- navegação
- conteúdo técnico

## Sensação transmitida

- modernidade
- precisão
- tecnologia
- clareza
- legibilidade
- organização

---

# 01.12 — Fallback tipográfico

Se Satoshi não estiver disponível, usar temporariamente:

```txt
Inter
```

Mas isso deve ser tratado como fallback, não como identidade final.

## Regra

Se o projeto usar Inter temporariamente, documentar no README ou em comentário técnico que:

```txt
Satoshi should be added when available as the official brand body typeface.
```

---

# 01.13 — Hierarquia tipográfica

## Hero Headline

Uso:

- Playfair Display
- muito grande
- peso elegante
- line-height apertado, mas legível
- forte presença visual

Direção visual:

```txt
font-family: Playfair Display
font-size desktop: grande
font-size mobile: adaptado
line-height: 0.95 a 1.1
letter-spacing: levemente negativo ou natural
```

## Section Title

Uso:

- Playfair Display
- grande
- sofisticado
- com respiro

## Section Label / Eyebrow

Uso:

- Satoshi
- uppercase
- pequeno
- letter spacing amplo
- dourado ou texto claro suave

Exemplo:

```txt
01 — THE SPARK
```

## Body Text

Uso:

- Satoshi
- legível
- cor suave
- largura de linha controlada

## Button Text

Uso:

- Satoshi
- medium ou semibold
- uppercase discreto ou title case
- letter spacing leve

## Card Title

Pode usar:

- Satoshi semibold para clareza
- Playfair Display para cards mais editoriais

A escolha deve depender da seção.

---

# 01.14 — Regras de tamanho e leitura

O site deve ter textos com bastante respiro.

Evitar:

- parágrafos longos demais
- texto pequeno demais
- títulos quebrando de forma ruim
- linhas muito largas
- excesso de títulos no mesmo bloco

## Largura recomendada de leitura

Parágrafos devem ter largura confortável.

Direção:

```txt
max-width: 560px a 720px
```

Dependendo da seção.

---

# 01.15 — Sistema de espaçamento

A identidade da Lyken precisa de espaço.

O site deve usar espaçamentos generosos para parecer premium.

## Regras

Seções devem ter:

- bastante padding vertical
- margem lateral controlada
- distância clara entre título e texto
- distância clara entre blocos
- cards com padding confortável

## Evitar

- elementos apertados
- seções muito coladas
- cards pequenos demais
- excesso de informação por linha
- layout cheio demais

---

# 01.16 — Escala de espaçamento sugerida

Usar uma escala consistente:

```txt
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
128px
```

## Aplicação

Pequenos detalhes:

```txt
4px a 12px
```

Elementos internos:

```txt
16px a 32px
```

Blocos e cards:

```txt
32px a 48px
```

Seções:

```txt
80px a 128px
```

---

# 01.17 — Sistema de containers

Criar um padrão de container para manter alinhamento.

## Regras

O container principal deve:

- centralizar conteúdo
- ter largura máxima
- ter padding lateral responsivo
- funcionar em mobile, tablet e desktop

## Direção

```txt
max-width: 1200px a 1320px
padding mobile: 20px a 24px
padding tablet: 32px
padding desktop: 48px
```

---

# 01.18 — Sistema de grid

A identidade visual usa lógica editorial.

O site deve usar grid para criar organização.

## Regras

Usar grid para:

- serviços
- processo
- soluções
- seções narrativas
- cards
- layout editorial

## Grids recomendados

Desktop:

```txt
12-column grid
```

Tablet:

```txt
6-column grid
```

Mobile:

```txt
1-column ou 2-column simples
```

---

# 01.19 — Bordas e linhas

Linhas finas são parte fundamental da identidade.

## Uso

Aplicar em:

- cards
- divisores
- timelines
- navegação
- seções
- botões secundários
- detalhes editoriais

## Espessura

Usar:

```txt
1px
```

Em casos especiais:

```txt
0.5px se suportado visualmente
```

## Cor

Usar:

```txt
rgba(212, 180, 122, 0.20)
rgba(212, 180, 122, 0.30)
rgba(212, 180, 122, 0.45)
```

## Evitar

- bordas grossas
- bordas brancas fortes
- linhas muito brilhantes
- divisores pesados
- bordas coloridas aleatórias

---

# 01.20 — Sistema de botões

A Fase 01 deve definir estilos base para botões.

## Botão primário

Função:

- ação principal
- contato
- iniciar projeto

Visual:

- fundo dourado ou borda dourada com preenchimento elegante
- texto escuro ou claro dependendo do contraste
- hover sutil
- sem exagero

Exemplo conceitual:

```txt
background: #D4B47A
text: #0B1F1A
hover: #B8924F
```

## Botão secundário

Função:

- explorar seções
- ações menos fortes

Visual:

- fundo transparente
- borda dourada fina
- texto dourado ou claro
- hover com brilho sutil

## Regras

Botões devem ser:

- elegantes
- claros
- fáceis de clicar
- consistentes
- responsivos

## Evitar

- botões muito arredondados estilo startup genérica
- sombras pesadas
- efeitos neon fortes
- muitas variações diferentes

---

# 01.21 — Sistema de cards

Cards serão usados em serviços, soluções, processo e diferenciais.

## Visual base

Cards devem ter:

- fundo verde profundo
- borda dourada fina
- padding generoso
- texto curto
- ícone linear dourado
- hover sutil
- sombra quase imperceptível
- textura leve ou profundidade interna

## Hover

No hover, o card pode:

- elevar levemente
- acender borda dourada
- mostrar brilho sutil
- animar uma linha fina
- revelar detalhe secundário

## Evitar

- cards brancos genéricos
- sombras grandes
- bordas grossas
- muitos efeitos
- cards lotados de texto
- ícones coloridos demais

---

# 01.22 — Sistema de ícones

Ícones devem seguir a linguagem visual da marca.

## Estilo

- linear
- fino
- dourado
- minimalista
- elegante
- consistente

## Fonte dos ícones

Usar preferencialmente:

```txt
Lucide React
```

## Possíveis ícones por conceito

Strategy:

```txt
Target
```

Brand:

```txt
Diamond
```

Digital:

```txt
Globe
```

Growth:

```txt
TrendingUp
```

AI / Intelligence:

```txt
Sparkles
Network
Cpu
```

Process:

```txt
Search
PenTool
Layers
Rocket
RefreshCw
```

## Regras

- ícones não devem ser grandes demais
- todos devem ter o mesmo stroke visual
- usar dourado champagne
- evitar ícones preenchidos
- evitar ícones coloridos

---

# 01.23 — Sistema de textura

O fundo do site não deve ser chapado.

A textura deve criar profundidade premium.

## Componentes da textura

- ruído fino
- vinheta suave
- gradiente escuro
- brilho dourado sutil
- leve sensação tátil

## Uso

Aplicar textura em:

- body
- loading
- Hero
- seções principais
- footer

## Regras

A textura deve ser:

- sutil
- elegante
- quase imperceptível
- sem prejudicar a leitura

## Evitar

- textura pesada
- fundo poluído
- ruído forte demais
- imagem de baixa qualidade
- contraste que atrapalha texto

---

# 01.24 — Sistema de malha digital

A malha digital é um dos elementos principais da experiência.

## Função visual

Representar:

- conexão
- inteligência
- nascimento da ideia
- estrutura
- tecnologia
- transformação
- crescimento
- marca viva

## Uso futuro

A malha aparecerá em:

- loading
- Hero
- seções de transformação
- CTA final

## Nesta fase

A Fase 01 deve apenas definir regras visuais e preparar a pasta/assets.

A implementação animada completa acontecerá em fases posteriores.

## Regras

A malha deve ser:

- dourada ou champagne
- sutil
- orgânica
- elegante
- fluida
- tecnológica sem clichê

## Evitar

- circuitos óbvios
- robôs
- elementos cyberpunk
- neon exagerado
- linhas muito brilhantes
- visual de banco de imagens tecnológico genérico

---

# 01.25 — Monograma LK

O monograma LK deve ser tratado como símbolo premium.

## Uso

Pode aparecer em:

- loading
- favicon
- footer
- marca d’água
- transições
- contact section
- elementos institucionais

## Regras

- usar com respiro
- não repetir demais
- não distorcer
- não aplicar efeitos exagerados
- não usar como decoração sem propósito

## Função simbólica

O monograma representa:

- origem
- assinatura
- autoridade
- identidade
- nascimento da marca
- presença institucional

---

# 01.26 — Estilos globais

A Fase 01 deve estabelecer estilos globais básicos.

## Body

Deve ter:

- fundo deep green
- cor de texto clara
- antialiasing
- fonte padrão Satoshi ou fallback
- scroll suave se adequado

## Seleção de texto

A seleção pode usar:

- fundo dourado
- texto verde profundo

## Scrollbar

A scrollbar pode ser estilizada de forma sutil, se necessário.

## Links

Links devem ter:

- cor clara ou dourada
- hover refinado
- transição suave

---

# 01.27 — Acessibilidade visual

Mesmo sendo premium e escuro, o site precisa ser legível.

## Verificar

- contraste de texto
- tamanho mínimo de fonte
- foco em botões
- foco em links
- labels legíveis
- hover não deve ser a única indicação interativa
- elementos dourados não devem prejudicar contraste

## Regra

Visual premium não pode sacrificar leitura.

---

# 01.28 — Estados interativos base

Definir estados para:

- hover
- active
- focus
- disabled

## Hover

Deve ser sutil e elegante.

## Focus

Deve ser visível para acessibilidade.

## Disabled

Deve parecer inativo sem desaparecer totalmente.

## Active

Deve indicar seleção ou clique sem criar ruído visual.

---

# 01.29 — Componentes base da Fase 01

Nesta fase, os seguintes componentes base devem ser criados ou planejados:

```txt
Button
Container
SectionLabel
SectionTitle
GoldDivider
Card
IconWrapper
```

---

# 01.30 — Button

## Função

Padronizar todos os botões do site.

## Variantes

```txt
primary
secondary
ghost
```

## Regras

- usar Satoshi
- manter espaçamento confortável
- ter hover elegante
- respeitar cores da marca
- ser responsivo
- ter foco acessível

---

# 01.31 — Container

## Função

Controlar largura e padding do conteúdo.

## Regras

- centralizar conteúdo
- aplicar max-width consistente
- usar padding lateral responsivo
- evitar conteúdo colado na borda

---

# 01.32 — SectionLabel

## Função

Criar etiquetas pequenas para seções.

Exemplo:

```txt
01 — THE SPARK
```

## Visual

- Satoshi
- uppercase
- letter spacing
- dourado ou texto suave
- tamanho pequeno

---

# 01.33 — SectionTitle

## Função

Criar títulos grandes e consistentes.

## Visual

- Playfair Display
- tamanho forte
- line-height elegante
- cor clara ou dourada pontual
- espaçamento adequado

---

# 01.34 — GoldDivider

## Função

Criar divisores finos alinhados à identidade.

## Visual

- linha de 1px
- dourado transparente
- pode ser horizontal ou vertical
- deve ter uso editorial

---

# 01.35 — Card

## Função

Padronizar blocos de conteúdo.

## Visual

- fundo emerald green
- borda dourada sutil
- padding generoso
- hover refinado
- texto claro
- estrutura modular

---

# 01.36 — IconWrapper

## Função

Padronizar área de ícones.

## Visual

- ícone linear dourado
- círculo ou quadrado sutil
- borda fina opcional
- tamanho consistente

---

# 01.37 — Responsividade visual inicial

Mesmo na Fase 01, os componentes base devem considerar responsividade.

## Regras

- botões devem funcionar em mobile
- cards devem se adaptar
- títulos devem reduzir corretamente
- containers devem ter padding mobile
- textos não devem quebrar mal

---

# 01.38 — O que a Fase 01 não deve fazer

A Fase 01 não deve construir ainda:

- loading final
- Hero completo
- sistema bilíngue completo
- seções narrativas completas
- formulário completo
- animações complexas
- deploy
- SEO final

Ela deve focar no sistema visual técnico.

---

# 01.39 — Auditoria visual da Fase 01

Ao final da Fase 01, verificar:

## Cores

- As cores oficiais foram configuradas?
- O fundo principal usa deep green?
- O dourado está controlado?
- Não existem cores aleatórias?

## Tipografia

- Playfair Display está aplicada nos títulos?
- Satoshi ou fallback está aplicado ao corpo?
- A hierarquia está clara?
- Os textos são legíveis?

## Componentes

- Botões estão padronizados?
- Cards estão padronizados?
- Labels estão padronizadas?
- Divisores estão consistentes?
- Containers estão funcionando?

## Identidade

- A interface começa a parecer Lyken?
- O visual parece premium?
- O visual parece tecnológico?
- O visual parece sofisticado?
- O visual evita aparência de template?

---

# 01.40 — Critérios oficiais de aprovação

A Fase 01 só pode ser considerada concluída quando todos os critérios abaixo forem verdadeiros:

## Paleta

- As cores oficiais estão configuradas.
- Não há uso de cores aleatórias.
- O fundo principal usa `#0B1F1A`.
- O dourado é usado como acento, não como excesso.

## Tipografia

- Playfair Display está configurada ou planejada corretamente.
- Satoshi está configurada ou existe fallback documentado.
- Títulos e corpo de texto têm hierarquia clara.
- A leitura é confortável.

## Componentes

- Button existe ou está definido.
- Container existe ou está definido.
- SectionLabel existe ou está definido.
- SectionTitle existe ou está definido.
- GoldDivider existe ou está definido.
- Card existe ou está definido.

## Estilo global

- O body tem fundo correto.
- O texto base é legível.
- O estilo global está limpo.
- Não há CSS confuso ou excesso de estilos soltos.

## Branding

- O projeto começa a refletir a identidade da Lyken.
- O visual parece premium, escuro, sofisticado e tecnológico.
- Não parece startup genérica.
- Não parece agência comum.
- Não parece arquitetura, construção ou imobiliária.

---

# 01.41 — Resultado esperado da Fase 01

Ao final desta fase, o projeto deve ter uma base visual clara.

Resultado esperado:

```txt
Paleta configurada
Fontes definidas
Hierarquia visual criada
Componentes base definidos
Textura visual planejada
Sistema de cards iniciado
Sistema de botões iniciado
Containers padronizados
Estilo global limpo
Identidade visual começando a aparecer
```

A partir desse ponto, o projeto estará pronto para avançar para:

```txt
02-bilingual-system.md
```

---

# 01.42 — Pergunta de validação da Fase 01

Antes de aprovar esta fase, responder:

```txt
O sistema visual técnico já traduz a identidade premium, tecnológica e sofisticada da Lyken?
```

Se a resposta for sim, a Fase 01 está aprovada.

Se a resposta for não, revisar cores, tipografia, espaçamentos, componentes e textura antes de continuar.
