const hamburgerView = window.matchMedia('(max-width: 768px)');
let activeMenuButton = document.querySelector('.menu-button');
const hamburgerButton = document.querySelector('header button');
const menu = document.querySelector('nav');
const closeButton = menu.querySelector('button');

// When mobile menu is collapsed/expanded, the active menu button
// (i.e. the button that should receive action) is the hamburger/close button respectively
function switchActiveMenuButton() {
  menu.classList.toggle('mobile-menu');
  activeMenuButton.classList.toggle('menu-button');
  if (activeMenuButton === closeButton) {
    hamburgerButton.classList.toggle('menu-button');
  } else {
    closeButton.classList.toggle('menu-button');
  }
  activeMenuButton = document.querySelector('.menu-button');
  activeMenuButton.addEventListener('click', switchActiveMenuButton);
}

// Toggles happening during mobile menu open/close should happen
// only when hamburger button is available, i.e. in non-desktop view
function checkView() {
  if (hamburgerView.matches) {
    // Clicking on active menu button / on menu items toggles the mobile menu
    activeMenuButton.addEventListener('click', switchActiveMenuButton);
  }
}

// Check whenever view is changed
checkView(hamburgerView);
hamburgerView.addEventListener('change', checkView);