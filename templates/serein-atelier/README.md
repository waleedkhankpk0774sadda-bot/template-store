# Serein Atelier — Perfume Storefront Template

A responsive, portfolio-ready luxury perfume storefront built with plain HTML, CSS and vanilla JavaScript. No build step or paid service is required. This is a fictional brand and a frontend demonstration, not a live shop or a claim that the pictured products are Serein Atelier products.

## Included
- Six-product collection using six individually enhanced supplied reference images.
- Custom Serein Atelier wordmark and SVG favicon.
- Responsive hero, product grid, brand story, benefits, newsletter demo and footer.
- Product detail modal with quantity selector and clearly labelled conceptual scent profiles.
- Functional cart: add, remove, increment/decrement, subtotal, count, empty state and localStorage persistence.
- Checkout notice only; no payment is taken and no order is placed.
- Newsletter email validation; no email is sent or stored.
- Responsive mobile navigation, subtle motion, reduced-motion support, focus states and basic SEO metadata.
- Product sorting by curated order, price, or name.

## Project structure
```
perfume-store/
├── index.html
├── styles.css
├── script.js
├── README.md
├── TEMPLATE-OFFER.md
├── CLIENT-CHECKLIST.md
├── .nojekyll
└── assets/
    ├── logo.svg
    ├── favicon.svg
    └── images/
        ├── perfume-01.jpg
        ├── perfume-02.jpg
        ├── perfume-03.jpg
        ├── perfume-04.jpg
        ├── perfume-05.jpg
        └── perfume-06.jpg
```

## Run locally
1. Extract the ZIP archive.
2. Open `index.html` in a modern browser. For best local testing, use a simple static server such as VS Code Live Server or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.
3. Test adding products, cart quantities, removal, refresh persistence, mobile navigation, modal interactions, and newsletter validation.

## Deploy to GitHub Pages
1. Create a GitHub repository (for example `serein-perfume-store`).
2. Upload the *contents* of this folder to the repository root, including `.nojekyll`.
3. Open **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for GitHub Pages to publish the site. The URL will be similar to `https://USERNAME.github.io/REPOSITORY/`.
5. Open that exact URL and test it on desktop and mobile. The site uses relative asset paths and does not rely on server-side routes, so it can run from a repository subpath.

## Edit products and imagery
- Product names, prices, descriptions, image paths and concept profiles are defined in the `products` array near the top of `script.js`.
- Replace image files inside `assets/images/` while keeping their filenames, or update the matching `image` property in `script.js`.
- Product profiles in this demo are invented creative concepts, not verified manufacturer notes. Replace them with client-approved, verified information before commercial launch.
- Update the contact email, social links, privacy/terms, shipping and returns content in `index.html` before publishing for a real business.
- Update brand colors in the CSS `:root` variables in `styles.css`.
- The Google Fonts import is optional; the site falls back to system serif and sans-serif fonts if unavailable.

## Important limitations
- Checkout/payment processing is not connected.
- Newsletter submission validates the field but does not transmit or save email addresses.
- Cart persistence is local to the visitor's browser and is not shared across devices.
- Product photos are supplied visual references and have been lightly enhanced for web presentation. They are not official Serein Atelier product photography; product branding visible in the source imagery may belong to third parties.
- This template does not include domain, hosting, payment gateway setup, product sourcing, legal policy drafting, or custom integrations.

See `TEMPLATE-OFFER.md` and `CLIENT-CHECKLIST.md` for the portfolio listing copy and customization intake checklist.
