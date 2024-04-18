import * as constants from "./constants.js";

import { handleUrlForModals } from "./urlHandling.js";

// Open categories modal and add url

constants.openCategoriesModal.addEventListener("click", () => {
  constants.categoriesModal.showModal();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "categories");
  history.pushState({}, "", "?" + searchParams.toString());
});

// Close categories modal and remove url

function removeCategoryModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

constants.closeCategoriesModal.addEventListener("click", () => {
  constants.categoriesModal.close();
  removeCategoryModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (constants.categoriesModal.open) {
      constants.categoriesModal.close();
      removeCategoryModalQueryParam();
    }
  }
});

handleUrlForModals();
