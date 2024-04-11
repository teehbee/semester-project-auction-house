// Open menu

const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerClose = document.querySelector("#close-menu");
const body = document.body;

function showMenu() {
  body.classList.add("with-menu");
}

hamburgerIcon.addEventListener("click", showMenu);

// Close menu

//With button

function closeMenu() {
  body.classList.remove("with-menu");
}

hamburgerClose.addEventListener("click", closeMenu);
