const auctionLoader = document.querySelector(".auctions-loader");

import { apiBaseUrl, allListings } from "../api/constants.js";

export async function fetchListings() {
  try {
    auctionLoader.classList.remove("d-none");

    const response = await fetch(`${apiBaseUrl}${allListings}`, {
      method: "GET",
    });

    const listings = await response.json();

    auctionLoader.classList.add("d-none");

    return listings;
  } catch (error) {
    console.log(error);
  }
}

fetchListings();
