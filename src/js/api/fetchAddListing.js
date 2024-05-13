import { apiBaseUrl, allListings, headers } from "./constants.js";

export async function addListing(newListing) {
  try {
    const requestBody = JSON.stringify(newListing);
    const response = await fetch(`${apiBaseUrl}${allListings}`, {
      method: "POST",
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
      console.log("Listing is up!");
    }

    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
