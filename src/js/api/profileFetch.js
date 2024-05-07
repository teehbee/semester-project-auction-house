import { apiBaseUrl, profile, headers } from "./constants.js";

const userName = localStorage.getItem("userName");

export async function getProfileData() {
  try {
    const response = await fetch(`${apiBaseUrl}${profile}${userName}`, headers);

    const profileData = await response.json();

    return profileData;
  } catch (error) {
    console.log(error);
  }
}

getProfileData();
