import { fetchListings } from "../api/fetchListings.js";

const listingsMainContainer = document.querySelector(
  "#listings-main-container",
);

async function fetchAllListings() {
  try {
    const listings = await fetchListings();
    const listingsArray = listings.data;
    let listingsHTML = "";

    // Only shows posts where images are present

    const validListings = listingsArray.filter(
      (listing) => listing.media && listing.media.length > 0,
    );

    // Check for latest bid.

    validListings.forEach((listing) => {
      const hasBids = listing.bids && listing.bids.length > 0;

      const lastBid = hasBids
        ? listing.bids[listing.bids.length - 1].amount
        : "no bids yet";

      const listingHTML = `
        <div class="listings-container col-12 col-sm-6 col-lg-4 col-xl-3">
            <a class="text-decoration-none" href="/auctions/listing.html">
              <div class="card card-width-306px border-none border-radius-none mx-auto">
              <img class="listings-image-card p-3 object-fit-img" src="${listing.media[0].url}" alt="${listing.media[0].alt}"/>
                <div class="card-body">
                  <h2 class="card-title fs-1-25rem">${listing.title}</h2>
                  <p class="last-chance-frontpage-time-left card-text">${listing.endsAt}</p>
                  <p class="card-text">
                    Next bid
                    <span class="card-next-bid-amount">${lastBid}</span>
                  </p>
                  <p class="card-text">
                    Seller:
                    <span class="card-listing-seller">${listing.seller.name}</span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        `;
      listingsHTML += listingHTML;
    });

    listingsMainContainer.innerHTML = listingsHTML;

    console.log(listings);
  } catch (error) {
    console.log(error);
  }
}

fetchAllListings();
