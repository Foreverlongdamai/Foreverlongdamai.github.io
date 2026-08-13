# Contact, Hobbies, and Redeployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present current UK and China contact routes, add the Civilization VII Mod as a personal game-content creation interest, and redeploy the verified bilingual portfolio to GitHub Pages.

**Architecture:** Store the two regional contact routes as structured profile data and select the current Cranfield route for the Hero. Keep the interest content separate from professional projects by rendering one focused card inside the About section, while the existing Contact section becomes a responsive two-card view.

**Tech Stack:** Next.js 16, React 19, TypeScript, Lucide React, Vitest, CSS, GitHub Actions, GitHub Pages.

---

### Task 1: Lock the new content contract with failing tests

**Files:**
- Modify: `src/content/content.test.ts`
- Modify: `src/components/PortfolioSections.test.tsx`

- [ ] **Step 1: Add a content-model test for regional contact profiles**

Assert that `siteContent.profile.contacts` contains a current Cranfield entry with `Mai.Long.358@cranfield.ac.uk` and the full official campus address, plus a China entry with Shandong University of Science and Technology, `long204323@gmail.com`, and the existing phone number.

- [ ] **Step 2: Add a content-model test for the game-content interest**

Import the new `hobby` export and assert that its Chinese body mentions games, DIY content, Civilization VII, and Steam Workshop; assert the GitHub URL is exactly `https://github.com/Foreverlongdamai/Civilization_mod_Lelouch-Lamperouge` and the Workshop URL is exactly `https://steamcommunity.com/sharedfiles/filedetails/?id=3780386007`.

- [ ] **Step 3: Add component tests for contact and interest links**

Render `PortfolioSections` and assert the two emails, full Cranfield address, GitHub URL, and Steam Workshop URL appear. Assert external interest links include `target="_blank"` and `rel="noopener noreferrer"`.

- [ ] **Step 4: Run the focused tests and verify red state**

Run: `npm test -- src/content/content.test.ts src/components/PortfolioSections.test.tsx`

Expected: FAIL because `contacts` and `hobby` do not exist and the new UI is not rendered.

### Task 2: Implement the structured contact model and content

**Files:**
- Modify: `src/content/types.ts`
- Modify: `src/content/site.ts`
- Modify: `src/content/sections.ts`

- [ ] **Step 1: Define `ContactProfile` and `HobbyContent`**

Add a contact type with `id`, `current`, localized `label`, `organization`, and `address`, plus `email` and optional `phone`. Add a hobby type with localized `title` and `body`, `repositoryUrl`, and `workshopUrl`.

- [ ] **Step 2: Replace the single contact fields**

Replace `location`, `email`, and `phone` on `ProfileContent` with `contacts: ContactProfile[]`. Add a Cranfield current profile and a China profile using the verified values.

- [ ] **Step 3: Add bilingual hobby copy**

Export one `hobby` object from `sections.ts`. Describe strategy games and DIY content creation, the "Lelouch / Zero" leader Mod, its signature gameplay ideas, Workshop publication, and open GitHub source without claiming complete validation or popularity.

- [ ] **Step 4: Run the content test**

Run: `npm test -- src/content/content.test.ts`

Expected: the content-model tests PASS while component tests remain pending.

### Task 3: Render the current contact in the Hero and both contact profiles below

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/PortfolioSections.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Select the current contact in `Hero`**

Find the contact with `current: true`, fail loudly if none exists, use its email for the contact button, and show its full address and school email in hero metadata.

- [ ] **Step 2: Render two semantic contact cards**

Map `profile.contacts` into cards with localized region label, organization, postal address, email link, and optional phone link. Keep the back-to-top control outside the cards.

- [ ] **Step 3: Add responsive styles**

Add a two-column `.contact-grid`, safe wrapping for addresses/emails, and a single-column tablet layout. Preserve existing button hit targets and focus behavior.

- [ ] **Step 4: Run the focused component test**

Run: `npm test -- src/components/PortfolioSections.test.tsx`

Expected: contact-profile assertions PASS.

### Task 4: Render the personal game-content creation card

**Files:**
- Modify: `src/components/PortfolioSections.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add the interest card to About**

Import `Gamepad2` and `hobby`, then render a localized title and body beneath the About metrics. Do not add it to `projects` and do not create another top-navigation item.

- [ ] **Step 2: Add safe GitHub and Steam links**

Render clearly labelled external actions for the GitHub repository and Steam Workshop item, both with `target="_blank"` and `rel="noopener noreferrer"`.

- [ ] **Step 3: Style the card consistently**

Reuse the portfolio's border, radius, color, and button conventions while keeping the interest visually secondary to academic and professional work. Stack action links on narrow mobile screens.

- [ ] **Step 4: Run all unit tests**

Run: `npm test`

Expected: all Vitest suites PASS.

### Task 5: Run quality gates and browser verification

**Files:**
- Verify: generated `out/` static site

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: exit code 0 with no ESLint errors.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: Next.js completes static generation and writes the GitHub Pages artifact to `out/`.

- [ ] **Step 3: Inspect desktop and mobile views**

Serve `out/` locally and inspect English and Chinese content at approximately 1440x900 and 390x844. Verify no overflow, both regional contact cards, correct email actions, readable hobby copy, safe external links, and no console errors.

### Task 6: Commit, deploy, and verify production

**Files:**
- Commit only the files listed in Tasks 1-4 plus this spec and plan.

- [ ] **Step 1: Review the diff and unrelated state**

Run: `git status --short` and `git diff --check` from `D:\A_personal_proj`. Confirm unrelated `.codex_tmp`, CV work directories, and any other user files are not staged.

- [ ] **Step 2: Commit the verified update**

Stage the exact portfolio paths and commit with message `Add UK contacts and game creation interests`.

- [ ] **Step 3: Push `main`**

Run: `git push origin main`

Expected: the remote main branch advances to the new commit and triggers the `Deploy portfolio to GitHub Pages` workflow.

- [ ] **Step 4: Monitor GitHub Pages deployment**

Wait for both build and deploy jobs to succeed. If a GitHub service incident recurs, report the exact job state and retry only the failed deployment when safe.

- [ ] **Step 5: Verify the public site**

Open `https://foreverlongdamai.github.io/` with cache bypass and confirm it contains `Mai.Long.358@cranfield.ac.uk`, the full Cranfield address, and the Civilization VII GitHub URL. Check the Chinese language view and at least one mobile viewport before reporting completion.
