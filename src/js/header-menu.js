import iconsUrl from '/img/icons.svg';

const openBtn = document.querySelector('.header-mobile-open-btn');
const openIcon = openBtn.querySelector('use');
const mobileBackdrop = document.querySelector('.mobile-backdrop');
const navLinks = document.querySelectorAll('.nav-list-mobile a');

openBtn.addEventListener('click', toggleMenu);

// закрытие по клику на пункт меню
navLinks.forEach(link => link.addEventListener('click', closeMenu));

function toggleMenu() {
  const isOpen = mobileBackdrop.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);

  openIcon.setAttribute(
    'href',
    `${iconsUrl}#${isOpen ? 'icon-menu-button' : 'icon-menu'}`
  );
}

function closeMenu() {
  mobileBackdrop.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  openIcon.setAttribute('href', `${iconsUrl}#icon-menu`);
}
