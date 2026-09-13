# Krepe Art Site — Design Spec

**Date:** 2026-09-13  
**Status:** Approved in conversation; awaiting final review of this written spec  
**Reference:** [wuna.art](https://wuna.art/) (structure and tone; not a pixel clone)

## Goal

Ship a bilingual (FR/EN) one-page portfolio for **Krepe**, an artist + VTuber, with Wuna-like section structure, invented replaceable copy, and a “nuage de lait” visual world (beige milk base; chocolate, coconut, coffee as décor). Assets arrive later; placeholders are first-class. Public GitHub repo from day one.

## Audience

Fans, commission clients, and collaborators scanning for vibe, commission status, prices, ToS, and social / VGen links.

## Design read

Portfolio / commission landing for a creative audience, soft café-lait language, editorial + cute décor (not SaaS, not dark tech).

**Dials:** VARIANCE 7 · MOTION 5 · DENSITY 3

## Scope

### In

- Single-page scroll site matching Wuna section order
- FR / EN toggle with `localStorage` persistence
- Invented Krepe copy in Wuna’s warm tone, editable via JSON
- Placeholder imagery under `/public/assets/`
- Decorative milk-cloud atmosphere + chocolate / coconut / coffee motifs
- Sticky light header: brand, section jumps, language toggle
- Responsive desktop + mobile
- Vite + vanilla HTML / CSS / JS
- GitHub repo `krepe-art` (public), GitHub Pages–ready `base` when needed

### Out (V1)

- Backend forms, payments, CMS
- Real social / VGen URLs (placeholders only until provided)
- Exact Carrd export or Wuna asset reuse
- Multi-page routing beyond hash/section anchors

## Information architecture

| Order | Section id | Purpose |
|------:|------------|---------|
| 1 | `#hero` | Brand “Krepe”, tagline artist + VTuber, primary CTA (comms / VGen) |
| 2 | `#about` | Short lore / intro |
| 3 | `#comms` | Commission status badge (OPEN / CLOSED / WAITLIST) |
| 4 | `#services` | Offerings + price tables + add-ons |
| 5 | `#support` | Support / social links (placeholders) |
| 6 | `#contact` | How to reach out |
| 7 | `#terms` | Terms of service |
| 8 | `#faq` | FAQ accordion or stacked Q/A |
| 9 | `#credits` | Credits |
| 10 | footer | Credit line, language reminder, designed-by optional |

Hero budget: brand, one headline, one short supporting line, one CTA group, one dominant visual plane (placeholder until assets). No stats strips or card grids in the hero.

## Visual system

### Palette (CSS variables)

| Token | Role | Value (approx.) |
|-------|------|-----------------|
| `--milk` | Page wash | `#F3EBE0` |
| `--foam` | Raised panels | `#FAF6F0` |
| `--cream` | Soft bands | `#E8DFD0` |
| `--ink` | Body text | `#3A2F28` |
| `--mocha` | Headings / accents | `#5C4033` |
| `--chocolate` | Strong accent / dividers | `#6B4423` |
| `--coffee` | Secondary accent | `#8B6914` muted to `#7A5C45` |
| `--coconut` | Soft highlight / chips | `#FFF8F0` with warm edge |

Avoid purple gradients, Inter/Roboto/Arial, flat single-color void backgrounds, and card-heavy heroes.

### Typography

- Display: expressive serif or soft script-adjacent for “Krepe” (e.g. Fraunces or similar Google Font; final pick at implementation)
- Body: readable humanist sans (e.g. Source Sans 3 or DM Sans), not system default stack as the only option
- Section titles may use decorative dividers with coffee/chocolate line motifs

### Décor motifs

- Soft milk-cloud shapes (CSS / SVG blobs) in background layers
- Scattered chocolate, coconut, coffee motifs as small SVG or PNG placeholders (beans, flakes, cup silhouette), low opacity, non-interactive
- Sparkle-lite glints in warm gold/coffee tones (not cyan/pink Wuna pastels)
- Decorative dividers with centered section labels (Wuna pattern, recolored)

### Motion (2–3 intentional)

1. Section content fade / rise on scroll enter  
2. Gentle float on cloud / décor layers  
3. Soft hover on CTAs and social links  

Respect `prefers-reduced-motion`.

## Content strategy

- All user-facing strings in `src/i18n/fr.json` and `src/i18n/en.json`
- Invented Krepe persona: warm, playful, café / comfort food metaphors where natural; easy to rewrite
- Commission status driven by a single key (e.g. `comms.status`: `open` | `closed` | `waitlist`) so one edit flips the badge in both languages
- Prices and add-on tables mirrored FR/EN
- Image paths centralized (manifest or constants) so asset drop-in is path swap only

## Technical architecture

```
/
  index.html          # shell + section landmarks
  package.json        # vite scripts
  vite.config.js
  public/
    assets/           # images, décor placeholders
  src/
    main.js           # boot, i18n apply, motion, status badge
    styles/
      tokens.css      # palette, type, spacing
      base.css
      sections.css
      decor.css
    i18n/
      fr.json
      en.json
    js/
      i18n.js
      motion.js
```

- No framework. Progressive enhancement: content readable if JS fails for core text if inlined fallback is FR or EN default
- Default language: FR if `navigator.language` starts with `fr`, else EN; override via toggle + `localStorage` key `krepe-lang`
- Anchor navigation for section jumps
- Semantic HTML (`header`, `main`, `section`, `footer`), accessible language switcher (`aria-pressed` or similar)

## Asset handoff contract

When real assets arrive:

1. Drop files into `public/assets/` using agreed filenames (documented in README)
2. Replace placeholder SVGs / PNGs without changing section markup where possible
3. Update only path constants / `src` attributes if names differ

## GitHub

- Repo name: `krepe-art` (org/user as authenticated `gh` account)
- Visibility: public
- Initial commits: spec → scaffold → sections → i18n → décor → polish
- README: how to run (`npm i && npm run dev`), how to swap language copy, how to replace assets

## Success criteria

- Visually reads as one milk-cloud composition on first viewport, brand-first
- All listed sections present and bilingual
- Mobile usable without horizontal overflow
- Placeholder assets clearly marked and swappable
- Repo live on GitHub with runnable Vite project

## Non-goals reminder

Do not clone Wuna’s Carrd proprietary structure or copy their personal ToS/legal text verbatim; write original Krepe terms in the same *category* of clauses (general, payments, process, deliverables, usage, NDA, credits, violations).
