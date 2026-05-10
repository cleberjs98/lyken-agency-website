# 10 — Responsive Experience

## Lyken Agency Website

## Objetivo desta fase

A Fase 10 tem como objetivo garantir que o site da Lyken funcione perfeitamente em diferentes tamanhos de tela.

A experiência deve ser premium em:

- mobile pequeno
- mobile grande
- tablet
- notebook
- desktop
- monitor grande

---

# 10.1 — Princípio principal

Responsividade não é apenas “caber na tela”.

O site deve manter:

```txt
clareza
sofisticação
legibilidade
movimento controlado
hierarquia visual
experiência premium
```

em qualquer tela.

---

# 10.2 — Breakpoints recomendados

Usar breakpoints compatíveis com Tailwind:

```txt
sm
md
lg
xl
2xl
```

## Direção

Mobile first.

Começar com layout mobile e expandir para telas maiores.

---

# 10.3 — Mobile first

No mobile, priorizar:

- leitura
- CTA claro
- botões fáceis de tocar
- navegação simples
- animações leves
- largura correta
- sem scroll horizontal

---

# 10.4 — Navbar mobile

O menu mobile deve:

- abrir facilmente
- mostrar links principais
- mostrar EN/PT
- mostrar CTA
- fechar ao clicar
- não ficar poluído
- ter contraste adequado

---

# 10.5 — Hero mobile

Verificar:

- headline não quebra mal
- subheadline é legível
- CTAs cabem
- malha não atrapalha
- altura não fica estranha
- conteúdo aparece acima da dobra de forma aceitável

---

# 10.6 — Jornada mobile

As etapas devem aparecer em sequência vertical.

## Regras

- não usar layout lado a lado no mobile
- reduzir elementos decorativos
- manter narrativa clara
- evitar animações pesadas
- manter espaçamento premium

---

# 10.7 — Serviços mobile

Cards devem ficar em uma coluna.

Verificar:

- altura equilibrada
- ícones proporcionais
- textos legíveis
- hover não depende de mouse
- espaçamento entre cards

---

# 10.8 — Processo mobile

Timeline deve se adaptar.

Possibilidades:

- timeline vertical
- cards empilhados
- números editoriais

Evitar timeline horizontal difícil de usar.

---

# 10.9 — Formulário mobile

Campos devem:

- ocupar largura total
- ter labels claras
- ter boa área de toque
- ter espaçamento suficiente
- não gerar zoom estranho por fonte pequena

---

# 10.10 — Tablet

Tablet deve ter layout intermediário.

Possibilidades:

- 2 colunas para cards
- hero mais compacto
- menu desktop ou mobile dependendo do espaço
- espaçamentos médios

---

# 10.11 — Desktop

Desktop deve explorar:

- grids amplos
- espaço negativo
- malha visual
- composição editorial
- animações mais ricas

---

# 10.12 — Large desktop

Em monitores grandes, evitar:

- conteúdo esticado demais
- linhas de texto muito longas
- seções vazias sem intenção
- cards muito afastados sem estrutura

Usar max-width controlado.

---

# 10.13 — Tipografia responsiva

Títulos devem reduzir no mobile.

Verificar:

- Hero headline
- section titles
- card titles
- CTA final

## Regra

Nenhum título deve sair da tela.

---

# 10.14 — Imagens e elementos visuais

Elementos visuais devem:

- escalar corretamente
- não cortar conteúdo essencial
- não pesar no mobile
- não sobrepor textos
- não criar scroll horizontal

---

# 10.15 — Motion responsivo

No mobile:

- reduzir movimento contínuo
- reduzir partículas
- evitar mouse interaction
- manter fades simples
- preservar performance

---

# 10.16 — Testes obrigatórios

Testar em larguras aproximadas:

```txt
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

---

# 10.17 — Problemas proibidos

Não pode haver:

- scroll horizontal
- texto cortado
- botões fora da tela
- menu quebrado
- formulário espremido
- malha cobrindo texto
- cards desalinhados de forma ruim
- footer quebrado

---

# 10.18 — Auditoria

Verificar:

- mobile está excelente?
- tablet está bom?
- desktop está equilibrado?
- CTAs são acessíveis?
- idioma PT não quebra layout?
- animações continuam suaves?
- conteúdo mantém hierarquia?

---

# 10.19 — Critérios oficiais de aprovação

A Fase 10 só pode ser aprovada quando:

- mobile pequeno funciona
- mobile grande funciona
- tablet funciona
- desktop funciona
- não há scroll horizontal
- Navbar mobile funciona
- textos são legíveis
- botões são clicáveis
- formulário funciona visualmente
- PT não quebra layout
- animações não prejudicam mobile

---

# 10.20 — Resultado esperado

```txt
Responsividade validada
Mobile refinado
Tablet refinado
Desktop refinado
Navbar mobile aprovada
Cards adaptados
Formulário adaptado
Motion ajustado por tela
Sem scroll horizontal
```

Próxima fase:

```txt
11-performance-seo-accessibility.md
```

---

# 10.21 — Pergunta de validação

```txt
A experiência da Lyken continua premium, clara e viva em qualquer tamanho de tela?
```

Se sim, aprovar.  
Se não, revisar layouts por breakpoint.
