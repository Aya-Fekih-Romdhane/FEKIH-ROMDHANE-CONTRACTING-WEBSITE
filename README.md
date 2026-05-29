
# 🏗️ Fekih Romdhane Contracting — شركة فقيه رمضان للمقاولات

> **Building Tunisia Since 1985** — Modern Angular 21 website for a family construction company based in Bekalta, Monastir, Tunisia.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Framework** | Angular 21 — standalone components, lazy routing |
| **Styling** | Tailwind CSS v4 |
| **i18n** | Arabic (RTL default) · French · English — runtime switcher |
| **Pages** | Home · About · Services · Projects · Contact |
| **Photos** | 70 real construction site photos from company assets |
| **Contact** | Direct WhatsApp links for Aymen, Achref & Amine |
| **Animations** | Scroll-reveal directive + hero slide-up keyframes |
| **Dark Mode** | Toggle with localStorage persistence |
| **SEO** | Meta tags, Open Graph, page titles per route |

---

## 📱 Contact Numbers

| Name | Phone | WhatsApp |
|---|---|---|
| Aymen Fekih Romdhane | +216 21 351 471 | [Chat](https://wa.me/21621351471) |
| Achref Fekih Romdhane | +216 96 112 610 | [Chat](https://wa.me/21696112610) |
| Amine Fekih Romdhane | +216 29 245 231 | [Chat](https://wa.me/21629245231) |

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
ng serve
# or
npx ng serve --open
```

---

## 🌍 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

```bash
git init
git add .
git commit -m "feat: initial Fekih Romdhane Contracting website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fekih-romdhane-contracting.git
git push -u origin main
```

### Step 2 — Install gh-pages tool

```bash
npm install -g angular-cli-ghpages
# or use npx (no global install needed)
```

### Step 3 — Build with correct base-href

Replace `fekih-romdhane-contracting` with your actual GitHub repository name:

```bash
npx ng build --base-href /fekih-romdhane-contracting/
```

### Step 4 — Deploy

```bash
npx angular-cli-ghpages --dir=dist/fekih-romdhane-contracting/browser
```

### Step 5 — Enable GitHub Pages

1. Go to your repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `gh-pages` → **/ (root)**
4. Save — your site will be live at:  
   `https://YOUR_USERNAME.github.io/fekih-romdhane-contracting/`

---

## 🔁 One-command build & deploy script

Add to `package.json` scripts:

```json
"deploy": "ng build --base-href /fekih-romdhane-contracting/ && npx angular-cli-ghpages --dir=dist/fekih-romdhane-contracting/browser"
```

Then run:
```bash
npm run deploy
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/services/
│   │   ├── translation.service.ts   # i18n engine (AR/EN/FR + RTL)
│   │   └── theme.service.ts         # Dark/Light mode
│   ├── shared/
│   │   ├── navbar/                  # Sticky navbar + language switcher
│   │   ├── footer/                  # Footer with social links
│   │   ├── pipes/translate.pipe.ts  # | t pipe for translations
│   │   └── directives/scroll-reveal.directive.ts
│   ├── features/
│   │   ├── home/                    # Hero + Stats + Services preview + CTA
│   │   ├── about/                   # Timeline + Mission/Vision + Team
│   │   ├── services/                # 6 service cards
│   │   ├── projects/                # 12 projects with filter + real photos
│   │   └── contact/                 # Form + Map + Direct team contacts
│   ├── app.routes.ts                # Lazy-loaded routes
│   └── app.config.ts                # APP_INITIALIZER for i18n + theme
├── assets/                          # 70 construction photos
public/
└── assets/i18n/
    ├── ar.json                      # Arabic translations (default)
    ├── en.json                      # English translations
    └── fr.json                      # French translations
```

---

## 🌐 Adding / Editing Translations

Edit the JSON files in `public/assets/i18n/`:

```jsonc
// public/assets/i18n/ar.json  ← Arabic (RTL, default)
// public/assets/i18n/en.json  ← English
// public/assets/i18n/fr.json  ← French
```

The language switcher in the navbar auto-reloads translations at runtime — no rebuild needed.

---

## 🗺️ Google Maps Embed

The contact page includes a Google Maps iframe for Bekalta, Monastir. To update the exact pin:

1. Open [maps.google.com](https://maps.google.com) and find the company location
2. Click **Share → Embed a map → Copy HTML**
3. Replace the `<iframe src="...">` in [`src/app/features/contact/contact.html`](src/app/features/contact/contact.html)

---

## 📦 Tech Stack

- **Angular 21** (standalone components, signals, lazy routing)
- **Tailwind CSS v4** (@tailwindcss/postcss)
- **@angular/animations**
- **Google Fonts** — Cairo (Arabic) + Inter (Latin)
- **Angular CLI** 21.2.12

---


*© 2026 Ing. Fekih Romdhane Aya *
