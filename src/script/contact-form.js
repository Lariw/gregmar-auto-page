(() => {
  const emailAddress = document.querySelector(".js-emailAddress");
  const phoneNumber = document.querySelector(".js-phoneNumber");
  const message = document.querySelector(".js-message");
  const submitBtn = document.querySelector(".js-submitBtn");
  const contactFormMsg = document.querySelector(".js-contactFormMsg");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    contactFormMsg.style.display = "flex";
    setTimeout(() => {
      contactFormMsg.classList.add("contactForm__message--show");
    }, 50);

    setTimeout(() => {
      contactFormMsg.style.display = "none";
      contactFormMsg.classList.remove("contactForm__message--show");
    }, 5000);

    form.reset();
  });
})();
