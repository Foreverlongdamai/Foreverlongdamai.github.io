# AI Agent Practice Narrative Section Redesign

Date: 2026-07-30
Project: `D:\A_personal_proj\personal-portfolio`
Revision: 3 — replaces the approved three-card design and simplifies the final title
Status: Implemented; minor title revision approved

## 1. Goal

Replace the current AI viewpoint module with a bilingual account of Mai Long's
hands-on AI Agent experience. The new module must read as one continuous,
coherent narrative rather than three numbered points.

The narrative follows this order:

1. products used and depth of use;
2. practical view formed through sustained use;
3. personal advantages in requirements understanding, specification, agent
   steering, verification, and delivery.

## 2. Approved Facts and Attribution

The public copy may state:

- Mai Long is a long-term, intensive user of Codex and Claude Code.
- Many current projects use AI-agent-centered workflows.
- Cumulative usage across two ChatGPT accounts is approximately 10 billion
  tokens.
- Mai Long uses AI agents across requirements analysis, specification design,
  implementation, debugging, testing, documentation, and final delivery.

The approximately 10-billion-token figure applies only to the two ChatGPT
accounts. It must not be presented as the combined usage of Codex and Claude
Code. The figure is user-supplied, remains qualified with `approximately / 约`,
and is not described as independently audited.

## 3. Audience and Tone

Primary readers are recruiters, research supervisors, technical collaborators,
and project partners.

The copy must be:

- professional, direct, and evidence-oriented;
- written as practical experience rather than a personal-opinion essay;
- confident without implying that AI output is accepted without verification;
- fluent and continuous, with no numbered claims, bullet list, or card-by-card
  fragmentation in the rendered page.

## 4. Information Architecture

Keep the existing section anchor `thoughts` to preserve incoming links, but
change the visible navigation label and content:

- navigation: `AI Practice / AI 实践`;
- left column: eyebrow, title, and one-sentence context;
- right column: one continuous bilingual narrative inside a single restrained
  text panel;
- desktop: retain the existing two-column section shell;
- mobile: retain the existing single-column responsive shell.

Remove the three numbered `01–03` cards completely. Do not replace them with a
timeline, workflow diagram, metrics grid, or another divided presentation.

## 5. Final Bilingual Copy

### Navigation

- English: `AI Practice`
- Chinese: `AI 实践`

### Section heading

Eyebrow:

- English: `AI Agent Experience`
- Chinese: `AI Agent 实践经历`

Title:

- English: `My AI Agent Practice: From Requirements to Delivery`
- Chinese: `我的 AI Agent 实践：从需求到交付`

Description:

- English: `Deep, hands-on experience using AI agents to turn requirements
  into working systems.`
- Chinese: `以 AI Agent 为核心，把需求转化为可运行系统的深度实践。`

### Continuous narrative

English:

`I am a long-term, intensive user of Codex and Claude Code, and my cumulative
usage across two ChatGPT accounts is approximately 10 billion tokens. Many of
my current projects are delivered through AI-agent-centered workflows spanning
requirements analysis, specification design, implementation, debugging,
testing, documentation, and final delivery. Through sustained practice, I have
become convinced that the speed and accuracy of AI depend heavily on how
complete the idea it receives is: when goals, context, constraints, and
acceptance criteria are clear and organized through specifications or
continued dialogue into context the model can understand, AI can turn ideas
into working results with remarkable speed. My advantage is not simply
proficiency with the tools; it is the ability to understand real requirements
quickly from documents and communication, identify and resolve ambiguity,
translate requirements into executable specifications for agents, and
continuously verify and steer the implementation until the project is
delivered accurately and efficiently.`

Chinese:

`我长期深度使用 Codex 与 Claude Code，并在两个 ChatGPT 账号中累计使用约
100 亿 token。如今，我的许多项目都通过以 AI Agent 为核心的工作流完成，覆盖
需求分析、规格设计、代码实现、调试、测试、文档与最终交付。在持续实践中，我
越来越确信，AI 的实现效率和准确性高度取决于输入想法的完整度：当目标、背景、
约束和验收标准足够清晰，并通过规格文档或持续沟通组织为 AI 能够理解的上下文
时，AI 可以非常迅速地把想法转化为可运行成果。我的优势不只是熟练使用工具，
而是能够从文档和沟通中快速理解真实需求、识别并消除歧义、把需求转化为 Agent
可执行的规格，并在实现过程中持续验证结果、修正方向，最终推动项目准确、高效
地落地。`

## 6. Content and Component Design

The content layer will expose one bilingual narrative instead of a `Thought[]`
card collection:

```ts
export const aiAgentPracticeNarrative: LocalizedText = {
  en: "I am a long-term, intensive user of Codex and Claude Code, and my cumulative usage across two ChatGPT accounts is approximately 10 billion tokens. Many of my current projects are delivered through AI-agent-centered workflows spanning requirements analysis, specification design, implementation, debugging, testing, documentation, and final delivery. Through sustained practice, I have become convinced that the speed and accuracy of AI depend heavily on how complete the idea it receives is: when goals, context, constraints, and acceptance criteria are clear and organized through specifications or continued dialogue into context the model can understand, AI can turn ideas into working results with remarkable speed. My advantage is not simply proficiency with the tools; it is the ability to understand real requirements quickly from documents and communication, identify and resolve ambiguity, translate requirements into executable specifications for agents, and continuously verify and steer the implementation until the project is delivered accurately and efficiently.",
  zh: "我长期深度使用 Codex 与 Claude Code，并在两个 ChatGPT 账号中累计使用约 100 亿 token。如今，我的许多项目都通过以 AI Agent 为核心的工作流完成，覆盖需求分析、规格设计、代码实现、调试、测试、文档与最终交付。在持续实践中，我越来越确信，AI 的实现效率和准确性高度取决于输入想法的完整度：当目标、背景、约束和验收标准足够清晰，并通过规格文档或持续沟通组织为 AI 能够理解的上下文时，AI 可以非常迅速地把想法转化为可运行成果。我的优势不只是熟练使用工具，而是能够从文档和沟通中快速理解真实需求、识别并消除歧义、把需求转化为 Agent 可执行的规格，并在实现过程中持续验证结果、修正方向，最终推动项目准确、高效地落地。",
};
```

The renderer will replace the `.thought-list` map with one semantic article:

```tsx
<Section section={findSection("thoughts")} locale={locale}>
  <article className="lead-panel ai-agent-practice-panel">
    <p>{getLocalizedText(aiAgentPracticeNarrative, locale)}</p>
  </article>
</Section>
```

The existing `lead-panel` style provides the restrained border, background,
padding, readable line height, and text color required for the single narrative.
No CSS change is planned unless browser verification finds a real overflow or
readability defect.

## 7. Implementation Boundary

Expected source changes:

- `personal-portfolio/src/content/site.ts`
  - update the visible navigation label;
- `personal-portfolio/src/content/sections.ts`
  - replace the section heading and export one bilingual narrative;
  - remove the obsolete three-card `thoughts` export;
- `personal-portfolio/src/components/PortfolioSections.tsx`
  - import the narrative and render one article instead of numbered cards;
- `personal-portfolio/src/content/content.test.ts`
  - assert the approved navigation, heading, and exact bilingual narrative;
- `personal-portfolio/src/components/PortfolioSections.test.tsx`
  - assert the rendered narrative is present and the numbered thought-card
    structure is absent.

Keep unchanged:

- section ID and anchor `thoughts`;
- shared `Section` component;
- unrelated project, research, experience, education, award, skill, and contact
  content;
- DOCX resume.

The unused exported `Thought` type may remain in `types.ts` because removing a
public content type is unrelated cleanup and is not required for this change.

## 8. Testing and Verification

Implementation will follow test-driven development:

1. Replace the existing content test with expectations for the approved
   navigation, heading, and continuous narrative.
2. Add a rendering test that requires the continuous narrative and rejects the
   old `.thought-item` / `01–03` presentation.
3. Run the targeted tests and confirm they fail against the current three-card
   implementation.
4. Apply the minimal content and component changes.
5. Re-run targeted tests and then the complete suite.

Quality gates:

- Vitest passes with zero failures.
- ESLint passes.
- TypeScript `tsc --noEmit` passes.
- Next.js production build succeeds.
- English and Chinese render as one continuous narrative.
- Desktop 1440 x 1000 and mobile 390 x 844 layouts remain readable.
- The narrative panel and page have no horizontal overflow or clipping.
- Browser console contains no errors or warnings caused by the change.

## 9. Deployment

After local verification:

1. commit only the approved content, component, and tests;
2. push `main` to the existing GitHub repository;
3. wait for the exact GitHub Pages workflow run to succeed;
4. verify the deployed English and Chinese module at
   `https://foreverlongdamai.github.io/#thoughts`.

## 10. Non-Goals

This revision will not:

- retain or recreate the three numbered cards;
- add product logos, token counters, diagrams, timelines, or extra links;
- present the module primarily as “my view of AI”;
- claim that the 10-billion-token figure includes Claude Code;
- modify the DOCX resume or unrelated website sections.
