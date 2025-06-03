const navbarList = document.querySelector(".navbar");
const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener('click', (e) => {
  menuButton.classList.toggle('mobile-nav');
  menuButton.classList.toggle('navbar');
});