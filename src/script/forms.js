(() => {
  const submitBtn = document.querySelector(".js-submitBtn");

  const sendMail = (name, message, phoneNumber) => {
    const params = {
        name,
      message,
      phoneNumber,
    };

    const serviceID = "service_ilwjrnk";
    const templateID = "template_m49oifz";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  submitBtn.addEventListener("click", () => {
    const emailAddress = document.querySelector(".js-emailAddress");
    const phoneNumber = document.querySelector(".js-phoneNumber");
    const message = document.querySelector(".js-message");
    sendMail(emailAddress, message, phoneNumber);
  });
})();
