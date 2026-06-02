# Personal Portfolio Website Design

Date: 2026-06-02
Project root: `D:\A_personal_proj`
Planned app directory: `D:\A_personal_proj\personal-portfolio`

## 1. Goal

Build a polished, bilingual personal portfolio website for Mai Long. The site
will be used as a link in resumes, applications, and professional introductions.
It should show technical ability, project experience, research interests, and
personal profile information clearly.

The first version is a single-page scrolling portfolio. It must still be built
with a scalable project structure so it can later grow into a multi-page site
with project detail pages, research notes, blog posts, or a CMS-backed content
system.

## 2. Audience

Primary readers:

- Recruiters, interviewers, and internship reviewers.
- Technical collaborators or project partners.
- Domestic and international readers, so Chinese and English are both required.

Reader needs:

- Understand who Mai Long is within 10 seconds.
- See technical direction and strongest projects quickly.
- Switch between Chinese and English without losing context.
- Find contact information and CV-related highlights easily.

## 3. Recommended Stack

Use `Next.js + React + TypeScript`.

Supporting tools:

- Tailwind CSS for responsive styling.
- `lucide-react` for icons.
- Static structured content files for version one.
- Optional future i18n package only if routing-based language pages are needed.

The first version does not need a backend. The content layer should be designed
as a typed data interface so future sources can replace it:

- local TypeScript content files,
- Markdown/MDX,
- Notion or another CMS,
- database-backed API.

## 4. First-Version Scope

The first version will include:

- One-page scrolling portfolio.
- Chinese / English language switch.
- Responsive desktop and mobile layouts.
- Hero section with name, role, short tagline, key actions, and contact links.
- About section.
- Education section.
- Research and interest section.
- Projects section with cards.
- Thoughts section for personal technical views.
- Awards and certificates section.
- Skills section.
- Contact/footer section.
- Placeholder-friendly content model for modules that are not fully filled yet.

The first version will not include:

- Login/authentication.
- Database.
- Blog publishing workflow.
- Admin dashboard.
- Payment, comments, analytics, or user accounts.

## 5. Information Architecture

Single-page order:

1. Hero
2. About
3. Research & Interests
4. Projects
5. Technical Thoughts
6. Education
7. Awards & Certificates
8. Skills
9. Contact

Navigation:

- Sticky top navigation on desktop.
- Compact mobile navigation.
- Language toggle visible in the header.
- Anchor links scroll to page sections.

Future expansion:

- `/projects/[slug]` for detailed case studies.
- `/thoughts/[slug]` for long-form research or technical articles.
- `/zh` and `/en` route variants if SEO-specific multilingual routing becomes
  important later.

## 6. Content Interface

Use typed bilingual content objects.

Example shape:

```ts
type Locale = "zh" | "en";

type LocalizedText = {
  zh: string;
  en: string;
};

type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  scenario: LocalizedText;
  work: LocalizedText;
  impact?: LocalizedText;
  technologies: string[];
  links?: {
    label: LocalizedText;
    href: string;
  }[];
  featured?: boolean;
};
```

Content files:

```text
src/content/profile.ts
src/content/education.ts
src/content/research.ts
src/content/projects.ts
src/content/thoughts.ts
src/content/awards.ts
src/content/skills.ts
```

Initial content from `C:\Users\long\Desktop\CV_MaiLong.docx`:

- Name: Mai Long.
- Research interests: Embodied Intelligence, Vision-Language-Action models.
- Education:
  - Master of Science in Computer Science, Shandong University of Science and
    Technology, expected June 2027.
  - Software Engineering, Shandong University of Science and Technology,
    graduated June 2024.
- Projects:
  - Underwater Fouling Detection.
  - Traffic Scene Simulation Demonstration.
  - Simple E-Commerce Webpage Development.
- Awards:
  - First Prize, C/C++ Group, Shandong Division, 16th Blue Bridge Cup.
  - CET-6 Certificate.
- Thought section:
  - Current reflections on end-to-end and modular embodied intelligence.

For missing Chinese text, the first implementation may include polished Chinese
drafts derived from the English CV. These should be marked as editable content
in the content files.

## 7. Visual Direction

Style: modern technology portfolio.

Design qualities:

- Clean and professional, not overly decorative.
- Suitable for AI, embodied intelligence, VLA, and software engineering.
- Uses subtle motion, structured spacing, and high-contrast visual hierarchy.
- First screen should immediately communicate name, direction, and value.

Suggested palette:

- Near-black or deep neutral background.
- Light foreground text.
- Cyan/teal accent for technology signal.
- Small amount of warm accent for highlights.

Layout:

- No nested cards.
- Cards only for repeated project/award/skill items.
- Section layouts should feel like full-width bands with constrained content.
- Text must not overflow or overlap on mobile.

## 8. Components

Core components:

- `SiteHeader`: navigation and language toggle.
- `LanguageToggle`: switches current locale.
- `Section`: shared section shell.
- `Hero`: first-screen identity and CTA.
- `AboutSection`: short personal introduction.
- `ResearchSection`: research and interest areas.
- `ProjectCard`: reusable project display.
- `ProjectsSection`: featured project grid/list.
- `ThoughtsSection`: technical viewpoint preview.
- `EducationSection`: education timeline.
- `AwardsSection`: award/certificate list.
- `SkillsSection`: grouped skills.
- `ContactSection`: email, phone, optional GitHub/LinkedIn later.

State:

- Language state can be client-side for version one.
- Persist preferred language in `localStorage`.
- Default language may be English for international resume use, with an obvious
  Chinese toggle.

## 9. Data Flow

1. Static content files export typed data.
2. The page imports all content.
3. Current locale is selected by language state.
4. UI components receive already-typed content and render locale-specific text.

No external runtime data is required for version one.

## 10. Error Handling

Since the first version is static:

- Missing optional fields should be hidden gracefully.
- Empty modules should show a restrained placeholder only when useful.
- Links should open safely with `rel="noreferrer"` when external.
- Contact fields should be easy to edit in content files.

## 11. Testing And Verification

Before completion:

- Run install/build checks for the Next.js app.
- Run TypeScript or Next.js build validation.
- Open the site locally in a browser.
- Check desktop and mobile viewports.
- Check the Chinese/English toggle.
- Check navigation anchors.
- Check console for obvious errors.
- Confirm text does not overlap or overflow.

## 12. Deployment Plan

Development first:

1. Build locally.
2. Deploy to Vercel preview or production when requested.
3. Use the default `*.vercel.app` URL first.
4. Add a custom domain later after the site content and visual identity are
   stable.

The site should be deployable without a backend or private environment
variables.

## 13. Open Decisions

The first implementation can proceed with these assumptions:

- Use project directory `D:\A_personal_proj\personal-portfolio`.
- Use English as the initial default language, with Chinese toggle.
- Use local static content files for version one.
- Use CV-derived content for filled sections and clear placeholders for future
  content.
- Do not deploy until the user asks.

