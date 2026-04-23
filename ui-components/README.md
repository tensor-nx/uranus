# ui-components

A collection of reusable React UI components built with TypeScript, Tailwind CSS, and Radix UI primitives.

## Components

| Component | Variants |
|-----------|----------|
| Accordion | 4 |
| Auth Card | 8 |
| Breadcrumbs | 4 |
| Checkbox | 11 |
| Color Picker | 4 |
| Command Menu | 9 |
| Date Picker | 5 |
| Drawer | 8 |
| Dropdown | 5 |
| File Upload | 8 |
| Filter | 5 |
| Modal | 7 |
| Notification | 4 |
| Profile Card | 4 |
| Radio | 9 |
| Rating | 3 |
| Slider | 5 |
| Switch | 3 |
| Table | 6 |
| Text Input | 5 |
| Tooltip | 4 |

**Total: 21 components · 121 variants**

## Stack

- **React** with TypeScript (`.tsx`)
- **Tailwind CSS** for styling
- **Radix UI** for accessible primitives
- **Remix Icon** (`@remixicon/react`) for icons

## Usage

Each file in a component folder is a standalone variant. Copy the file into your project and import it directly — no build step or package install required beyond the dependencies listed above.

```bash
# Install peer dependencies
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
            @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tooltip \
            @remixicon/react tailwindcss
```

## Structure

```
ui-components/
├── accordian/        # accordion01–04
├── authcard/         # authcard01–08
├── breadcrumbs/      # breadcrumbs01–04
├── checkbox/         # checkbox01–11
├── colorpicker/      # colorpicker01–04
├── commandmenu/      # block01–09
├── datepicker/       # datepicker01–05
├── drawer/           # drawer01–08
├── dropdown/         # dropdown01–05
├── fileupload/       # fileupload01–08
├── filter/           # filter01–05
├── modal/            # 7 named variants
├── notification/     # notification01–04
├── profilecard/      # profilecard01–04
├── radio/            # radio01–09
├── rating/           # rating01–03
├── slider/           # slider01–05
├── switch/           # switch01–03
├── table/            # table01–06
├── textinput/        # textinput01–05
└── tooltip/          # tooltip01–04
```
