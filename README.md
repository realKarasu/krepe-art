# Krepe Art

Portfolio site for Krepe (artist + VTuber). Vite + vanilla HTML/CSS/JS, FR/EN.

## Run

```bash
npm install
npm run dev
```

Build: `npm run build` → `dist/`.

## Language

Toggle FR | EN in the header. Preference is stored as `krepe-lang` in `localStorage`.

Edit copy in `src/i18n/fr.json` and `src/i18n/en.json`.

Commission status: set `comms.status` to `open`, `closed`, or `waitlist` in both JSON files.

## Replace assets

Drop files into `public/assets/` using these names (or update the `src` / CSS urls):

| File | Role |
|------|------|
| `hero-placeholder.svg` | Hero character / main visual |
| `cloud.svg` | Milk cloud décor |
| `chocolate.svg` | Chocolate motif |
| `coconut.svg` | Coconut motif |
| `coffee.svg` | Coffee motif |

PNG/WebP is fine: keep the same basename and change extensions in `index.html` / `sections.css` if needed.
