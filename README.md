# Mirrova website

Static landing page for Mirrova (private messenger, private beta in development). It's plain HTML/CSS/JS, so there's no build step. GitHub Pages hosts it.

## Rebranding
1. **Name / tagline / domain / contact email:** edit the `BRAND` object at the top of `script.js`. Set `contact` to show a mailto link in the footer.
2. **Colors / font:** edit the brand tokens (`--brand`, `--brand-2`, `--brand-ink`, `--brand-soft`, `--font`) at the top of `styles.css`. They appear in the light block and in both dark-mode blocks.
3. **Logos & icons:** replace `logo.svg`, `logo-dark.svg`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`.
4. **Pages & SEO:** also update `robots.txt`, `sitemap.xml`. **SEO text:** update `<title>` and the `<meta>` tags in `index.html`, because crawlers read these before JS runs. Search the files for the old name to catch any leftovers.

## Notes
- There's no sign-up form or backend. The site collects no data and uses no cookies or analytics. The theme choice is stored in the visitor's own browser only.
- Phone mockups are labelled **Concept preview**.
- Privacy Policy and Terms are **drafts** and must be finalized before launch.
- Copy rules: beta is in development, Android first, iOS planned, and an independent review is *planned*, not done. E2EE is described as architecture in development, not a verified service.
- Custom domain: add a `CNAME` file containing `mirrova.app` once DNS is ready.
