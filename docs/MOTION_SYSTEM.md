# MOTION_SYSTEM.md

# Lyken Agency Website — Motion System

## Purpose

This document defines how movement should work across the Lyken Agency website.

Motion is central to the brand experience because the site must transmit:

```txt
birth
transformation
connection
intelligence
growth
```

Motion must be intentional, premium and controlled.

---

## 1. Motion Philosophy

The website should feel alive, but not noisy.

Motion should communicate:

- an idea being born
- points connecting
- structure forming
- identity appearing
- digital presence expanding
- intelligence flowing
- growth evolving

Motion should never be decorative without purpose.

---

## 2. Core Motion Concepts

## 2.1 Birth

Used when something appears from empty space.

Examples:

- loading spark
- first section reveal
- headline entrance

Motion style:

- fade in
- subtle scale
- soft glow

---

## 2.2 Connection

Used when elements relate to each other.

Examples:

- particles connecting
- animated lines
- timeline
- process steps

Motion style:

- line drawing
- staggered reveal
- node activation

---

## 2.3 Transformation

Used when content changes state or reveals meaning.

Examples:

- cards appearing
- layers activating
- section transitions

Motion style:

- opacity
- transform
- controlled easing

---

## 2.4 Growth

Used near the end of the journey and final CTA.

Examples:

- digital mesh expanding
- light increasing subtly
- CTA reveal

Motion style:

- expansion
- subtle brightness
- smooth continuity

---

## 3. Motion Timing

Recommended durations:

```txt
Micro interactions: 0.2s–0.3s
Small reveals: 0.4s–0.6s
Section reveals: 0.6s–0.9s
Hero entrance: 0.8s–1.2s
Loading sequence: 1.5s–3s
```

---

## 4. Easing

Use:

```txt
easeOut
easeInOut
soft cubic-bezier curves
```

Avoid:

```txt
linear mechanical movement
bounce
elastic effects
aggressive spring effects
```

---

## 5. Loading Motion

Sequence:

```txt
empty dark space
gold spark
particles appear
thin lines connect
digital mesh forms
LK monogram appears
phrase appears
transition to Hero
```

Rules:

- no spinner
- no progress bar
- no glitch
- no aggressive logo rotation
- no long delay

---

## 6. Hero Motion

Hero should include:

- smooth headline reveal
- delayed subheadline
- delayed CTAs
- subtle animated mesh
- optional mouse response on desktop

Rules:

- text must remain readable
- mesh must not overpower content
- no excessive parallax

---

## 7. Scroll Reveal

Use for:

- section labels
- section titles
- descriptions
- cards
- process steps
- CTA blocks

Default behavior:

```txt
opacity 0 → 1
y 24px → 0
duration 0.5s–0.8s
```

---

## 8. Stagger

Use stagger for groups.

Apply to:

- service cards
- process steps
- solution cards
- Why Lyken points

Recommended stagger:

```txt
0.06s–0.12s
```

---

## 9. Hover Motion

## Buttons

Allowed:

- slight glow
- subtle color shift
- thin line movement
- small translate

Avoid:

- bounce
- strong scale
- neon glow
- heavy shadow

## Cards

Allowed:

- border glow
- slight lift
- icon glow
- line reveal

Avoid:

- flipping
- rotating
- dramatic movement

---

## 10. Animated Lines

Use for:

- dividers
- journey
- process
- cards
- section transitions

Behavior:

- line draws from 0 to 100%
- subtle gold opacity
- triggered on viewport entry

---

## 11. Digital Mesh Motion

The mesh should be:

- slow
- subtle
- elegant
- organic
- premium
- optimized

Use in:

- loading
- hero
- journey
- final CTA

Avoid:

- excessive nodes
- bright neon
- circuit-board cliché
- distracting movement

---

## 12. Reduced Motion

Respect users who prefer reduced motion.

If `prefers-reduced-motion` is active:

- reduce continuous movement
- keep simple fades
- avoid mouse-reactive effects
- preserve content access

---

## 13. Performance Rules

Prefer animating:

```txt
opacity
transform
```

Avoid heavy animation of:

```txt
width
height
top
left
box-shadow
filter
large backgrounds
```

---

## 14. Mobile Motion

On mobile:

- reduce particle density
- reduce mouse-based behavior
- use simpler reveals
- avoid heavy continuous motion
- prioritize smooth scrolling

---

## 15. Forbidden Motion

Do not use:

- bounce effects
- glitch effects
- cyberpunk flicker
- spinning logos
- fast particles
- aggressive parallax
- confetti
- cartoon effects
- excessive neon
- random movement

---

## 16. Motion Audit Checklist

```txt
[ ] Every motion has purpose
[ ] Loading communicates birth
[ ] Hero motion is smooth
[ ] Scroll reveals are consistent
[ ] Hover states are refined
[ ] Mesh does not distract
[ ] Mobile remains fluid
[ ] Reduced motion considered
[ ] No excessive animation
[ ] Performance remains acceptable
```

---

## Current Implementation Notes

The current project implementation includes the Fase 08 motion base.

Loading:

- implemented in `src/components/motion/LoadingExperience.jsx`;
- uses a dense brand sequence with particles, connecting lines, digital mesh, LYKEN letter formation, Agency signature and bilingual phrase;
- recent refinements made particle convergence faster, moved the Agency signature earlier, and pushed the LYKEN final state toward stronger gold instead of pale white;
- future technical fixes must not simplify or remove this loading without explicit visual approval.

Hero:

- current Hero motion and digital mesh must be preserved unless a future task explicitly targets Hero visuals.

Mobile menu:

- scroll is locked while the mobile menu is open;
- basic focus moves into the menu on open and returns to the trigger on close;
- no visual menu redesign was made for this correction.

Contact:

- Contact exists visually, but functional form evolution is frozen until Fase 09.
