# Technical architecture

## Stack

- Next.js App Router, React and strict TypeScript.
- Tailwind CSS v4 through the PostCSS plugin, with a small global token layer for the bespoke art direction.
- Motion for React for component entry/focus transitions.
- GSAP + ScrollTrigger for the page-level scroll sequence; effects are cleaned up in component lifecycle.
- Three.js + React Three Fiber for a low-density abstract signal field, dynamically loaded client-side with a static fallback.
- Lucide React for interface symbols. The technology tile marks are original wordmarks/geometric marks, not inaccurate downloaded logos.
- Native scroll behavior; Lenis is represented in the learning map, but not enabled. No accessible-navigation benefit justifies a scroll override here.

## Component ownership

- `src/app/page.tsx`: server component and content composition.
- `src/components/PortfolioExperience.tsx`: narrowly-scoped client wrapper for Motion, GSAP and interactive details.
- `src/components/SignalField.tsx`: dynamically loaded R3F scene; isolated from text and section animations.
- `src/data/portfolio.ts`: typed content for projects, skills, timeline and stack tile explanations.
- `src/app/globals.css`: design tokens, Tailwind import, responsive visuals and reduced-motion styles.

Motion owns local opacity/hover properties on tiles. GSAP owns hero/section scroll translation and clip masks. They animate different elements/properties. R3F owns only its own canvas scene.

## Performance and accessibility

- Server-render the textual page; hydrate only focused interactions.
- Dynamically import 3D after first paint; include fallback; use frameloop demand and low particle count.
- Self-host optimized portrait and résumé. Use Next Image dimensions, priority only on the hero, and lazy load below-fold images.
- Native anchors, semantic section headings, keyboard focus styles, descriptive labels and `prefers-reduced-motion` handling.
- 3D does not contain required information; a CSS/HTML fallback carries the meaning.

## Build and local run

- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

Compatibility choices are based on the official Next.js App Router installation guide (Node 20.9+; TypeScript/Tailwind/ESLint defaults), Motion's documented `motion/react` import for App Router, GSAP's npm + ScrollTrigger registration model, and R3F's React 19-compatible v9 line. Dependencies are declared in `package.json`. Network/package access stalled during this session before installation completed, so no lockfile was produced and build/lint/type checks remain to be run after `npm install` succeeds.
