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

    if (!response.ok || response.status !== 201) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
