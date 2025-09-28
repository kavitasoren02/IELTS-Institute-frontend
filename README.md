# Frontend — IELTS Institute

Framework: **React + Vite + TypeScript**  
Styling: **Tailwind CSS (utility-first only)**

## Quick start (frontend)
```bash
cd frontend
npm install
# set env (optional)
# create .env
# VITE_API_BASE_URL=http://localhost:5000
npm run dev
# build
npm run build
# preview production build
npm run preview
```

## Project structure (suggested)
```
frontend/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ .env
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Features.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ EnrollForm.tsx
│  │  ├─ ReviewForm.tsx
│  │  └─ Footer.tsx
│  └─ lib/
│     └─ api.ts
```

## Tailwind & config
- Mobile-first responsive design.
- Use Inter font (import via `@import` in CSS or link in `index.html`).
- Color tokens:
  - Primary: `sky-600`
  - Accent: `amber-500`
  - Neutrals: `white`, `slate-900/700/500`

## Network / API
- Uses `VITE_API_BASE_URL` environment variable (default `http://localhost:5000`).
- Testimonials:
  - GET `${API_BASE}/api/testimonials`
  - POST `${API_BASE}/api/testimonials` with `{ name, message, band, avatarUrl }`

## Components & behaviors
- `Navbar` — logo, nav links, CTA (Enroll).
- `Hero` — tagline, CTA, small form to request more info (email).
- `Features` — grid explaining course highlights.
- `Testimonials` — fetch via SWR/React Query; show skeleton loaders; form to submit a new testimonial (POST).
- Accessibility: meaningful `alt`, aria-labels, keyboard focus styles.
- Responsiveness:
  - Mobile: stacked single column.
  - `md+`: two/three column layouts where appropriate.

## Useful scripts (package.json)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "typecheck": "tsc --noEmit"
  }
}
```

## Notes & tips
- Keep components small and presentational; move data-fetching to hooks.
- Test across breakpoints; prefer Tailwind spacing tokens (p-4, gap-6).
- Keep images optimized (use `avatarUrl` hosted externally or in `/public`).
