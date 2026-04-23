# UI Components — Integration with Airmap Design System

This document explains how to use **`tensornext/ui-components`** (the 21-component AlignUI-based React library) inside the Airmap design system without drifting from brand.

## What this library is

A production-ready React + TypeScript component library built on:

- **Tailwind CSS** with an **AlignUI**-style token layer
- **Radix UI** primitives for accessibility (`@radix-ui/react-*`)
- **RemixIcon** for iconography (`@remixicon/react`)

21 components · 121 variants. The canonical source is `github.com/tensornext/ui-components@master`. A curated subset of exemplars lives locally in `components-library/`.

Each file is a **standalone variant** — copy it into your app, wire it up to the `@/components/ui/*` primitives, and adjust props. These are not design-system components themselves; they are **composed reference layouts** that use the shared primitives.

---

## Token map — ui-components ↔ Airmap CSS vars

The ui-components library and the Airmap `colors_and_type.css` already use **the same token names** (both derive from `tensornext/iris`). If you are working in Tailwind with the AlignUI theme plugin, everything "just works." If you are styling raw HTML/CSS, use the Airmap CSS var equivalents below.

### Backgrounds

| ui-components (Tailwind)     | Airmap CSS var                           | Hex        |
|------------------------------|------------------------------------------|------------|
| `bg-bg-white-0`              | `var(--bg-white-0)`                      | `#FFFFFF`  |
| `bg-bg-weak-50`              | `var(--bg-weak-50)`                      | `#F7F7F7`  |
| `bg-bg-soft-200`             | `var(--bg-soft-200)`                     | `#EBEBEB`  |
| `bg-bg-sub-300`              | `var(--bg-sub-300)`                      | `#D1D1D1`  |
| `bg-bg-surface-800`          | `var(--bg-surface-800)`                  | `#262626`  |
| `bg-bg-strong-950`           | `var(--bg-strong-950)`                   | `#171717`  |

### Text

| ui-components                 | Airmap CSS var              | Hex        |
|-------------------------------|-----------------------------|------------|
| `text-text-strong-950`        | `var(--text-strong-950)`    | `#171717`  |
| `text-text-sub-600`           | `var(--text-sub-600)`       | `#5C5C5C`  |
| `text-text-soft-400`          | `var(--text-soft-400)`      | `#A3A3A3`  |
| `text-text-disabled-300`      | `var(--text-disabled-300)`  | `#D1D1D1`  |
| `text-text-white-0`           | `var(--text-white-0)`       | `#FFFFFF`  |

### Borders / strokes

| ui-components               | Airmap CSS var            | Hex        |
|-----------------------------|---------------------------|------------|
| `ring-stroke-strong-950`    | `var(--stroke-strong-950)` | `#171717` |
| `ring-stroke-sub-300`       | `var(--stroke-sub-300)`   | `#D1D1D1`  |
| `ring-stroke-soft-200`      | `var(--stroke-soft-200)`  | `#EBEBEB`  |
| `ring-stroke-white-0`       | `var(--stroke-white-0)`   | `#FFFFFF`  |

### Semantic (error / warning / success)

| ui-components              | Airmap CSS var      | Hex        |
|----------------------------|---------------------|------------|
| `text-error-base`          | `var(--error)`      | `#FB3748`  |
| `text-warning-base`        | `var(--warning)`    | `#F6B51E`  |
| `text-success-base`        | `var(--success)`    | `#1DAF61`  |
| `bg-error-lighter`         | `var(--error-light)`   | `#FFEBEC` |
| `bg-warning-lighter`       | `var(--warning-light)` | `#FFFAEB` |
| `bg-success-lighter`       | `var(--success-light)` | `#E3F7EC` |

### Typography classes

The Airmap CSS file ships matching typography classes — use them on any element:

| ui-components Tailwind    | Airmap class            | Size / line-height |
|---------------------------|-------------------------|--------------------|
| `text-label-md`           | `.label-medium`         | 16/24              |
| `text-label-sm`           | `.label-small`          | 14/20              |
| `text-label-xs`           | `.label-x-small`        | 12/16              |
| `text-paragraph-md`       | `.paragraph-medium`     | 16/24              |
| `text-paragraph-sm`       | `.paragraph-small`      | 14/20              |
| `text-paragraph-xs`       | `.paragraph-x-small`    | 12/16              |
| `text-subheading-xs`      | `.subheading-x-small`   | 12/16, 500, caps   |

### Radius

| ui-components   | Airmap var         | px  |
|-----------------|--------------------|-----|
| `rounded-8`     | `var(--radius-8)`  | 8   |
| `rounded-10`    | `var(--radius-10)` | 10  |
| `rounded-12`    | `var(--radius-12)` | 12  |
| `rounded-16`    | `var(--radius-16)` | 16  |
| `rounded-20`    | `var(--radius-20)` | 20  |
| `rounded-full`  | `var(--radius-full)` | 999 |

### Shadows

| ui-components          | Airmap var            |
|------------------------|-----------------------|
| `shadow-regular-xs`    | `var(--shadow-xs)`    |
| `shadow-regular-sm`    | `var(--shadow-sm)`    |
| `shadow-regular-md`    | `var(--shadow-md)`    |
| `shadow-regular-lg`    | `var(--shadow-lg)`    |
| `shadow-custom-md`     | `var(--shadow-md)`    |

---

## Using a variant in Airmap

### In a production Airmap app (Tailwind + AlignUI)

1. Install peers: `@radix-ui/react-* @remixicon/react tailwindcss`
2. Copy the variant file from `components-library/<component>/<variant>.tsx` into `src/components/blocks/`
3. Ensure your `@/components/ui/*` primitives are the AlignUI primitive set (these ship separately — in `tensornext/iris/packages/align-ui` or equivalent)
4. Render `<BlockXxx />` as-is

### In an Airmap prototype (HTML + CSS, no React build)

These TSX files do not run standalone — they depend on `@/components/ui/*`. Use them as **visual reference**: read the markup, copy the token names, rebuild the layout in HTML using `colors_and_type.css`. The Airmap preview cards in `preview/` already demonstrate this pattern (`components-inputs.html`, `components-modal-notification.html`, etc.).

---

## Airmap-specific overrides

The library ships multi-brand variants. When applying them to Airmap:

1. **Strip any accent color.** Some variants use `text-information-base` / `text-feature-base` / `text-away-base` for icon tints (see `notification/notification01.tsx`). In Airmap, **replace all accent colors with `text-text-sub-600`** or leave them mono. Semantic color is only for error/warning/success badges.
2. **No avatar illustrations from alignui.com** (`alignui.com/images/avatar/illustration/*.png`). Use Airmap workspace member initials, or grayscale headshots.
3. **No emoji** anywhere — including default placeholder copy. Rewrite.
4. **Flag icons (`alignui.com/flags/*.svg`)** are fine as-is for phone/country pickers.
5. **Kbd shortcuts** should use `⌘` on macOS, `Ctrl` on Windows. Airmap's command menu always shows `⌘K`.
6. **Tone of copy** — replace marketing-voice defaults (e.g. *"Sophia Williams @sophia"*) with Airmap workspace names (*"Priya Patel · Strategy"*).

---

## Available variants (curated, in `components-library/`)

| Component      | File                                        | Notes                              |
|----------------|---------------------------------------------|------------------------------------|
| Auth Card      | `authcard/authcard01.tsx`                   | Sign-in card with social providers |
| Breadcrumbs    | `breadcrumbs/breadcrumbs01.tsx`             | Icon + chevron trail               |
| Command Menu   | `commandmenu/block01.tsx`                   | ⌘K palette with history + results  |
| Date Picker    | `datepicker/datepicker01.tsx`               | Single-date inline calendar        |
| Dropdown       | `dropdown/dropdown01.tsx`                   | Radix dropdown menu                |
| File Upload    | `fileupload/fileupload01.tsx`               | Uploading / completed / failed     |
| Filter         | `filter/filter01.tsx`                       | Multi-facet filter menu            |
| Modal          | `modal/{email_verification,upload_your_work,new_feature_announcement}.tsx` | Dialog patterns |
| Notification   | `notification/{notification01,notification02}.tsx` | Dropdown + inline toast     |
| Profile Card   | `profilecard/profilecard01.tsx`             | Avatar + role + meta               |
| Rating         | `rating/rating01.tsx`                       | Star rating with avatar            |
| Switch         | `switch/switch01.tsx`                       | Notification preferences pattern   |
| Table          | `table/table01.tsx`                         | Sortable data table                |
| Text Input     | `textinput/{textinput01,03,04}.tsx`         | Social links, contact form, basic  |
| Tooltip        | `tooltip/tooltip01.tsx`                     | Rich tooltip with metric data      |

The full 121-variant set is available in `tensornext/ui-components@master` — use `github_import_files` to pull more on demand.

---

## Do / don't

✅ **Do** use the ui-components library as the starting point for any Airmap React interface.
✅ **Do** copy variants verbatim, then strip accent colors and marketing copy.
✅ **Do** compose variants — a Modal + File Upload + Button stack is a valid Airmap deliverable pattern.
✅ **Do** swap RemixIcon glyphs freely — the whole catalog is available.

❌ **Don't** introduce `text-information-base` or `text-feature-base` into Airmap product chrome.
❌ **Don't** use the alignui.com stock avatar/illustration URLs in shipped product.
❌ **Don't** override the radius scale on a per-component basis — use the system values.
❌ **Don't** skip the typography classes and inline `font-size` — it breaks the type rhythm.
