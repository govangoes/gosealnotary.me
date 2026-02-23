# gosealnotary.me

Professional mobile notary and loan signing services based in Oviedo, Florida. GoSeal Notary provides reliable, on-time document notarization for real estate closings, legal documents, affidavits, and general notary needs throughout Central Florida.

---

## Project Structure

```
gosealnotary.me/
├── index.html          # Single-page marketing website
├── 404.html            # Custom not-found page
├── styles.css          # Mobile-first stylesheet
├── script.js           # Minimal JS (nav toggle, FAQ accordion)
├── robots.txt          # Search engine instructions
├── sitemap.xml         # XML sitemap for SEO
├── CNAME               # Custom domain for GitHub Pages
├── assets/
│   ├── logo.svg        # GoSeal Notary wordmark logo (SVG)
│   └── favicon.svg     # Browser tab icon (SVG)
└── README.md           # This file
```

---

## Local Development

No build tools required — this is a plain HTML/CSS/JS site.

```bash
# Option 1: Python (built-in)
python3 -m http.server 8080
# Then open http://localhost:8080

# Option 2: Node.js (npx)
npx serve .
# Then open http://localhost:3000

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## Activating the Contact Form

The contact form in `index.html` currently posts to `#` (no backend). To enable it:

1. **Formspree** (free tier available, no account required for basic use):
   - Sign up at https://formspree.io
   - Create a form and copy your form ID
   - Replace `action="#"` in the `<form>` with `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Remove `novalidate` if you want HTML5 browser validation

2. **Basin** — https://usebasin.com (similar, free tier)

3. **Netlify Forms** — add `netlify` attribute to `<form>` if hosting on Netlify

---

## GitHub Pages Deployment

### 1. Push to GitHub

```bash
git init          # if not already a git repo
git add .
git commit -m "Initial site"
git remote add origin https://github.com/YOUR_USERNAME/gosealnotary.me.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `main`, folder: `/ (root)`
5. Click **Save**

GitHub Pages will publish your site at `https://YOUR_USERNAME.github.io/gosealnotary.me/`
within a few minutes.

### 3. Custom Domain Setup

The `CNAME` file already contains `gosealnotary.me`.

#### DNS Configuration (at your domain registrar)

Add the following DNS records:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | YOUR_USERNAME.github.io  |

> DNS propagation typically takes a few minutes to 48 hours.

#### Enable HTTPS

1. In GitHub **Settings → Pages**, enter your custom domain (`gosealnotary.me`)
2. Wait for DNS to verify (green checkmark)
3. Check **Enforce HTTPS** once the TLS certificate is issued (usually within minutes after DNS propagates)

---

## SEO & Schema

- `<title>` and `<meta name="description">` are set in `index.html`
- Open Graph and Twitter Card meta tags are included
- `LocalBusiness` Schema.org JSON-LD structured data block is in `<head>`
- `sitemap.xml` and `robots.txt` are ready for Google Search Console
  - Submit sitemap at: https://search.google.com/search-console

---

## Updating Contact Information

All contact details (phone, email) are set to placeholders. Search for
`(407) 000-0000` and `info@gosealnotary.me` in `index.html`, `404.html`,
`sitemap.xml`, and the JSON-LD block and replace with real values before
going live.

