# Lyken Agency Website — Engineering Documentation

## Purpose

This document defines the engineering plan for the **Lyken Agency Website**.

It translates the creative and visual direction into a structured technical development roadmap, organized by phases, subphases, deliverables, and approval criteria.

This file should live in the root of the project and guide the development process in VS Code using Codex, Copilot, or any other engineering workflow.

---

## Project Overview

The Lyken Agency website must be:

- Modern
- Premium
- Technological
- Interactive
- Bilingual
- Responsive
- Performance-conscious
- SEO-ready
- Accessible
- Visually aligned with the Lyken brand identity

The site should not be a generic agency landing page. It should function as a premium digital brand experience.

Core experience:

**Idea → Structure → Identity → Digital Presence → Intelligence → Growth**

---

## Recommended Stack

Recommended technical stack:

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- JavaScript
- Vercel

Recommended project name:

```txt
lyken-agency-website
```

---

## Root Documentation Files

The project root should contain:

```txt
LYKEN_WEBSITE_BRIEF.md
ENGINEERING_DOCUMENTATION.md
README.md
```

### LYKEN_WEBSITE_BRIEF.md

Creative and visual direction document.

### ENGINEERING_DOCUMENTATION.md

Technical and engineering roadmap document.

### README.md

Basic project setup, run, build, and deployment guide.

---

## Recommended Folder Structure

```txt
lyken-agency-website/
  public/
    favicon/
    images/
    logos/

  src/
    assets/
      logos/
      textures/
      mesh/
      icons/

    components/
      common/
      layout/
      sections/
      motion/
      ui/

    data/
      content/
      navigation/
      services/

    hooks/

    styles/

    utils/

    App.jsx
    main.jsx
    index.css

  docs/

  LYKEN_WEBSITE_BRIEF.md
  ENGINEERING_DOCUMENTATION.md
  README.md
  package.json
```

---

# Phase 0 — Project Foundation

## Objective

Create the correct technical foundation before building any visual section.

## Subphase 0.1 — Define the Stack

Use:

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- JavaScript
- Vercel

## Subphase 0.2 — Create the Project

Create a Vite React project named:

```txt
lyken-agency-website
```

## Subphase 0.3 — Configure Tailwind CSS

Tailwind must be configured and working.

## Subphase 0.4 — Create Initial Folder Structure

Create the main folder structure under `src/`, including:

```txt
assets/
components/
data/
hooks/
styles/
utils/
```

## Subphase 0.5 — Add Documentation Files

Add to root:

```txt
LYKEN_WEBSITE_BRIEF.md
ENGINEERING_DOCUMENTATION.md
README.md
```

## Subphase 0.6 — Initial Local Test

The project must run locally with no terminal errors.

## Approval Criteria

Phase 0 is complete when:

- The project exists.
- The folder structure is organized.
- Tailwind is configured.
- The site runs locally.
- No terminal errors appear.
- Root documentation files exist.
- A temporary homepage renders correctly.

---

# Phase 1 — Technical Visual System

## Objective

Convert the Lyken visual identity into reusable technical styles, tokens, and base components.

## Subphase 1.1 — Color Tokens

Create tokens for the official palette:

```txt
deepGreen: #0B1F1A
emeraldGreen: #10362E
tealGreen: #164C3F
champagneGold: #D4B47A
warmGold: #B8924F
softBlack: #1A1A1A
```

## Subphase 1.2 — Color Usage Rules

Use:

- `#0B1F1A` as the main background.
- `#10362E` for secondary surfaces and cards.
- `#164C3F` for technological depth and subtle accents.
- `#D4B47A` for premium highlights.
- `#B8924F` for hover states and secondary gold details.
- `#1A1A1A` for supporting dark contrast.

Avoid:

- Random colors.
- Excessive gold.
- Pure black as the main background.
- Neon-heavy visuals.
- Generic blue technology palettes.

## Subphase 1.3 — Typography Setup

Use:

- Playfair Display for headings and brand moments.
- Satoshi for body text, navigation, buttons, and interface.

If Satoshi is unavailable, document the temporary fallback.

## Subphase 1.4 — Typography Hierarchy

Define styles for:

- Hero headline
- Section title
- Section label
- Body text
- Button text
- Form labels
- Navigation links

## Subphase 1.5 — Spacing System

Define consistent spacing for:

- Sections
- Containers
- Cards
- Text blocks
- Buttons
- Mobile layouts

## Subphase 1.6 — Texture System

Create a subtle premium background system using:

- Deep green base
- Fine grain
- Soft vignette
- Subtle gold glow
- Depth layers

## Subphase 1.7 — Base Components

Create reusable base components:

```txt
Button
SectionLabel
SectionTitle
GoldDivider
Card
Container
LanguageSwitcher
```

## Approval Criteria

Phase 1 is complete when:

- Brand colors are standardized.
- Fonts are configured.
- Base components exist.
- Buttons follow brand identity.
- Cards follow brand identity.
- Backgrounds have depth.
- No random colors are used.
- The interface starts to feel like Lyken.

---

# Phase 2 — Bilingual System

## Objective

Create a scalable English/Portuguese content system.

## Subphase 2.1 — Define Languages

Supported languages:

```txt
English
Portuguese
```

Default language:

```txt
English
```

## Subphase 2.2 — Content Structure

Create bilingual content in a structured data file.

Recommended options:

```txt
src/data/content/en.js
src/data/content/pt.js
```

or:

```txt
src/data/content.js
```

with:

```txt
content.en
content.pt
```

## Subphase 2.3 — Required Bilingual Areas

The language system must support:

- Navbar
- Buttons
- Hero
- Narrative sections
- Services
- Process
- Solutions
- Why Lyken
- Contact
- Footer
- Form labels
- Validation messages

## Subphase 2.4 — Language Switcher

Create a language switcher:

```txt
EN / PT
```

Rules:

- It must be elegant.
- It must be visible in desktop navigation.
- It must work in mobile navigation.
- It must update all main content.
- It should preserve the selected language during the user session.

## Approval Criteria

Phase 2 is complete when:

- EN/PT switching works.
- All main text changes language.
- Mobile language switching works.
- Portuguese copy feels premium.
- English copy feels international.
- No major text remains hardcoded in only one language.

---

# Phase 3 — Base Layout & Navigation

## Objective

Create the main website shell and navigation structure.

## Subphase 3.1 — App Shell

Create:

```txt
Navbar
Main Content
Footer
```

## Subphase 3.2 — Navbar

Navbar must include:

- Lyken logo area
- Navigation links
- Language switcher
- CTA button
- Mobile menu

English links:

```txt
About
Services
Process
Solutions
Contact
```

Portuguese links:

```txt
Sobre
Serviços
Processo
Soluções
Contato
```

CTA:

```txt
Start a Project / Iniciar um Projeto
```

## Subphase 3.3 — Footer

Footer must include:

- Logo
- Tagline
- Navigation links
- Contact information
- Social placeholders
- Subtle monogram
- Thin gold divider

## Subphase 3.4 — Containers and Grid

Create consistent layout containers for:

- Max width
- Horizontal padding
- Section spacing
- Responsive alignment

## Approval Criteria

Phase 3 is complete when:

- Navbar works.
- Mobile menu works.
- Footer is structured.
- Navigation links scroll to correct sections.
- Layout shell is responsive.
- Visual structure follows the Lyken identity.

---

# Phase 4 — Loading Experience

## Objective

Create a premium branded loading experience.

## Subphase 4.1 — Loading Concept

The loading sequence must represent:

```txt
idea → connection → structure → identity → website reveal
```

## Subphase 4.2 — Visual Sequence

Sequence:

1. Deep green textured background.
2. One gold point appears.
3. Additional particles appear.
4. Thin lines connect.
5. A subtle digital mesh forms.
6. LK monogram appears.
7. Experience phrase appears.
8. Smooth transition into Hero.

## Subphase 4.3 — Loading Copy

English:

```txt
From idea to living brand.
```

Portuguese:

```txt
Da ideia à marca viva.
```

## Subphase 4.4 — Duration

Ideal duration:

```txt
1.5s to 3s
```

The loading must feel premium, not slow or annoying.

## Approval Criteria

Phase 4 is complete when:

- Loading does not use a generic spinner.
- Loading communicates birth and transformation.
- Loading works on desktop and mobile.
- Duration feels pleasant.
- Transition to Hero is smooth.
- Performance is not damaged.
- The site does not freeze.

---

# Phase 5 — Interactive Hero Section

## Objective

Create the primary first-screen experience.

## Subphase 5.1 — Hero Content

Headline EN:

```txt
We turn ideas into living digital brands.
```

Headline PT:

```txt
Transformamos ideias em marcas digitais vivas.
```

Subheadline EN:

```txt
Lyken Agency combines strategy, branding, technology and intelligence to transform ideas into structured, memorable and scalable digital experiences.
```

Subheadline PT:

```txt
A Lyken Agency combina estratégia, branding, tecnologia e inteligência para transformar ideias em experiências digitais estruturadas, memoráveis e escaláveis.
```

## Subphase 5.2 — Hero CTAs

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

## Subphase 5.3 — Visual Requirements

Hero must include:

- Deep green textured background
- Animated gold digital mesh
- Subtle glow
- Integrated logo and navigation
- Strong Playfair Display headline
- Clear Satoshi subheadline
- Premium CTA buttons

## Subphase 5.4 — Interaction Requirements

Hero interactions may include:

- Subtle mesh movement
- Soft mouse response
- Gold hover states
- Text reveal with delay
- Animated thin lines

## Approval Criteria

Phase 5 is complete when:

- Hero creates strong impact.
- Message is clear.
- Visual style feels premium.
- Motion does not distract.
- CTAs are clear.
- Mobile version works well.
- It does not look like a template.

---

# Phase 6 — Narrative Journey

## Objective

Create the transformation story of Lyken.

The narrative path:

```txt
The Spark → The Structure → The Identity → The Digital Presence → The Intelligence → The Growth
```

---

## Subphase 6.1 — The Spark

Message EN:

```txt
Every brand begins as a possibility.
```

Message PT:

```txt
Toda marca começa como uma possibilidade.
```

Visual direction:

- Single gold point
- Dark background
- Large empty space
- Birth atmosphere

---

## Subphase 6.2 — The Structure

Message EN:

```txt
Strategy transforms possibility into direction.
```

Message PT:

```txt
A estratégia transforma possibilidade em direção.
```

Visual direction:

- Thin lines
- Grid forming
- Organized blocks
- Connected points

---

## Subphase 6.3 — The Identity

Message EN:

```txt
A brand becomes real when it can be seen, understood and remembered.
```

Message PT:

```txt
Uma marca se torna real quando pode ser vista, compreendida e lembrada.
```

Visual direction:

- LK monogram
- Strong typography
- Brand system modules
- Gold details

---

## Subphase 6.4 — The Digital Presence

Message EN:

```txt
We transform brands into digital experiences.
```

Message PT:

```txt
Transformamos marcas em experiências digitais.
```

Visual direction:

- More active digital mesh
- Website/app/social/e-commerce cards
- Digital presence atmosphere

---

## Subphase 6.5 — The Intelligence

Message EN:

```txt
Technology turns presence into performance.
```

Message PT:

```txt
A tecnologia transforma presença em performance.
```

Visual direction:

- Connections
- Data flows
- Intelligent systems
- AI without visual clichés

---

## Subphase 6.6 — The Growth

Message EN:

```txt
A living brand evolves, adapts and grows.
```

Message PT:

```txt
Uma marca viva evolui, se adapta e cresce.
```

Visual direction:

- Expanding mesh
- More light
- Continuity CTA
- Evolution atmosphere

## Approval Criteria

Phase 6 is complete when:

- The journey is clear.
- Every section has a purpose.
- The site tells a story.
- Copy is short and strong.
- Motion represents transformation.
- It does not feel like a generic service list.

---

# Phase 7 — Services & Solutions

## Objective

Present the commercial offer without breaking the premium experience.

## Subphase 7.1 — Services Section

Title EN:

```txt
What We Bring to Life
```

Title PT:

```txt
O Que Trazemos à Vida
```

Services:

- Brand Strategy
- Visual Identity
- Digital Presence
- Growth Marketing
- Web Platforms
- AI Solutions

## Subphase 7.2 — Service Cards

Each service card must include:

- Linear gold icon
- Title
- Short description
- Thin border
- Elegant hover state
- Deep green background

## Subphase 7.3 — Solutions by Business Stage

Title EN:

```txt
Designed for every stage of your business.
```

Title PT:

```txt
Soluções para cada estágio do seu negócio.
```

Cards:

- New Brands
- Repositioning
- Digital Expansion
- Intelligent Operations

## Subphase 7.4 — Why Lyken

Title EN:

```txt
Because modern brands need more than design.
```

Title PT:

```txt
Porque marcas modernas precisam de mais do que design.
```

Core points:

- Strategy before execution
- Branding connected to business goals
- Digital experiences built for growth
- AI-enhanced workflows
- Premium visual direction
- Flexible solutions for different business stages

## Approval Criteria

Phase 7 is complete when:

- Services are clear.
- The section does not feel common.
- Cards look premium.
- Text is objective.
- The client understands what Lyken offers.
- The visual system follows the brand identity.

---

# Phase 8 — Motion & Interactions

## Objective

Create purposeful movement.

## Subphase 8.1 — Scroll Reveal

Elements should appear on scroll.

Rules:

- Smooth
- Elegant
- Controlled
- Consistent timing

## Subphase 8.2 — Hover States

Apply hover states to:

- Buttons
- Cards
- Links
- Icons
- Process steps
- Service cards

## Subphase 8.3 — Digital Mesh

The digital mesh should appear in:

- Loading
- Hero
- Transformation sections
- Final CTA

## Subphase 8.4 — Animated Lines

Use animated lines for:

- Dividers
- Timelines
- Cards
- Steps
- Connections

## Approval Criteria

Phase 8 is complete when:

- The site feels alive.
- Animations have purpose.
- There is no excessive movement.
- Performance remains good.
- Mobile remains smooth.
- Accessibility is not harmed.

---

# Phase 9 — Contact & Conversion

## Objective

Turn visitor interest into action.

## Subphase 9.1 — Contact Form

Fields:

- Name
- Business name
- Email
- Phone
- Service needed
- Message

Portuguese:

- Nome
- Nome da empresa
- Email
- Telefone
- Serviço desejado
- Mensagem

## Subphase 9.2 — Final CTA

CTA title EN:

```txt
Ready to transform your idea into a living brand?
```

CTA title PT:

```txt
Pronto para transformar sua ideia em uma marca viva?
```

## Subphase 9.3 — Future Integrations

The first version may have a visual-only form.

Future integrations may include:

- Email
- WhatsApp
- CRM
- Database
- Automation

## Approval Criteria

Phase 9 is complete when:

- Form is visually ready.
- Fields are clear.
- CTA is strong.
- Contact path is easy.
- Mobile form works.
- User is not confused.

---

# Phase 10 — Responsive Experience

## Objective

Guarantee a strong experience across all screen sizes.

## Subphase 10.1 — Mobile Testing

Test:

- Small phones
- Large phones
- Tablets
- Laptops
- Large monitors

## Subphase 10.2 — Mobile Navbar

Mobile navigation must include:

- Clean menu
- EN/PT switcher
- CTA access
- No visual clutter

## Subphase 10.3 — Mobile Typography

Check that:

- Titles do not break poorly.
- Buttons fit.
- Cards are not cramped.
- Spacing remains premium.
- Text remains readable.

## Approval Criteria

Phase 10 is complete when:

- Mobile is excellent.
- Tablet is excellent.
- Desktop is excellent.
- No horizontal scroll exists.
- Text is readable.
- Buttons are easy to tap.

---

# Phase 11 — Performance, SEO & Accessibility

## Objective

Prepare the site to be fast, findable, and usable.

## Subphase 11.1 — Performance

Check:

- Optimized images
- Lightweight animations
- Controlled scripts
- Fast loading
- No freezing
- No heavy unnecessary dependencies

## Subphase 11.2 — SEO

Include:

- Page title
- Meta description
- Correct heading structure
- Alt text for images
- Semantic structure
- Basic Open Graph tags

## Subphase 11.3 — Accessibility

Check:

- Contrast
- Keyboard navigation
- Form labels
- Button clarity
- Readable text
- Non-aggressive animations
- Focus states

## Approval Criteria

Phase 11 is complete when:

- Site loads fast.
- Basic SEO is correct.
- Semantic structure is good.
- Contrast is acceptable.
- Form is accessible.
- No critical errors remain.

---

# Phase 12 — Deploy

## Objective

Publish the website safely.

## Subphase 12.1 — GitHub Repository

Create repository:

```txt
lyken-agency-website
```

## Subphase 12.2 — Vercel Deployment

Deploy the project to Vercel.

## Subphase 12.3 — Domain Setup

Future domain option:

```txt
lyken.agency
```

or another selected domain.

## Subphase 12.4 — Environment Variables

Use environment variables for future integrations such as:

- Form service
- CRM
- API
- Email service

## Approval Criteria

Phase 12 is complete when:

- Site is published.
- Public URL works.
- Build has no errors.
- Mobile works online.
- Language switcher works online.
- Form section does not break.
- Online performance is acceptable.

---

# Phase 13 — Final Audit

## Objective

Ensure the website is ready for real presentation.

## Subphase 13.1 — Visual Audit

Ask:

- Does it feel premium?
- Does it feel technological?
- Does it feel like Lyken?
- Does it respect the brand identity?
- Is gold used correctly?
- Is there texture?
- Is there movement?
- Does it avoid a generic template look?

## Subphase 13.2 — Content Audit

Check:

- English copy
- Portuguese copy
- CTAs
- Services
- Process
- Contact
- Premium tone
- Commercial clarity

## Subphase 13.3 — Technical Audit

Check:

- Console errors
- Performance
- Responsiveness
- Links
- Language switching
- Build process
- SEO
- Accessibility

## Subphase 13.4 — Experience Audit

Ask:

- Does the site tell a journey?
- Does the visitor understand what Lyken does?
- Does motion have purpose?
- Does the experience communicate transformation?
- Does the user know how to contact Lyken?

## Approval Criteria

Phase 13 is complete when:

- Visual quality is approved.
- Content is approved.
- Technical checks are approved.
- Responsiveness is approved.
- SEO and accessibility basics are approved.
- The experience feels premium, technological, alive, and strategic.

---

# Main Project Rule

Every decision must pass this question:

```txt
Does this make the Lyken website feel like a premium, technological, living, and strategic brand experience?
```

If the answer is no, the solution must be refined.

The website must not simply show what Lyken does.

It must make the visitor feel what Lyken does:

**Birth, transformation, strategy, technology, identity, intelligence, and growth.**
