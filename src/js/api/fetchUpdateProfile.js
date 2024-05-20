import { apiBaseUrl, profile, headers } from "./constants.js";
const userName = localStorage.getItem("userName");

export async function updateProfile(newImg) {
  try {
    const requestBody = JSON.stringify(newImg);
    const response = await fetch(`${apiBaseUrl}${profile}${userName}`, {
      method: "PUT",
      headers: {
        ...headers.headers,
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.success) {
      console.log("Profile update successful!");
    }

    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
