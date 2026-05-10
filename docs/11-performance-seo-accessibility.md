# 11 — Performance, SEO & Accessibility

## Lyken Agency Website

## Objetivo desta fase

A Fase 11 tem como objetivo preparar o site da Lyken para ser rápido, encontrável e utilizável.

Esta fase cobre:

- performance
- SEO básico
- metadata
- acessibilidade
- semântica
- boas práticas técnicas

---

# 11.1 — Princípio principal

Um site premium não pode ser apenas bonito.

Ele precisa ser:

```txt
rápido
estável
legível
acessível
bem estruturado
preparado para buscadores
```

---

# 11.2 — Performance

Verificar:

- tamanho de assets
- imagens otimizadas
- animações leves
- dependências necessárias
- build limpo
- carregamento inicial
- performance mobile

---

# 11.3 — Imagens

Regras:

- comprimir imagens
- usar formatos adequados
- evitar imagens gigantes
- usar SVG quando fizer sentido
- não usar assets pesados para textura simples

---

# 11.4 — Animações

Animações devem usar preferencialmente:

```txt
transform
opacity
```

Evitar animar:

```txt
width
height
top
left
box-shadow pesado
filter excessivo
```

---

# 11.5 — Dependências

Verificar se todas são necessárias.

Stack esperado:

```txt
React
Vite
Tailwind
Framer Motion
Lucide React
```

Evitar bibliotecas extras sem necessidade.

---

# 11.6 — SEO básico

Incluir:

- title
- meta description
- heading structure
- alt text
- semantic HTML
- Open Graph básico
- favicon
- idioma do documento

---

# 11.7 — Titles bilíngues

EN:

```txt
Lyken Agency — Intelligent Strategy. Unforgettable Brands.
```

PT:

```txt
Lyken Agency — Estratégia Inteligente. Marcas Inesquecíveis.
```

---

# 11.8 — Meta descriptions

EN:

```txt
Lyken Agency combines branding, digital marketing, technology and AI-powered solutions to help businesses build, position and grow.
```

PT:

```txt
A Lyken Agency une branding, marketing digital, tecnologia e soluções com inteligência artificial para ajudar negócios a construir, posicionar e crescer.
```

---

# 11.9 — Heading structure

Usar estrutura semântica:

```txt
h1: Hero headline
h2: main section titles
h3: cards and subsections
```

## Regra

Apenas um H1 principal.

---

# 11.10 — Semantic HTML

Usar:

```txt
header
nav
main
section
footer
form
button
label
```

Evitar excesso de `div` sem necessidade quando houver elemento semântico adequado.

---

# 11.11 — Alt text

Imagens importantes devem ter alt text.

## Regra

Elementos puramente decorativos podem ter alt vazio ou serem background.

---

# 11.12 — Acessibilidade visual

Verificar:

- contraste de texto
- tamanho de fonte
- foco visível
- links distinguíveis
- botões claros
- labels de formulário

---

# 11.13 — Keyboard navigation

O usuário deve conseguir navegar usando teclado.

Verificar:

- links focáveis
- botões focáveis
- switcher focável
- formulário focável
- menu mobile acessível

---

# 11.14 — Focus states

Todo elemento interativo deve ter estado de foco visível.

O foco pode usar:

- borda dourada
- outline suave
- glow controlado

---

# 11.15 — Form accessibility

Campos devem ter:

- label associado
- tipo correto
- mensagens claras
- indicação de erro
- ordem lógica

---

# 11.16 — Reduced motion

Respeitar ou considerar:

```txt
prefers-reduced-motion
```

Reduzir animações quando necessário.

---

# 11.17 — Console

Verificar:

- sem erros
- sem warnings relevantes
- sem logs desnecessários
- sem imports quebrados

---

# 11.18 — Build

Rodar build local.

Verificar:

```txt
npm run build
```

Deve concluir sem erro.

---

# 11.19 — Lighthouse / auditoria

Quando possível, verificar:

- Performance
- Accessibility
- Best Practices
- SEO

Não precisa ser perfeito, mas não deve ter problemas críticos.

---

# 11.20 — O que a Fase 11 não deve fazer

Não precisa criar:

- SEO avançado multi-rotas
- blog
- schema complexo
- analytics avançado
- backend

Foco:

```txt
base sólida
SEO básico
performance
acessibilidade essencial
```

---

# 11.21 — Auditoria

Verificar:

- site carrega rápido?
- build funciona?
- headings estão corretos?
- contraste está bom?
- teclado funciona?
- formulário é acessível?
- imagens têm alt?
- metadata existe?
- animações não pesam?

---

# 11.22 — Critérios oficiais de aprovação

A Fase 11 só pode ser aprovada quando:

- build passa
- console está limpo
- SEO básico existe
- H1/H2/H3 fazem sentido
- contraste está aceitável
- navegação por teclado funciona
- formulário tem labels
- imagens importantes têm alt
- animações não prejudicam performance
- mobile continua rápido

---

# 11.23 — Resultado esperado

```txt
Performance revisada
SEO básico aplicado
Metadata criada
Semântica ajustada
Acessibilidade essencial validada
Build sem erro
Console limpo
```

Próxima fase:

```txt
12-deploy.md
```

---

# 11.24 — Pergunta de validação

```txt
O site está rápido, estruturado, acessível e preparado para ser encontrado?
```

Se sim, aprovar.  
Se não, corrigir antes do deploy.
