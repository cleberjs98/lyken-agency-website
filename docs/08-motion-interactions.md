# 08 — Motion & Interactions

## Lyken Agency Website

## Objetivo desta fase

A Fase 08 tem como objetivo aplicar movimento e interações ao site de forma estratégica.

O site da Lyken não deve ser parado.  
Mas também não deve ser exagerado.

O movimento deve comunicar:

```txt
nascimento
conexão
estrutura
transformação
inteligência
crescimento
```

---

# 08.1 — Princípio principal

Toda animação deve ter propósito.

Antes de criar uma animação, perguntar:

```txt
Esse movimento ajuda a contar a transformação da Lyken?
```

Se não ajudar, não usar.

---

# 08.2 — Tipos de movimento permitidos

Usar:

- fade suave
- reveal por scroll
- linhas sendo desenhadas
- hover refinado
- malha com movimento lento
- pontos de luz discretos
- cards elevando levemente
- transições entre seções
- entrada escalonada de elementos

Evitar:

- bounce
- glitch pesado
- neon piscando
- rotação exagerada
- objetos voando
- movimento rápido demais
- parallax agressivo
- excesso de partículas

---

# 08.3 — Framer Motion

Framer Motion deve ser a ferramenta principal para:

- page loader
- hero reveal
- scroll reveal
- hover states
- animated lines
- section transitions
- staggered animations

## Regra

Usar Framer Motion com consistência, não de forma aleatória em cada componente.

---

# 08.4 — Motion tokens

Definir padrões de timing.

## Duração curta

```txt
0.2s a 0.3s
```

Uso:

- hover
- botões
- pequenos estados

## Duração média

```txt
0.5s a 0.8s
```

Uso:

- cards
- textos
- seções pequenas

## Duração longa

```txt
1s a 1.5s
```

Uso:

- loading
- hero
- transições maiores

---

# 08.5 — Easing

Usar curvas suaves.

Direção:

```txt
easeOut
easeInOut
cubic-bezier refinado
```

Evitar animações lineares demais ou saltitantes.

---

# 08.6 — Scroll Reveal

Criar ou usar componente:

```txt
MotionReveal.jsx
```

## Função

Revelar elementos conforme entram na viewport.

## Regras

- entrada suave
- pequeno deslocamento vertical
- opacidade de 0 para 1
- delay controlado
- sem exagero

## Aplicar em

- section labels
- títulos
- descrições
- cards
- processo
- soluções
- CTA final

---

# 08.7 — Staggered Reveal

Usar stagger para listas.

Aplicar em:

- service cards
- process steps
- why Lyken points
- solution cards

## Regra

O stagger deve ser curto e elegante.

---

# 08.8 — Hover de botões

Botões devem ter hover premium.

Possibilidades:

- leve brilho dourado
- mudança de borda
- deslocamento mínimo
- preenchimento suave
- linha interna animada

Evitar:

- zoom forte
- sombra pesada
- cor neon
- bounce

---

# 08.9 — Hover de cards

Cards podem ter:

- elevação mínima
- borda mais luminosa
- ícone acendendo
- linha dourada aparecendo
- fundo com leve profundidade

## Regra

O card deve parecer mais vivo, não mais barulhento.

---

# 08.10 — Animated Lines

Criar ou planejar:

```txt
AnimatedLine.jsx
```

## Uso

- divisores
- timeline
- jornada
- process steps
- cards

## Comportamento

Linhas podem ser desenhadas quando entram na viewport.

---

# 08.11 — Digital Mesh Motion

A malha digital deve ter movimento lento.

## Função

Representar:

```txt
vida
fluxo
inteligência
conexão
transformação
```

## Aplicação

- loading
- hero
- journey
- CTA final

## Regras

- movimento mínimo
- não prejudicar leitura
- não travar mobile
- não parecer banco de imagem tecnológico

---

# 08.12 — Mouse Interaction

No desktop, alguns elementos podem reagir ao mouse.

## Aplicar em

- Hero mesh
- glow sutil
- cards selecionados

## Evitar no mobile

No mobile, evitar interações dependentes de mouse.

---

# 08.13 — Section Transitions

As seções devem se conectar visualmente.

Possibilidades:

- continuidade da malha
- linhas que atravessam seções
- fade de fundo
- mudança sutil de densidade visual

## Regra

Não fazer cada seção parecer um bloco isolado sem continuidade.

---

# 08.14 — Reduced Motion

Respeitar usuários com preferência por movimento reduzido.

Se possível:

```txt
prefers-reduced-motion
```

## Comportamento

- reduzir animações
- remover movimento contínuo pesado
- manter fades simples
- preservar conteúdo

---

# 08.15 — Performance de animações

Verificar:

- não animar propriedades pesadas sem necessidade
- preferir transform e opacity
- evitar muitos listeners
- não criar partículas excessivas
- testar mobile

---

# 08.16 — Acessibilidade

Movimento não deve:

- esconder informação
- depender de hover para conteúdo essencial
- causar confusão
- impedir navegação por teclado
- afetar leitura

---

# 08.17 — O que a Fase 08 não deve fazer

Não criar:

- conteúdo novo importante
- integração externa
- deploy final
- SEO completo

Foco:

```txt
movimento
interação
ritmo
microanimações
experiência viva
```

---

# 08.18 — Auditoria

Verificar:

- o site parece vivo?
- movimento tem propósito?
- há excesso?
- performance continua boa?
- mobile está fluido?
- reduced motion foi considerado?
- acessibilidade foi preservada?

---

# 08.19 — Critérios oficiais de aprovação

A Fase 08 só pode ser aprovada quando:

- scroll reveal funciona
- hovers estão refinados
- linhas animadas estão consistentes
- malha tem movimento sutil
- não há animação exagerada
- mobile continua fluido
- performance está aceitável
- acessibilidade não foi prejudicada

---

# 08.20 — Resultado esperado

```txt
Motion system aplicado
Scroll reveals configurados
Hovers premium criados
Linhas animadas aplicadas
Malha com movimento sutil
Transições refinadas
Mobile preservado
Performance validada
```

Próxima fase:

```txt
09-contact-conversion.md
```

---

# 08.21 — Pergunta de validação

```txt
As animações fazem o site parecer vivo, tecnológico e transformador sem perder elegância?
```

Se sim, aprovar.  
Se não, reduzir, ajustar ou remover movimentos.

---

# Nota de implementacao atual da Fase 08

Status: motion system implementado e aguardando nova auditoria visual.

Arquivos principais implementados:

- `src/components/motion/MotionReveal.jsx`
- `src/components/motion/AnimatedLine.jsx`
- `src/components/motion/DigitalMesh.jsx`
- `src/components/motion/LoadingExperience.jsx`
- `src/utils/motionTokens.js`
- `src/components/layout/MobileMenu.jsx`
- `src/components/layout/Navbar.jsx`

Estado atual:

- scroll reveal e staggered reveal aplicados nas secoes existentes;
- hovers premium aplicados em botoes/cards conforme padroes atuais;
- AnimatedLine e DigitalMesh disponiveis como componentes reutilizaveis;
- loading experience densa restaurada e refinada em timing/cor;
- Hero preservado conforme estado visual aprovado pelo usuario antes da correcao tecnica;
- menu mobile corrigido tecnicamente com scroll lock e foco basico;
- Contact permanece visual/preliminar e congelado para evolucao funcional ate Fase 09.

Guardrails para futuras correcoes:

- nao alterar `LoadingExperience.jsx` ou `Hero.jsx` durante correcoes tecnicas de menu;
- nao simplificar ou redesenhar o loading sem aprovacao visual explicita;
- nao modificar motion principal, layout, copy, cores, tipografia ou DigitalMesh em auditorias tecnicas pequenas;
- tratar Contact/Conversion somente na Fase 09.
