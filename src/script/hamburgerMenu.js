(() => {
  const hamburgerBtn = document.querySelector(".js-hamburgerBtn");
  const hamburgerContainer = document.querySelector(
    ".js-hamburgerMenuContainer"
  );

  const scroll = () => {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  };
  scroll();
  const hamburgerMobileEl = document.querySelectorAll(".js-hamburgerEl");

  hamburgerMobileEl.forEach((element) => {
    element.addEventListener("click", () => {
      hamburgerContainer.classList.toggle("nav__hamburgerClose");
      hamburgerContainer.classList.toggle("nav__hamburgerOpen");
      hamburgerBtn.checked = false;
    });
  });

  hamburgerBtn.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("nav__hamburgerClose");
    hamburgerContainer.classList.toggle("nav__hamburgerOpen");
  });
})();
