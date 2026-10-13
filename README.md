# Mirrova website

Static landing page for Mirrova (private messenger, private beta in development). It's plain HTML/CSS/JS, so there's no build step. GitHub Pages hosts it.

## Rebranding
1. **Name / tagline / domain:** edit the `BRAND` object at the top of `script.js`.
2. **Colors / font:** edit the brand tokens (`--brand`, `--brand-2`, `--brand-ink`, `--brand-soft`, `--font`) at the top of `styles.css`. They appear in the light block and in both dark-mode blocks.
3. **Logos & icons:** replace `logo.svg`, `logo-dark.svg`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`.
4. **SEO text:** update `<title>` and the `<meta>` tags in `index.html`, because crawlers read these before JS runs. Search the files for the old name to catch any leftovers.

## Notes
- The waitlist form is a **demo**. It sends nothing anywhere.
- Copy rules: beta is in development, Android first, iOS planned, and an independent audit is *planned*, not done.
- Custom domain: add a `CNAME` file containing `mirrova.app` once DNS is ready.
