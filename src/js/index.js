// Check if logged in. If so, add "logged-in" class to body tag.

import { checkLoginStatus } from "./api/bodyTagCheck.js";

document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});

// Logout

import { logOutUser } from "./api/logoutUser.js";

document.addEventListener("DOMContentLoaded", () => {
  logOutUser();
});
