# 🚀 Publish to GitHub & Host on GitHub Pages — via VS Code

Your project is already a Git repo with one commit on the `main` branch.
Follow these steps once; after that, updating is two clicks.

---

## Step 1 — Open the project in VS Code

`File → Open Folder…` → select **`D:\yuka-portfolio-pro`**

---

## Step 2 — Sign in to GitHub (one time)

1. Click the **Accounts** icon (bottom-left, person silhouette).
2. Choose **Sign in with GitHub** → authorise in the browser.

---

## Step 3 — Publish the repo (this creates it on GitHub)

1. Open **Source Control** in the left sidebar (`Ctrl + Shift + G`).
2. You'll see your commit already made. Click **“Publish Branch”**.
3. Choose **“Publish to GitHub public repository”**
   *(Pages hosting is free only for **public** repos.)*
4. Name it — e.g. **`portfolio`** — and press Enter.
5. VS Code creates the repo and pushes `main`. ✅

> Your repo is now at `https://github.com/YOUR_USERNAME/portfolio`

---

## Step 4 — Deploy to GitHub Pages

Open the VS Code terminal (`` Ctrl + ` ``) and run:

```powershell
npm run deploy
```

This builds the site and pushes it to a `gh-pages` branch automatically.

---

## Step 5 — Turn on Pages (one time)

1. Go to `https://github.com/YOUR_USERNAME/portfolio` → **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **`gh-pages`** · Folder: **`/ (root)`** → **Save**.
4. Wait ~1–2 minutes. Your live site appears at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

🎉 Done — share that link anywhere.

---

## Updating the site later (the 2-click flow)

**Content/code changes** (e.g. real metrics in `src/data.ts`, your headshot):
1. Save files (`Ctrl + S`).
2. Source Control panel → type a short message → **✓ Commit** → **Sync Changes**.
   *(This updates the source on `main`.)*
3. In the terminal, run **`npm run deploy`** again to push the new build live.

> Tip: `main` holds your source code; the `gh-pages` branch holds the built site.
> `npm run deploy` always rebuilds from your latest local files.

---

## Custom domain (optional, later)
In **Settings → Pages → Custom domain**, add e.g. `gliday.com`, then set the DNS
records GitHub shows. Update `index.html`'s canonical/`og:url` to match.

---

## Before you go live — quick checklist
- [ ] Replace amber `[~placeholder]` metrics in `src/data.ts` with real numbers
- [ ] Add `public/headshot.jpg` + enable the `<img>` in `src/App.tsx` (About)
- [ ] Add `public/og-image.png` (1200×630) for nice social link previews
- [ ] Set your real domain in `index.html` (`canonical`, `og:url`) if you add one
- [ ] (Optional) Wire the contact form: set `FORMSPREE_ENDPOINT` in `src/App.tsx`
