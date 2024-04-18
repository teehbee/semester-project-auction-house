import * as constants from "./constants.js";

// Open modal for editing profile and add url

const profileModalEventListeners = function (event, profileModal) {
  event.preventDefault();
  profileModal.showModal();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "edit-profile");
  const newUrl = "?" + searchParams.toString();
  history.pushState({}, "", newUrl);
};

constants.openProfileEditModal.forEach(function (openProfileEditModalLink) {
  openProfileEditModalLink.addEventListener("click", function (event) {
    profileModalEventListeners(event, constants.profileModal);
  });
});

// Close modal for editing profile and remove url

function removeProfileModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

constants.closeProfileEditModal.addEventListener("click", () => {
  constants.profileModal.close();
  removeProfileModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (constants.profileModal.open) {
      constants.profileModal.close();
      removeProfileModalQueryParam();
    }
  }
});
