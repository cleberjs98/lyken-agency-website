# Lyken Agency Website — Project Status

---

## Current Phase

Current phase to start:

**FASE 03 — Layout & Navigation**

---

## Validated Phases

### FASE 00 — Project Foundation

**Status: VALIDADA**

Summary:
Base estrutural inicial do projeto validada. Estrutura de pastas, configuração do Vite, Tailwind CSS, ESLint e dependências fundamentais estabelecidos.

---

### FASE 01 — Visual System

**Status: VALIDADA**

Summary:
Sistema visual da Lyken validado, incluindo base premium, cores, tipografia, componentes visuais iniciais e direção estética.

Tokens de design confirmados:

- Deep Green: `#0B1F1A`
- Emerald Green: `#10362E`
- Teal Green: `#164C3F`
- Champagne Gold: `#D4B47A`
- Warm Gold: `#B8924F`
- Soft Black: `#1A1A1A`

Tipografia:

- Playfair Display — headlines, títulos, momentos premium
- Satoshi — corpo, navegação, botões, labels, interface

---

### FASE 02 — Bilingual System

**Status: VALIDADA**

Summary:
Sistema bilíngue EN/PT validado, com conteúdo centralizado, hook de idioma, LanguageSwitcher, persistência em localStorage, conteúdo bilíngue aplicado nas seções, footer, formulário, metadata básica, responsividade e acessibilidade.

Validated blocks:

- 2.1 to 2.8 — Validated
- 2.9 to 2.14 — Validated
- 2.15 to 2.22 — Validated
- 2.23 to 2.28 — Validated
- 2.29 to 2.34 — Validated after minor corrections

Final corrections applied:

- Updated documentation from "O Que Damos Vida" to "O Que Trazemos à Vida" (7 occurrences in .md files)
- Removed redundant `aria-current` from `LanguageSwitcher.jsx`
- Preserved `aria-pressed` in `LanguageSwitcher.jsx`
- Confirmed `npm run lint` passed
- Confirmed `npm run build` passed

Technical confirmation:

- Default language: `en`
- Supported languages: `en`, `pt`
- localStorage key: `lyken-language`
- Content source: `src/data/content/`
- Language hook: `src/hooks/useLanguage.js`
- Language switcher: `src/components/ui/LanguageSwitcher.jsx`

---

## Next Phase

**FASE 03 — Layout & Navigation**

Main document:

`docs/03-layout-navigation.md`

Important instruction:
Do not reopen Fase 00, Fase 01, or Fase 02 unless a real technical regression is found.

---

## Phase Control Rule

Before starting any new prompt or implementation, always confirm:

- current phase
- validated status
- official phase document
- allowed scope
- files allowed to inspect or modify
- what must not be changed

---

## Do Not Reopen Without Cause

The following are considered validated:

- project foundation
- visual system
- bilingual system

They should not be refactored, rewritten, renamed, or reorganized unless:

1. a build/lint error appears,
2. a real regression is identified,
3. a future phase requires a small compatible integration,
4. the documentation explicitly requires the change.

---

## Current Implementation Snapshot - Fase 08

Status: Fase 08 - Motion & Interactions implemented and ready for renewed visual audit.

Current one-page flow:

```txt
Loading Experience -> Hero -> Journey -> Services -> Process -> Solutions -> Why Lyken -> Contact -> Footer
```

Implemented motion components:

- `src/components/motion/LoadingExperience.jsx`
- `src/components/motion/MotionReveal.jsx`
- `src/components/motion/AnimatedLine.jsx`
- `src/components/motion/DigitalMesh.jsx`
- `src/utils/motionTokens.js`

Latest registered implementation notes:

- The dense loading experience was restored and must be preserved unless the user explicitly requests a visual redesign.
- Loading includes mesh, particles, LYKEN letter formation, Agency signature and a smooth transition into the site.
- Particle convergence in the loading was accelerated.
- `Agency` appears earlier after the LYKEN formation.
- The final `LYKEN` state was adjusted toward stronger gold and away from pale white.
- Mobile menu received a technical-only correction for scroll lock and basic focus restoration.
- Contact exists as a visual/preliminary section, but functional conversion work remains frozen until Fase 09.

Next action:

```txt
Run renewed visual audit for Fase 08 before starting Fase 09.
```

---

## Deployment Status - Fase 12

Status: Fase 12 technically validated for initial Vercel publication.

Validated scope:

- 12.1 - GitHub repository connected
- 12.2 - Required project files confirmed
- 12.3 - Local build validated
- 12.4 - Vercel publication configured and deployed
- 12.5 - Vercel deployment/preview flow confirmed through GitHub integration
- 12.6 - No environment variables required for the current version
- 12.7 - Custom domain remains pending
- 12.8 - Post-deploy technical checklist validated
- 12.9 - Mobile online rendering checked through Chrome headless viewport
- 12.10 - Desktop online rendering checked through Chrome headless viewport
- 12.11 - Public assets and cache headers checked
- 12.12 - No out-of-scope features added
- 12.13 - Deployment audit completed
- 12.14 - Technical approval criteria met with manual visual checks still recommended

Production URL:

```txt
https://lyken-agency-website.vercel.app/
```

GitHub remote:

```txt
git@github.com:cleberjs98/lyken-agency-website.git
```

Latest deployed commit at validation:

```txt
16ebd02 fix(performance): defer site render during intro animation
```

Validation evidence:

- `npm run build` passed
- `npm run lint` passed
- Vercel URL returned HTTP 200
- Vite JS/CSS bundles returned HTTP 200
- favicon, Apple touch icon, OG image and logos returned HTTP 200
- no tracked `dist`, `node_modules`, `.env` or `.env.local`
- no runtime `VITE_*` variables or sensitive keys found in checked project runtime files

Pending before final launch:

- real-device mobile review
- browser console review in an interactive browser session
- final domain selection and DNS setup
- official email, WhatsApp and social links
- final form integration decision
- perceived performance review for dense loading and Hero motion
