import { addListing } from "../api/fetchAddListing.js";

import {
  listingDialog,
  listingForm,
  listingTitle,
  listingDescription,
  listingImageUrl,
  listingImageDescription,
  listingConfirmCheckbox,
  titleErrorListing,
  EndTimeErrorListing,
  confirmListingError,
  listingSubmission,
  imageErrorListing,
  listingSpinner,
  listingSuccessMessage,
} from "../validation/constants.js";

listingSubmission.addEventListener("click", async function (event) {
  event.preventDefault();

  const listingEndTimeValue = document.querySelector("#listing-end-date").value;

  if (!listingTitle.value) {
    titleErrorListing.classList.remove("d-none");
  } else {
    titleErrorListing.classList.add("d-none");
  }

  if (!listingEndTimeValue) {
    EndTimeErrorListing.classList.remove("d-none");
  } else {
    EndTimeErrorListing.classList.add("d-none");
  }

  if (!listingConfirmCheckbox.checked) {
    confirmListingError.classList.remove("d-none");
  } else {
    confirmListingError.classList.add("d-none");
  }

  const media = [];
  if (listingImageUrl.value) {
    const imageUrl = listingImageUrl.value.trim(); // Trim whitespace
    if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
      imageErrorListing.classList.remove("d-none"); // Show error message
      return; // Stop the execution of the function
    }
    media.push({
      url: imageUrl,
      alt: listingImageDescription.value,
    });
  }

  const data = {
    title: listingTitle.value,
    description: listingDescription.value,
    media: media,
    endsAt: new Date(listingEndTimeValue).toISOString(),
  };

  try {
    const responseData = await addListing(data);

    listingSpinner.classList.remove("d-none");

    if (!responseData.error) {
      console.log("Listing is up!");
      listingSpinner.classList.add("d-none");
      listingSuccessMessage.classList.remove("d-none");
      listingForm.reset();
      setTimeout(() => {
        listingDialog.close();
        removeNewListingModalQueryParam();
      }, 5000);
    } else {
      listingSpinner.classList.add("d-none");
      console.log("Failed to add listing:", responseData);
    }
  } catch (error) {
    console.log("Error adding listing:", error);
  }
});

function removeNewListingModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}
