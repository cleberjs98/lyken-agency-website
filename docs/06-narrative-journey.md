# 06 — Narrative Journey

## Lyken Agency Website

## Objetivo desta fase

A Fase 06 tem como objetivo construir a jornada narrativa do site.

Essa jornada deve mostrar visualmente e conceitualmente como a Lyken transforma uma ideia em uma marca digital viva.

A sequência oficial é:

```txt
The Spark → The Structure → The Identity → The Digital Presence → The Intelligence → The Growth
```

Essa fase é essencial porque diferencia o site da Lyken de uma landing page comum.

---

# 06.1 — Princípio principal

O site não deve apenas listar serviços.  
Ele deve contar uma transformação.

Cada etapa da jornada deve responder:

```txt
O que está nascendo?
O que está sendo estruturado?
O que está ganhando identidade?
O que está entrando no digital?
O que está se tornando inteligente?
O que está crescendo?
```

---

# 06.2 — Estrutura técnica recomendada

Criar componentes separados:

```txt
src/components/sections/Journey.jsx
src/components/sections/TheSpark.jsx
src/components/sections/TheStructure.jsx
src/components/sections/TheIdentity.jsx
src/components/sections/DigitalPresence.jsx
src/components/sections/Intelligence.jsx
src/components/sections/Growth.jsx
```

Alternativa:

```txt
Journey.jsx
```

com dados mapeados a partir de um array.

## Recomendação

Se as seções tiverem layouts muito diferentes, usar componentes separados.  
Se forem parecidas, usar dados estruturados.

---

# 06.3 — Dados da jornada

Criar conteúdo em:

```txt
src/data/content/en.js
src/data/content/pt.js
```

ou estrutura equivalente.

Cada etapa deve ter:

```txt
id
eyebrow
title
description
visualConcept
keywords
```

---

# 06.4 — IDs das seções

Usar IDs estáveis:

```txt
spark
structure
identity
digital-presence
intelligence
growth
```

Não mudar IDs por idioma.

---

# 06.5 — The Spark

## Função

Representar o nascimento da ideia.

## Mensagem EN

```txt
Every brand begins as a possibility.
```

## Mensagem PT

```txt
Toda marca começa como uma possibilidade.
```

## Descrição conceitual

Esta seção mostra que todo negócio começa como uma visão, uma intenção, uma ideia ainda não estruturada.

## Visual

- muito espaço vazio
- ponto dourado isolado
- fundo deep green
- movimento de respiração sutil
- baixa densidade de elementos

## Motion

- ponto aparece lentamente
- brilho pulsa de forma mínima
- texto entra com suavidade

## Evitar

- muitos elementos
- cards demais
- excesso de texto
- animação forte

---

# 06.6 — The Structure

## Função

Mostrar que a estratégia organiza a possibilidade.

## Mensagem EN

```txt
Strategy transforms possibility into direction.
```

## Mensagem PT

```txt
A estratégia transforma possibilidade em direção.
```

## Visual

- linhas finas surgindo
- grid editorial se formando
- pontos conectados
- blocos estruturais

## Motion

- linhas desenhadas progressivamente
- módulos aparecem em sequência
- sensação de sistema nascendo

## Conceitos

```txt
clareza
método
direção
posicionamento
estrutura
```

---

# 06.7 — The Identity

## Função

Mostrar que a marca ganha forma visual e verbal.

## Mensagem EN

```txt
A brand becomes real when it can be seen, understood and remembered.
```

## Mensagem PT

```txt
Uma marca se torna real quando pode ser vista, compreendida e lembrada.
```

## Visual

- monograma LK como elemento de apoio
- tipografia Playfair em destaque
- módulos de marca
- detalhes dourados
- composição editorial

## Conceitos

```txt
nome
posicionamento
identidade visual
tom de voz
memória de marca
sistema
```

## Motion

- monograma aparece como marca d’água
- módulos entram de forma precisa
- linhas conectam blocos de identidade

---

# 06.8 — The Digital Presence

## Função

Mostrar que a identidade se transforma em experiência digital.

## Mensagem EN

```txt
We transform brands into digital experiences.
```

## Mensagem PT

```txt
Transformamos marcas em experiências digitais.
```

## Visual

- malha digital mais presente
- cards de website, app, social, e-commerce
- módulos com aparência de interface
- movimento mais tecnológico

## Conceitos

```txt
website
landing page
app
e-commerce
social presence
digital experience
```

## Motion

- cards revelam em sequência
- malha se expande
- hover refinado em módulos digitais

---

# 06.9 — The Intelligence

## Função

Mostrar o papel da tecnologia, automação e IA.

## Mensagem EN

```txt
Technology turns presence into performance.
```

## Mensagem PT

```txt
A tecnologia transforma presença em performance.
```

## Visual

- pontos conectados
- fluxos de dados abstratos
- painéis inteligentes
- movimento sutil de rede
- sem robôs ou clichês

## Conceitos

```txt
AI
automation
workflow
systems
data
performance
```

## Motion

- linhas conectam nós
- pequenos pontos se movem lentamente
- módulos acendem ao entrar na viewport

---

# 06.10 — The Growth

## Função

Fechar a jornada mostrando evolução.

## Mensagem EN

```txt
A living brand evolves, adapts and grows.
```

## Mensagem PT

```txt
Uma marca viva evolui, se adapta e cresce.
```

## Visual

- malha expandida
- mais luz no layout
- sensação de abertura
- CTA de continuidade
- composição mais ampla

## Conceitos

```txt
growth
evolution
adaptation
scale
continuity
```

## Motion

- malha se abre
- linha da jornada chega ao ponto final
- CTA aparece com força elegante

---

# 06.11 — Linha narrativa visual

A jornada pode usar uma linha visual contínua.

Possibilidades:

- linha dourada vertical
- linha horizontal em desktop
- pontos conectados por scroll
- timeline editorial
- mapa abstrato de transformação

## Regra

A linha deve guiar o usuário sem parecer uma timeline genérica.

---

# 06.12 — Numeração editorial

Cada etapa pode ter numeração:

```txt
01 — THE SPARK
02 — THE STRUCTURE
03 — THE IDENTITY
04 — THE DIGITAL PRESENCE
05 — THE INTELLIGENCE
06 — THE GROWTH
```

Português:

```txt
01 — O COMEÇO
02 — A ESTRUTURA
03 — A IDENTIDADE
04 — A PRESENÇA DIGITAL
05 — A INTELIGÊNCIA
06 — O CRESCIMENTO
```

## Visual

- Satoshi uppercase
- letter spacing
- dourado discreto
- tamanho pequeno

---

# 06.13 — Layout recomendado

Cada etapa pode usar:

```txt
texto de um lado
visual abstrato do outro
```

Alternando lados em desktop.

No mobile:

```txt
visual acima
texto abaixo
```

ou texto antes do visual, dependendo da leitura.

---

# 06.14 — Ritmo visual

A jornada deve ter ritmo.

Evitar que todas as seções pareçam iguais.

## Variações possíveis

- Spark: minimalista
- Structure: grid
- Identity: editorial
- Digital Presence: interface
- Intelligence: rede
- Growth: expansão

---

# 06.15 — Copy secundária

Cada seção pode ter uma descrição curta, mas não deve ficar textual demais.

## Regra

Preferir:

```txt
1 título forte
1 descrição curta
3 palavras-chave ou microblocos
```

Evitar parágrafos longos.

---

# 06.16 — Motion da jornada

Usar motion com propósito:

- reveal por scroll
- linhas sendo desenhadas
- pontos acendendo
- malha expandindo
- cards surgindo por camada

## Regra

Cada movimento deve reforçar a etapa.

---

# 06.17 — Responsividade

No mobile:

- não usar animações pesadas
- reduzir malha
- manter textos legíveis
- manter sequência clara
- evitar excesso de altura
- evitar scroll cansativo

---

# 06.18 — Acessibilidade

A jornada deve fazer sentido mesmo sem animações.

## Regra

Se animações forem reduzidas, o conteúdo ainda deve ser compreensível.

---

# 06.19 — O que a Fase 06 não deve fazer

A Fase 06 não deve construir:

- seção completa de serviços
- formulário final
- SEO final
- deploy
- integração externa

Ela deve focar na narrativa.

---

# 06.20 — Auditoria da Fase 06

Verificar:

- a jornada está clara?
- cada etapa tem função?
- o usuário entende a transformação?
- o visual evolui de etapa para etapa?
- textos são curtos?
- animações têm sentido?
- mobile mantém fluidez?
- não parece uma lista genérica?

---

# 06.21 — Critérios oficiais de aprovação

A Fase 06 só pode ser aprovada quando:

- as seis etapas existem
- os textos estão bilíngues
- a sequência narrativa é clara
- cada etapa tem visual próprio
- o movimento representa transformação
- a jornada funciona no mobile
- não há excesso de texto
- não há animação sem propósito
- o site passa a sensação de marca viva

---

# 06.22 — Resultado esperado

```txt
Jornada narrativa criada
Seis etapas estruturadas
Conteúdo bilíngue aplicado
Linha ou ritmo visual definido
Motion de transformação aplicado
Responsividade validada
Experiência não genérica
```

Próxima fase:

```txt
07-services-solutions.md
```

---

# 06.23 — Pergunta de validação

```txt
A jornada faz o visitante sentir a transformação de uma ideia em uma marca digital viva?
```

Se sim, aprovar.  
Se não, revisar estrutura narrativa, visual e motion.
