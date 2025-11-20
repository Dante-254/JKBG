# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7f60fdcc-fcef-44bd-8610-e0b858c8809d

# JKBG Construction — Website

This repository is a Vite + React + TypeScript marketing website for JKBG Construction. It uses Tailwind CSS and shadcn-ui primitives for layout and components. The site includes a home page with a `CurrentSite` section and a dedicated `Gallery` page powered by images stored under the `public/` folder.

---

## Quick start

- Install dependencies:

```bash
npm install
```

- Run the development server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

---

## Project structure (important paths)

- `src/` — application source code
  - `src/pages/Index.tsx` — Home page (renders `Hero`, `CompanyInfo`, `CurrentSite`, `About`, `Services`, `Contact`)
  - `src/pages/Gallery.tsx` — Gallery page (masonry-like grid + lightbox)
  - `src/components/CurrentSite.tsx` — Component that displays `public/current_site` images on the home page
  - `src/components/Header.tsx` — Site header / navigation (contains `Home`, `Gallery`, `About`, etc.)
  - `src/components/Footer.tsx` — Site footer
  - `src/components/ui/` — UI primitives (Dialog, Card, Badge, Toaster, etc.)
- `public/current_site/` — images shown on the home page `CurrentSite` section
- `public/gallery/` — the full gallery images (displayed on `/gallery`)
- `public/_image-manifest.json` — generated manifest containing arrays of image URLs
- `scripts/generate-image-manifest.mjs` — Node script to create/update the image manifest

---

## Image workflow (how to add client images)

Recommended locations for images the client will add:

- For images that the client will upload/update frequently (no rebuild): put files in `public/current_site/` for images that appear on the home page, or `public/gallery/` for the full gallery.

Add images (example):

```bash
# copy client's files into the public folders
mkdir -p public/current_site public/gallery
cp /path/to/client_images/* public/gallery/
```

After adding or removing images, regenerate the manifest so the site can read the new image list at runtime:

```bash
node ./scripts/generate-image-manifest.mjs
```

This writes `public/_image-manifest.json` with two arrays: `current_site` and `gallery`. The app fetches this manifest at runtime so adding/removing images does not require rebuilding the site — only regenerating the manifest.

---

## Gallery behavior and UI notes

- The gallery page (`/gallery`) uses a CSS column layout for a masonry-like appearance and provides varied thumbnail heights for visual interest.
- Thumbnails use `loading="lazy"` to improve performance.
- Clicking a thumbnail opens a lightbox (implemented with the existing `Dialog` UI component). The lightbox supports prev/next controls, keyboard navigation (←, →, Esc), and a responsive image view (max height ~80vh).
- Images in the `CurrentSite` section on the home page link to the `/gallery` page so users can see full project galleries.

---

## Routing

- Home page: `/` (renders `Index.tsx`)
- Gallery page: `/gallery` (renders `Gallery.tsx`)
- Header navigation includes `Home`, `Gallery`, `About`, `Services`, and `Contact`. The site uses `react-router`'s `<Link>` for client-side navigation.

---

## Useful developer commands

- Install dependencies
  - `npm install`
- Development server
  - `npm run dev`
- Build
  - `npm run build`
- Preview production build
  - `npm run preview`
- Regenerate image manifest
  - `node ./scripts/generate-image-manifest.mjs`

---

## Accessibility & performance suggestions

- Add `alt` and optional captions metadata to images in the manifest for better accessibility and lightbox captions.
- Generate responsive image variants and WebP conversions during a build step to serve optimized sizes with `srcset`.
- Add server-side pagination or lazy-loading on the gallery page if dozens or hundreds of images are expected.

---

## Deployment

This project is a static site built by Vite. Deploy the `dist/` output from `npm run build` to any static host (Netlify, Vercel, Cloudflare Pages, or S3 + CloudFront).

If you deploy to a platform that exposes the `public/` folder (e.g., copy `public/` contents alongside `dist/`), keep the `public/_image-manifest.json` updated when image files change.

---

## Next steps I can help with

- Add smooth scroll handling for in-page anchors (so links like `/#about` animate to the section).
- Add active nav highlighting to indicate the current page.
- Generate `alt`/caption metadata for images by extending the manifest format and updating the generator script.
- Add an admin UI or simple upload script to let non-developers upload images and regenerate the manifest automatically.

If you want any of those, tell me which and I will implement it.
