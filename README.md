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
| `krepe-hug.png` | Floating chibi |
| `favicon.png` | Tab icon |
| `krepe-sleep.jpg` | About scene |
| `krepe-cloud-a/b/c/d.png` | Drawn milk clouds |
| `asset-cocoa-mug.png` | Cocoa mug décor |
| `asset-cookie.png` | Cookie décor |
| `asset-chocolate-bar.png` | Chocolate bar |
| `asset-coffee-bean.png` | Coffee bean |
| `asset-coconut-flakes.png` | Coconut flakes |
| `asset-marshmallow.png` | Marshmallow |
| `asset-choco-chips.png` | Chocolate chips |
| `asset-heart.png` | Heart doodle |
| `asset-star.png` | Star |
| `asset-bow.png` | Ribbon bow |
| `asset-steam.png` | Steam wisps |
| `asset-zzz.png` | Sleepy zzz |
| `asset-milk-drops.png` | Milk drops |
| `asset-sleep-mask.png` | Sleep mask |

Replace in place with the same filenames, or update paths in `index.html`.
