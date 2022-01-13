const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav__ul");

hamburgerMenu.addEventListener("click", handleHamburgerClick);

function handleHamburgerClick(e) {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}