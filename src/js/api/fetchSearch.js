import { apiBaseUrl } from "./constants.js";

export async function fetchSearch(searchTerm) {
  try {
    const url = new URL(
      `${apiBaseUrl}/auction/listings/search?q=${encodeURIComponent(searchTerm)}`,
    );
    url.searchParams.append("_seller", "true");
    url.searchParams.append("_bids", "true");
    url.searchParams.append("_active", "true");

    const response = await fetch(url, {
      method: "GET",
    });

    const listings = await response.json();
    console.log(listings);

    return listings;
  } catch (error) {
    console.error("Error searching listings:", error);
    return [];
  }
}
