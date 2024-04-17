import { loginModal } from "./constants.js";
import { registerModal } from "./constants.js";
import { openLoginModal } from "./constants.js";
import { closeLoginModal } from "./constants.js";
import { closeLoginOpenRegisterModal } from "./constants.js";
import { closeRegisterModal } from "./constants.js";
import { openRegisterModal } from "./constants.js";
import { openSearchModal } from "./constants.js";
import { searchModal } from "./constants.js";
import { closeSearch } from "./constants.js";
import { postListingModal } from "./constants.js";
import { closeListingModal } from "./constants.js";
import { openListingModal } from "./constants.js";

// Open login modal and add url

const loginModalEventListeners = function (event, loginModal) {
  event.preventDefault();
  if (document.body.classList.contains("with-menu")) {
    document.body.classList.remove("with-menu");
  }
  loginModal.showModal();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "login");
  const newUrl = "?" + searchParams.toString();
  history.pushState({}, "", newUrl);
};

openLoginModal.forEach(function (openModalLink) {
  openModalLink.addEventListener("click", function (event) {
    loginModalEventListeners(event, loginModal);
  });
});

// Close login modal and remove URL

// Done

closeLoginModal.addEventListener("click", () => {
  loginModal.close();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// Switch from login to registration modal

// Done

closeLoginOpenRegisterModal.addEventListener("click", () => {
  loginModal.close();
  registerModal.showModal();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "register");
  history.pushState({}, "", "?" + searchParams.toString());
});

// Open registration modal from nav and add url

// Done

openRegisterModal.addEventListener("click", () => {
  registerModal.showModal();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "register");
  history.pushState({}, "", "?" + searchParams.toString());
});

// Close registration modal and remove url

// Done

closeRegisterModal.addEventListener("click", () => {
  registerModal.close();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// Search

// Open search modal

const searchOpenEventListeners = function (event, searchModal) {
  event.preventDefault();
  searchModal.showModal();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "search");
  const newUrl = "?" + searchParams.toString();
  history.pushState({}, "", newUrl);
};

openSearchModal.forEach(function (openSearchLink) {
  openSearchLink.addEventListener("click", function (event) {
    searchOpenEventListeners(event, searchModal);
  });
});

// Close search modal

closeSearch.addEventListener("click", () => {
  searchModal.close();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// Post listings

// Open post listings modal

const ListingsModalOpenEventListeners = function (event, postListingModal) {
  event.preventDefault();
  postListingModal.showModal();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "postListing");
  const newUrl = "?" + searchParams.toString();
  history.pushState({}, "", newUrl);
};

openListingModal.forEach(function (openListingModalLink) {
  openListingModalLink.addEventListener("click", function (event) {
    ListingsModalOpenEventListeners(event, postListingModal);
  });
});

// Close post listings modal

closeListingModal.addEventListener("click", () => {
  postListingModal.close();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// URL handling of modals
