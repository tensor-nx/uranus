---
name: airmap-design
description: Use this skill to generate well-branded interfaces and assets for Airmap, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Airmap in one line
A monochromatic, calm, document-adjacent workspace for AI-assisted thinking. No brand colors — color only for error/warning/success. Geist throughout. Lucide icons. No emoji. No gradients on primary surfaces.

## Key files
- `README.md` — full design principles (content fundamentals, visual foundations, iconography)
- `UI_COMPONENTS.md` — integration guide for the `tensornext/ui-components` React library (token mapping, overrides)
- `colors_and_type.css` — all CSS tokens and type classes (import this first)
- `assets/` — logos and icon marks
- `fonts/` — Geist TTFs (9 weights)
- `ui_kits/airmap-app/` — reference React components + 3 interactive screens
- `components-library/` — curated TSX exemplars from `tensornext/ui-components`
- `preview/` — swatch / specimen / component cards

## Component strategy
For React/production work: start from `tensornext/ui-components` (or the curated subset in `components-library/`). It ships 21 components · 121 variants, already built on AlignUI tokens that match Airmap's CSS vars. Copy the variant file, strip accent colors per `UI_COMPONENTS.md`, and render.

For prototypes and HTML artifacts: use the variants as **visual reference** and rebuild in HTML using `colors_and_type.css`. Follow the patterns demonstrated in `preview/`.

## Non-negotiable rules
1. Never introduce a brand color. Gray scale only, plus error/warning/success.
2. Hover/active states shift one gray step — never add color.
3. No emoji anywhere in UI or copy.
4. Geist for everything. JetBrains Mono for code only.
5. Generous whitespace. Hairline 1px borders. Tight low-contrast shadows.
