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
| `krepe-hug.png` | Floating chibi (native transparent PNG) |
| `favicon.png` | Browser tab icon (cropped chibi) |
| `krepe-sleep.jpg` | About section scene |
| `krepe-cloud-a.png` | Drawn milk cloud décor |
| `krepe-cloud-b.png` | Drawn milk cloud décor (variant) |
| `krepe-cloud-c.png` | Drawn milk cloud décor (variant) |
| `chocolate.svg` | Chocolate motif |
| `coconut.svg` | Coconut motif |
| `coffee.svg` | Coffee motif |

Replace in place with the same filenames, or update paths in `index.html`.
