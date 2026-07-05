const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
}

window.addEventListener('scroll', updateHeader);
updateHeader();

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.classList.toggle('is-open');
  nav.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.classList.remove('is-open');
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
