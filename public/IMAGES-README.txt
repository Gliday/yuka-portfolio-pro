DROP YOUR IMAGES HERE
=====================

You said you'll provide the files. Place them in THIS folder (public/) with these exact names:

1. headshot.jpg   — your professional portrait (portrait orientation, ~800×1000px works well)
                     Then open src/App.tsx, find the "HEADSHOT" comment in the About section,
                     uncomment the <img> line, and delete the placeholder <div>.

2. og-image.png   — social share image, 1200×630px (your name + the signature line over a
                     savanna/aerial background). Already wired into index.html's og:image
                     and twitter:image — no code change needed.

3. favicon.svg    — (optional) replaces the default Vite icon; already referenced in index.html.

Anything in public/ is served from the site root, so headshot.jpg becomes /headshot.jpg.

Tell me the actual filenames if they differ and I'll wire them in.
