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

// Close login modal

function removeLoginModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

constants.closeLoginModal.addEventListener("click", () => {
  constants.loginModal.close();
  removeLoginModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (constants.loginModal.open) {
      constants.loginModal.close();
      removeLoginModalQueryParam();
    }
  }
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

document.addEventListener("DOMContentLoaded", function () {
  constants.openRegisterModal.addEventListener("click", () => {
    constants.registerModal.showModal();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("modal", "register");
    history.pushState({}, "", "?" + searchParams.toString());
  });
});

// Close registration modal and remove url

function removeRegisterModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

constants.closeRegisterModal.addEventListener("click", () => {
  constants.registerModal.close();
  removeRegisterModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (constants.registerModal.open) {
      constants.registerModal.close();
      removeRegisterModalQueryParam();
    }
  }
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

function removeNewListingModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

constants.closeListingModal.addEventListener("click", () => {
  constants.postListingModal.close();
  removeNewListingModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (constants.postListingModal.open) {
      constants.postListingModal.close();
      removeNewListingModalQueryParam();
    }
  }
});

// Close Success dialog   successDialogClose - Fix later

function removeSuccessModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

constants.successDialogButton.addEventListener("click", () => {
  constants.successDialog.close();
  removeSuccessModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (constants.successDialog.open) {
      constants.successDialog.close();
      removeSuccessModalQueryParam();
    }
  }
});

// Listen for modal url's

handleUrlForModals();
