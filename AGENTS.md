# A_personal_proj Agent Guide

This workspace is for personal web development experiments: web apps, websites,
browser-based tools, and games. Favor a disciplined workflow over quick demos.

## Default Workflow

1. Define the goal before building.
   - Use `define-goal` when the requested outcome is still vague.
   - Use `brainstorming` for creative product, feature, UI, or game concepts.
   - For small obvious tasks, infer a reasonable first version and proceed.

2. Choose the smallest suitable stack.
   - Static website: HTML/CSS/TypeScript or Vite.
   - Interactive web app: Vite + React + TypeScript by default.
   - Full-stack React app, SSR, auth, or API routes: Next.js + TypeScript.
   - 2D browser game: Phaser when rules, sprites, scenes, or physics matter.
   - 3D browser experience: Three.js.

3. Plan the first usable version.
   - Prefer a minimal complete user flow over scattered partial features.
   - Record assumptions when product details are missing.
   - Keep the first screen useful; do not build a marketing landing page unless
     explicitly requested.

4. Implement with quality gates.
   - Use `test-driven-development` for new features and bug fixes.
   - Use `security-best-practices` for JavaScript/TypeScript web code involving
     auth, user input, persistence, third-party APIs, uploads, payments, or
     explicit security review.
   - Use `vercel-react-best-practices` when writing, reviewing, or refactoring
     React or Next.js code.
   - Use `vercel-composition-patterns` when building reusable components,
     component libraries, compound components, providers, or component APIs.
   - Use `web-design-guidelines` for UI, UX, accessibility, forms, responsive
     behavior, and visual polish reviews.

5. Verify in a browser.
   - After significant frontend changes, run the app locally and inspect it in
     the Browser plugin or Playwright.
   - Check at least one desktop viewport and one mobile viewport.
   - Verify layout, text fit, interactive states, console errors, and obvious
     accessibility issues.
   - Use `verification-before-completion` before claiming the work is complete.

6. Deploy only when asked.
   - Use `vercel-deploy`, `netlify-deploy`, `cloudflare-deploy`, or
     `render-deploy` based on the requested host.
   - Prefer preview deployments first unless production is explicitly requested.
   - Never commit secrets. Use environment variables or host-specific secret
     configuration.

## Project Organization

Use this workspace layout for new projects unless the user asks otherwise:

```text
D:\A_personal_proj
|-- apps\
|-- websites\
|-- games\
|-- experiments\
`-- AGENTS.md
```

Project-specific docs can live inside each subproject:

```text
<project>\
|-- README.md
|-- docs\
|-- src\
`-- package.json
```

## Frontend Standards

- Use TypeScript for new JavaScript projects when a build tool is present.
- Keep components small, named, and reusable.
- Prefer semantic HTML and accessible controls.
- Use responsive constraints instead of viewport-scaled typography.
- Avoid one-note color palettes and over-decorated layouts.
- Add icons from an existing icon library when available.
- Avoid nested cards and decorative backgrounds that fight the main task.
- Keep user-facing text concise and useful.

## Verification Checklist

Before finishing a web project task, confirm:

- The app builds or the static page opens successfully.
- Core user flow works.
- No obvious console errors.
- Desktop and mobile layouts are usable.
- Text does not overlap or overflow important controls.
- Forms and buttons have accessible labels or visible text.
- Tests, linting, or type checks were run when available.
- Any skipped check is reported with the reason.
