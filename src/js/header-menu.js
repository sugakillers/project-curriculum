import iconsUrl from '/img/icons.svg';

const openBtn = document.querySelector('.header-mobile-open-btn');
const openIcon = openBtn.querySelector('use');
const mobileBackdrop = document.querySelector('.mobile-backdrop');
const navLinks = document.querySelectorAll('.nav-list-mobile a');

// Abre o cierra el menú al hacer clic en el botón
openBtn.addEventListener('click', toggleMenu);

// Cierra el menú al hacer clic en un enlace
navLinks.forEach(link => link.addEventListener('click', closeMenu));

function toggleMenu() {
  const isOpen = mobileBackdrop.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);

// Cambia el ícono
  openIcon.setAttribute(
    'href',
    `${iconsUrl}#${isOpen ? 'icon-menu-button' : 'icon-menu'}`
  );
}

// Cierra el menú y restaura el ícono
function closeMenu() {
  mobileBackdrop.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  openIcon.setAttribute('href', `${iconsUrl}#icon-menu`);
}
