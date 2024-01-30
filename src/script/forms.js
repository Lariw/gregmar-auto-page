(() => {
  const form = document.querySelector("form");
  const sendMail = (name, message, phoneNumber) => {
    const params = {
      name,
      message,
      phoneNumber,
    };

    const serviceID = "service_ilwjrnk";
    const templateID = "template_m49oifz";

    emailjs.send(serviceID, templateID, params);
  };

  const showContactMessage = () => {
    const contactFormMsg = document.querySelector(".js-contactFormMsg");
    contactFormMsg.style.display = "flex";
    form.reset();
    setTimeout(() => {
      contactFormMsg.classList.add("contactForm__message--show");
    }, 50);
    setTimeout(() => {
      contactFormMsg.style.display = "none";
      contactFormMsg.classList.remove("contactForm__message--show");
    }, 5000);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailAddress = document.querySelector(".js-emailAddress").value;
    const phoneNumber = document.querySelector(".js-phoneNumber").value;
    const message = document.querySelector(".js-message").value;
    sendMail(emailAddress, message, phoneNumber);
    showContactMessage();
    form.reset();
  });
})();
