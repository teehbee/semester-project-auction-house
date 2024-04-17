import * as constants from "./constants.js";

import { handleUrlForModals } from "./urlHandling.js";

// Open login modal and add url. Also checks if the user is logged in to redirect to profile page instead.

const loginModalEventListeners = function (event, loginModal) {
  event.preventDefault();
  if (document.body.classList.contains("with-menu")) {
    document.body.classList.remove("with-menu");
  }

  if (document.body.classList.contains("logged-in")) {
    window.location.href = "/profile/index.html";
  } else {
    loginModal.showModal();

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("modal", "login");
    const newUrl = "?" + searchParams.toString();
    history.pushState({}, "", newUrl);
  }
};

constants.openLoginModal.forEach(function (openModalLink) {
  openModalLink.addEventListener("click", function (event) {
    loginModalEventListeners(event, constants.loginModal);
  });
});

// Close login modal and remove URL

constants.closeLoginModal.addEventListener("click", () => {
  constants.loginModal.close();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// Switch from login to registration modal

constants.closeLoginOpenRegisterModal.addEventListener("click", () => {
  constants.loginModal.close();
  constants.registerModal.showModal();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "register");
  history.pushState({}, "", "?" + searchParams.toString());
});

// Open registration modal from nav and add url

constants.openRegisterModal.addEventListener("click", () => {
  constants.registerModal.showModal();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "register");
  history.pushState({}, "", "?" + searchParams.toString());
});

// Close registration modal and remove url

constants.closeRegisterModal.addEventListener("click", () => {
  constants.registerModal.close();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// Open search modal

const searchOpenEventListeners = function (event, searchModal) {
  event.preventDefault();
  searchModal.showModal();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "search");
  const newUrl = "?" + searchParams.toString();
  history.pushState({}, "", newUrl);
};

constants.openSearchModal.forEach(function (openSearchLink) {
  openSearchLink.addEventListener("click", function (event) {
    searchOpenEventListeners(event, constants.searchModal);
  });
});

// Close search modal

constants.closeSearch.addEventListener("click", () => {
  constants.searchModal.close();
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

constants.openListingModal.forEach(function (openListingModalLink) {
  openListingModalLink.addEventListener("click", function (event) {
    ListingsModalOpenEventListeners(event, constants.postListingModal);
  });
});

// Close post listings modal

constants.closeListingModal.addEventListener("click", () => {
  constants.postListingModal.close();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

// Listen for modal url's

handleUrlForModals();
