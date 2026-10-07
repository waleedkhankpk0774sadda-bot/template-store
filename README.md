# Template Store Website

Static site (HTML/CSS/JS). No build step. Open `index.html` to test.

## 1. Edit your settings
Open `js/config.js`: store name, tagline, your name/bio, Web3Forms key, WhatsApp number.

## 2. Add a template (do this any day)
1. Save the preview image in `assets/templates/` (about 800px wide, JPG/WebP).
2. Open `js/templates-data.js`, copy the example block, edit it, keep a comma between blocks.
3. `featured: true` shows it on the home page (max 6). All templates appear on `templates.html`.
Commit on GitHub; the site updates in about a minute.

## 3. Get client requests in your email
1. Go to https://web3forms.com, enter your email, get the Access Key.
2. Paste it into `web3formsKey` in `js/config.js`.

## 4. Publish on GitHub Pages
1. github.com -> New repository (public), e.g. `template-store`.
2. Upload ALL files and folders from this zip (index.html must be in the root).
3. Settings -> Pages -> Source: Deploy from a branch -> `main` / `(root)` -> Save.
4. Wait 1-2 minutes. Site: `https://USERNAME.github.io/template-store/`
5. Optional: Settings -> Pages -> Custom domain.
