import { fetchListings } from "../api/fetchListings.js";
import { searchPosts } from "../posts/listingsSearch.js";
import { searchInput, searchSubmit } from "../posts/constants.js";
import { calculateCountdown } from "../posts/countdown.js";

const listingsMainContainer = document.querySelector(
  "#listings-main-container",
);
const loadMoreListingsButton = document.querySelector("#load-more-listings");

let currentIndex = 8; // Number of initially displayed posts
let allListings = [];

// Fetch initial listings
async function fetchAllListings() {
  try {
    const listings = await fetchListings();
    allListings = listings.data;
    displayListings();
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}

// Display listings
function displayListings(input) {
  let listingsHTML = "";
  let listingsToShow;

  if (input) {
    listingsToShow = input;
  } else {
    // Sort all listings based on time left
    const sortedListings = allListings.sort((a, b) => {
      const aTimeLeft = calculateTimeLeftInSeconds(a.endsAt);
      const bTimeLeft = calculateTimeLeftInSeconds(b.endsAt);
      return aTimeLeft - bTimeLeft;
    });

    // Display only the first `currentIndex` listings
    listingsToShow = sortedListings.slice(0, currentIndex);
  }

  listingsToShow.forEach((listing) => {
    const hasBids = listing.bids && listing.bids.length > 0;
    const lastBid = hasBids
      ? listing.bids[listing.bids.length - 1].amount
      : "no bids yet";

    const { daysLeft, hoursLeft, minutesLeft, secondsLeft } =
      calculateCountdown(listing.endsAt);

    const countdownHTML = `
      <p class="card-text">Time left: ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds</p>
    `;

    const listingHTML = `
      <div class="listings-container col-12 col-sm-6 col-lg-4 col-xl-3">
        <a class="text-decoration-none" href="/auctions/listing.html">
          <div class="card card-width-306px border-none border-radius-none mx-auto">
            <img class="listings-image-card p-3 object-fit-img" src="${listing.media[0]?.url || "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}" alt="${listing.media[0]?.alt || "Image description is missing"}"/>
            <div class="card-body">
              <h2 class="card-title fs-1-25rem">${listing.title}</h2>
              <p class="last-chance-frontpage-time-left card-text">Ends at: ${countdownHTML}</p>
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

  toggleLoadMoreButtonVisibility();
}

// Calculate time left in seconds
function calculateTimeLeftInSeconds(endsAt) {
  const { daysLeft, hoursLeft, minutesLeft, secondsLeft } =
    calculateCountdown(endsAt);
  return (
    daysLeft * 24 * 60 * 60 +
    hoursLeft * 60 * 60 +
    minutesLeft * 60 +
    secondsLeft
  );
}

// Toggle visibility of load more button
function toggleLoadMoreButtonVisibility() {
  loadMoreListingsButton.classList.toggle(
    "d-none",
    currentIndex >= allListings.length,
  );
}

// Increase displayed listings by 8 when clicking the load more button
loadMoreListingsButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex += 8; // Increase currentIndex by 8 to load more listings
  displayListings();
});

// Eventlistener for search button and on enter
searchSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  const filteredListings = searchPosts(allListings, searchTerm);
  displayListings(filteredListings);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    const filteredListings = searchPosts(allListings, searchTerm);
    displayListings(filteredListings);
  }
});

// Fetch initial listings when the page loads
fetchAllListings();
