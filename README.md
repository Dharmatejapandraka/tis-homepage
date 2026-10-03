# Tula's International School — Homepage Redesign

A modern, animated, responsive React/Vite homepage redesign concept for Tula's International School (TIS).

## Assessment alignment

The implementation covers the requested frontend assessment requirements. The design direction is intentionally premium/editorial rather than a generic school template:

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Responsive desktop/tablet/mobile layout
- Semantic section-based architecture
- Smooth scroll-triggered reveals
- Scroll progress indicator
- Animated custom cursor on fine-pointer devices
- Animated light/dark theme switcher with localStorage
- Interactive sports selector
- Testimonial transition
- Micro-interactions and hover states
- Vercel-ready production build
- Consistent light/dark design tokens so theme changes do not create low-contrast sections

## Tech stack

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Project structure

```text
src/
├── components/
│   ├── animation/     # Scroll reveal, progress and custom cursor
│   ├── layout/        # Navbar and footer
│   ├── sections/      # Homepage sections
│   └── ui/            # Reusable UI primitives
├── data/              # Navigation and content data
├── App.jsx
├── index.css
└── main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Deployment

The project is configured for Vercel.

1. Push the project to a public GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

## Image note

The starter build uses remote image URLs so the project runs immediately. Before final submission, replace the demo photography with approved TIS/official assets where required by the assessment. Keep image dimensions optimized for web performance.

## Technical review talking points

### Component architecture
- `sections/` contains page-level sections.
- `layout/` contains persistent site layout.
- `ui/` contains reusable presentation primitives.
- `animation/` centralizes reusable motion behavior.
- `data/` separates content from presentation.

### Standout features
1. Scroll-triggered reveals use a reusable `ScrollReveal` component and Framer Motion's `whileInView`.
2. Scroll progress uses `useScroll` and `useSpring`.
3. Custom cursor is only rendered visually for fine-pointer devices and reacts to interactive elements.
4. Theme switching uses React state plus `localStorage` and CSS variables/classes.

### Performance/accessibility considerations
- Images use lazy loading below the fold.
- Navigation is keyboard-accessible through normal anchor/button semantics.
- Mobile navigation is touch-friendly.
- `prefers-reduced-motion` is respected in global CSS.
- No unnecessary animation library beyond Framer Motion.
- No backend or unnecessary API calls are required for this single-page assessment.

## Important content note

This is a frontend redesign concept. Verify final copy, image permissions, statistics and admission details against the official TIS website immediately before submission.


## Design direction

The visual system uses:
- Deep navy for institutional confidence
- Warm ivory for editorial sections
- Restrained antique-gold accents
- Playfair Display for expressive headlines
- DM Sans for UI and body copy
- Large image-led storytelling
- Rounded surfaces used selectively rather than on every element
- Short, purposeful motion instead of constant animation

The theme switcher is an enhancement. The core assessment value remains the scroll reveal, scroll progress and custom cursor interactions.
