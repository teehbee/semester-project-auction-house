import { fetchListings } from "../api/fetchListings.js";

const listingsMainContainer = document.querySelector(
  "#listings-main-container",
);
const loadMoreListingsButton = document.querySelector("#load-more-listings");

let currentIndex = 8;
let allListings = [];

// Fetch initial listings

async function fetchAllListings() {
  try {
    const listings = await fetchListings();
    allListings = listings.data;
    displayListings(currentIndex);
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}

// Display listings

function displayListings(index) {
  let listingsHTML = "";
  const validListings = allListings
    .filter((listing) => listing.media && listing.media.length > 0)
    .slice(0, index);

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

  // Remove load more button if no more posts to load

  if (validListings.length < currentIndex) {
    loadMoreListingsButton.classList.add("d-none");
  }
}

// Increase displayed listings by 8

loadMoreListingsButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex += 8;
  displayListings(currentIndex);
});

fetchAllListings();
