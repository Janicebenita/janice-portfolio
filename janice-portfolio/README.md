# Janice Benita F — Portfolio

A production-ready, responsive portfolio for Janice Benita F, an AI/ML Engineer focused on Explainable AI, Computer Vision, AI Agents, and Data Analytics. The site presents experience, selected systems, research, skills, recognition, education, and contact details in a fast static React application.

## Features

- Dark-mode-first premium interface with an optional light theme
- Responsive navigation with active-section tracking and mobile menu
- Data-driven projects, experience, publications, skills, awards, and certifications
- Subtle Framer Motion reveals with reduced-motion support
- Semantic HTML, visible focus states, keyboard navigation, and strong contrast
- Open Graph, Twitter, canonical, sitemap, robots, and JSON-LD metadata
- Static deployment configuration for GitHub Pages, Render, Vercel, and Netlify

## Tech stack

React 19, TypeScript (strict), Vite 7, Framer Motion, Lucide React, and a compact custom CSS design system. The included Tailwind configuration is retained for future extension, while the current UI avoids an unnecessary runtime or build dependency.

## Local setup

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
npm run preview
```

No environment variables, backend, database, or CMS are required.

## Content customisation

Repeated content is typed and stored in `src/data`. Update personal information in `profile.ts`, projects in `projects.ts`, experience in `experience.ts`, research in `publications.ts`, and capabilities in `skills.ts`. Components live in `src/components`; the visual system is in `src/index.css`.

## Deployment

- **Vercel:** import the repository. The framework is detected as Vite; output is `dist`. `vercel.json` adds safe response headers.
- **Render Static Site:** set Root Directory to `janice-portfolio`, build command to `npm install && npm run build`, and publish directory to `dist`.
- **Netlify:** build command `npm run build`; publish directory `dist`. No redirect file is needed because this is a one-page site.
- **GitHub Pages:** enable Pages with “GitHub Actions” as the source. `.github/workflows/deploy.yml` builds with Node 22 and deploys `dist`. The Vite base path is applied only in GitHub Actions.

For the custom domain, point `janicebenita.dev` to the selected host and add the domain in that provider's dashboard.

## Repository structure

```text
public/                 Static metadata, imagery, and resume target
src/components/        Page sections and reusable UI
src/data/              Typed portfolio content
src/index.css          Design system and responsive styles
.github/workflows/     GitHub Pages deployment
```

## Known placeholders to replace

- EndoXAI repository URL (the interface visibly labels it as pending)
- Project demo URLs
- Profile photo (the monogram composition intentionally keeps the current layout complete)
- Publication DOI / journal links
- Final custom-domain DNS and hosting configuration

The downloadable resume at `public/resume/Janice_Benita_F_resume.pdf` is generated exclusively from the verified profile content used by this site. Replace it only when Janice supplies a newer final resume.

## Accessibility and performance

The page uses landmarks, a logical heading hierarchy, descriptive alt text, a skip link, explicit focus styling, accessible controls, and `prefers-reduced-motion`. Noncritical project images are lazy-loaded with fixed intrinsic dimensions to reduce layout shift. The site has no remote data calls; the only optional external request is the Google Fonts stylesheet, with system-font fallbacks.

## Screenshots

Add final desktop and mobile screenshots here after the production domain is connected.
