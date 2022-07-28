const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  const expandedAttr = 'aria-expanded';
  const openClass = 'open';
  const menuOpen = menu.classList.contains(openClass);
  if (menuOpen) {
    menuToggle.setAttribute(expandedAttr, 'false');
  } else {
    menuToggle.setAttribute(expandedAttr, 'true');
  }
  menu.classList.toggle(openClass);
});
