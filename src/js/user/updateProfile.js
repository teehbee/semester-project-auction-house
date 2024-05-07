import { updateProfile } from "../api/fetchUpdateProfile.js";

// Ensure the form and other elements are available in the DOM
const newImgUrl = document.querySelector("#avatar-url");
const NewImgUrlError = document.querySelector("#url-form-error");
const updateProfileSubmit = document.querySelector("#submit-profile-update");

const profileModal = document.querySelector("#profile-edit-dialog");

function validateUrl() {
  const isValidUrl =
    newImgUrl.value.startsWith("http://") ||
    newImgUrl.value.startsWith("https://");
  if (!isValidUrl) {
    NewImgUrlError.classList.remove("d-none");
  } else {
    NewImgUrlError.classList.add("d-none");
  }
}

// Function to refresh the page
function refreshPage() {
  window.location.reload();
}

// Function to remove modal query parameter and close the modal
function removeProfileModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

// Attach the event listener to the submit button
updateProfileSubmit.addEventListener("click", async (event) => {
  event.preventDefault();

  // Validate the URL before proceeding
  validateUrl();

  // Proceed with form submission if the URL is valid
  if (
    newImgUrl.value.startsWith("http://") ||
    newImgUrl.value.startsWith("https://")
  ) {
    // Construct the JSON object for the update
    const newImg = {
      avatar: {
        url: newImgUrl.value,
        alt: "Nothing is here",
      },
    };

    // Call the updateProfile function with the constructed JSON object
    try {
      const response = await updateProfile(newImg);
      console.log(response); // Handle the response as needed

      // Close the modal and remove the URL query parameter
      removeProfileModalQueryParam();
      profileModal.close();

      // Refresh the page to show the new image
      refreshPage();
    } catch (error) {
      console.error("Error updating avatar URL:", error);
    }
  }
});
