# AI Agent Practice Narrative Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the portfolio's three numbered AI-view cards with one bilingual, continuous account of Mai Long's AI Agent practice and deploy the verified result to GitHub Pages.

**Architecture:** Preserve the public `#thoughts` anchor and the existing responsive `Section` shell. Replace the `Thought[]` content model with one `LocalizedText` narrative, render it in the existing `lead-panel` visual language, and protect the exact bilingual copy and non-card structure with focused Vitest tests.

**Tech Stack:** Next.js 16, React 19, TypeScript, Vitest, ESLint, Playwright CLI, GitHub Actions, GitHub Pages

---

## File Map

- Modify: `personal-portfolio/src/content/site.ts` - rename the visible navigation label while preserving the `thoughts` ID.
- Modify: `personal-portfolio/src/content/sections.ts` - replace the section heading and three-card array with one bilingual narrative.
- Modify: `personal-portfolio/src/components/PortfolioSections.tsx` - render one semantic narrative article instead of a numbered list.
- Modify: `personal-portfolio/src/content/content.test.ts` - lock the exact navigation, heading, attribution, and bilingual narrative.
- Modify: `personal-portfolio/src/components/PortfolioSections.test.tsx` - lock the continuous panel and reject the old card structure.
- Reference only: `personal-portfolio/src/app/globals.css` - reuse `lead-panel`; change CSS only if browser QA identifies a concrete defect.
- Reference only: `personal-portfolio/src/components/Section.tsx` - preserve the desktop two-column and mobile single-column section shell.
- Do not modify: `C:\Users\long\Desktop\CV_MaiLong_Updated.docx` or any other DOCX file.

### Task 1: Add Failing Content and Rendering Tests

**Files:**
- Modify: `personal-portfolio/src/content/content.test.ts`
- Modify: `personal-portfolio/src/components/PortfolioSections.test.tsx`
- Test: both files above

- [ ] **Step 1: Replace the old three-card content assertion**

In `src/content/content.test.ts`, remove `thoughts` from the named import and replace the test named `presents the approved bilingual AI viewpoint and practice narrative` with:

```ts
it("presents the approved bilingual AI Agent practice narrative", () => {
  const practiceSection = portfolioSections.find(
    (section) => section.id === "thoughts",
  );
  const narrative = Reflect.get(
    sectionContent,
    "aiAgentPracticeNarrative",
  );

  expect(siteContent.navigation).toContainEqual({
    id: "thoughts",
    label: { en: "AI Practice", zh: "AI 实践" },
  });
  expect(practiceSection).toEqual({
    id: "thoughts",
    eyebrow: { en: "AI Agent Experience", zh: "AI Agent 实践经历" },
    title: {
      en: "My AI Agent Practice: From Requirements to Delivery",
      zh: "我的 AI Agent 实践：从需求到交付",
    },
    description: {
      en: "Deep, hands-on experience using AI agents to turn requirements into working systems.",
      zh: "以 AI Agent 为核心，把需求转化为可运行系统的深度实践。",
    },
  });
  expect(narrative).toEqual({
    en: "I am a long-term, intensive user of Codex and Claude Code, and my cumulative usage across two ChatGPT accounts is approximately 10 billion tokens. Many of my current projects are delivered through AI-agent-centered workflows spanning requirements analysis, specification design, implementation, debugging, testing, documentation, and final delivery. Through sustained practice, I have become convinced that the speed and accuracy of AI depend heavily on how complete the idea it receives is: when goals, context, constraints, and acceptance criteria are clear and organized through specifications or continued dialogue into context the model can understand, AI can turn ideas into working results with remarkable speed. My advantage is not simply proficiency with the tools; it is the ability to understand real requirements quickly from documents and communication, identify and resolve ambiguity, translate requirements into executable specifications for agents, and continuously verify and steer the implementation until the project is delivered accurately and efficiently.",
    zh: "我长期深度使用 Codex 与 Claude Code，并在两个 ChatGPT 账号中累计使用约 100 亿 token。如今，我的许多项目都通过以 AI Agent 为核心的工作流完成，覆盖需求分析、规格设计、代码实现、调试、测试、文档与最终交付。在持续实践中，我越来越确信，AI 的实现效率和准确性高度取决于输入想法的完整度：当目标、背景、约束和验收标准足够清晰，并通过规格文档或持续沟通组织为 AI 能够理解的上下文时，AI 可以非常迅速地把想法转化为可运行成果。我的优势不只是熟练使用工具，而是能够从文档和沟通中快速理解真实需求、识别并消除歧义、把需求转化为 Agent 可执行的规格，并在实现过程中持续验证结果、修正方向，最终推动项目准确、高效地落地。",
  });
});
```

- [ ] **Step 2: Add a structural rendering regression test**

Append this test to `src/components/PortfolioSections.test.tsx`:

```tsx
it("renders AI Agent experience as one continuous narrative", () => {
  const markup = renderToStaticMarkup(
    <LanguageProvider>
      <PortfolioSections />
    </LanguageProvider>,
  );

  expect(markup).toContain('id="thoughts"');
  expect(markup).toContain("My AI Agent Practice: From Requirements to Delivery");
  expect(markup).toContain("approximately 10 billion tokens");
  expect(markup).toContain('class="lead-panel ai-agent-practice-panel"');
  expect(markup).not.toContain('class="thought-list"');
  expect(markup).not.toContain('class="thought-item"');
  expect(markup).not.toContain("Clear Ideas Determine Implementation Quality");
});
```

- [ ] **Step 3: Run the targeted tests and verify RED**

Run:

```powershell
Set-Location 'D:\A_personal_proj\personal-portfolio'
npm test -- src/content/content.test.ts src/components/PortfolioSections.test.tsx
```

Expected: the test command runs successfully but the new assertions fail because the current page still exposes `AI Views`, the three-card copy, and `.thought-list` / `.thought-item` markup.

### Task 2: Replace the Content Model and Renderer

**Files:**
- Modify: `personal-portfolio/src/content/site.ts`
- Modify: `personal-portfolio/src/content/sections.ts`
- Modify: `personal-portfolio/src/components/PortfolioSections.tsx`
- Test: `personal-portfolio/src/content/content.test.ts`
- Test: `personal-portfolio/src/components/PortfolioSections.test.tsx`

- [ ] **Step 1: Rename the navigation item**

In `src/content/site.ts`, replace only the `thoughts` navigation entry with:

```ts
{ id: "thoughts", label: { en: "AI Practice", zh: "AI 实践" } },
```

- [ ] **Step 2: Replace the section heading**

In `src/content/sections.ts`, replace the object whose `id` is `thoughts` with:

```ts
{
  id: "thoughts",
  eyebrow: { en: "AI Agent Experience", zh: "AI Agent 实践经历" },
  title: {
    en: "My AI Agent Practice: From Requirements to Delivery",
    zh: "我的 AI Agent 实践：从需求到交付",
  },
  description: {
    en: "Deep, hands-on experience using AI agents to turn requirements into working systems.",
    zh: "以 AI Agent 为核心，把需求转化为可运行系统的深度实践。",
  },
},
```

- [ ] **Step 3: Replace `Thought[]` with one localized narrative**

In the type import at the top of `src/content/sections.ts`, remove `Thought` and add `LocalizedText`. Replace the complete `export const thoughts` declaration with:

```ts
export const aiAgentPracticeNarrative: LocalizedText = {
  en: "I am a long-term, intensive user of Codex and Claude Code, and my cumulative usage across two ChatGPT accounts is approximately 10 billion tokens. Many of my current projects are delivered through AI-agent-centered workflows spanning requirements analysis, specification design, implementation, debugging, testing, documentation, and final delivery. Through sustained practice, I have become convinced that the speed and accuracy of AI depend heavily on how complete the idea it receives is: when goals, context, constraints, and acceptance criteria are clear and organized through specifications or continued dialogue into context the model can understand, AI can turn ideas into working results with remarkable speed. My advantage is not simply proficiency with the tools; it is the ability to understand real requirements quickly from documents and communication, identify and resolve ambiguity, translate requirements into executable specifications for agents, and continuously verify and steer the implementation until the project is delivered accurately and efficiently.",
  zh: "我长期深度使用 Codex 与 Claude Code，并在两个 ChatGPT 账号中累计使用约 100 亿 token。如今，我的许多项目都通过以 AI Agent 为核心的工作流完成，覆盖需求分析、规格设计、代码实现、调试、测试、文档与最终交付。在持续实践中，我越来越确信，AI 的实现效率和准确性高度取决于输入想法的完整度：当目标、背景、约束和验收标准足够清晰，并通过规格文档或持续沟通组织为 AI 能够理解的上下文时，AI 可以非常迅速地把想法转化为可运行成果。我的优势不只是熟练使用工具，而是能够从文档和沟通中快速理解真实需求、识别并消除歧义、把需求转化为 Agent 可执行的规格，并在实现过程中持续验证结果、修正方向，最终推动项目准确、高效地落地。",
};
```

The token statement remains explicitly attributed to the two ChatGPT accounts and must not be rewritten as combined Codex/Claude Code usage.

- [ ] **Step 4: Render one semantic article**

In `src/components/PortfolioSections.tsx`, import `aiAgentPracticeNarrative` instead of `thoughts` and replace the complete `thought-list` block with:

```tsx
<Section section={findSection("thoughts")} locale={locale}>
  <article className="lead-panel ai-agent-practice-panel">
    <p>{getLocalizedText(aiAgentPracticeNarrative, locale)}</p>
  </article>
</Section>
```

- [ ] **Step 5: Run the targeted tests and verify GREEN**

Run:

```powershell
npm test -- src/content/content.test.ts src/components/PortfolioSections.test.tsx
```

Expected: both test files pass with zero failures.

- [ ] **Step 6: Inspect the source diff before broader verification**

Run:

```powershell
Set-Location 'D:\A_personal_proj'
git diff --check
git diff -- personal-portfolio/src/content/site.ts personal-portfolio/src/content/sections.ts personal-portfolio/src/components/PortfolioSections.tsx personal-portfolio/src/content/content.test.ts personal-portfolio/src/components/PortfolioSections.test.tsx
```

Expected: no whitespace errors; the diff is limited to the approved content, renderer, and regression tests. No DOCX file appears in `git status` or the diff.

### Task 3: Run Static and Local Browser Quality Gates

**Files:**
- Verify: all files changed in Tasks 1 and 2
- Reference: `personal-portfolio/src/app/globals.css`
- Reference: `personal-portfolio/src/components/Section.tsx`

- [ ] **Step 1: Run the complete automated quality gates**

Run from `D:\A_personal_proj\personal-portfolio`:

```powershell
npm test
npm run lint
npx tsc --noEmit
npm run build
```

Expected: zero Vitest failures, zero ESLint errors, zero TypeScript errors, and a successful static Next.js build in `out/`.

- [ ] **Step 2: Review the affected UI against the web design guidelines**

Review the new section and its existing `Section` / `lead-panel` styles for semantic markup, readable measure, responsive behavior, contrast, text wrapping, and motion/accessibility regressions. CSS remains unchanged unless an observed desktop or mobile defect requires a narrowly scoped fix.

- [ ] **Step 3: Start the production build on an unused local port**

Run after confirming port 4173 is free:

```powershell
Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue
$pythonExe = 'C:\Users\long\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
$webProcess = Start-Process -FilePath $pythonExe -ArgumentList '-m','http.server','4173','--bind','127.0.0.1','--directory','D:\A_personal_proj\personal-portfolio\out' -WindowStyle Hidden -PassThru
$webProcess.Id
```

Expected: no existing listener is displaced, and the final command returns the bundled Python server PID.

- [ ] **Step 4: Verify English and Chinese at 1440 x 1000**

Use a fresh Playwright session to confirm:

- navigation reads `AI Practice / AI 实践`;
- heading reads `My AI Agent Practice: From Requirements to Delivery / 我的 AI Agent 实践：从需求到交付`;
- the section contains exactly one `.ai-agent-practice-panel` and no `.thought-list` or `.thought-item`;
- the English copy contains `approximately 10 billion tokens` and the Chinese copy contains `约 100 亿 token`;
- `document.body.scrollWidth === document.documentElement.clientWidth`;
- the browser console has no error or warning introduced by the change.

- [ ] **Step 5: Verify English and Chinese at 390 x 844**

Resize the same local production build to 390 x 844 and repeat the content, structure, horizontal-overflow, and console checks. Visually inspect screenshots in both languages, confirming that the title and long paragraph wrap naturally, the panel is not clipped, and the section becomes a readable single column.

- [ ] **Step 6: Stop only the validated local server and remove QA artifacts**

Resolve the listener on port 4173 and inspect its executable path and command line. Stop it only if both identify the exact bundled Python process serving `D:\A_personal_proj\personal-portfolio\out`. Close the Playwright session, remove only its generated screenshots/session artifacts, and confirm `git status --short` contains no unrelated changes.

### Task 4: Commit, Push, Deploy, and Verify the Live Site

**Files:**
- Commit: the five approved website source/test files
- Verify: Git repository and deployed GitHub Pages site

- [ ] **Step 1: Commit the implementation**

Run:

```powershell
Set-Location 'D:\A_personal_proj'
git add -- personal-portfolio/src/content/site.ts personal-portfolio/src/content/sections.ts personal-portfolio/src/components/PortfolioSections.tsx personal-portfolio/src/content/content.test.ts personal-portfolio/src/components/PortfolioSections.test.tsx
git diff --cached --check
git commit -m "Present AI Agent practice as a continuous narrative"
```

Expected: one implementation commit containing only the approved website source and test changes. The earlier design commit remains immediately before it.

- [ ] **Step 2: Confirm synchronization and push `main`**

Run:

```powershell
git fetch origin main
git rev-list --left-right --count HEAD...origin/main
git status --short
git push origin main
```

Expected: there are no remote-only commits, the worktree is clean, and both the design and implementation commits are accepted by `origin/main`.

- [ ] **Step 3: Wait for the exact GitHub Pages workflow run**

Use the pushed full commit SHA to find the matching `Deploy portfolio to GitHub Pages` workflow run through the GitHub API. Poll at short bounded intervals until that exact run reaches `completed / success`; fail the deployment gate if it concludes unsuccessfully or no matching run can be found.

- [ ] **Step 4: Verify the deployed bilingual section**

Open `https://foreverlongdamai.github.io/?v=<full-commit-sha>#thoughts` in a fresh browser session. Repeat the desktop English and mobile Chinese content, structure, overflow, and console checks against the live site; confirm no old three-card copy remains.

- [ ] **Step 5: Run final repository verification**

Run:

```powershell
$localSha = git rev-parse HEAD
$remoteSha = git ls-remote origin refs/heads/main | ForEach-Object { ($_ -split '\s+')[0] }
git status --porcelain
```

Expected: local and remote SHAs are identical and `git status --porcelain` returns no output.
