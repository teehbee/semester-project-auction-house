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

const modalEventListeners = function (event, loginModal, urlPath) {
  event.preventDefault();
  if (document.body.classList.contains("with-menu")) {
    document.body.classList.remove("with-menu");
  }
  loginModal.showModal();
  history.pushState({}, "", urlPath);
};

openLoginModal.forEach(function (openModalLink) {
  openModalLink.addEventListener("click", function (event) {
    modalEventListeners(event, loginModal, "/login");
  });
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
  history.pushState({}, "", "/register");
});

// Open registration modal from nav

openRegisterModal.addEventListener("click", () => {
  registerModal.showModal();
  history.pushState({}, "", "/register");
});

// Search

// Open search modal

const searchOpenEventListeners = function (event, searchModal, urlPath) {
  event.preventDefault();
  searchModal.showModal();
  history.pushState({}, "", urlPath);
};

openSearchModal.forEach(function (openSearchLink) {
  openSearchLink.addEventListener("click", function (event) {
    searchOpenEventListeners(event, searchModal, "/search");
  });
});

// Close search modal

closeSearch.addEventListener("click", () => {
  searchModal.close();
});

// Post listings

// Open post listings modal

const ListingsModalOpenEventListeners = function (
  event,
  postListingModal,
  urlPath,
) {
  event.preventDefault();
  postListingModal.showModal();
  history.pushState({}, "", urlPath);
};

openListingModal.forEach(function (openListingModalLink) {
  openListingModalLink.addEventListener("click", function (event) {
    ListingsModalOpenEventListeners(event, postListingModal, "/post-listing");
  });
});

// Close post listings modal

closeListingModal.addEventListener("click", () => {
  postListingModal.close();
});

// URL handling of modals
