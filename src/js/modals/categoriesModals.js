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

constants.closeCategoriesModal.addEventListener("click", () => {
  constants.categoriesModal.close();
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
});

handleUrlForModals();
