import { hamburgerIcon } from "./constants.js";
import { body } from "./constants.js";

export function showMenu() {
  body.classList.add("with-menu");
}

hamburgerIcon.addEventListener("click", showMenu);
