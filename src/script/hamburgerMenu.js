const hamburgerBtn = document.querySelector(".js-hamburgerBtn");
const hamburgerContainer = document.querySelector(".js-hamburgerMenuContainer");
hamburgerBtn.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("nav__hamburgerClose");
  hamburgerContainer.classList.toggle("nav__hamburgerOpen");
});
