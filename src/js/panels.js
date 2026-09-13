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

  function closePanels() {
    if (!layer) return;
    layer.hidden = true;
    cards.forEach((card) => {
      card.hidden = true;
    });
    setActive('home');
    document.body.style.overflow = 'hidden';
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
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-panel');
      if (id) openPanel(id);
    });
  });

  closers.forEach((el) => {
    el.addEventListener('click', closePanels);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePanels();
  });

  closePanels();
}
