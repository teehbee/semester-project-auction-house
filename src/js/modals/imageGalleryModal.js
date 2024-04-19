import {
  imageGalleryModal,
  openImageGalleryModal,
  closeImageGalleryModal,
} from "./constants.js";

// Open image gallery modal and add url

const imageGalleryEventListeners = function (event, imageGalleryModal) {
  event.preventDefault();
  imageGalleryModal.showModal();

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("modal", "image-gallery");
  const newUrl = "?" + searchParams.toString();
  history.pushState({}, "", newUrl);
};

openImageGalleryModal.forEach(function (openImageGalleryModalLink) {
  openImageGalleryModalLink.addEventListener("click", function (event) {
    imageGalleryEventListeners(event, imageGalleryModal);
  });
});

// Close image gallery modal and remove url

function removeImageGalleryModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

closeImageGalleryModal.addEventListener("click", () => {
  imageGalleryModal.close();
  removeImageGalleryModalQueryParam();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (imageGalleryModal.open) {
      imageGalleryModal.close();
      removeImageGalleryModalQueryParam();
    }
  }
});

/* Handling the changing of images in image gallery modal */
