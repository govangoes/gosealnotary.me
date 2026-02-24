# GoSeal Notary Website

Static, mobile-first website for **GoSeal Notary** (Oviedo, FL), built with plain HTML, CSS, and JavaScript.

## Project Structure

- `index.html` - Main one-page site
- `styles.css` - Global site styles
- `script.js` - Contact form progressive enhancement
- `404.html` - Branded not found page
- `thanks.html` - Post-submit confirmation page
- `robots.txt` - Search crawler directives
- `sitemap.xml` - XML sitemap for the main URL
- `CNAME` - Custom domain for GitHub Pages
- `assets/logo.svg` - Placeholder logo
- `assets/favicon.svg` - Favicon

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
