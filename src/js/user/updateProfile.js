import { updateProfile } from "../api/fetchUpdateProfile.js";

// Ensure the form and other elements are available in the DOM
const newImgUrl = document.querySelector("#avatar-url");
const NewImgUrlError = document.querySelector("#url-form-error");
const updateProfileSubmit = document.querySelector("#submit-profile-update");

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

// Attach the event listener to the submit button
updateProfileSubmit.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("Form submitted");

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
    } catch (error) {
      console.error("Error updating avatar URL:", error);
    }
  }
});
