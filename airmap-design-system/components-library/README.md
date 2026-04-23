# components-library/

Curated exemplars from **`tensornext/ui-components`** (master) — a 21-component React library built on Tailwind + Radix + RemixIcon, styled with the same AlignUI-based token system as the Airmap design system.

## What's here

A representative subset (~20 files) of the 121-variant total. See `UI_COMPONENTS.md` at the project root for the full integration guide.

## How to run

These `.tsx` files are **not standalone**. They depend on:

```
@/components/ui/*          (Radix-based primitives from the full library)
@/cn                       (clsx/cva helper)
@remixicon/react
@radix-ui/react-{dialog,dropdown-menu,popover,switch,tooltip,label,...}
tailwindcss
```

To use in a project:

1. `npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-popover @radix-ui/react-switch @radix-ui/react-tooltip @radix-ui/react-label @remixicon/react tailwindcss`
2. Pull the corresponding `@/components/ui/*` primitives from `tensornext/iris` (the Airmap/Iris project) or the upstream AlignUI package
3. Copy the variant file and import as-is

## How to use in Airmap prototypes (HTML)

Read the TSX as **visual reference** — extract token names (`bg-bg-white-0`, `text-text-strong-950`, etc.), map them to `var(--bg-white-0)` / `var(--text-strong-950)` via `colors_and_type.css`, and rebuild the layout in plain HTML. The preview cards in `preview/` already use this pattern.

## Curated set

- **authcard/** — sign-in card with social providers
- **breadcrumbs/** — icon + chevron trail
- **commandmenu/** — ⌘K palette
- **datepicker/** — inline calendar
- **dropdown/** — Radix dropdown menu
- **fileupload/** — 3-state upload (uploading / done / failed)
- **filter/** — multi-facet filter
- **modal/** — 3 dialog patterns (email verification, upload, feature announcement)
- **notification/** — popover + inline toast
- **profilecard/** — avatar + role + meta
- **rating/** — star rating
- **switch/** — preferences panel
- **table/** — data table
- **textinput/** — social links, contact form, basic
- **tooltip/** — rich tooltip

Pull additional variants on demand with `github_import_files` against `tensornext/ui-components@master`.

## Airmap overrides

When using any variant in Airmap, apply the brand overrides from `UI_COMPONENTS.md`:

1. Strip accent colors (`text-information-base`, `text-feature-base`, `text-away-base`) → use `text-text-sub-600`
2. Replace stock `alignui.com/images/avatar/*` URLs with Airmap workspace members
3. Remove any emoji in default copy
4. Rewrite marketing-voice defaults to Airmap's calm, specific voice
