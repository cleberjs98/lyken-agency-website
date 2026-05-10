# BRAND_ASSETS_INVENTORY.md

# Lyken Agency Website — Brand Assets Inventory

## Purpose

This document defines the brand assets needed for the Lyken Agency website and where they should live in the project.

It prevents misplaced files, forgotten placeholders and inconsistent asset usage.

---

## 1. Asset Status Definitions

Use the following status labels:

- **Required** — needed for the final website
- **Recommended** — improves quality but can be replaced temporarily
- **Optional** — useful but not blocking
- **Placeholder Allowed** — can start with temporary version

---

## 2. Core Logo Assets

## 2.1 Main Logo

Status: Required

Formats:

- SVG preferred
- PNG fallback

Recommended location:

```txt
public/logos/lyken-logo.svg
src/assets/logos/lyken-logo.svg
```

Use for:

- Navbar
- Footer
- Metadata preview if needed

Rules:

- Do not stretch
- Do not recolor randomly
- Do not apply heavy shadows
- Preserve spacing and legibility

---

## 2.2 Horizontal Logo

Status: Recommended

Formats:

- SVG preferred
- PNG fallback

Recommended location:

```txt
public/logos/lyken-logo-horizontal.svg
src/assets/logos/lyken-logo-horizontal.svg
```

Use for:

- Navbar desktop
- Footer
- Presentational brand moments

---

## 2.3 LK Monogram

Status: Required

Formats:

- SVG preferred
- PNG fallback

Recommended location:

```txt
public/logos/lyken-monogram.svg
src/assets/logos/lyken-monogram.svg
```

Use for:

- Loading experience
- Favicon
- Footer watermark
- Contact section watermark
- Premium visual moments

Rules:

- Use intentionally
- Do not overuse
- Do not distort
- Avoid excessive glow

---

## 2.4 Favicon

Status: Required

Recommended files:

```txt
public/favicon/favicon.ico
public/favicon/favicon-32x32.png
public/favicon/apple-touch-icon.png
```

Preferred source:

- LK monogram

---

## 3. Texture Assets

## 3.1 Premium Dark Texture

Status: Recommended

Formats:

- PNG
- WebP
- CSS-generated texture acceptable

Recommended location:

```txt
src/assets/textures/dark-grain.webp
src/assets/textures/dark-texture.webp
```

Use for:

- Body background
- Hero
- Loading
- Footer
- Premium sections

Rules:

- Must be subtle
- Must not reduce legibility
- Must not look noisy or dirty

---

## 3.2 Vignette Overlay

Status: Optional

Recommended location:

```txt
src/assets/textures/vignette-overlay.png
```

Alternative:

- CSS radial-gradient

Use for:

- Hero depth
- Loading depth
- CTA final depth

---

## 4. Digital Mesh Assets

## 4.1 Gold Digital Mesh

Status: Recommended

Formats:

- SVG
- WebP
- CSS/Canvas-generated effect acceptable

Recommended location:

```txt
src/assets/mesh/gold-digital-mesh.svg
src/assets/mesh/gold-digital-mesh.webp
```

Use for:

- Loading
- Hero
- Transformation sections
- Final CTA

Rules:

- Must be subtle
- Must feel premium and technological
- Must not look like generic circuit graphics
- Must not overpower text

---

## 4.2 Particle Nodes

Status: Optional

Recommended location:

```txt
src/assets/mesh/particle-nodes.svg
```

Use for:

- Loading
- Animated background
- Journey visuals

---

## 5. Icon Assets

## 5.1 Lucide React Icons

Status: Required through package

Use for:

- Service cards
- Process
- Why Lyken
- Contact

Recommended icons:

```txt
Target
Diamond
Globe
TrendingUp
Layers
Sparkles
Cpu
Network
Search
PenTool
Rocket
RefreshCw
Mail
MessageCircle
```

Rules:

- Use thin line style
- Use champagne gold
- Keep consistent stroke width
- Avoid filled icons

---

## 5.2 Custom Icons

Status: Optional

Recommended location:

```txt
src/assets/icons/
```

Use only if Lucide does not match a specific brand need.

---

## 6. Social Icons

Status: Optional

Potential files:

```txt
linkedin.svg
instagram.svg
email.svg
whatsapp.svg
```

Recommended location:

```txt
src/assets/icons/social/
```

Rules:

- Linear
- Minimal
- Gold or light
- No colorful default social icons unless intentionally approved

---

## 7. Open Graph Image

Status: Recommended before public launch

Recommended size:

```txt
1200x630
```

Recommended location:

```txt
public/images/og-lyken-agency.jpg
```

Content:

- Lyken logo or monogram
- Deep green background
- Champagne gold details
- Tagline:
  Intelligent Strategy. Unforgettable Brands.

---

## 8. Image Assets for Website

The site should avoid generic stock office photography.

Allowed image directions:

- abstract technology
- premium texture
- dark atmospheric visuals
- close-up material textures
- brand system visuals
- editorial abstract compositions

Avoid:

- people in corporate offices
- generic startup teams
- city buildings
- architecture plans
- construction imagery
- colorful 3D illustrations

---

## 9. Placeholder Policy

Placeholders are allowed only during early phases.

If using placeholders:

- name them clearly
- document them
- replace before final audit

Example:

```txt
placeholder-logo.svg
placeholder-mesh.svg
placeholder-texture.webp
```

Do not leave placeholders in final launch.

---

## 10. Asset Folder Structure

Recommended:

```txt
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
      social/
```

---

## 11. Asset Quality Rules

All assets should be:

- high resolution
- optimized
- consistent with brand colors
- not pixelated
- not distorted
- not visually generic
- not too heavy

---

## 12. Pre-Launch Asset Checklist

```txt
[ ] Main logo available
[ ] Horizontal logo available
[ ] LK monogram available
[ ] Favicon available
[ ] Texture available or CSS texture defined
[ ] Digital mesh available or generated
[ ] Icons selected
[ ] Open Graph image prepared
[ ] Placeholder assets removed
[ ] Asset paths organized
[ ] No broken image links
```
