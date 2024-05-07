import { fetchListings } from "../api/fetchListings.js";
import { fetchSearch } from "../api/fetchSearch.js";
import { searchInput, searchSubmit } from "../listings/constants.js";
import { calculateCountdown } from "../listings/countdown.js";
import { listingTemplate } from "../listings/listingCardHtml.js";

const listingsMainContainer = document.querySelector(
  "#listings-main-container",
);
const loadMoreListingsButton = document.querySelector("#load-more-listings");

let currentPage = 1; // Initial page number
const listingsPerPage = 8; // Number of listings to display per page
let allListings = [];

// Fetch initial listings
async function fetchAllListings() {
  try {
    const listings = await fetchListings(
      currentPage,
      listingsPerPage,
      "endsAt",
      "asc",
    );
    allListings = [...allListings, ...listings.data]; // Append new listings to allListings
    displayListings();
    console.log(allListings);
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
    listingsToShow = allListings;
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

    const listingHTML = listingTemplate(listing, countdownHTML, lastBid);
    listingsHTML += listingHTML;
  });

  listingsMainContainer.innerHTML = listingsHTML;
}

// Toggle visibility of load more button
// function toggleLoadMoreButtonVisibility() {
//   loadMoreListingsButton.classList.toggle(
//     "d-none",
//     allListings.length <= currentPage * listingsPerPage,
//   );
// }

// Eventlistener for adding more posts

loadMoreListingsButton.addEventListener("click", async () => {
  currentPage++;
  await fetchAllListings();
});

// Event listener for search button and on enter

searchSubmit.addEventListener("click", async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  const searchResult = await fetchSearch(searchTerm);
  const filteredListings = searchResult.data;
  displayListings(filteredListings);
});

searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    const searchResult = await fetchSearch(searchTerm);
    const filteredListings = searchResult.data;
    displayListings(filteredListings);
  }
});

// Fetch initial listings when the page loads
fetchAllListings();
