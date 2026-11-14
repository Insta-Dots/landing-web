# Insta Dots — landing page

The marketing site. Vite + React 19 + Tailwind v4 (via `@tailwindcss/vite`, no
PostCSS or Tailwind config) + react-router.

```sh
npm install
npm run dev        # http://localhost:5174
npm run build      # type-check + production build into dist/
npm run lint       # oxlint
```

Colours and type match the Flutter app (`app/lib/core/theme/app_colors.dart`):
ink `#161A2E`, cobalt `#2B59FF`, paper `#F4F5F7`, Manrope. They're defined once
as Tailwind theme tokens in `src/index.css`.

The QR codes on the page are real: they carry the app's own share format, so
the Insta Dots scanner reads them.
