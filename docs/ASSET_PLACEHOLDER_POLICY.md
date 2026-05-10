# ASSET_PLACEHOLDER_POLICY.md

# Lyken Agency Website — Asset Placeholder Policy

## Purpose

This document defines the official policy for handling missing brand assets during the development of the Lyken Agency website.

The project may start before all final visual assets are available.

This should not block development.

Instead, the project must use structured temporary assets that can later be replaced by the final official assets without requiring code changes.

---

## 1. Core Rule

If an official brand asset is not available yet, the executor must create a high-quality temporary version using:

- the final expected file name
- the final expected folder path
- the final expected file type when possible
- the Lyken visual identity
- a clear internal note that the asset is provisional

The temporary asset must be replaceable later by simply replacing the file.

No code refactor should be required when the final asset becomes available.

---

## 2. Main Principle

```txt
Build now with structured temporary assets.
Replace later with final brand assets.
No code refactor should be required for the replacement.
```

Portuguese reference:

```txt
Construir agora com assets temporários estruturados.
Substituir depois pelos assets finais da marca.
A troca não deve exigir refatoração de código.
```

---

## 3. Why This Policy Exists

This policy prevents:

- development delays caused by missing images
- messy temporary file names
- scattered placeholder assets
- code references to temporary names
- broken visual structure
- future rework when official assets arrive
- inconsistent brand implementation

The goal is to keep the project moving while preserving a clean and professional asset structure.

---

## 4. Assets Covered by This Policy

This policy applies to:

- main logo
- horizontal logo
- LK monogram
- favicon
- Open Graph image
- dark texture
- digital mesh
- particle visuals
- icon files
- decorative SVGs
- PNG/WebP brand visuals
- any visual file required by the website

---

## 5. Required Behavior When an Asset Is Missing

When an asset is missing, the executor must:

1. Create a temporary asset.
2. Use the final expected file name.
3. Use the final expected folder path.
4. Keep the design aligned with the Lyken identity.
5. Document that the asset is provisional.
6. Avoid writing code that depends on temporary naming.
7. Avoid blocking the phase because of the missing asset.
8. Ensure the final asset can replace the temporary one without code changes.

---

## 6. Required Folder Structure

Temporary and final assets should use the official folder structure.

Recommended structure:

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

## 7. Final File Names to Use

Even if the content is temporary, use final names.

## Logos

```txt
public/logos/lyken-logo.svg
public/logos/lyken-logo-horizontal.svg
public/logos/lyken-monogram.svg

src/assets/logos/lyken-logo.svg
src/assets/logos/lyken-logo-horizontal.svg
src/assets/logos/lyken-monogram.svg
```

## Favicon

```txt
public/favicon/favicon.ico
public/favicon/favicon-32x32.png
public/favicon/apple-touch-icon.png
```

## Images

```txt
public/images/og-lyken-agency.jpg
```

## Textures

```txt
src/assets/textures/dark-grain.webp
src/assets/textures/dark-texture.webp
```

## Digital Mesh

```txt
src/assets/mesh/gold-digital-mesh.svg
src/assets/mesh/gold-digital-mesh.webp
```

## Icons

```txt
src/assets/icons/
src/assets/icons/social/
```

---

## 8. Bad File Names to Avoid

Do not use names like:

```txt
temp-logo.svg
logo-test.svg
logo-final-v2.png
placeholder-logo.png
fake-logo.svg
test-favicon.ico
mesh-placeholder.png
new-logo-copy.svg
asset-test.svg
image-final-final.png
```

These names create future confusion and force code changes later.

---

## 9. Temporary Asset Quality Rules

Temporary assets must still look professional.

They should follow the Lyken visual identity:

- deep green background
- champagne gold details
- premium minimal composition
- thin lines
- subtle texture
- editorial balance
- technological elegance
- clean geometry
- refined contrast

Temporary assets must not look careless or generic.

---

## 10. Visual Style for Temporary Logo Assets

If the official logo is missing, create a simple temporary logo using:

- the word “LYKEN”
- optional “AGENCY” descriptor
- champagne gold
- transparent or deep green background
- elegant spacing
- simple premium composition

The temporary logo should not try to invent a new identity.

It should be a minimal substitute until the official file is available.

---

## 11. Visual Style for Temporary LK Monogram

If the official monogram is missing, create a simple temporary monogram using:

```txt
LK
```

Visual rules:

- champagne gold
- serif or elegant letterform if possible
- simple geometric balance
- no excessive effects
- no distortion
- no aggressive glow

The monogram should be usable in:

- loading
- favicon
- footer watermark
- contact watermark

---

## 12. Visual Style for Temporary Favicon

If the favicon is missing, create a temporary favicon from the LK monogram.

Rules:

- must remain readable at small sizes
- use deep green background if needed
- use champagne gold letters or symbol
- avoid tiny complex details

---

## 13. Visual Style for Temporary Texture

If the official texture is missing, create or use a subtle CSS-based texture.

Acceptable temporary solutions:

- CSS radial gradients
- subtle noise overlay
- low-opacity grain
- dark green layered background
- soft vignette

Rules:

- texture must not harm readability
- texture must not be visually noisy
- texture must not look dirty or low quality

---

## 14. Visual Style for Temporary Digital Mesh

If the official digital mesh is missing, create a temporary mesh using:

- SVG lines
- small gold particles
- subtle wave structure
- low opacity
- elegant spacing
- no generic circuit-board style

The mesh should represent:

```txt
connection
intelligence
transformation
digital presence
living brand energy
```

Avoid:

- cyberpunk neon
- bright circuit graphics
- random tech backgrounds
- excessive particles
- distracting animation

---

## 15. Visual Style for Temporary Open Graph Image

If the final OG image is missing, create a temporary version using:

- deep green background
- LK monogram or Lyken wordmark
- champagne gold details
- subtle texture
- tagline:
  `Intelligent Strategy. Unforgettable Brands.`

Recommended size:

```txt
1200x630
```

Recommended path:

```txt
public/images/og-lyken-agency.jpg
```

---

## 16. Documentation Requirement

Whenever a temporary asset is created, document it.

Recommended place:

```txt
BRAND_ASSETS_INVENTORY.md
```

or a local note inside this policy/checklist.

Document:

- asset path
- temporary or official status
- purpose
- replacement instructions if needed

Example:

```txt
Asset: public/logos/lyken-monogram.svg
Status: Temporary
Purpose: Loading, favicon, footer watermark
Replacement: Replace this file with official LK monogram using the same filename.
```

---

## 17. Replacement Rule

When the final asset becomes available:

1. Keep the same file name.
2. Keep the same folder path.
3. Replace the temporary file.
4. Do not change imports unless absolutely necessary.
5. Re-run build.
6. Check visual display.
7. Check mobile.
8. Check console for broken paths.

The ideal replacement requires:

```txt
file swap only
```

---

## 18. Code Reference Rule

Code should reference final paths, not temporary names.

Good:

```txt
src/assets/logos/lyken-monogram.svg
```

Bad:

```txt
src/assets/logos/temp-monogram.svg
```

Good:

```txt
public/logos/lyken-logo.svg
```

Bad:

```txt
public/logos/placeholder-logo.svg
```

---

## 19. Do Not Overwrite Official Assets

If an official asset already exists, do not overwrite it without explicit user approval.

If unsure whether an asset is official or temporary, ask the user or document the uncertainty.

Do not replace official files with generated placeholder files.

---

## 20. Do Not Block Development

Missing final assets should not block:

- Phase 00 foundation
- Phase 01 visual system
- Phase 03 layout
- Phase 04 loading
- Phase 05 Hero
- Phase 08 motion
- Phase 11 SEO/metadata

Instead, use structured temporary assets and continue.

---

## 21. When to Ask the User

Ask the user only when:

- there is a risk of overwriting an official file
- the asset decision affects brand direction
- the user must provide a real logo file
- the placeholder cannot be created safely
- a domain/social/brand asset choice requires business approval

Do not ask the user just because an asset is missing if a safe temporary substitute can be created.

---

## 22. Placeholder Acceptance Criteria

A temporary asset is acceptable when:

- it uses the final expected name
- it is in the final expected folder
- it follows Lyken colors
- it looks clean and premium
- it is not visually distracting
- it does not break the layout
- it can be replaced without code changes
- it is documented as temporary
- it does not overwrite an official asset

---

## 23. Placeholder Rejection Criteria

A temporary asset is not acceptable if:

- it uses a messy temporary file name
- it is placed in a random folder
- it looks generic or careless
- it uses wrong colors
- it introduces unrelated visual style
- it forces future code refactor
- it breaks responsive layout
- it is not documented
- it overwrites an official asset

---

## 24. Phase Prompt Requirement

Any Codex/Copilot prompt that touches assets must include this instruction:

```txt
If official brand assets are missing, create structured temporary assets using the final expected file names and final expected paths. The temporary assets must follow the Lyken visual identity and be replaceable later by swapping files only, without requiring code changes. Do not use messy temporary names. Do not overwrite official assets.
```

---

## 25. Final Audit Checklist

Before completing any phase that involves assets, verify:

```txt
[ ] Missing official assets were handled with structured temporary assets
[ ] Temporary assets use final file names
[ ] Temporary assets use final folder paths
[ ] Temporary assets follow Lyken visual identity
[ ] Temporary assets are documented
[ ] Code does not reference temporary names
[ ] No official assets were overwritten
[ ] Assets can be replaced later by file swap only
[ ] No messy placeholder files remain
[ ] No broken asset paths exist
```

---

## 26. Final Rule

The absence of final brand assets should never create a messy project.

The correct approach is:

```txt
structured placeholders now
official assets later
no code refactor required
```
