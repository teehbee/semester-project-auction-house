import { hamburgerClose } from "./constants.js";
import { body } from "./constants.js";

function closeMenu() {
  body.classList.remove("with-menu");
}

hamburgerClose.addEventListener("click", closeMenu);
