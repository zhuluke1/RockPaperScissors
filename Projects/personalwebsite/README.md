# Personal Website (Next.js + Tailwind CSS)

A simple portfolio site built with Next.js 15, React 19, and Tailwind CSS 4. Uses the App Router (`/app`) and a small set of reusable UI components.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Vercel Analytics (optional)

## Project Structure
```
app/
  layout.tsx        # Root layout, fonts, analytics
  page.tsx          # Home/portfolio page
  globals.css       # Global Tailwind + theme tokens
components/
  theme-provider.tsx
  ui/               # Reusable UI components (buttons, cards, dialogs, etc.)
hooks/
  use-mobile.ts
  use-toast.ts
lib/
  utils.ts
public/
  *.png/*.jpg/*.svg # Public assets used on the homepage
styles/
  globals.css       # Tailwind global styles (imported by app/globals.css)
```

## Getting Started (Local Development)
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000` in your browser.

- Main page to edit: `app/page.tsx`
- Global styles: `app/globals.css` (imports from `styles/globals.css`)
- UI components: `components/ui/*`

## Building for Production
```bash
npm run build
npm start
```
This builds the app and starts a production server on `http://localhost:3000`.

## Deploying to Vercel
1. Push this repository to GitHub.
2. In Vercel, create a New Project and import this repo.
3. Framework Preset: Next.js (defaults are fine).
4. Click Deploy.

After deployment, Vercel will provide your live URL. Subsequent pushes to `main` trigger automatic redeploys.

## Notes
- If you want to add 3D later (React Three Fiber), you can introduce a dynamically imported Canvas inside `app/page.tsx` to avoid SSR issues.
- Update images in `public/` or link to external assets.
- Tailwind tokens (colors, radius, etc.) are defined via CSS variables in `app/globals.css`.
