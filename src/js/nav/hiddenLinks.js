// Removes the login and register links on the nav when logged in

export function hideNavItemsWhenLoggedIn() {
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".hidden-when-logged-in");
    const navLinksHiddenNotLoggedIn = document.querySelector(
      ".hidden-not-logged-in",
    );
    if (document.body.classList.contains("logged-in")) {
      navLinks.forEach(function (navLink) {
        navLink.style.display = "none";
        navLinksHiddenNotLoggedIn.classList.remove("d-none");
      });
    }
  });
}
