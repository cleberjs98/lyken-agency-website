# COMPONENT_SYSTEM.md

# Lyken Agency Website — Component System

## Purpose

This document defines the core components for the Lyken Agency website.

It ensures the interface remains consistent, reusable, scalable and aligned with the Lyken visual identity.

---

## 1. Component Principles

Every component must be:

- reusable
- responsive
- accessible
- visually aligned with Lyken
- simple enough to maintain
- not over-engineered

Components should support:

- bilingual content
- premium dark visual system
- subtle motion
- consistent spacing
- clear hierarchy

---

## 2. Component Folder Structure

Recommended:

```txt
src/components/
  common/
  layout/
  sections/
  motion/
  ui/
```

---

## 3. Common Components

## 3.1 Container

Location:

```txt
src/components/common/Container.jsx
```

Purpose:

Controls content width and horizontal padding.

Rules:

- centralize content
- use max-width consistently
- adapt to mobile/tablet/desktop
- prevent content from touching screen edges

---

## 3.2 SectionLabel

Location:

```txt
src/components/common/SectionLabel.jsx
```

Purpose:

Displays small editorial section labels.

Example:

```txt
01 — THE SPARK
```

Visual:

- Satoshi
- uppercase
- letter spacing
- champagne gold
- small size

---

## 3.3 SectionTitle

Location:

```txt
src/components/common/SectionTitle.jsx
```

Purpose:

Displays main section titles.

Visual:

- Playfair Display
- large
- elegant
- strong hierarchy
- responsive sizing

---

## 3.4 GoldDivider

Location:

```txt
src/components/common/GoldDivider.jsx
```

Purpose:

Creates thin editorial dividers.

Visual:

- 1px line
- champagne gold with opacity
- horizontal or vertical variant

---

## 3.5 Card

Location:

```txt
src/components/common/Card.jsx
```

Purpose:

Reusable premium card wrapper.

Visual:

- emerald/deep green background
- thin gold border
- subtle hover
- comfortable padding
- optional icon slot

Variants:

```txt
service
solution
process
feature
```

---

## 3.6 Button

Location:

```txt
src/components/common/Button.jsx
```

Purpose:

Reusable CTA button.

Variants:

```txt
primary
secondary
ghost
```

Rules:

- Satoshi
- accessible focus
- consistent padding
- responsive
- no generic startup style

Primary visual:

- champagne gold background
- deep green text

Secondary visual:

- transparent background
- gold border
- gold or light text

---

## 4. UI Components

## 4.1 LanguageSwitcher

Location:

```txt
src/components/ui/LanguageSwitcher.jsx
```

Purpose:

Switches between EN and PT.

Visual:

```txt
EN / PT
```

Rules:

- show active state
- work in desktop navbar
- work in mobile menu
- accessible focus
- not visually heavy

---

## 4.2 Input

Location:

```txt
src/components/ui/Input.jsx
```

Purpose:

Reusable form input.

Rules:

- label support
- error support
- focus state
- dark premium style
- no default browser-looking design

---

## 4.3 Textarea

Location:

```txt
src/components/ui/Textarea.jsx
```

Purpose:

Reusable message field.

Rules:

- label support
- accessible focus
- comfortable height
- responsive

---

## 4.4 Select

Location:

```txt
src/components/ui/Select.jsx
```

Purpose:

Reusable service selector.

Rules:

- bilingual options
- focus state
- accessible label
- premium dark style

---

## 5. Layout Components

## 5.1 Navbar

Location:

```txt
src/components/layout/Navbar.jsx
```

Purpose:

Main navigation.

Must include:

- logo
- navigation links
- language switcher
- CTA
- mobile menu trigger

Behavior:

- sticky or fixed if approved
- subtle background/blur on scroll
- responsive

---

## 5.2 MobileMenu

Location:

```txt
src/components/layout/MobileMenu.jsx
```

Purpose:

Mobile navigation.

Must include:

- links
- language switcher
- CTA
- close behavior

Rules:

- no dead-end
- no clutter
- accessible keyboard behavior

---

## 5.3 Footer

Location:

```txt
src/components/layout/Footer.jsx
```

Purpose:

Closes the website experience.

Must include:

- logo
- tagline
- navigation
- contact
- social placeholders
- subtle monogram
- copyright

---

## 6. Motion Components

## 6.1 PageLoader

Location:

```txt
src/components/motion/PageLoader.jsx
```

Purpose:

Loading experience.

Must represent:

```txt
idea → connection → structure → identity → website reveal
```

Rules:

- no generic spinner
- bilingual phrase
- LK monogram
- subtle digital mesh
- 1.5s to 3s duration

---

## 6.2 MotionReveal

Location:

```txt
src/components/motion/MotionReveal.jsx
```

Purpose:

Reusable scroll reveal.

Rules:

- opacity transition
- subtle vertical movement
- reduced motion support if possible
- no aggressive animation

---

## 6.3 AnimatedLine

Location:

```txt
src/components/motion/AnimatedLine.jsx
```

Purpose:

Draws thin gold lines.

Use for:

- dividers
- timelines
- journey
- process

---

## 6.4 DigitalMesh

Location:

```txt
src/components/motion/DigitalMesh.jsx
```

Purpose:

Animated abstract mesh.

Use for:

- loading
- hero
- transformation sections
- CTA final

Rules:

- subtle
- premium
- does not harm readability
- optimized for mobile

---

## 7. Section Components

Recommended section components:

```txt
Hero.jsx
Journey.jsx
TheSpark.jsx
TheStructure.jsx
TheIdentity.jsx
DigitalPresence.jsx
Intelligence.jsx
Growth.jsx
Services.jsx
TransformationLayers.jsx
Process.jsx
Solutions.jsx
WhyLyken.jsx
Contact.jsx
```

Each section must:

- use content from data files
- support bilingual content
- use Container
- follow visual system
- be responsive
- avoid hardcoded visible text where language changes

---

## 8. Component Rules

Do not:

- create duplicate button styles
- create one-off cards without reason
- hardcode colors outside tokens
- hardcode visible bilingual text
- create unnecessary wrappers
- create generic file names

Prefer:

- clear names
- simple props
- reusable variants
- consistent spacing
- accessibility-ready markup

---

## 9. Component Checklist

```txt
[ ] Component has clear purpose
[ ] Component is in correct folder
[ ] Component name is descriptive
[ ] Component uses Lyken tokens
[ ] Component is responsive
[ ] Component supports accessibility basics
[ ] Component avoids hardcoded bilingual text
[ ] Component avoids unnecessary complexity
```
