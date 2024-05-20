import { apiBaseUrl, singleListing } from "./constants.js";

// API call for single listing from ID

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function getSpecificListing() {
  try {
    const response = await fetch(
      `${apiBaseUrl}${singleListing}${id}?_seller=true&_bids=true`,
      {
        method: "GET",
      },
    );
    const specificListing = await response.json();
    return specificListing.data;
  } catch (error) {
    console.log(error);
  }
}
