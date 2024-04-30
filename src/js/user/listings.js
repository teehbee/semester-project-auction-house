const listingsContainer = document.querySelector(".listings-container");

import { fetchListings } from "../api/fetchListings.js";

async function fetchAllListings() {
  try {
    const listings = await fetchListings();

    listingsContainer.innerHTML = `
       <a class="text-decoration-none" href="/auctions/listing.html">
              <div class="card card-width-306px border-none border-radius-none mx-auto">
                <img class="p-3" src="/assets/img/last-chance-item-640.jpg" alt="#" />
                <div class="card-body">
                  <h2 class="card-title fs-1-25rem">Box full of unsorted crap</h2>
                  <p class="last-chance-frontpage-time-left card-text">24h 18m</p>
                  <p class="card-text">
                    Next bid
                    <span class="card-next-bid-amount">5000</span>,-
                  </p>
                  <p class="card-text">
                    Seller
                    <span class="card-listing-seller">Dwight Schrute</span>
                  </p>
                </div>
              </div>
            </a>
      `;

    console.log(listings);
  } catch (error) {
    console.log(error);
  }
}

fetchAllListings();
