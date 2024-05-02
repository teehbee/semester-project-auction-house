const auctionLoader = document.querySelector(".auctions-loader");

import { apiBaseUrl, allListings } from "../api/constants.js";

export async function fetchListings() {
  try {
    auctionLoader.classList.remove("d-none");

    const url = new URL(`${apiBaseUrl}${allListings}`);
    url.searchParams.append(`_seller`, `true`);
    url.searchParams.append(`_bids`, `true`);

    const response = await fetch(url, {
      method: "GET",
    });

    const listings = await response.json();

    auctionLoader.classList.add("d-none");

    return listings;
  } catch (error) {
    console.log(error);
  }
}
