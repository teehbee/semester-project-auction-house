const auctionLoader = document.querySelector(".auctions-loader");

import { apiBaseUrl, allListings } from "../api/constants.js";

export async function fetchListings(page, limit, sort, sortOrder) {
  try {
    auctionLoader.classList.remove("d-none");

    const url = new URL(`${apiBaseUrl}${allListings}`);
    url.searchParams.append("_seller", "true");
    url.searchParams.append("_bids", "true");
    url.searchParams.append("_active", "true");
    url.searchParams.append("limit", limit);
    url.searchParams.append("page", page);
    url.searchParams.append("sort", sort);
    url.searchParams.append("sortOrder", sortOrder);

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
