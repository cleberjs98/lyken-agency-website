# 03 — Layout & Navigation

## Lyken Agency Website

## Objetivo desta fase

A Fase 03 tem como objetivo construir a estrutura base do layout do site da Lyken Agency.

Esta fase deve criar o esqueleto principal do site:

- App shell
- Navbar
- Menu mobile
- Footer
- Containers
- Grid base
- Navegação por âncoras
- Estrutura responsiva inicial

A Fase 03 ainda não deve construir o Hero final, loading final ou todas as seções completas.  
Ela deve preparar o espaço onde essas seções serão inseridas.

---

# 03.1 — Princípio da fase

A estrutura deve ser:

```txt
clara
modular
responsiva
premium
organizada
fácil de auditar
fácil de expandir
```

O objetivo é evitar um projeto onde cada seção inventa sua própria largura, espaçamento e navegação.

---

# 03.2 — App Shell

O App Shell é a estrutura principal da página.

Estrutura recomendada:

```txt
Layout
  Navbar
  Main
    Sections
  Footer
```

## Regras

- Navbar deve ficar no topo.
- Main deve conter todas as seções.
- Footer deve fechar a experiência.
- O layout deve ser responsivo desde o início.
- A estrutura deve permitir rolagem suave entre seções.

---

# 03.3 — Componente Layout

Criar ou planejar:

```txt
src/components/layout/Layout.jsx
```

## Função

O Layout deve centralizar a estrutura base:

- Navbar
- conteúdo principal
- Footer
- fundo global se necessário
- wrappers principais

## Regra

Não colocar lógica específica de seções dentro do Layout.

O Layout deve ser estrutural, não narrativo.

---

# 03.4 — Navbar

Criar ou planejar:

```txt
src/components/layout/Navbar.jsx
```

## Objetivo

A Navbar deve orientar o usuário sem roubar atenção da experiência visual.

Ela deve parecer:

- premium
- discreta
- elegante
- tecnológica
- editorial
- clara

---

# 03.5 — Elementos da Navbar

A Navbar deve conter:

```txt
Logo area
Navigation links
Language switcher
Primary CTA
Mobile menu trigger
```

## Desktop

No desktop, a Navbar deve apresentar:

- logo à esquerda
- links ao centro ou à direita
- EN/PT
- CTA “Start a Project”

## Mobile

No mobile, a Navbar deve apresentar:

- logo à esquerda
- menu button à direita
- menu expandido com links
- EN/PT dentro do menu
- CTA dentro do menu

---

# 03.6 — Logo area

A área do logo deve aceitar:

- logo horizontal
- monograma LK
- texto Lyken Agency
- versão temporária em texto, se o arquivo final ainda não estiver disponível

## Regra

O logo não deve ser distorcido.

Evitar:

```txt
logo esticado
logo com sombra pesada
logo pequeno demais
logo grande demais
logo em cor errada
```

---

# 03.7 — Links de navegação

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

## Targets recomendados

```txt
#about
#services
#process
#solutions
#contact
```

## Regra

Labels mudam com o idioma.  
Targets permanecem estáveis.

---

# 03.8 — CTA da Navbar

## English

```txt
Start a Project
```

## Português

```txt
Iniciar um Projeto
```

## Comportamento

O CTA deve levar para:

```txt
#contact
```

## Visual

- botão premium
- dourado ou borda dourada
- hover sutil
- legível
- sem exagero

---

# 03.9 — Language Switcher na Navbar

O switcher deve aparecer como:

```txt
EN / PT
```

## Regras

- idioma ativo deve ser indicado
- não deve ocupar muito espaço
- deve ser clicável
- deve ter foco acessível
- deve funcionar no mobile

---

# 03.10 — Navbar visual behavior

A Navbar pode ter comportamento refinado.

Possibilidades:

- fundo transparente no topo
- fundo deep green com blur ao rolar
- linha dourada fina após scroll
- leve redução de altura ao scroll

## Regra

Não exagerar.

A Navbar deve apoiar a experiência, não competir com o Hero.

---

# 03.11 — Navbar sticky

A Navbar pode ser sticky.

## Recomendação

Usar:

```txt
position: sticky
top: 0
```

ou comportamento equivalente.

## Regras

- não deve cobrir conteúdo importante
- deve funcionar em mobile
- deve manter legibilidade
- deve ter z-index controlado

---

# 03.12 — Mobile Menu

Criar ou planejar:

```txt
src/components/layout/MobileMenu.jsx
```

## Elementos

- links principais
- idioma EN/PT
- CTA
- fechamento claro
- fundo deep green
- bordas/linhas douradas sutis

## Comportamento

O menu deve:

- abrir suavemente
- fechar ao clicar em link
- fechar ao clicar fora, se possível
- não bloquear permanentemente o scroll
- ser acessível por teclado

---

# 03.13 — Main Content

A área principal deve conter as seções futuras.

Estrutura conceitual:

```txt
main
  section#hero
  section#about
  section#services
  section#process
  section#solutions
  section#contact
```

## Regra

Cada seção deve ter um `id` claro.

Esses IDs serão usados pela navegação.

---

# 03.14 — IDs das seções

IDs recomendados:

```txt
hero
about
journey
services
process
solutions
why-lyken
contact
```

## Regras

- usar lowercase
- usar hífen se necessário
- não usar acentos
- não mudar IDs conforme idioma
- não duplicar IDs

---

# 03.15 — Footer

Criar ou planejar:

```txt
src/components/layout/Footer.jsx
```

## Objetivo

O Footer deve fechar a experiência de forma premium e institucional.

Deve reforçar:

- marca
- tagline
- navegação
- contato
- presença digital
- assinatura visual

---

# 03.16 — Elementos do Footer

O Footer deve conter:

- logo
- tagline
- links de navegação
- social placeholders
- contato
- linha divisória dourada
- monograma LK discreto
- copyright

## Tagline EN

```txt
Intelligent Strategy. Unforgettable Brands.
```

## Tagline PT

```txt
Estratégia Inteligente. Marcas Inesquecíveis.
```

---

# 03.17 — Footer visual direction

O Footer deve usar:

- fundo deep green
- textura sutil
- linhas douradas finas
- texto claro suave
- dourado para detalhes
- monograma como marca d’água discreta

## Evitar

- footer branco
- excesso de links
- muitos ícones sociais
- visual genérico
- poluição visual

---

# 03.18 — Container System

Criar ou usar componente:

```txt
src/components/common/Container.jsx
```

## Função

Padronizar largura e padding do conteúdo.

## Regras

- centralizar conteúdo
- max-width consistente
- padding lateral responsivo
- evitar conteúdo colado nas bordas

## Direção

```txt
max-width: 1200px a 1320px
padding mobile: 20px a 24px
padding tablet: 32px
padding desktop: 48px
```

---

# 03.19 — Section Spacing

Criar padrão para espaçamento vertical das seções.

## Desktop

```txt
padding-top: 96px a 128px
padding-bottom: 96px a 128px
```

## Tablet

```txt
padding-top: 80px
padding-bottom: 80px
```

## Mobile

```txt
padding-top: 64px
padding-bottom: 64px
```

## Regra

O site deve respirar.

---

# 03.20 — Grid Base

A estrutura deve suportar grids.

## Desktop

```txt
12 columns
```

## Tablet

```txt
6 columns
```

## Mobile

```txt
1 column
```

ou 2 colunas apenas quando realmente fizer sentido.

---

# 03.21 — Placeholder Sections

Nesta fase, podem ser criadas seções temporárias com nomes.

Exemplo:

```txt
Hero Placeholder
About Placeholder
Services Placeholder
Process Placeholder
Solutions Placeholder
Contact Placeholder
```

## Regra

Essas seções são temporárias e não representam o layout final.

A função delas é testar navegação e estrutura.

---

# 03.22 — Smooth Scroll

A navegação por âncoras deve ter scroll suave.

## Regras

- clicar no link deve rolar para a seção correta
- navbar sticky não deve esconder o título da seção
- comportamento deve funcionar em desktop e mobile

---

# 03.23 — Scroll Offset

Se a Navbar for sticky, considerar offset.

## Problema a evitar

Quando o usuário clica em uma seção, o topo da seção não deve ficar escondido atrás da Navbar.

## Soluções possíveis

- scroll-margin-top nas seções
- função customizada de scroll
- padding superior compensado

---

# 03.24 — Responsividade inicial

Mesmo sem layout final, a estrutura deve funcionar em:

- mobile pequeno
- mobile grande
- tablet
- desktop
- monitor grande

## Verificar

- navbar não quebra
- menu mobile funciona
- links são clicáveis
- footer não fica espremido
- containers respeitam margens

---

# 03.25 — Z-index System

Definir uma lógica inicial para z-index.

Exemplo conceitual:

```txt
base content: 1
decorative background: 0
navbar: 50
mobile menu: 80
loading overlay: 100
modal, se houver: 120
```

## Regra

Evitar z-index aleatório como:

```txt
999999
```

---

# 03.26 — Background global

A estrutura deve usar o fundo correto.

## Base

```txt
#0B1F1A
```

## Regras

- não usar branco como fundo principal
- não deixar áreas sem fundo correto
- não criar flashes brancos entre seções
- manter continuidade visual

---

# 03.27 — O que a Fase 03 não deve fazer

A Fase 03 não deve criar ainda:

- loading final
- Hero final completo
- animações complexas
- conteúdo final de todas as seções
- formulário funcional
- SEO completo
- deploy final

Ela deve focar na estrutura base e navegação.

---

# 03.28 — Auditoria da Fase 03

Verificar:

## Navbar

- aparece corretamente?
- links funcionam?
- EN/PT aparece?
- CTA aparece?
- mobile funciona?

## Layout

- containers estão corretos?
- seções têm IDs?
- espaçamento base está bom?
- não há scroll horizontal?

## Footer

- está estruturado?
- tem tagline?
- tem links?
- parece premium?

## Responsividade

- mobile está limpo?
- tablet está correto?
- desktop está equilibrado?

---

# 03.29 — Critérios oficiais de aprovação

A Fase 03 só pode ser aprovada quando:

- App shell existe
- Navbar existe
- Footer existe
- Menu mobile existe ou está planejado corretamente
- Navigation links rolam para seções corretas
- Language switcher está posicionado
- CTA leva para contato
- Containers estão padronizados
- Seções têm IDs estáveis
- Layout não quebra no mobile
- Visual base respeita a identidade da Lyken

---

# 03.30 — Resultado esperado da Fase 03

Resultado esperado:

```txt
Layout principal criado
Navbar estruturada
Menu mobile funcionando
Footer estruturado
Containers padronizados
Seções temporárias com IDs
Navegação por âncoras funcionando
Scroll suave configurado
Base responsiva pronta
```

A partir desse ponto, o projeto poderá avançar para:

```txt
04-loading-experience.md
```

---

# 03.31 — Pergunta de validação da Fase 03

Antes de aprovar esta fase, responder:

```txt
A estrutura principal do site está organizada, responsiva e pronta para receber a experiência visual da Lyken?
```

Se a resposta for sim, a Fase 03 está aprovada.

Se a resposta for não, revisar Navbar, containers, IDs, footer e responsividade antes de continuar.
