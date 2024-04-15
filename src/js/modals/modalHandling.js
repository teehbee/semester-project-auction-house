import { loginModal } from "./constants.js";
import { openLoginModal } from "./constants.js";
import { closeLoginModal } from "./constants.js";

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
