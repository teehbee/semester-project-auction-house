import { updateProfile } from "../api/fetchUpdateProfile.js";

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

function refreshPage() {
  window.location.reload();
}

function removeProfileModalQueryParam() {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("modal");
  history.replaceState({}, "", "?" + searchParams.toString());
}

updateProfileSubmit.addEventListener("click", async (event) => {
  event.preventDefault();

  validateUrl();

  // Proceed with form submission if the URL is valid
  if (
    newImgUrl.value.startsWith("http://") ||
    newImgUrl.value.startsWith("https://")
  ) {
    const newImg = {
      avatar: {
        url: newImgUrl.value,
        alt: "Nothing is here",
      },
    };

    try {
      const response = await updateProfile(newImg);
      console.log(response);

      removeProfileModalQueryParam();
      profileModal.close();

      refreshPage();
    } catch (error) {
      console.error("Error updating avatar URL:", error);
    }
  }
});
