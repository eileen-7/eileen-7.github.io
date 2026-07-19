# Eileen — Portfolio

A single-page, dark-mode portfolio site tracing a life chronologically, built with plain
HTML/CSS/JS (no build step, no dependencies) — so it's simple to host for free and easy to edit.

## Files
- `index.html` — all content lives here (edit text directly in this file)
- `style.css` — colors, type, layout, animation
- `script.js` — scroll-drawn timeline thread + reveal animations
- `assets/` — photo(s)

## Editing content
Open `index.html` in any text editor. Each life event is one `<section class="entry">` block —
copy/paste one to add a new event, or edit the text inside existing ones.

## Putting it on GitHub (free hosting, live at a public URL)

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository**
   - Click the "+" in the top right → "New repository"
   - Name it `eileen-portfolio` (or anything you like — if you name it
     `<your-username>.github.io` exactly, your site will live at the root of your GitHub
     domain instead of a sub-path)
   - Keep it **Public** (required for free GitHub Pages)
   - Don't initialize with a README (we already have one) — click **Create repository**
3. **Upload the files**
   - On the new repo's page, click "uploading an existing file"
   - Drag in `index.html`, `style.css`, `script.js`, and the `assets` folder (with your photo inside)
   - Commit the changes
4. **Turn on GitHub Pages**
   - Go to the repo's **Settings** tab → **Pages** (left sidebar)
   - Under "Build and deployment" → Source, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → Save
5. **Wait ~1–2 minutes**, then your site will be live at:
   `https://<your-username>.github.io/eileen-portfolio/`
   (or `https://<your-username>.github.io/` if you used that exact repo name)

### Making it show up when people search your name
- Once it's live, submit the URL at Google Search Console (search-console for indexing requests) so it gets crawled sooner
- Share the link a few times (LinkedIn, resume, etc.) — inbound links help search engines find and rank it faster
- It can take days to weeks to appear in search results after that — that part isn't instant

## Alternative: command line (if you have git installed)
```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/eileen-portfolio.git
git push -u origin main
```
Then follow step 4 above to enable Pages.
