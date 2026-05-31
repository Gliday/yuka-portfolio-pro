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

## Step 4 — Turn on Pages with GitHub Actions (one time)

This repo includes an **auto-deploy workflow** (`.github/workflows/deploy.yml`).

1. Go to `https://github.com/YOUR_USERNAME/portfolio` → **Settings → Pages**.
2. Under **Source**, choose **GitHub Actions** (not "Deploy from a branch").
3. That's it — no folder/branch to pick.

The workflow runs automatically on your first push. Watch it under the repo's
**Actions** tab. When the green check appears (~1–2 min), your site is live at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

🎉 Done — share that link anywhere.

---

## Updating the site later (fully automatic 🚀)

After any change (real metrics in `src/data.ts`, your headshot, copy edits):
1. Save files (`Ctrl + S`).
2. Source Control panel (`Ctrl + Shift + G`) → type a short message → **✓ Commit** → **Sync Changes**.

That's it. The push triggers the workflow, which **rebuilds and redeploys the site automatically** — you never run a deploy command. Refresh your live URL after ~1–2 min.

> **Manual fallback:** `npm run deploy` (in the terminal) still works too — it
> builds and pushes to a `gh-pages` branch. You only need this if you ever turn
> the Actions workflow off.

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
