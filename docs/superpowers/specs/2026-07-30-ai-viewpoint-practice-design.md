# AI Viewpoint and Practice Section Redesign

Date: 2026-07-30
Project: `D:\A_personal_proj\personal-portfolio`
Status: Approved content design; implementation pending written-spec review

## 1. Goal

Replace the current embodied-intelligence technical-thoughts content with a
bilingual section that presents Mai Long's perspective on current AI and his
practical AI-native way of working.

The section should communicate four points clearly:

- AI can turn a well-developed idea into a working result with high speed and
  accuracy when the input is clear.
- The quality of the idea, context, constraints, and acceptance criteria
  determines the quality of implementation.
- Mai Long can understand requirements from documents and conversation and
  translate them into specifications that AI agents can execute reliably.
- Mai Long is a long-term, high-frequency user of GPT and Claude, with
  approximately 10 billion cumulative tokens used across two ChatGPT accounts,
  and has practical command of multiple AI agent tools.

## 2. Audience and Tone

Primary readers are recruiters, research supervisors, technical collaborators,
and project partners.

The tone must be:

- professional and quantitative rather than fan-oriented;
- confident without implying that unverified AI output is accepted blindly;
- personal enough to show intensive hands-on experience;
- focused on requirements, specification, execution, verification, and
  delivery rather than a list of model brands.

The phrase "狂热用户" will therefore be rendered as "长期高频深度用户" in
Chinese and "long-term, high-frequency user" in English. The token figure will
be qualified with "约" / "approximately" and attributed to two ChatGPT
accounts.

The approximate token total is a user-supplied usage estimate. It will be
presented as approximate and will not be described as independently audited.

## 3. Information Architecture

Keep the existing section structure and `thoughts` anchor:

- navigation: a short `AI Views / AI 观点` label;
- left column: eyebrow, title, and summary;
- right column: three numbered cards;
- desktop: existing two-column section layout;
- mobile: existing single-column layout.

No new component, data type, interaction, or visual treatment is required.

## 4. Final Bilingual Copy

### Navigation

- English: `AI Views`
- Chinese: `AI 观点`

### Section heading

Eyebrow:

- English: `AI Viewpoint & Practice`
- Chinese: `AI 观点与实践`

Title:

- English: `My Perspective on AI and How I Put It into Practice`
- Chinese: `我对当前 AI 领域的看法与实践`

Description:

- English: `I see AI as a highly efficient execution partner. When an idea is
  well developed and expressed through clear specifications or dialogue, AI
  can turn it into a working result quickly and accurately. My role is to
  understand the real requirement, structure it into tasks AI can reliably
  interpret, and verify the outcome.`
- Chinese: `我认为 AI 是高效率的执行伙伴。当一个想法足够完善，并通过清晰的
  规格文档或沟通描述表达出来时，AI 可以快速、准确地将其实现。我的作用是理解
  真实需求，将其组织为 AI 能够可靠理解的任务，并验证最终成果。`

### Card 01

Title:

- English: `Clear Ideas Determine Implementation Quality`
- Chinese: `清晰的想法决定实现质量`

Body:

- English: `AI performs best when goals, context, constraints, and acceptance
  criteria are explicit. I use specifications, structured documents, and
  iterative dialogue to turn ideas into executable task descriptions.`
- Chinese: `当目标、背景、约束和验收标准足够明确时，AI 能发挥出最佳效果。
  我通过规格文档、结构化说明和迭代沟通，把想法整理成可执行的任务描述。`

### Card 02

Title:

- English: `Translating Requirements into AI-Ready Specifications`
- Chinese: `把需求转化为 AI 可理解的规格`

Body:

- English: `I quickly understand requirements through documents and
  conversation, resolve ambiguity, and translate them into context, tasks,
  interfaces, checkpoints, and delivery criteria that AI agents can follow
  accurately.`
- Chinese: `我能够通过文档和沟通快速理解需求、消除歧义，并将其转化为 AI
  Agent 可准确执行的上下文、任务、接口、检查点与交付标准。`

### Card 03

Title:

- English: `Deep, Hands-On AI Agent Practice`
- Chinese: `深度 AI Agent 实践`

Body:

- English: `Many of my projects now use AI-native workflows. I am a long-term,
  high-frequency user of GPT and Claude; across two ChatGPT accounts,
  cumulative usage is approximately 10 billion tokens. I am proficient with
  AI agent tools for research, coding, debugging, documentation, and
  end-to-end project delivery.`
- Chinese: `我的许多项目采用 AI 原生工作流完成。我是 GPT 与 Claude 的长期
  高频深度用户，两个 ChatGPT 账号累计使用约 100 亿 token，并熟练使用多类 AI
  Agent 工具完成研究、编程、调试、文档与端到端项目交付。`

## 5. Implementation Boundary

Expected source changes:

- `personal-portfolio/src/content/site.ts`
  - update the `thoughts` navigation label only;
- `personal-portfolio/src/content/sections.ts`
  - replace the `thoughts` section heading and all three cards;
- `personal-portfolio/src/content/content.test.ts`
  - add exact content-model assertions before production edits;
- `personal-portfolio/src/components/PortfolioSections.test.tsx`
  - add rendering assertions only if the current test setup can verify the new
    section without duplicating content-model coverage.

The following should remain unchanged unless browser verification reveals a
real layout defect:

- `thoughts` section ID and anchor;
- `Thought` TypeScript type;
- `PortfolioSections` rendering structure;
- three-card count and numbering;
- global CSS and responsive breakpoints.

## 6. Testing and Verification

Implementation will follow test-driven development:

1. Add a failing content test for the new navigation label, section heading,
   three card titles, and the approximate 10-billion-token statement.
2. Run the targeted test and confirm it fails because the old content is still
   present.
3. Replace the production content with the approved bilingual copy.
4. Run the targeted test and then the complete test suite.

Quality gates:

- Vitest suite passes with no failures.
- ESLint passes.
- TypeScript `tsc --noEmit` passes.
- Next.js production build succeeds.
- Desktop browser check at 1440 x 1000 in English and Chinese.
- Mobile browser check at 390 x 844 in English and Chinese.
- Section title and all three cards remain readable without clipping or body
  horizontal overflow.
- Browser console contains no errors or warnings caused by the change.

## 7. Deployment

After local verification:

1. Commit only the approved content and its tests.
2. Push `main` to the existing GitHub repository.
3. Wait for the GitHub Pages workflow to complete successfully.
4. Verify the deployed English and Chinese content at
   `https://foreverlongdamai.github.io/`.

## 8. Non-Goals

This change will not:

- add new cards, charts, model logos, or token counters;
- add external links to GPT, Claude, or agent tools;
- claim that AI output is accepted without human requirement definition and
  outcome verification;
- modify the DOCX resume;
- change unrelated research, project, experience, education, or skill content.
