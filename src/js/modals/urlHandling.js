import * as constants from "./constants.js";

export function handleUrlForModals() {
  document.addEventListener("DOMContentLoaded", function () {
    const searchParams = new URLSearchParams(window.location.search);
    const modalType = searchParams.get("modal");

    if (modalType === "login") {
      constants.loginModal.showModal();
    } else if (modalType === "register") {
      constants.registerModal.showModal();
    } else if (modalType === "search") {
      constants.searchModal.showModal();
    } else if (modalType === "postListing") {
      constants.postListingModal.showModal();
    } else if (modalType === "categories") {
      constants.categoriesModal.showModal();
    } else if (modalType === "edit-profile") {
      constants.profileModal.showModal();
    } else if (modalType === "image-gallery") {
      constants.imageGalleryModal.showModal();
    }
  });
}
