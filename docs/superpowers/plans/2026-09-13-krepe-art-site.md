# Krepe Art Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a bilingual one-page Krepe portfolio (artist + VTuber) with milk-cloud / chocolate / coconut / coffee décor, Wuna-like sections, and a public GitHub repo.

**Architecture:** Vite static site. HTML sections in `index.html`, CSS tokens + sections, JS for i18n + motion. Copy in `fr.json` / `en.json`. Placeholders in `public/assets/`.

**Tech Stack:** Vite 6, vanilla HTML/CSS/JS, Google Fonts via `@fontsource` packages (self-hosted), no React.

**Spec:** `docs/superpowers/specs/2026-09-13-krepe-art-site-design.md`

## Global Constraints

- Palette: milk / foam / cream / ink / mocha / chocolate / coffee / coconut per spec tokens
- No Inter, no purple gradients, no emoji in UI
- Display: soft rounded sans (Nunito or Quicksand via fontsource); body: Source Sans 3
- Default language: FR if `navigator.language` starts with `fr`, else EN; key `krepe-lang` in localStorage
- Commits after each task; strip any Cursor co-authored trailers via `commit-tree` if hooks re-add them
- Repo name on GitHub: `krepe-art`, public

## File map

| Path | Role |
|------|------|
| `package.json` | vite scripts |
| `vite.config.js` | root config |
| `index.html` | shell + all sections |
| `src/main.js` | boot |
| `src/styles/tokens.css` | CSS variables |
| `src/styles/base.css` | reset, type, layout |
| `src/styles/sections.css` | section layouts |
| `src/styles/decor.css` | clouds, motifs, motion |
| `src/i18n/fr.json` | French copy |
| `src/i18n/en.json` | English copy |
| `src/js/i18n.js` | apply translations |
| `src/js/motion.js` | scroll / float / reduced-motion |
| `public/assets/*` | SVG placeholders |
| `README.md` | run + asset handoff |

---

### Task 1: Scaffold Vite project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.js`, `.gitignore`, `README.md`

**Produces:** Runnable empty Vite app (`npm run dev`)

- [ ] **Step 1:** Write `package.json`

```json
{
  "name": "krepe-art",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^6.0.0"
  },
  "dependencies": {
    "@fontsource/nunito": "^5.2.5",
    "@fontsource/source-sans-3": "^5.2.5"
  }
}
```

- [ ] **Step 2:** Write `vite.config.js` (`export default { root: '.', publicDir: 'public' }`), minimal `index.html` with `#app`, `src/main.js` importing a hello style later, `.gitignore` (`node_modules`, `dist`, `.env*`), short `README.md`.

- [ ] **Step 3:** Run `npm install && npm run build`. Expected: success.

- [ ] **Step 4:** Commit via `commit-tree` pattern if needed: `chore: scaffold Vite app for Krepe site`

---

### Task 2: Design tokens + base styles + décor assets

**Files:**
- Create: `src/styles/tokens.css`, `src/styles/base.css`, `src/styles/decor.css`, `public/assets/cloud.svg`, `public/assets/chocolate.svg`, `public/assets/coconut.svg`, `public/assets/coffee.svg`, `public/assets/hero-placeholder.svg`

**Produces:** Visual atmosphere loadable from `main.js`

- [ ] **Step 1:** Implement CSS variables from spec (`--milk`, `--foam`, `--cream`, `--ink`, `--mocha`, `--chocolate`, `--coffee`, `--coconut`).

- [ ] **Step 2:** Base typography (Nunito display, Source Sans 3 body), soft milk gradient background, spacing scale.

- [ ] **Step 3:** Inline SVG placeholders (simple silhouettes) for cloud, chocolate bar/chip, coconut flake, coffee bean, hero figure.

- [ ] **Step 4:** `npm run build` succeeds. Commit: `style: add milk-cloud tokens and décor placeholders`

---

### Task 3: HTML structure (all sections)

**Files:**
- Modify: `index.html`
- Create: `src/styles/sections.css`

**Produces:** Full landmark structure with `data-i18n` hooks, empty of final copy wiring

- [ ] **Step 1:** Build header (brand, nav anchors, FR|EN toggle), sections `#hero` … `#credits`, footer. Hero: brand, headline, support line, CTA group, full-bleed placeholder visual.

- [ ] **Step 2:** Services table markup + FAQ items with `data-i18n` keys. Status badge element `#comms-status`.

- [ ] **Step 3:** Wire CSS for one-composition hero (`min-h-[100dvh]`), no hero cards. Commit: `feat: add page section landmarks`

---

### Task 4: i18n engine + FR/EN copy

**Files:**
- Create: `src/js/i18n.js`, `src/i18n/fr.json`, `src/i18n/en.json`
- Modify: `src/main.js`

**Interfaces:**
- Produces: `initI18n()`, `setLang(lang: 'fr'|'en')`, `getLang()`, `t(key)` using nested JSON paths
- Status key: `comms.status` ∈ `open` | `closed` | `waitlist`

- [ ] **Step 1:** Implement i18n: query `[data-i18n]`, `[data-i18n-html]`, `[data-i18n-attr]`, update `lang` on `<html>`, persist `krepe-lang`.

- [ ] **Step 2:** Fill invented Krepe copy (About, Comms, Services prices, Support, Contact, Terms clauses, FAQ, Credits) in both languages. Original ToS content (not Wuna verbatim).

- [ ] **Step 3:** Toggle buttons set language. Default from `navigator.language`. Commit: `feat: add FR/EN i18n and Krepe copy`

---

### Task 5: Motion + polish + README asset contract

**Files:**
- Create: `src/js/motion.js`
- Modify: `src/styles/decor.css`, `README.md`, `src/main.js`

**Produces:** Scroll fade, décor float, hover polish; README asset filenames

- [ ] **Step 1:** IntersectionObserver fade-in; CSS float on `.decor-float`; skip if `prefers-reduced-motion`.

- [ ] **Step 2:** Document asset replace paths in README. Commit: `feat: add motion and asset handoff docs`

---

### Task 6: GitHub repo + push

**Files:** none (remote)

- [ ] **Step 1:** `gh auth status`; `gh repo create krepe-art --public --source=. --remote=origin --push` (or create then push if name taken).

- [ ] **Step 2:** Confirm remote URL; report to user.

---

## Spec coverage check

| Spec item | Task |
|-----------|------|
| Section order hero→credits | 3 |
| FR/EN + localStorage | 4 |
| Milk palette + décor motifs | 2, 5 |
| Invented copy | 4 |
| Placeholders / asset contract | 2, 5 |
| Vite stack | 1 |
| GitHub public | 6 |
| Reduced motion | 5 |
