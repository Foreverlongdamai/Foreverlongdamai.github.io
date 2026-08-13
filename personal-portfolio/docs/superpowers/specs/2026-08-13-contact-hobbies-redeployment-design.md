# Contact, Hobbies, and Redeployment Design

## Goal

Update the bilingual personal portfolio so the Chinese experience accurately reflects Mai Long's current presence at Cranfield University, presents both China and UK contact routes, and adds a personal interest in games and DIY game content through the published Civilization VII "Lelouch / Zero" Mod. Redeploy the verified result to GitHub Pages.

## Verified source facts

- Cranfield email: `Mai.Long.358@cranfield.ac.uk`, confirmed from the user's screenshot and an existing Cranfield email file.
- Cranfield campus address: `Cranfield University, College Road, Cranfield, Bedfordshire, MK43 0AL, UK`, confirmed against Cranfield University's official location page.
- China contact route: Shandong University of Science and Technology in Qingdao, the existing Gmail address, and the existing Chinese mobile number.
- Civilization VII work: the public GitHub repository documents the "Lelouch / Zero" leader Mod, including Geass, the Zero heroic commander, Black Knights, a promotion tree, Zero Requiem, bilingual content, tests, and deployment tooling.
- Workshop publication: the Mod is publicly available on Steam Workshop as "Lelouch / Zero". The portfolio will not claim download counts, popularity, formal release status, or complete runtime validation.

## Content and layout

### Hero

Keep the existing hero visually concise. Because Mai is currently in the UK, the primary contact action and hero metadata use the Cranfield email and Cranfield campus address. The China route remains available in the full contact section rather than competing for attention above the fold.

### Contact section

Represent contact information as two structured profiles instead of one global email/location pair:

1. United Kingdom / Cranfield University: full campus address and Cranfield email.
2. China / Shandong University of Science and Technology: Qingdao location, Gmail, and existing Chinese mobile number.

Render the profiles as two responsive cards. They appear side by side on desktop and stack on narrower screens. Long addresses and email addresses must wrap without overflow, and all email/telephone actions remain semantic links.

### Games and content creation

Add a compact personal-interest card to the About section rather than mixing fan work into the academic project list or adding another top-level navigation item. The card explains an interest in strategy games and DIY game content, uses "Lelouch / Zero" as a concrete creative result, and links to both the requested GitHub repository and the corresponding Steam Workshop item.

Chinese copy should read naturally as personal experience rather than a software release claim. English content remains available so switching language does not expose an incomplete section.

## Data model

- Replace the single `location`, `email`, and `phone` profile fields with a `contacts` array.
- Each contact has a stable id, localized label/organization/address, an email, and an optional phone.
- Mark Cranfield as the current contact so the Hero can select it without relying on array order.
- Add a localized `hobby` content object with title, body, repository URL, and Workshop URL.

## Accessibility and responsive behavior

- External links open in a new tab with `rel="noopener noreferrer"`.
- Decorative icons remain hidden from assistive technology.
- Cards and links preserve existing visible focus styles and mobile touch-target sizing.
- Long contact strings use safe wrapping, and the two-column contact grid collapses to one column below the existing tablet breakpoint.

## Verification and release

1. Add content-model and component-rendering tests before implementation and confirm they fail for the missing fields/section.
2. Implement the minimal model, content, component, and CSS changes required to pass.
3. Run unit tests, lint, and the production static export build.
4. Inspect the built site in Chinese and English at desktop and mobile widths, including external links and text overflow.
5. Commit only portfolio files, push `main`, monitor the GitHub Pages workflow, and verify the public URL contains the new Cranfield email and Civilization VII repository link.

