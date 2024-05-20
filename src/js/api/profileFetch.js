import { apiBaseUrl, profile, headers } from "./constants.js";

const userName = localStorage.getItem("userName");

export async function getProfileData() {
  try {
    const urlWithParams = `${apiBaseUrl}${profile}${userName}?_listings=true&_wins=true`;

    const response = await fetch(urlWithParams, headers);

    const profileData = await response.json();

    return profileData;
  } catch (error) {
    console.log(error);
  }
}

getProfileData();
