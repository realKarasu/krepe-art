import fr from '../i18n/fr.json';
import en from '../i18n/en.json';

const catalogs = { fr, en };
const STORAGE_KEY = 'krepe-lang';

let currentLang = 'fr';

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, obj);
}

export function getLang() {
  return currentLang;
}

export function t(key) {
  const value = getByPath(catalogs[currentLang], key);
  if (value == null) {
    const fallback = getByPath(catalogs.en, key);
    return fallback == null ? key : String(fallback);
  }
  return String(value);
}

function applyStatusBadge() {
  const el = document.getElementById('comms-status');
  if (!el) return;
  const status = getByPath(catalogs[currentLang], 'comms.status') || 'open';
  el.dataset.status = status;
  el.textContent = t(`comms.statuses.${status}`);
}

export function applyI18n() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (!key) return;
    node.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const key = node.getAttribute('data-i18n-html');
    if (!key) return;
    node.innerHTML = t(key);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
    const raw = node.getAttribute('data-i18n-attr');
    if (!raw) return;
    raw.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) node.setAttribute(attr, t(key));
    });
  });

  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    const lang = btn.getAttribute('data-lang');
    btn.setAttribute('aria-pressed', String(lang === currentLang));
  });

  applyStatusBadge();
  document.title = t('meta.title');
}

export function setLang(lang) {
  if (!catalogs[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyI18n();
}

export function initI18n() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && catalogs[saved]) {
    currentLang = saved;
  } else if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) {
    currentLang = 'fr';
  } else {
    currentLang = 'en';
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLang(lang);
    });
  });

  applyI18n();
}
