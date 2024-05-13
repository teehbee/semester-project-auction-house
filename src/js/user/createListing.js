import { addListing } from "../api/fetchAddListing.js";

import {
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
} from "../validation/constants.js";

listingSubmission.addEventListener("click", async function (event) {
  event.preventDefault();

  const listingEndTimeValue = document.querySelector("#listing-end-date").value;

  if (!listingTitle) {
    titleErrorListing.classList.remove("d-none");
  } else {
    titleErrorListing.classList.add("d-none");
  }

  if (!listingEndTimeValue) {
    EndTimeErrorListing.classList.remove("d-none");
  } else {
    EndTimeErrorListing.classList.add("d-none");
  }

  if (!listingConfirmCheckbox) {
    confirmListingError.classList.remove("d-none");
  } else {
    confirmListingError.classList.add("d-none");
  }

  const media = [];
  if (listingImageUrl) {
    media.push({
      url: listingImageUrl.value,
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
    // Call the addListing function with the prepared data
    const responseData = await addListing(data);

    if (responseData.success) {
      console.log("Listing is up!");
      // Optionally, clear the form after successful submission
      listingForm.reset();
    } else {
      console.log("Failed to add listing:", responseData);
    }
  } catch (error) {
    console.log("Error adding listing:", error);
  }
});
