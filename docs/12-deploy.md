# 12 — Deploy

## Lyken Agency Website

## Objetivo desta fase

A Fase 12 tem como objetivo publicar o site da Lyken Agency online com segurança.

Esta fase cobre:

- GitHub
- Vercel
- build
- preview
- domínio futuro
- variáveis de ambiente
- checklist online

---

# 12.1 — Repositório GitHub

Criar repositório:

```txt
lyken-agency-website
```

## Regras

- nome consistente
- README presente
- documentação presente
- commits claros
- não subir arquivos desnecessários

---

# 12.2 — Arquivos que devem estar no projeto

Na raiz:

```txt
LYKEN_WEBSITE_BRIEF.md
ENGINEERING_DOCUMENTATION.md
README.md
package.json
```

Na pasta docs:

```txt
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

---

# 12.3 — Build local antes do deploy

Antes de publicar, rodar:

```txt
npm run build
```

## Regra

Não fazer deploy se o build local falhar.

---

# 12.4 — Vercel

Publicar na Vercel.

## Configuração esperada

Framework:

```txt
Vite
```

Build command:

```txt
npm run build
```

Output directory:

```txt
dist
```

---

# 12.5 — Preview deployment

Após conectar ao GitHub, a Vercel pode gerar previews.

Usar previews para revisar antes de considerar final.

---

# 12.6 — Variáveis de ambiente

Se houver integrações futuras, configurar variáveis.

Possíveis futuras variáveis:

```txt
VITE_FORM_ENDPOINT
VITE_EMAIL_SERVICE_KEY
VITE_CRM_ENDPOINT
```

## Regra

Não colocar chaves sensíveis diretamente no código.

---

# 12.7 — Domínio futuro

Possíveis domínios:

```txt
lyken.agency
lykenagency.com
lyken.studio
```

## Regra

Domínio deve reforçar posicionamento internacional e premium.

---

# 12.8 — Checklist após deploy

Verificar online:

- site abre
- loading aparece
- Hero aparece
- EN/PT funciona
- navegação funciona
- mobile funciona
- formulário não quebra
- assets carregam
- favicon aparece
- console não mostra erro crítico

---

# 12.9 — Teste mobile online

Testar no celular real.

Verificar:

- velocidade
- menu
- scroll
- idioma
- CTA
- formulário
- animações

---

# 12.10 — Teste desktop online

Verificar:

- layout grande
- malha
- animações
- cards
- footer
- contraste
- performance

---

# 12.11 — Cache e assets

Se assets não atualizarem:

- limpar cache
- verificar nomes de arquivos
- revisar build
- revisar caminho de assets

---

# 12.12 — O que a Fase 12 não deve fazer

Não precisa criar:

- analytics avançado
- CRM
- backend completo
- blog
- dashboard

Foco:

```txt
publicação estável
URL funcional
build correto
experiência online validada
```

---

# 12.13 — Auditoria

Verificar:

- build passou?
- deploy passou?
- URL abre?
- mobile funciona?
- idioma funciona?
- assets carregam?
- não há erro crítico?
- site parece igual ao local?

---

# 12.14 — Critérios oficiais de aprovação

A Fase 12 só pode ser aprovada quando:

- repositório existe
- build local passa
- deploy na Vercel passa
- URL pública funciona
- mobile online funciona
- EN/PT funciona online
- assets carregam
- console não tem erro crítico
- experiência online está aprovada

---

# 12.15 — Resultado esperado

```txt
GitHub configurado
Vercel conectado
Build publicado
URL online funcionando
Site testado em mobile
Site testado em desktop
Deploy aprovado
```

Próxima fase:

```txt
13-final-audit.md
```

---

# 12.16 — Pergunta de validação

```txt
O site está publicado com estabilidade e mantém online a experiência premium da Lyken?
```

Se sim, aprovar.  
Se não, revisar build, Vercel, assets e responsividade online.
