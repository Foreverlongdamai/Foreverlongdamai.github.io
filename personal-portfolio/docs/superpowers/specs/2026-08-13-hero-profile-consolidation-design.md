# Hero Profile Consolidation Design

## Goal

Make the opening screen more direct and useful by replacing the decorative embodied-intelligence stack with personal profile content, showing both email addresses immediately, removing the weak standalone About introduction, and reducing the professional project list to three stronger projects.

## Approved layout: Option B

The Hero remains a two-column layout on desktop.

### Left column

Keep the existing visual hierarchy while updating its content:

1. Identity line:
   - Chinese: `山东科技大学计算机技术研究生`
   - English: `Graduate Student in Computer Technology at Shandong University of Science and Technology`
2. Name, current tagline, two research-field chips, and the existing project/contact actions.
3. School affiliations: Cranfield University and Shandong University of Science and Technology.
4. Two separately labelled, clickable email rows:
   - Cranfield email: `Mai.Long.358@cranfield.ac.uk`
   - China/common email: `long204323@gmail.com`

The contact action scrolls to the full Contact section instead of choosing one email on the user's behalf.

### Right column

Remove the complete `Embodied AI Stack / 具身智能栈` visual and replace it with the content currently shown on the right side of the standalone About section:

1. A profile-introduction card using `profile.intro`.
2. Three compact statistics:
   - `3` project tracks
   - `2027` expected M.S. graduation
   - `2` research fields
3. The complete Games & Game Content Creation card, including its current descriptive text and the GitHub and Steam Workshop links.

The right column must not reintroduce the old `个人简介`, `以研究方向驱动工程实践`, or explanatory paragraph. It contains only the useful profile content listed above.

## Standalone About removal

Delete the entire standalone About section from the rendered page. Remove the `About / 简介` navigation item and the About entry from `portfolioSections` so the header never links to a missing anchor.

The profile introduction and hobby content have one source of truth and are rendered only in the Hero.

## Project reduction

Delete `simple-ecommerce-webpage` from the project data. Retain these three projects, in their current order:

1. eVTOL Pilot Training Effectiveness Assessment System
2. Underwater Fouling Detection
3. Traffic Scene Simulation Demonstration

The Hero statistic uses `projects.length`, so it changes from 4 to 3 automatically. Remove the unused shopping-cart project icon. Because the e-commerce project is removed, delete `web development` from the short profile introduction; do not otherwise rewrite the approved introduction.

## Responsive behavior

- Desktop: retain the current approximately 1.08 / 0.92 two-column balance, with the profile content replacing the decorative visual.
- Tablet and mobile: stack the left column followed by the right-column profile content.
- Do not force a fixed or minimum viewport-height presentation when the combined content is taller than the screen.
- Keep the three statistics in one compact row where space allows; stack them at the existing small-screen breakpoint.
- Each email is its own link and may wrap safely without causing horizontal scrolling.
- Hobby action links become full-width on mobile, matching the existing behavior.

## Accessibility and interaction

- Use semantic `mailto:` links for both email addresses.
- Give both email rows visible labels in both languages.
- Keep decorative icons `aria-hidden`.
- Preserve visible keyboard focus styles and existing touch-target sizing.
- Keep the Hobby GitHub and Steam links as safe external links with `target="_blank"` and `rel="noopener noreferrer"`.
- Ensure the Contact button links to `#contact` and the navigation contains no `#about` target.

## Testing and verification

Follow test-driven development:

1. Update content tests first and confirm failure for the old role, four projects, About navigation, and e-commerce project.
2. Add a Hero rendering test and confirm failure for the missing second email and current system visual.
3. Implement only the changes required to satisfy the tests.
4. Run all unit tests, ESLint, and the production static build.
5. Inspect Chinese and English versions at 1440, 1024, 768, and 390 pixel widths, checking text wrapping, vertical flow, external links, keyboard focus, console output, and horizontal overflow.
6. Push `main`, monitor both GitHub Pages jobs, and verify the public page contains both emails, the new identity line, three projects, and no e-commerce project or embodied-intelligence stack.
