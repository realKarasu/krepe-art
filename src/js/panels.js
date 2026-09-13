import { sfxClose, sfxHover, sfxTap } from './sfx.js';

export function initPanels() {
  const layer = document.getElementById('panel-layer');
  const buttons = document.querySelectorAll('.dock-btn[data-panel]');
  const cards = document.querySelectorAll('[data-panel-card]');
  const closers = document.querySelectorAll('[data-close-panel]');

  function setActive(id) {
    buttons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-panel') === id);
    });
  }

  function closePanels({ playSound = true } = {}) {
    if (!layer) return;
    const wasOpen = !layer.hidden;
    layer.hidden = true;
    cards.forEach((card) => {
      card.hidden = true;
    });
    setActive('home');
    document.body.style.overflow = 'hidden';
    if (playSound && wasOpen) sfxClose();
  }

  function openPanel(id) {
    if (!layer) return;
    if (id === 'home') {
      closePanels();
      return;
    }

    const card = document.getElementById(`panel-${id}`);
    if (!card) return;

    cards.forEach((node) => {
      node.hidden = node !== card;
    });
    layer.hidden = false;
    card.scrollTop = 0;
    setActive(id);
    sfxTap();
  }

  buttons.forEach((btn) => {
    btn.addEventListener('pointerenter', () => {
      btn.classList.add('is-hover');
      sfxHover();
    });
    btn.addEventListener('pointerleave', () => {
      btn.classList.remove('is-hover');
    });
    btn.addEventListener('pointercancel', () => {
      btn.classList.remove('is-hover');
    });
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-panel');
      if (id) openPanel(id);
    });
  });

  closers.forEach((el) => {
    el.addEventListener('click', () => closePanels());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePanels();
  });

  closePanels({ playSound: false });
}
