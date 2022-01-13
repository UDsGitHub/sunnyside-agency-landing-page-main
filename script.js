const hamburgerMenu = document.querySelector(".hamburger-menu");
const hiddenMenu = document.querySelector(".navbar__hidden-menu");

hamburgerMenu.addEventListener("click", handleHamburgerClick);

function handleHamburgerClick(e) {
  hamburgerMenu.classList.toggle("active");
  hiddenMenu.classList.toggle("active");
}