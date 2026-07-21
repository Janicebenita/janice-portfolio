# Janice Benita F — Portfolio

A recruiter-focused, multi-route portfolio for AI/ML, applied AI, backend, software-engineering, research, and campus-placement opportunities.

## Experience design

- Editorial, calm visual system with a warm neutral palette and one restrained green accent
- Compact home-page summary designed for a 10-second recruiter scan
- Dedicated case studies explaining problem, architecture, decisions, validation, results, limitations, and responsible-use boundaries
- Separate Work, Research, About, Résumé, and 404 experiences
- Centralized, strongly typed content in `src/data/site.ts`
- Browser-viewable, text-selectable ATS résumé with no QR graphics
- No backend, database, cookies, analytics, or environment variables

## Technology

React 19, TypeScript strict mode, Vite, React Router, Lucide React, and a plain CSS design system.

## Local setup

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The content test verifies required routes, public assets, and the absence of visible placeholder phrases.

## Content maintenance

- Update personal details, proof points, projects, experience, skills, and publications in `src/data/site.ts`.
- Add a case study to `caseStudies`; `/work/:slug` renders it automatically.
- Leave DOI and URL undefined when they are unavailable; no action is rendered.
- Replace project imagery in `public/images/` and retain meaningful alt text.
- Regenerate the résumé with `tools/generate_resume.py`. Its public filename is `Janice_Benita_AI_ML_Software_Engineer_Resume.pdf`.

## Accessibility and performance

The site includes semantic landmarks, a skip link, keyboard navigation, visible focus treatment, touch-friendly controls, numbered text diagrams, reduced-motion support, meaningful alt text, lazy-loaded noncritical images, and no autoplay media, trackers, third-party widgets, or backend calls.

## Deployment

### Vercel

Import the GitHub repository, use `npm run build`, and publish `dist`. `vercel.json` provides SPA rewrites and security headers.

### Render Static Site

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Rewrite `/*` to `/index.html` for clean client-side routes.

### Netlify

Build with `npm run build`, publish `dist`, and configure `/* /index.html 200` if clean routes do not resolve automatically.

### GitHub Pages

Publish `dist`. An SPA fallback or hash routing is required for project routes. Vercel remains recommended for clean case-study URLs.

## Verified content still unavailable

- EndoXAI repository and public demo URLs
- Digital Quality Intelligence screenshots and publication URL
- Verified project galleries or product screenshots
- Final custom-domain DNS for `janicebenita.dev`

Unavailable actions are omitted. No “Coming soon” or “Link pending” text appears publicly.
