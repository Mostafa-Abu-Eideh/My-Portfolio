# Mostafa Abu Eideh — portfolio

A bilingual (English / Arabic) portfolio built with **React 19, TypeScript and Vite**.

- The hero shows the name in both scripts; a seam follows the pointer to reveal one language on each side.
- The **عربي / English** button switches the whole page to right-to-left Arabic, with a curtain animation.
- Two colour themes, **Black & gold** and **Pine & olive gold**, remembered between visits.
- Respects "reduce motion", keyboard-accessible, responsive down to small phones.

## Scripts

```bash
npm install        # once
npm run dev        # local dev server with hot reload
npm test           # run the tests (Vitest + React Testing Library)
npm run lint       # lint with oxlint
npm run build      # type-check and build to dist/
npm run preview    # serve the built site locally
```

## Project structure

```
src/
  content/         All text and data. Edit these to change what the site says.
    profile.ts       name, email, links
    projects.ts      projects (English + Arabic)
    skills.ts        skill groups
    strings.ts       interface copy (English + Arabic)
    types.ts         shared types (Lang, Bilingual, Project, ...)
  i18n/            Language state: context, provider and useLanguage() hook
  theme/           Theme state: context, provider and useTheme() hook
  hooks/           Reusable hooks (useScrolled, usePrefersReducedMotion)
  components/      One folder per component, each with its own CSS
    Header/          Header, ThemeToggle, LanguageToggle
    Hero/            Hero, KineticName, useSeam (the pointer-driven animation)
    About/  Skills/  Learning/
    Projects/        Projects, ProjectCard
    Contact/         Contact, EmailLink, CopyEmailButton
    Footer/
    LanguageCurtain/ the full-screen sweep when the language changes
    common/          Section (paired EN/AR heading), RichText (**bold** in copy)
  styles/global.css  theme colours, base styles, shared .btn
  test/              test setup and a render helper
```

### How the main pieces work

- **Language**: `LanguageProvider` holds the current language and sets `lang` / `dir` on `<html>`, the tab title and the `#ar` URL hash. Components call `useLanguage()` and pick text with `t(strings.something)`.
- **Theme**: `ThemeProvider` sets `data-theme` on `<html>`; every colour is a CSS variable in `global.css`, so the theme is one attribute. A tiny script in `index.html` applies the saved theme before React loads, so there is no colour flash.
- **Hero animation**: `useSeam` runs a `requestAnimationFrame` loop and writes CSS variables (`--x`, `--w`) directly, because it updates 60 times a second, which is too often for React state.

## Before publishing

- Put the resume PDF at `public/resume.pdf`.
- Replace the `repoUrl` values in `src/content/projects.ts` with the real repository links.

## Deploying

`.github/workflows/deploy.yml` lints, tests, builds and publishes to GitHub Pages on every push to `main`.
In the repository settings, set **Pages → Source** to **GitHub Actions**.
The build uses relative paths (`base: './'`), so it works at `https://<user>.github.io/<repo>/`.
