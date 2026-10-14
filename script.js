document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter');
  const tiles = document.querySelectorAll('.tile');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      tiles.forEach(tile => {
        const categories = tile.dataset.category.split(' ');
        tile.hidden = filter !== 'all' && !categories.includes(filter);
      });
    });
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
  document.querySelector('#year').textContent = new Date().getFullYear();
});
