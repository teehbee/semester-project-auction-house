import { apiBaseUrl, singleListing, bids, headers } from "../api/constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function placeBidOnListing(bidAmount) {
  try {
    const response = await fetch(`${apiBaseUrl}${singleListing}${id}${bids}`, {
      method: "POST",
      headers: {
        ...headers.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: bidAmount }),
    });

    if (!response.ok || response.status !== 201) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error placing bid:", error);
  }
}
