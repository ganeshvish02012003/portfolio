// =========email==============
const contactForm = document.getElementById("contact-form"),
contactMessage = document.getElementById("contact-message");

import { service_ID, template_ID, public_Key } from ".env";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(service_ID, template_ID, "#contact-form", public_Key).then(
    () => {
      contactMessage.textContent = "Message sent successfully ✅ ";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      contactForm.reset();
    },
    () => {
      contactMessage.textContent = "Message not sent ❌ ";
    }
  );
};
contactForm.addEventListener("submit", sendEmail);