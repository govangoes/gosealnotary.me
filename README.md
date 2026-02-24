# GoSeal Notary Website

Static, mobile-first website for **GoSeal Notary** (Oviedo, FL), built with plain HTML, CSS, and JavaScript.

## Project Structure

- `index.html` - Main one-page site
- `styles.css` - Global site styles
- `script.js` - Contact form progressive enhancement
- `404.html` - Branded not found page
- `thanks.html` - Post-submit confirmation page
- `site.webmanifest` - Web app manifest and icon mapping
- `robots.txt` - Search crawler directives
- `sitemap.xml` - XML sitemap for the main URL
- `CNAME` - Custom domain for GitHub Pages
- `assets/goseal-logo.png` - Primary transparent logo (social/schema image)
- `assets/goseal-logo-256h.png` - Header logo asset
- `assets/goseal-logo-128h.png` - Alternate smaller logo asset
- `assets/goseal-favicon.ico` - Browser favicon
- `assets/goseal-icon-192.png` - App/icon asset (192x192)
- `assets/goseal-icon-512.png` - App/icon asset (512x512)
- `assets/logo.svg` - Legacy logo (kept for rollback)
- `assets/favicon.svg` - Legacy favicon (kept for rollback)

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server preview (recommended):

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. In the repository, go to **Settings > Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), folder `/ (root)`
4. Save and wait for Pages deployment.
5. Confirm the published URL loads correctly.

## Custom Domain Setup (`gosealnotary.me`)

The repository includes a `CNAME` file with:

```text
gosealnotary.me
```

### DNS Records

In your domain DNS provider, configure:

- Apex/root (`@`) A records pointing to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Optional `www` CNAME:
  - Name: `www`
  - Target: `<your-github-username>.github.io`

After DNS propagates, in **Settings > Pages**:

1. Set **Custom domain** to `gosealnotary.me` (if not already detected).
2. Enable **Enforce HTTPS** when available.

## Post-Deploy Checklist

- Confirm `https://gosealnotary.me` resolves and loads.
- Confirm `https://gosealnotary.me/robots.txt` is accessible.
- Confirm `https://gosealnotary.me/sitemap.xml` is accessible.
- Verify links (`tel`, `mailto`, nav anchors).
- Test layout on mobile and desktop widths.

## Form Submissions (FormSubmit)

The contact form posts to FormSubmit with this endpoint:

```text
https://formsubmit.co/govangoes@gmail.com
```

Configured hidden fields:

- `_honey` (honeypot field for spam reduction)
- `_captcha=true` (FormSubmit captcha enabled)
- `_subject=New GoSeal Notary Request`
- `_next=https://gosealnotary.me/thanks.html`

Important first-run behavior:

- After deployment, submit the form once from production.
- FormSubmit sends a confirmation/verification email to the recipient inbox.
- You must confirm that email before submissions start delivering normally.

To change recipient or success redirect later, edit the hidden fields in `index.html`.

## Branding Assets

Header/logo and icon references are configured in `index.html`, `404.html`, `thanks.html`, `privacy.html`, `terms.html`, and `disclaimer.html`.

If you replace logo files later:

1. Upload new assets in `assets/`.
2. Update the header image path in `index.html`.
3. Update favicon/app icon links in each page head.
4. Keep `site.webmanifest` icon entries in sync with your icon files.

## Updating SEO Metadata Later

When business details change, update these items together:

1. `index.html`:
   - `<title>`
   - meta description
   - canonical URL
   - Open Graph tags
   - JSON-LD `LocalBusiness` fields
2. `sitemap.xml`:
   - `<lastmod>` date
3. `robots.txt`:
   - sitemap URL (if domain/path changes)

Keep all domain references consistent with your live URL.
