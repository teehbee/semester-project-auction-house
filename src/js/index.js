import { checkLoginStatus } from "./api/bodyTagCheck.js";

// Check if logged in. If so, add "logged-in" class to body tag.

document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});
