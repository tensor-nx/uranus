# Airmap Design System

Airmap is a platform for serious AI-assisted thinking and team collaboration — a shared workspace where knowledge workers think through hard problems with AI, capture what matters, and promote the best ideas into polished, versioned deliverables.

This design system is the single source of truth for building Airmap interfaces, pitch decks, prototypes, and brand artifacts.

---

## Sources

- **`tensornext/iris`** — `apps/airmap-components/` (master) — canonical CSS tokens, typography classes, `Guidelines.md`
- **`tensornext/ui-components`** — `master` — 21-component AlignUI-based React library (TypeScript + Tailwind + Radix + RemixIcon). Curated exemplars live under `components-library/`.
- **Figma (attached .fig)** — authoritative visual spec for shadow system, radius scale, button states, text inputs, tags, badges, navigation, modals/drawers/tooltips, and the AI-Product surface.
- **Uploaded assets** — `AM-Logo-{Dark,Light}.svg`, `AM-Icon-{Dark,Light}.svg`, Geist TTFs (9 weights).

---

## Index

| File / Folder | Purpose |
|---|---|
| `colors_and_type.css` | All CSS custom properties (color, radius, spacing, shadow) + typography classes. Import first. |
| `fonts/` | Geist TTFs (Thin → Black). Geist Variable woff2 upright + italic also available. |
| `assets/` | Logos (dark + light), icon marks, and any generic brand imagery. |
| `preview/` | 26 design-system cards (colors, type, spacing, radius, shadows, components, brand). |
| `ui_kits/airmap-app/` | Interactive React recreation of the Airmap workspace (sidebar, map, composer, context panel, deliverables). |
| `components-library/` | Curated TSX exemplars from `tensornext/ui-components` — token-mapped, copy-pasteable reference. |
| `UI_COMPONENTS.md` | How the `ui-components` library maps onto the Airmap system — tokens, do's and don'ts. |
| `SKILL.md` | Claude Skill packaging. |
| `ICONOGRAPHY.md` *(in this README)* | Icon strategy — RemixIcon line-style. |

---

## Content Fundamentals

Airmap sounds like a **calm, senior colleague** — specific, structured, plainspoken. Never cheerful, never fluffy.

- **Voice:** second person (*"your map"*, *"you captured"*), never first-person plural.
- **Casing:** Sentence case for everything except product names (*Airmap*, *Map*, *Deliverable*). No Title Case headings.
- **Punctuation:** period-terminated sentences in UI copy, but commands/buttons drop periods.
- **No emoji**, anywhere. No exclamation points in UI surfaces (permissible in empty states if truly warranted, but default to none).
- **No jargon.** "AI" is fine; "LLM", "prompt", "context window" are not user-facing.
- **Hedging is allowed** — *"this looks like…"*, *"consider…"* — the product is a thinking environment, not an oracle.
- **Numbers are precise**: *"12 captures"* not *"a dozen captures"*. Dates are relative up to 7 days (*"3 days ago"*), absolute after.

**Copy examples**
- ✅ "Capture a thought or paste a source — Airmap will help you connect it to what you already have."
- ✅ "Three drafts ready for review."
- ❌ "🚀 Let's get you started!"
- ❌ "We noticed you haven't captured anything yet."

---

## Visual Foundations

### Color

Strictly monochromatic gray scale. Color is reserved for three semantic states only: error, warning, success. Hover and active states shift one gray step — never introduce a color.

- **Page bg (light):** `#F7F7F7` · **Card:** `#FFFFFF` · **Elevated:** `#EBEBEB`
- **Text primary:** `#171717` · **secondary:** `#5C5C5C` · **muted:** `#A3A3A3` · **disabled:** `#D1D1D1`
- **Border strong:** `#171717` · **default:** `#EBEBEB` (soft) · **subtle:** `#EBEBEB` · **sub:** `#D1D1D1`
- **Semantic:** error `#FB3748` / warning `#F6B51E` / success `#1DAF61` (each has a `*-lighter` tint for backgrounds)
- Full neutral scale: 0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- Slate scale also defined (for icons and overlays): 0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Typography

**Geist Sans** throughout, all weights 100–900. **JetBrains Mono** for code / metadata only (loaded via Google Fonts).

Scale (from Figma):
- Display: H1 56/64 · H2 48/56 · H3 40/48 · H4 32/40 · H5 24/32 · H6 20/28 (all weight 550)
- Labels: xl 24/32 · lg 18/24 · md 16/24 · sm 14/20 · compact 13/20 · xs 12/16 (weight 500)
- Paragraph: xl 24/32 · lg 18/24 · md 16/24 · sm 14/20 · compact 13/20 · xs 12/16 (weight 400)
- Subheading: md 16/24 · sm 14/20 · xs 12/16 · 2xs 11/12 (weight 500, uppercase label feel)
- Mono: md 16/24 · sm 14/20 · xs 12/16 · 2xs 10/16 (JetBrains Mono weight 500)
- Inputs carry letter-spacing `-0.006em`; body/labels `-0.015em` at ≥16px.

Hierarchy comes from weight and size, never color.

### Spacing

Base unit 2 — scale: **2, 4, 6, 8, 10, 12, 14, 16, 24, 32, 40, 48**. Cards pad 16–20px; panels 20–24px; page gutters 48–64px. Generous whitespace is non-negotiable.

### Radius

**0 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 28 · 999**
- `4` — tags
- `8` — small inputs, dropdown menus
- `10` — standard inputs (default field)
- `12` — cards, buttons
- `16` — panels, alerts
- `20` — large cards, modal surfaces
- `999` — pills, badges, avatars

### Shadows

Subtle, stacked, cool-tinted. Never heavy. Five shadow tokens:

- `--shadow-xs` · `0 1px 2px 0 rgba(10,13,20,0.03)` — default on buttons and inputs
- `--shadow-sm` · `0 2px 4px rgba(27,28,29,0.04)` — raised buttons
- `--shadow-md` · `0 16px 32px -12px rgba(88,92,95,0.1)` — popovers, tooltips
- `--shadow-lg` · `0 16px 40px -8px rgba(13,13,13,0.08)` — dropdown menus, cards-on-hover
- `--shadow-xl` · `0 24px 48px -8px rgba(10,13,20,0.12)` — modals, drawers

Also: **focus halo** `0 0 0 2px #FFF, 0 0 0 4px rgba(153,160,174,0.16)` for interactive focus states.

### Borders

Always hairline 1px. Default soft `#EBEBEB`, strong `#171717`. Never use 2px for UI chrome (only for focus ring via box-shadow). Dashed borders (`1px dashed rgba(23,23,23,0.12)`) used only for drop targets and empty captures.

### Backgrounds & imagery

Cards are always flat white. Page background `#F7F7F7`. No gradients on product surfaces. **No full-bleed marketing imagery in product UI.** Decorative imagery (logo marks, avatar illustrations) may appear in auth cards and onboarding — always in grayscale.

### Animation

- **Durations:** 120ms (hover), 200ms (focus, popovers), 300ms (modals, drawers)
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (soft-out) for entrances, linear for opacity-only crossfades
- No bounces, no spring overshoot. No parallax. No page-load animations.
- **Hover:** background shifts one gray step — `bg-white-0 → bg-weak-50 → bg-soft-200`
- **Press:** background shifts two gray steps and reduces to `0.98` scale briefly (150ms)
- **Focus:** 4px slate halo described above

### Transparency & blur

Used sparingly. Modal backdrops: `rgba(14,18,27,0.24)` with 8px blur. Sticky headers above scrolling content get `backdrop-filter: blur(12px)` + `bg-bg-white-0/80`. Never used for aesthetic-only purposes.

### Layout rules

- Three-pane desktop: collapsible **left sidebar** (240–280px) · **center canvas** (fluid, 640–960px ideal content width) · optional **right context panel** (320–360px)
- Max page content width: **1200px** on marketing, **1440px** in-app
- Top bar is always **56px** tall
- **12-column** grid at ≥1024px; 6-col at 640–1023px; 4-col below 640px

---

## Iconography

**Primary icon set: RemixIcon (v4.2.0)** — line style by default, fill used for active/selected indicators and semantic status marks only.

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">
<i class="ri-search-2-line"></i>
```

In React / production: `@remixicon/react` — named imports (`RiSearch2Line`, `RiCloseLine`, etc.).

**Rules**
- Line icons at 18–20px for inline UI; 24px for compact buttons; 16px for dense lists.
- Stroke is 1.75px (matches Figma exports).
- Never mix line and fill in the same cluster unless indicating state (e.g., active tab icon fills).
- Never hand-roll SVGs in this system — use RemixIcon's ~2,900 glyphs.
- **No emoji** anywhere. **No unicode-as-icon** (no → ▸ ✓ in UI copy — use the RemixIcon equivalent).
- Semantic color is applied via `text-success-base`, `text-error-base`, etc., only on status icons.

**Most-used icons** (from Figma usage counts): `RiSearch2Line`, `RiUser6Line`, `RiArrowRightSLine`, `RiMoreLine`, `RiCloseLine`, `RiAddLine`, `RiSettingsLine`, `RiCheckLine`, `RiFilterLine`, `RiAttachmentLine`, `RiEditLine`, `RiDeleteBinLine`.

Assets in `assets/`: Airmap logo (dark / light) + icon mark (dark / light) as SVG.

---

## Component library

The Airmap design system is implemented in two layers:

1. **Tokens + primitive CSS** — `colors_and_type.css` (from `tensornext/iris`). Works in any HTML/CSS context.
2. **React components** — `tensornext/ui-components` — a 21-component AlignUI-based library (TypeScript + Tailwind + Radix + RemixIcon). See **`UI_COMPONENTS.md`** for token mapping and usage, and **`components-library/`** for curated exemplars.

**Available components:** Accordion, Auth Card, Breadcrumbs, Checkbox, Color Picker, Command Menu, Date Picker, Drawer, Dropdown, File Upload, Filter, Modal, Notification, Profile Card, Radio, Rating, Slider, Switch, Table, Text Input, Tooltip — 121 variants in total.

---

## Non-negotiable rules

1. **Monochromatic only.** Never introduce a brand color. Semantic color exists for error/warning/success and nowhere else.
2. **Hover and active shift one gray step.** Never add color on hover.
3. **No emoji, ever.** Not in UI, not in copy, not in empty states.
4. **Geist everywhere.** JetBrains Mono for code and IDs only.
5. **Hairline borders.** 1px only for chrome. Focus states use box-shadow halos, not thick borders.
6. **Generous whitespace.** When in doubt, remove density.
7. **No decoration without purpose.** If you can't justify it, delete it.
