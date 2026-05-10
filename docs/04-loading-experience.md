# 04 — Loading Experience

## Lyken Agency Website

## Objetivo desta fase

A Fase 04 tem como objetivo criar a experiência de carregamento do site da Lyken Agency.

O loading não deve ser um elemento técnico genérico.  
Ele deve ser a primeira manifestação da marca.

A experiência de carregamento deve comunicar:

```txt
nascimento
ideia
conexão
estrutura
identidade
transformação
entrada no site
```

O usuário deve sentir que está entrando em um sistema vivo, premium e tecnológico.

---

# 04.1 — Conceito central do loading

## Conceito

```txt
From idea to living brand.
```

## Português

```txt
Da ideia à marca viva.
```

## Interpretação visual

A animação deve representar uma ideia nascendo em um espaço vazio e se transformando em uma estrutura digital viva.

Sequência conceitual:

```txt
vazio → ponto de luz → conexão → malha → monograma → frase → Hero
```

---

# 04.2 — Função estratégica do loading

O loading deve:

- reforçar a identidade da Lyken antes do conteúdo aparecer
- mostrar que o site não é estático
- comunicar nascimento e transformação
- criar expectativa premium
- conectar o branding visual à experiência digital

O loading não deve:

- atrasar o usuário
- parecer enfeite sem propósito
- usar spinner genérico
- ter animação excessiva
- prejudicar performance

---

# 04.3 — Duração recomendada

Tempo ideal:

```txt
1.5s a 3s
```

## Regra

A animação deve ser longa o suficiente para ser percebida, mas curta o suficiente para não incomodar.

Se o site carregar antes, a animação ainda pode completar uma transição mínima elegante.  
Se o site demorar, a experiência não deve ficar presa em uma animação pesada.

---

# 04.4 — Background do loading

O fundo deve usar:

```txt
#0B1F1A
```

Com:

- textura fina
- vinheta suave
- profundidade escura
- brilho sutil no centro
- sem branco
- sem preto puro

## Sensação

O fundo deve parecer:

```txt
silencioso
premium
profundo
sofisticado
tecnológico
```

---

# 04.5 — Sequência visual detalhada

## Etapa 1 — Empty Premium Space

Tela em deep green escuro.

Nada aparece imediatamente.

Objetivo:

- criar silêncio
- preparar a atenção
- evitar entrada brusca

Duração aproximada:

```txt
0.2s a 0.4s
```

---

## Etapa 2 — First Spark

Um pequeno ponto dourado aparece no centro.

Cor:

```txt
#D4B47A
```

Significado:

```txt
a primeira ideia
a possibilidade inicial
o nascimento
```

O ponto deve ter brilho sutil, não neon.

---

## Etapa 3 — Connection

Outros pontos aparecem próximos.

Linhas finas começam a conectar os pontos.

Significado:

```txt
estratégia
estrutura
direção
conexão
```

As linhas devem parecer desenhadas suavemente.

---

## Etapa 4 — Living Mesh

Os pontos e linhas formam uma pequena malha digital.

A malha deve:

- ondular levemente
- parecer viva
- ser elegante
- ter movimento mínimo
- remeter ao branding visual

Significado:

```txt
inteligência
sistema
tecnologia
marca em formação
```

---

## Etapa 5 — LK Monogram Reveal

O monograma LK aparece.

Visual:

- dourado champagne
- revelado por luz
- sem explosão
- sem rotação exagerada
- com entrada suave

Significado:

```txt
identidade
assinatura
origem da marca
```

---

## Etapa 6 — Phrase Reveal

A frase aparece abaixo ou próxima ao monograma.

EN:

```txt
From idea to living brand.
```

PT:

```txt
Da ideia à marca viva.
```

Visual:

- Satoshi ou Playfair conforme decisão visual
- pequeno/médio
- elegante
- com espaçamento refinado

---

## Etapa 7 — Transition to Hero

A malha se expande ou se dissolve suavemente e vira parte do Hero.

A transição deve parecer contínua.

## Regra

O loading não deve simplesmente sumir.  
Ele deve se transformar na entrada do site.

---

# 04.6 — Elementos obrigatórios

O loading deve conter:

- deep green background
- textura premium
- ponto dourado inicial
- linhas ou partículas
- malha digital sutil
- monograma LK
- frase bilíngue
- transição suave para o Hero

---

# 04.7 — Elementos proibidos

Não usar:

- spinner genérico
- barra de progresso comum
- loading branco
- glitch pesado
- neon exagerado
- robô
- circuitos óbvios
- animação barulhenta
- explosão visual
- rotação de logo exagerada
- efeito infantil

---

# 04.8 — Motion style

A animação deve ser:

```txt
suave
cinematográfica
controlada
sofisticada
fluida
minimalista
orgânica
```

Evitar:

```txt
rápida demais
caótica
saltitante
pesada
agressiva
barulhenta
```

---

# 04.9 — Framer Motion

Usar Framer Motion para controlar:

- fade in
- scale
- opacity
- stagger
- transitions
- exit animation
- reveal
- timing

## Regra

Não criar animações complexas demais se elas prejudicarem performance.

---

# 04.10 — Performance

O loading deve ser leve.

Verificar:

- não usar vídeo pesado
- não carregar imagem gigante
- não criar partículas em excesso
- não travar mobile
- não bloquear interação depois da saída
- não aumentar muito o tempo de carregamento real

## Regra

A experiência deve parecer premium, mas tecnicamente eficiente.

---

# 04.11 — Mobile behavior

No mobile, o loading deve:

- manter legibilidade
- centralizar elementos
- reduzir quantidade de partículas se necessário
- não cortar monograma
- não ficar pequeno demais
- não travar

## Regra

A versão mobile deve parecer tão refinada quanto a desktop.

---

# 04.12 — Reduced motion

Considerar usuários que preferem menos movimento.

Se possível, respeitar:

```txt
prefers-reduced-motion
```

Para esses usuários:

- reduzir animações
- manter transição simples
- não prejudicar acesso ao conteúdo

---

# 04.13 — Estado de saída

Ao terminar, o loading deve:

- desaparecer suavemente
- liberar interação
- remover overlay
- não bloquear scroll
- não deixar elementos invisíveis acima do site
- não permanecer no DOM de forma problemática

---

# 04.14 — Relação com o Hero

O loading deve estar conectado ao Hero visualmente.

## Continuidade desejada

- mesma cor de fundo
- mesma textura
- mesma malha ou energia visual
- transição fluida
- sem corte brusco

## Objetivo

O usuário deve sentir que o loading abriu a porta para o Hero.

---

# 04.15 — Conteúdo bilíngue do loading

O texto do loading deve usar o idioma ativo.

Se não houver idioma definido:

```txt
usar English
```

## EN

```txt
From idea to living brand.
```

## PT

```txt
Da ideia à marca viva.
```

---

# 04.16 — O que a Fase 04 não deve fazer

A Fase 04 não deve construir:

- Hero completo
- todas as seções
- formulário
- SEO
- deploy
- sistema de serviços
- processo completo

Ela deve focar exclusivamente no loading e na transição para o site.

---

# 04.17 — Auditoria da Fase 04

Verificar:

## Conceito

- comunica nascimento?
- comunica transformação?
- parece Lyken?
- parece premium?

## Visual

- usa deep green?
- usa dourado corretamente?
- tem textura?
- tem monograma?
- tem malha sutil?

## Movimento

- é suave?
- é rápido o suficiente?
- não incomoda?
- não trava?

## Técnica

- funciona em mobile?
- não quebra layout?
- não bloqueia scroll depois?
- não causa erro no console?

---

# 04.18 — Critérios oficiais de aprovação

A Fase 04 só pode ser aprovada quando:

- o loading não é genérico
- o loading comunica a ideia da Lyken
- a animação tem duração adequada
- o monograma aparece corretamente
- a frase aparece no idioma correto
- a transição para o Hero é suave
- o loading funciona em mobile
- não há travamento
- não há erro no console
- a experiência parece premium e tecnológica

---

# 04.19 — Resultado esperado da Fase 04

Resultado esperado:

```txt
Loading conceitual criado
Animação de nascimento implementada
Ponto dourado inicial
Linhas/partículas conectadas
Malha digital sutil
Monograma LK revelado
Frase bilíngue exibida
Transição para Hero preparada
Performance preservada
```

A partir desse ponto, o projeto poderá avançar para:

```txt
05-hero-section.md
```

---

# 04.20 — Pergunta de validação da Fase 04

Antes de aprovar esta fase, responder:

```txt
O carregamento do site já comunica a experiência de nascimento, transformação e identidade da Lyken?
```

Se a resposta for sim, a Fase 04 está aprovada.

Se a resposta for não, revisar conceito, timing, malha, monograma e transição antes de continuar.
