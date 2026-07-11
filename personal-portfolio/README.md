# Personal Portfolio · 个人主页

Bilingual (English / 中文) personal portfolio for Mai Long, built with Next.js 16, React 19, and Tailwind CSS 4. Covers research experience, projects, education, and contact information.

双语个人简历网站，使用 Next.js 16 + React 19 + Tailwind CSS 4 构建，包含研究经历、项目、教育背景与联系方式。

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # content validation tests (vitest)
npm run lint
```

## Build & Deploy

The site is a fully static export (`output: "export"` in [next.config.ts](next.config.ts)):

```bash
npm run build   # emits static site to out/
```

Deployment to GitHub Pages is automated by [.github/workflows/deploy.yml](../.github/workflows/deploy.yml): every push to `master`/`main` builds the site and publishes it via GitHub Pages. The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically — `/<repo-name>` for project pages, empty for `<user>.github.io` repositories — so no config change is needed when renaming the repo.

## Content

All resume content lives in typed data files under [src/content/](src/content/):

- [site.ts](src/content/site.ts) — profile, navigation, contact info
- [sections.ts](src/content/sections.ts) — about, research, education, awards
- [projects.ts](src/content/projects.ts) — project cards

Edit those files to update the resume; components under `src/components/` render whatever the content files declare.
