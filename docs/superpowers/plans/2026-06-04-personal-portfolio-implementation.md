# Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first working version of Mai Long's bilingual personal portfolio website.

**Architecture:** Create a Next.js app under `personal-portfolio`, with typed static content files and focused React components. The first version is a single-page portfolio, but the directory structure leaves room for future project detail pages, thoughts/articles, and route-based multilingual pages.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, lucide-react, local static content, npm.

---

## File Structure

- Create: `personal-portfolio/package.json`
  - Owns scripts and dependencies.
- Create: `personal-portfolio/src/app/layout.tsx`
  - Owns root metadata and global shell.
- Create: `personal-portfolio/src/app/page.tsx`
  - Owns the portfolio page composition.
- Create: `personal-portfolio/src/app/globals.css`
  - Owns global design tokens and responsive base styling.
- Create: `personal-portfolio/src/content/types.ts`
  - Owns reusable content types.
- Create: `personal-portfolio/src/content/site.ts`
  - Owns bilingual navigation and profile content.
- Create: `personal-portfolio/src/content/projects.ts`
  - Owns bilingual project entries.
- Create: `personal-portfolio/src/content/sections.ts`
  - Owns research, thoughts, education, awards, and skills content.
- Create: `personal-portfolio/src/components/LanguageProvider.tsx`
  - Owns client-side language state and persistence.
- Create: `personal-portfolio/src/components/SiteHeader.tsx`
  - Owns navigation and language toggle.
- Create: `personal-portfolio/src/components/Section.tsx`
  - Owns shared section layout.
- Create: `personal-portfolio/src/components/Hero.tsx`
  - Owns first-screen identity and CTA.
- Create: `personal-portfolio/src/components/PortfolioSections.tsx`
  - Owns repeated portfolio sections and cards.

## Tasks

### Task 1: Scaffold The App

**Files:**
- Create: `personal-portfolio/*`

- [ ] **Step 1: Create a Next.js app**

Run:

```powershell
npx create-next-app@latest personal-portfolio --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
```

Expected: project files are generated under `personal-portfolio`.

- [ ] **Step 2: Add UI dependency**

Run:

```powershell
cd personal-portfolio
npm install lucide-react
```

Expected: `lucide-react` is added to `package.json`.

### Task 2: Add Typed Content

**Files:**
- Create: `personal-portfolio/src/content/types.ts`
- Create: `personal-portfolio/src/content/site.ts`
- Create: `personal-portfolio/src/content/projects.ts`
- Create: `personal-portfolio/src/content/sections.ts`

- [ ] **Step 1: Define content types**

Create localized text, navigation, project, timeline, award, and skill group
types.

- [ ] **Step 2: Add CV-derived bilingual content**

Populate English content from `CV_MaiLong.docx` and add editable Chinese drafts.

- [ ] **Step 3: Run type validation**

Run:

```powershell
npm run lint
```

Expected: no TypeScript/ESLint errors from content shape.

### Task 3: Add Language State And Layout Components

**Files:**
- Create: `personal-portfolio/src/components/LanguageProvider.tsx`
- Create: `personal-portfolio/src/components/SiteHeader.tsx`
- Create: `personal-portfolio/src/components/Section.tsx`
- Modify: `personal-portfolio/src/app/layout.tsx`

- [ ] **Step 1: Add client language provider**

Use a small client component with `localStorage` persistence and a default
English locale.

- [ ] **Step 2: Add header and shared section components**

Create focused components with simple props and no boolean-prop API sprawl.

- [ ] **Step 3: Run lint**

Run:

```powershell
npm run lint
```

Expected: lint passes.

### Task 4: Build Portfolio Sections

**Files:**
- Create: `personal-portfolio/src/components/Hero.tsx`
- Create: `personal-portfolio/src/components/PortfolioSections.tsx`
- Modify: `personal-portfolio/src/app/page.tsx`

- [ ] **Step 1: Compose the page**

Render `SiteHeader`, `Hero`, and all portfolio sections from typed content.

- [ ] **Step 2: Implement cards and timelines**

Use repeated card components for projects, skills, awards, and education.

- [ ] **Step 3: Run build**

Run:

```powershell
npm run build
```

Expected: production build succeeds.

### Task 5: Polish Visual Design

**Files:**
- Modify: `personal-portfolio/src/app/globals.css`
- Modify: relevant component files.

- [ ] **Step 1: Add modern technology visual system**

Use a dark neutral base, cyan/teal accent, responsive spacing, accessible focus
states, and restrained motion.

- [ ] **Step 2: Verify desktop and mobile**

Run:

```powershell
npm run dev
```

Open the local URL and inspect desktop and mobile viewports.

- [ ] **Step 3: Fix layout issues**

Adjust spacing, typography, cards, and wrapping until text and controls are
usable on both viewports.

### Task 6: Final Verification

**Files:**
- No new files required.

- [ ] **Step 1: Run lint**

Run:

```powershell
npm run lint
```

Expected: no lint errors.

- [ ] **Step 2: Run build**

Run:

```powershell
npm run build
```

Expected: build exits successfully.

- [ ] **Step 3: Run browser verification**

Check:

- English and Chinese language toggle.
- Navigation anchors.
- Desktop layout.
- Mobile layout.
- No obvious console errors.
- Contact links are visible.

- [ ] **Step 4: Commit**

Run:

```powershell
git add AGENTS.md docs personal-portfolio
git commit -m "Build bilingual personal portfolio site"
```

Expected: one commit records the completed first version.

## Self-Review

- Spec coverage: The plan covers Next.js setup, typed bilingual content, single
  page sections, modern visual direction, local verification, and future
  extensibility.
- Placeholder scan: The plan contains no `TBD` or `TODO`; intentional future
  content placeholders are handled in the implementation content model.
- Type consistency: Locale, localized text, project, section, and component
  responsibilities are named consistently across tasks.
