# Gliday Yuka Luvonga — Portfolio (React + Vite + TypeScript)

Research-grade conservation-tech portfolio. *"Field science + modern data/AI."*
This is the React conversion of the single-file `portfolio-pro` prototype.

## Run locally

```powershell
# In VS Code: Ctrl + `  to open the terminal
cd D:\yuka-portfolio-pro
npm install      # first time only
npm run dev      # → http://localhost:5173
```

> If `node`/`npm` aren't found, your Node install is at `C:\Program Files\nodejs`.
> Add it to PATH, or run once per session: `$env:PATH += ";C:\Program Files\nodejs"`

## Build for production

```powershell
npm run build    # outputs to dist\
npm run preview  # preview the production build locally
```

## Deploy free on GitHub Pages

1. Push this folder to a GitHub repo.
2. Install the helper: `npm i -D gh-pages`
3. In `package.json` add: `"homepage": "https://USERNAME.github.io/REPO"` and scripts
   `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`.
4. In `vite.config.ts` set `base: '/REPO/'`.
5. Run `npm run deploy`. Then enable Pages (branch `gh-pages`) in repo Settings.

*(Or use Netlify/Vercel: point them at this repo, build command `npm run build`, publish dir `dist`.)*

## Project structure

```
src/
├── App.tsx      ← all sections (Nav, Hero, Proof, Services, Work, CaseDetail,
│                  About, Skills, Writing, Contact, Footer) + theme + form logic
├── data.ts      ← case studies, skills, bio, copy  ← EDIT CONTENT HERE
└── index.css    ← design system (savanna palette, fonts, light/dark themes)
public/          ← drop headshot.jpg and og-image.png here
```

## ✏️ Customise

| Want to change… | Edit… |
|---|---|
| **Real metrics** (replace amber `[~placeholder]`) | `src/data.ts` → each case's `results` array |
| Case study text | `src/data.ts` → `CASES` |
| Skills / bio / intros | `src/data.ts` → `SKILLS`, `ABOUT_BIO`, `COPY` |
| Colours / fonts / spacing | `src/index.css` → `:root` and `[data-theme]` blocks |
| **Headshot** | drop `public/headshot.jpg`, then enable the `<img>` in `App.tsx` (About) |
| **OG share image** | drop `public/og-image.png` (1200×630) — already referenced in `index.html` |
| Social URLs | `App.tsx` → Contact + structured data in `index.html` |
| **Contact form → real email** | `App.tsx` → set `FORMSPREE_ENDPOINT` (see below) |

### Enable the contact form (Formspree, free)
1. Sign up at https://formspree.io and create a form.
2. Copy your endpoint URL (e.g. `https://formspree.io/f/abcdwxyz`).
3. In `src/App.tsx`, set `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcdwxyz'`.
4. Done — submissions now arrive in your inbox. (Leave `''` for demo mode.)

## Notes
- Forced dark theme by default; light/dark toggle persists via `localStorage`.
- All amber-highlighted figures in case studies are **placeholders** — replace with verified numbers.
- Full strategy, SEO, and the replace-checklist live in
  `D:\Yuka's Portfolio & Resume\portfolio-pro\PORTFOLIO-STRATEGY.md`.
