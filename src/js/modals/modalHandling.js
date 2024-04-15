import { loginModal } from "./constants.js";
import { registerModal } from "./constants.js";
import { openLoginModal } from "./constants.js";
import { closeLoginModal } from "./constants.js";
import { closeLoginOpenRegisterModal } from "./constants.js";
import { closeRegisterModal } from "./constants.js";

// Open login modal

const modalEventListeners = function (event) {
  event.preventDefault();
  if (document.body.classList.contains("with-menu")) {
    document.body.classList.remove("with-menu");
  }
  loginModal.showModal();
};

openLoginModal.forEach(function (openModalLink) {
  openModalLink.addEventListener("click", modalEventListeners);
});

// Close login modal

closeLoginModal.addEventListener("click", () => {
  loginModal.close();
});

// Close registration modal

closeRegisterModal.addEventListener("click", () => {
  registerModal.close();
});

// Switch form login to registration modal

closeLoginOpenRegisterModal.addEventListener("click", () => {
  loginModal.close();
  registerModal.showModal();
});

// Return from registration modal to login modal
