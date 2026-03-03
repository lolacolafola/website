# Laura Website

Marketing site for **The Fandom Flywheel** built with React + Vite.

## Tech Stack

- React 19
- Vite 7
- CSS (no UI framework)
- OGL (for the hero prism background)

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Project Structure

- `src/App.jsx`: Main page layout/content sections
- `src/App.css`: Page section styling
- `src/index.css`: Global reset + design tokens
- `src/components/Prism.jsx`: Animated hero background effect
- `src/components/FlywheelDiagram.jsx`: Fandom Flywheel diagram component

## Current Page Sections

1. Hero
2. Starting Point
3. The Value
4. The Solution (Fandom Flywheel)
5. Why It Works
6. About / Track Record
7. Services
8. Final CTA

## Design Notes

- Core palette currently uses neutral text (`#1A1A1A`, `#333`) with mint accents (`#8CE5D0`, `#4BBFB0`) and light section backgrounds (`#FAFAFA`, `#F0F9FF`).
- Global color tokens are defined in `src/index.css`; section-level overrides are in `src/App.css`.
- Hero prism background is lazy-loaded in `App.jsx` for performance.
- Flywheel visuals are controlled by `FlywheelDiagram.jsx` + related `.flywheel-*` classes in `App.css`.

## Content + Layout Workflow

- Most edits happen in `src/App.jsx` (copy/section order).
- Most visual updates happen in `src/App.css` (spacing, backgrounds, cards, hover states).
- Keep `FlywheelDiagram.jsx` unchanged unless intentionally redesigning the diagram logic itself.

## Deployment

`npm run build` outputs static files to `dist/` for deployment on any static host.
