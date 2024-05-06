import { getSpecificListing } from "../api/ListingFetch.js";

async function singleListing() {
  try {
    const singleListing = await getSpecificListing();
    console.log(singleListing);
  } catch (error) {
    console.log(error);
  }
}

singleListing();
