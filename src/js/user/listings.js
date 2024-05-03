import { fetchListings } from "../api/fetchListings.js";
import { searchPosts } from "../posts/listingsSearch.js";
import { searchInput, searchSubmit } from "../posts/constants.js";
import { calculateCountdown } from "../posts/countdown.js";
import { listingTemplate } from "../posts/listingCardHtml.js";

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
    const listings = await fetchListings(currentPage, 8, "endsAt", "asc");
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
function toggleLoadMoreButtonVisibility() {
  loadMoreListingsButton.classList.toggle(
    "d-none",
    allListings.length <= currentPage * listingsPerPage,
  );
}

// Load more listings when clicking the load more button
loadMoreListingsButton.addEventListener("click", async (event) => {
  event.preventDefault();

  // Increment the current page
  currentPage++;

  try {
    const listingsResponse = await fetchListings(currentPage, listingsPerPage);
    const newPageListings = listingsResponse; // Extract the listings from the response
    allListings = allListings.concat(newPageListings); // Concatenate the new listings with existing ones
    displayListings();
    toggleLoadMoreButtonVisibility();
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
});

// Event listener for search button and on enter
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
