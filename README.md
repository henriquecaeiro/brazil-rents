# React + Vite (JS) — Feature-first Starter

A minimal, enterprise-friendly scaffold for React + Vite (JavaScript) using **feature-first** organization.
- Routing with React Router and **code-splitting** via `React.lazy`.
- Global **ThemeContext** example (light/dark).
- `shared/` for reusable components, hooks, utils, services, constants and styles.
- Example **feature**: `posts` consuming an API (default: JSONPlaceholder).
- Alias `@` → `src` for clean imports.
- Environment variables via `import.meta.env` (Vite).

## Quick start
```bash
npm install
npm run dev
# open the printed URL
```

## Env
Copy `.env.example` to `.env` and adjust:
```
VITE_API_URL=https://jsonplaceholder.typicode.com
```

> Only variables prefixed with `VITE_` are exposed to the client by Vite.

## Scripts
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## Structure (excerpt)
```
src/
  app/              # App shell and routes
  contexts/         # React contexts (global state/providers)
  features/         # Feature (domain) folders
  layouts/          # App layouts (header/nav/footer wrappers)
  pages/            # Global pages (Home, About, 404...)
  shared/           # Reusable stuff: components, hooks, services, utils, etc.
```

---

**Enjoy!** This is a starting point—prune or expand as your app grows.
