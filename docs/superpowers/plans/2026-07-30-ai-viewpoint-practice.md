# AI Viewpoint and Practice Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the portfolio's embodied-intelligence thought content with the approved bilingual AI viewpoint and AI-native practice narrative, then deploy it to GitHub Pages.

**Architecture:** Keep the existing `thoughts` anchor, `Thought` type, three-card renderer, and responsive layout. Change only typed content plus focused content-model tests; verify the existing component renders the longer copy correctly before deploying from `main`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Vitest, ESLint, Playwright CLI, GitHub Actions, GitHub Pages

---

## File Map

- Modify: `personal-portfolio/src/content/site.ts` — short bilingual navigation label.
- Modify: `personal-portfolio/src/content/sections.ts` — section heading, summary, and three bilingual cards.
- Modify: `personal-portfolio/src/content/content.test.ts` — exact approved-content regression test.
- Reference only: `personal-portfolio/src/components/PortfolioSections.tsx` — existing three-card renderer.
- Reference only: `personal-portfolio/src/components/Section.tsx` — existing responsive section shell.
- Reference only: `personal-portfolio/src/app/globals.css` — existing thought-card styling.

### Task 1: Add the Failing Approved-Content Test

**Files:**
- Modify: `personal-portfolio/src/content/content.test.ts`
- Test: `personal-portfolio/src/content/content.test.ts`

- [ ] **Step 1: Import `thoughts` into the content test**

Replace the existing sections import with:

```ts
import {
  portfolioSections,
  researchAreas,
  skillGroups,
  thoughts,
} from "./sections";
```

- [ ] **Step 2: Add the exact approved-content test**

Add this test inside `describe("localized content model", ...)`:

```ts
it("presents the approved bilingual AI viewpoint and practice narrative", () => {
  const thoughtSection = portfolioSections.find((section) => section.id === "thoughts");

  expect(siteContent.navigation).toContainEqual({
    id: "thoughts",
    label: { en: "AI Views", zh: "AI 观点" },
  });
  expect(thoughtSection).toEqual({
    id: "thoughts",
    eyebrow: { en: "AI Viewpoint & Practice", zh: "AI 观点与实践" },
    title: {
      en: "My Perspective on AI and How I Put It into Practice",
      zh: "我对当前 AI 领域的看法与实践",
    },
    description: {
      en: "I see AI as a highly efficient execution partner. When an idea is well developed and expressed through clear specifications or dialogue, AI can turn it into a working result quickly and accurately. My role is to understand the real requirement, structure it into tasks AI can reliably interpret, and verify the outcome.",
      zh: "我认为 AI 是高效率的执行伙伴。当一个想法足够完善，并通过清晰的规格文档或沟通描述表达出来时，AI 可以快速、准确地将其实现。我的作用是理解真实需求，将其组织为 AI 能够可靠理解的任务，并验证最终成果。",
    },
  });
  expect(thoughts).toEqual([
    {
      title: {
        en: "Clear Ideas Determine Implementation Quality",
        zh: "清晰的想法决定实现质量",
      },
      body: {
        en: "AI performs best when goals, context, constraints, and acceptance criteria are explicit. I use specifications, structured documents, and iterative dialogue to turn ideas into executable task descriptions.",
        zh: "当目标、背景、约束和验收标准足够明确时，AI 能发挥出最佳效果。我通过规格文档、结构化说明和迭代沟通，把想法整理成可执行的任务描述。",
      },
    },
    {
      title: {
        en: "Translating Requirements into AI-Ready Specifications",
        zh: "把需求转化为 AI 可理解的规格",
      },
      body: {
        en: "I quickly understand requirements through documents and conversation, resolve ambiguity, and translate them into context, tasks, interfaces, checkpoints, and delivery criteria that AI agents can follow accurately.",
        zh: "我能够通过文档和沟通快速理解需求、消除歧义，并将其转化为 AI Agent 可准确执行的上下文、任务、接口、检查点与交付标准。",
      },
    },
    {
      title: {
        en: "Deep, Hands-On AI Agent Practice",
        zh: "深度 AI Agent 实践",
      },
      body: {
        en: "Many of my projects now use AI-native workflows. I am a long-term, high-frequency user of GPT and Claude; across two ChatGPT accounts, cumulative usage is approximately 10 billion tokens. I am proficient with AI agent tools for research, coding, debugging, documentation, and end-to-end project delivery.",
        zh: "我的许多项目采用 AI 原生工作流完成。我是 GPT 与 Claude 的长期高频深度用户，两个 ChatGPT 账号累计使用约 100 亿 token，并熟练使用多类 AI Agent 工具完成研究、编程、调试、文档与端到端项目交付。",
      },
    },
  ]);
});
```

- [ ] **Step 3: Run the targeted test and verify RED**

Run:

```powershell
Set-Location 'D:\A_personal_proj\personal-portfolio'
npm test -- src/content/content.test.ts
```

Expected: one new test fails because the navigation still contains
`Thoughts / 观点` and the section still contains the embodied-intelligence copy.
The command must fail on an assertion, not on a syntax or import error.

### Task 2: Replace the Bilingual Content and Reach GREEN

**Files:**
- Modify: `personal-portfolio/src/content/site.ts`
- Modify: `personal-portfolio/src/content/sections.ts`
- Test: `personal-portfolio/src/content/content.test.ts`

- [ ] **Step 1: Update the navigation label**

In `siteContent.navigation`, replace the `thoughts` entry with:

```ts
{ id: "thoughts", label: { en: "AI Views", zh: "AI 观点" } },
```

- [ ] **Step 2: Replace the `thoughts` section heading**

In `portfolioSections`, replace the object whose `id` is `thoughts` with:

```ts
{
  id: "thoughts",
  eyebrow: { en: "AI Viewpoint & Practice", zh: "AI 观点与实践" },
  title: {
    en: "My Perspective on AI and How I Put It into Practice",
    zh: "我对当前 AI 领域的看法与实践",
  },
  description: {
    en: "I see AI as a highly efficient execution partner. When an idea is well developed and expressed through clear specifications or dialogue, AI can turn it into a working result quickly and accurately. My role is to understand the real requirement, structure it into tasks AI can reliably interpret, and verify the outcome.",
    zh: "我认为 AI 是高效率的执行伙伴。当一个想法足够完善，并通过清晰的规格文档或沟通描述表达出来时，AI 可以快速、准确地将其实现。我的作用是理解真实需求，将其组织为 AI 能够可靠理解的任务，并验证最终成果。",
  },
},
```

- [ ] **Step 3: Replace the three `thoughts` cards**

Replace the complete `export const thoughts: Thought[]` array with:

```ts
export const thoughts: Thought[] = [
  {
    title: {
      en: "Clear Ideas Determine Implementation Quality",
      zh: "清晰的想法决定实现质量",
    },
    body: {
      en: "AI performs best when goals, context, constraints, and acceptance criteria are explicit. I use specifications, structured documents, and iterative dialogue to turn ideas into executable task descriptions.",
      zh: "当目标、背景、约束和验收标准足够明确时，AI 能发挥出最佳效果。我通过规格文档、结构化说明和迭代沟通，把想法整理成可执行的任务描述。",
    },
  },
  {
    title: {
      en: "Translating Requirements into AI-Ready Specifications",
      zh: "把需求转化为 AI 可理解的规格",
    },
    body: {
      en: "I quickly understand requirements through documents and conversation, resolve ambiguity, and translate them into context, tasks, interfaces, checkpoints, and delivery criteria that AI agents can follow accurately.",
      zh: "我能够通过文档和沟通快速理解需求、消除歧义，并将其转化为 AI Agent 可准确执行的上下文、任务、接口、检查点与交付标准。",
    },
  },
  {
    title: {
      en: "Deep, Hands-On AI Agent Practice",
      zh: "深度 AI Agent 实践",
    },
    body: {
      en: "Many of my projects now use AI-native workflows. I am a long-term, high-frequency user of GPT and Claude; across two ChatGPT accounts, cumulative usage is approximately 10 billion tokens. I am proficient with AI agent tools for research, coding, debugging, documentation, and end-to-end project delivery.",
      zh: "我的许多项目采用 AI 原生工作流完成。我是 GPT 与 Claude 的长期高频深度用户，两个 ChatGPT 账号累计使用约 100 亿 token，并熟练使用多类 AI Agent 工具完成研究、编程、调试、文档与端到端项目交付。",
    },
  },
];
```

- [ ] **Step 4: Run the targeted test and verify GREEN**

Run:

```powershell
Set-Location 'D:\A_personal_proj\personal-portfolio'
npm test -- src/content/content.test.ts
```

Expected: `src/content/content.test.ts` passes with all tests green.

- [ ] **Step 5: Run the complete test suite**

Run:

```powershell
npm test
```

Expected: both test files pass with zero failures.

- [ ] **Step 6: Commit the content change**

Run:

```powershell
Set-Location 'D:\A_personal_proj'
git add -- personal-portfolio/src/content/content.test.ts personal-portfolio/src/content/site.ts personal-portfolio/src/content/sections.ts
git diff --cached --check
git commit -m "Rewrite AI viewpoint and practice section"
```

Expected: one commit containing only the content test and the two typed content
files.

### Task 3: Run Static and Browser Quality Gates

**Files:**
- Reference: `personal-portfolio/src/components/PortfolioSections.tsx`
- Reference: `personal-portfolio/src/components/Section.tsx`
- Reference: `personal-portfolio/src/app/globals.css`
- Verify: all files changed in Tasks 1 and 2

- [ ] **Step 1: Fetch the current web-interface guidelines and review the affected rendering path**

Fetch:

```text
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Review `PortfolioSections.tsx`, `Section.tsx`, and the `.thought-*` /
`.section-heading` rules in `globals.css`. Expected: the content-only change
does not introduce a new accessibility or interaction issue; any finding must
be reported as `file:line` before deciding whether it is in scope.

- [ ] **Step 2: Run all static quality gates**

Run from `D:\A_personal_proj\personal-portfolio`:

```powershell
npm test
npm run lint
npx tsc --noEmit
npm run build
```

Expected: zero test failures, zero ESLint errors, zero TypeScript errors, and a
successful static Next.js production build in `out/`.

- [ ] **Step 3: Verify the Playwright prerequisite**

Run:

```powershell
Get-Command npx.cmd -ErrorAction Stop
```

Expected: an `npx.cmd` path is returned.

- [ ] **Step 4: Start the static build with a validated local server process**

Run after confirming port 4173 is free:

```powershell
Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue
$pythonExe = 'C:\Users\long\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
$webProcess = Start-Process -FilePath $pythonExe -ArgumentList '-m','http.server','4173','--bind','127.0.0.1','--directory','D:\A_personal_proj\personal-portfolio\out' -WindowStyle Hidden -PassThru
$webProcess.Id
```

Expected: the first command returns no listener and the final command returns
the Python server PID.

- [ ] **Step 5: Inspect English and Chinese at 1440 x 1000**

Run with a named Playwright CLI session and derive the language-button ref from
the required fresh snapshot:

```powershell
$pw = (Get-Command npx.cmd -ErrorAction Stop).Source
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint open http://127.0.0.1:4173/
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint resize 1440 1000
$englishSnapshot = & $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint snapshot
$englishSnapshot
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint eval "() => ({ exactTitle: document.body.innerText.includes('My Perspective on AI and How I Put It into Practice'), exactCards: ['Clear Ideas Determine Implementation Quality', 'Translating Requirements into AI-Ready Specifications', 'Deep, Hands-On AI Agent Practice'].every((text) => document.body.innerText.includes(text)), exactUsage: document.body.innerText.includes('approximately 10 billion tokens'), noHorizontalOverflow: document.body.scrollWidth === document.documentElement.clientWidth })"
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint console
$zhRef = [regex]::Match(($englishSnapshot -join "`n"), 'button "中文".*\[ref=(e\d+)\]').Groups[1].Value
if (-not $zhRef) { throw 'Chinese language button ref not found in fresh snapshot' }
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint click $zhRef
$chineseSnapshot = & $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint snapshot
$chineseSnapshot
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint eval "() => ({ exactTitle: document.body.innerText.includes('我对当前 AI 领域的看法与实践'), exactCards: ['清晰的想法决定实现质量', '把需求转化为 AI 可理解的规格', '深度 AI Agent 实践'].every((text) => document.body.innerText.includes(text)), exactUsage: document.body.innerText.includes('约 100 亿 token'), noHorizontalOverflow: document.body.scrollWidth === document.documentElement.clientWidth })"
```

Expected: every boolean is `true`; both snapshots contain the approved summary
and card bodies; the console contains zero errors or warnings.

- [ ] **Step 6: Inspect English and Chinese at 390 x 844**

Run:

```powershell
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint resize 390 844
$mobileChineseSnapshot = & $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint snapshot
$mobileChineseSnapshot
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint eval "() => ({ width: innerWidth, exactTitle: document.body.innerText.includes('我对当前 AI 领域的看法与实践'), exactUsage: document.body.innerText.includes('约 100 亿 token'), noHorizontalOverflow: document.body.scrollWidth === document.documentElement.clientWidth })"
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint screenshot
$enRef = [regex]::Match(($mobileChineseSnapshot -join "`n"), 'button "EN".*\[ref=(e\d+)\]').Groups[1].Value
if (-not $enRef) { throw 'English language button ref not found in fresh snapshot' }
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint click $enRef
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint snapshot
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint eval "() => ({ width: innerWidth, exactTitle: document.body.innerText.includes('My Perspective on AI and How I Put It into Practice'), exactUsage: document.body.innerText.includes('approximately 10 billion tokens'), noHorizontalOverflow: document.body.scrollWidth === document.documentElement.clientWidth })"
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint screenshot
```

Confirm the section becomes a readable single column, all three cards remain
fully visible, long English titles wrap naturally, and neither language causes
body horizontal overflow. Capture screenshots through the CLI under its
generated `.playwright-cli/` directory for visual inspection.

- [ ] **Step 7: Close browser, stop only the validated local server, and clean generated QA artifacts**

Run:

```powershell
npx --yes --package '@playwright/cli@latest' playwright-cli -s=ai-viewpoint close
$socket = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction Stop
$process = Get-CimInstance Win32_Process -Filter "ProcessId = $($socket.OwningProcess)"
$process | Select-Object ProcessId,ExecutablePath,CommandLine
```

Only if `ExecutablePath` is the bundled Python executable and `CommandLine`
contains the exact `personal-portfolio\out` directory, stop that PID. Then run:

```powershell
Set-Location 'D:\A_personal_proj'
git clean -nd -- personal-portfolio/.playwright-cli personal-portfolio/output
git clean -fd -- personal-portfolio/.playwright-cli personal-portfolio/output
git status --short
```

Expected: only intended tracked changes or a clean worktree remain; no QA
artifact is left untracked.

### Task 4: Push, Verify GitHub Pages, and Close the Change

**Files:**
- Verify: Git repository and deployed static site

- [ ] **Step 1: Confirm the local branch is based on current `origin/main`**

Run:

```powershell
Set-Location 'D:\A_personal_proj'
git fetch origin main
git rev-list --left-right --count HEAD...origin/main
git status --short
```

Expected before push: the local branch is ahead only by the approved design and
implementation commits, with no remote-only commits and a clean worktree.

- [ ] **Step 2: Push `main`**

Run:

```powershell
git push origin main
```

Expected: the local commits are accepted by `origin/main`.

- [ ] **Step 3: Wait for the exact GitHub Pages workflow run**

Use the pushed full commit SHA to query the workflow runs:

```powershell
$fullSha = git rev-parse HEAD
$headers = @{ 'User-Agent' = 'Codex-Desktop'; 'Accept' = 'application/vnd.github+json' }
$runs = Invoke-RestMethod -Uri 'https://api.github.com/repos/Foreverlongdamai/Foreverlongdamai.github.io/actions/runs?branch=main&per_page=5' -Headers $headers
$run = $runs.workflow_runs | Where-Object { $_.head_sha -eq $fullSha } | Select-Object -First 1
if (-not $run) { throw "No workflow run found for $fullSha" }
for ($attempt = 0; $attempt -lt 10; $attempt++) {
  $run = Invoke-RestMethod -Uri "https://api.github.com/repos/Foreverlongdamai/Foreverlongdamai.github.io/actions/runs/$($run.id)" -Headers $headers
  $run | Select-Object id,name,status,conclusion,head_sha,html_url
  if ($run.status -eq 'completed') { break }
  Start-Sleep -Seconds 5
}
if ($run.status -ne 'completed' -or $run.conclusion -ne 'success') {
  throw "Workflow did not reach completed/success; current state: $($run.status)/$($run.conclusion)"
}
```

Expected: `Deploy portfolio to GitHub Pages` for the pushed SHA reaches
`completed / success`.

- [ ] **Step 4: Verify the deployed bilingual content**

Open a cache-busted URL in a fresh Playwright session:

```powershell
$fullSha = git rev-parse HEAD
$liveUrl = "https://foreverlongdamai.github.io/?v=$fullSha"
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint open $liveUrl
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint resize 1440 1000
$liveEnglishSnapshot = & $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint snapshot
$liveEnglishSnapshot
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint eval "() => ({ exactNavigation: document.body.innerText.includes('AI Views'), exactTitle: document.body.innerText.includes('My Perspective on AI and How I Put It into Practice'), exactUsage: document.body.innerText.includes('approximately 10 billion tokens'), noHorizontalOverflow: document.body.scrollWidth === document.documentElement.clientWidth })"
$liveZhRef = [regex]::Match(($liveEnglishSnapshot -join "`n"), 'button "中文".*\[ref=(e\d+)\]').Groups[1].Value
if (-not $liveZhRef) { throw 'Live Chinese language button ref not found' }
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint click $liveZhRef
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint resize 390 844
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint snapshot
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint eval "() => ({ exactNavigation: document.body.innerText.includes('AI 观点'), exactTitle: document.body.innerText.includes('我对当前 AI 领域的看法与实践'), exactUsage: document.body.innerText.includes('约 100 亿 token'), noHorizontalOverflow: document.body.scrollWidth === document.documentElement.clientWidth })"
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint console
& $pw --yes --package '@playwright/cli@latest' playwright-cli -s=live-ai-viewpoint close
```

Check English and Chinese across the two viewport sizes, including:

- `AI Views / AI 观点` navigation label;
- approved section title and three card titles;
- `approximately 10 billion tokens / 约 100 亿 token` statement;
- no body horizontal overflow;
- no console errors or warnings.

- [ ] **Step 5: Run final repository verification**

Run:

```powershell
$localSha = git rev-parse HEAD
$remoteSha = git ls-remote origin refs/heads/main | ForEach-Object { ($_ -split '\s+')[0] }
git status --porcelain
```

Expected: local and remote SHAs are identical and `git status --porcelain`
returns no output.
