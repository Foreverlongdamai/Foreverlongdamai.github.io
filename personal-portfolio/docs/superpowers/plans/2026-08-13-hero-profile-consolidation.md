# Hero Profile Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the useful profile, metrics, and game-creation content into the Hero, show both emails above the fold, remove the standalone About section, and retain only three strong projects.

**Architecture:** Keep profile, hobby, and project content in the existing data modules. `Hero.tsx` becomes the sole renderer for `profile.intro`, metrics, and `hobby`; `PortfolioSections.tsx` begins with Research and continues rendering the remaining sections. Tests assert the data contract and rendered structure before implementation changes are made.

**Tech Stack:** Next.js 16, React 19, TypeScript, Lucide React, CSS, Vitest, GitHub Actions, GitHub Pages.

---

### Task 1: Lock the content changes with failing tests

**Files:**
- Modify: `src/content/content.test.ts`
- Modify: `src/components/PortfolioSections.test.tsx`
- Create: `src/components/Hero.test.tsx`

- [ ] **Step 1: Update the identity and navigation assertions**

Add exact assertions for:

```ts
expect(siteContent.profile.role).toEqual({
  en: "Graduate Student in Computer Technology at Shandong University of Science and Technology",
  zh: "山东科技大学计算机技术研究生",
});
expect(siteContent.navigation.some((item) => item.id === "about")).toBe(false);
expect(portfolioSections.some((section) => section.id === "about")).toBe(false);
```

- [ ] **Step 2: Update the project assertions**

Require exactly three projects and explicitly reject the e-commerce slug:

```ts
expect(projects).toHaveLength(3);
expect(projects.map((project) => project.slug)).toEqual([
  "pilot-assessment-ai-system",
  "underwater-fouling-detection",
  "traffic-scene-simulation",
]);
expect(projects.some((project) => project.slug === "simple-ecommerce-webpage")).toBe(false);
```

- [ ] **Step 3: Add the Hero rendering contract**

Create `Hero.test.tsx`, render `Hero` inside `LanguageProvider`, and assert that the markup contains the English role, `mailto:Mai.Long.358@cranfield.ac.uk`, `mailto:long204323@gmail.com`, both visible email addresses, `profile.intro.en`, `3` project tracks, the Hobby GitHub and Workshop links with safe external-link attributes, and no `Embodied AI Stack` or `system-visual` class.

- [ ] **Step 4: Update the PortfolioSections contract**

Move Hobby link assertions out of `PortfolioSections.test.tsx`. Add assertions that `PortfolioSections` contains no `id="about"`, no e-commerce title, and still renders all remaining professional sections.

- [ ] **Step 5: Verify the red state**

Run:

```powershell
npm test -- src/content/content.test.ts src/components/Hero.test.tsx src/components/PortfolioSections.test.tsx
```

Expected: FAIL because the old role, About section/navigation, system visual, one-email Hero, and fourth project still exist.

### Task 2: Update content sources

**Files:**
- Modify: `src/content/site.ts`
- Modify: `src/content/sections.ts`
- Modify: `src/content/projects.ts`

- [ ] **Step 1: Update the bilingual identity**

Set `profile.role` to the exact strings required by Task 1.

- [ ] **Step 2: Remove the About navigation and section records**

Delete `{ id: "about", ... }` from `siteContent.navigation` and remove the `id: "about"` object from `portfolioSections`.

- [ ] **Step 3: Keep the intro aligned with visible projects**

Remove only `and web development` / `和 Web 开发` from `profile.intro`, leaving its remaining approved content intact.

- [ ] **Step 4: Delete the e-commerce project**

Remove the complete `simple-ecommerce-webpage` object from `projects.ts` so the data source contains exactly the three approved projects.

- [ ] **Step 5: Run the content test**

Run:

```powershell
npm test -- src/content/content.test.ts
```

Expected: PASS for identity, navigation, and project data; component tests remain pending.

### Task 3: Consolidate About content into the Hero

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/PortfolioSections.tsx`

- [ ] **Step 1: Replace Hero visual imports**

Remove `BrainCircuit`, `Network`, and `Radar`. Import `ArrowUpRight`, `FolderGit2`, `Gamepad2`, `projects`, and `hobby` for the right-column content.

- [ ] **Step 2: Render both Hero email links**

Keep the affiliation row and map `profile.contacts` into separate localized email rows. Each row contains a `Mail` icon, a localized label combining organization and `email`, and an `href` of `mailto:${contact.email}`. Change the secondary contact CTA to `href="#contact"`.

- [ ] **Step 3: Replace the system visual with profile content**

Render a `hero-profile-content` container with:

```tsx
<div className="lead-panel hero-intro-panel">
  <p>{getLocalizedText(profile.intro, locale)}</p>
</div>
<div className="metrics-grid">...</div>
<article className="hobby-card">...</article>
```

Use `projects.length` for the first metric and preserve the existing Hobby links and labels.

- [ ] **Step 4: Remove the standalone About renderer**

Delete the first `<Section section={findSection("about")}>...</Section>` block from `PortfolioSections.tsx`, remove its Hobby imports, and reduce `projectIcons` to `[BrainCircuit, Ship, CarFront]`.

- [ ] **Step 5: Run focused component tests**

Run:

```powershell
npm test -- src/components/Hero.test.tsx src/components/PortfolioSections.test.tsx
```

Expected: PASS with Hobby content only in Hero and no standalone About section.

### Task 4: Adapt Hero layout and remove obsolete visual CSS

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add Hero profile-content layout rules**

Add `.hero-profile-content` as a grid with a one-rem gap, safe minimum width, and the existing rise-in animation. Add `.hero-email-list` and `.hero-email-link` rules that keep each email on its own flexible row and allow `overflow-wrap: anywhere`.

- [ ] **Step 2: Compact the right-column cards**

Keep the shared `.lead-panel`, `.metrics-grid`, and `.hobby-card` visuals. Use Hero-specific selectors to slightly reduce padding and type size where needed without changing the same components elsewhere.

- [ ] **Step 3: Delete obsolete visual rules**

Remove `.system-visual`, `.visual-topline`, `.visual-grid`, `.visual-node*`, `.visual-pipeline*`, `.visual-caption`, and `.node-dot*` rules. Keep `.skill-card-title` and `.project-card-header` in their own shared flex rule.

- [ ] **Step 4: Preserve responsive flow**

At desktop widths, keep the existing two-column grid. On tablet/mobile, allow natural height and one-column stacking. Keep the existing mobile rules that stack metrics and make Hobby actions full width. Ensure the removed `.visual-grid` selector is no longer referenced.

- [ ] **Step 5: Run all automated checks**

Run:

```powershell
npm test
npm run lint
npm run build
```

Expected: all tests pass, ESLint exits 0, and Next.js completes static generation.

### Task 5: Browser and accessibility verification

**Files:**
- Verify: generated `out/` static site

- [ ] **Step 1: Serve the production export locally**

Start a temporary local HTTP server for `personal-portfolio/out` on an unused loopback port.

- [ ] **Step 2: Inspect all required viewport widths**

Use a real browser at widths 1440, 1024, 768, and 390 pixels. At every width verify no horizontal overflow and natural vertical flow. At 1440 confirm two columns; at 390 confirm the left content precedes the consolidated profile content.

- [ ] **Step 3: Verify both languages and content**

Confirm Chinese displays `山东科技大学计算机技术研究生`, both emails, three project tracks, and Hobby content. Switch to English and confirm the matching role, content, and links. Verify `Embodied AI Stack`, `具身智能栈`, `Simple E-Commerce Webpage Development`, and `简易电商网页开发` are absent.

- [ ] **Step 4: Verify links, focus, and console**

Confirm both emails use correct `mailto:` URLs, the contact CTA targets `#contact`, external Hobby links retain safe attributes, keyboard focus is visible, and the browser console has no errors or warnings.

### Task 6: Commit, deploy, and verify production

**Files:**
- Commit only the implementation plan and the source/test files listed above.

- [ ] **Step 1: Review repository state**

Run `git diff --check`, `git status --short`, and inspect the final diff. Leave `.codex_tmp`, `cv_chinese_onepage_work`, and `cv_edit_temp` untracked and unstaged.

- [ ] **Step 2: Commit the verified implementation**

Stage the exact portfolio paths and commit with message:

```text
Consolidate profile content into hero
```

- [ ] **Step 3: Push main and monitor Pages**

Run `git push origin main`, identify the workflow run for the new commit, and wait until both `build` and `deploy` jobs complete successfully.

- [ ] **Step 4: Verify the live site**

Open `https://foreverlongdamai.github.io/` with a cache-bypass query. Recheck Chinese and English at desktop and mobile widths, confirming both emails, the new role, the three-project count, consolidated Hero content, and absence of the old visual/About/e-commerce content.
