const lastChanceLink = document.querySelector(
  "#frontpage-auctions-last-chance",
);
const JustStartedLink = document.querySelector(
  "#frontpage-auctions-just-started",
);
const frontpageListingsContainer = document.querySelector(
  "#last-chance-frontpage",
);

import { calculateCountdown } from "../listings/countdown.js";
import { fetchListings } from "../api/fetchListings.js";
import { listingTemplate } from "../listings/listingCardHtml.js";

function displaySpecificListings(sortOrder) {
  fetchListings(1, 4, "endsAt", sortOrder)
    .then((listings) => {
      const listingsToShow = listings.data.slice(0, 4); // Get the first four listings
      const listingsHTML = listingsToShow
        .map((listing) => {
          const hasBids = listing.bids && listing.bids.length > 0;
          const lastBid = hasBids
            ? listing.bids[listing.bids.length - 1].amount
            : "no bids yet";
          const { daysLeft, hoursLeft, minutesLeft, secondsLeft } =
            calculateCountdown(listing.endsAt);
          const countdownHTML = `<p class="card-text">Time left: ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds</p>`;
          return listingTemplate(listing, countdownHTML, lastBid);
        })
        .join("");

      frontpageListingsContainer.innerHTML = listingsHTML;
    })
    .catch((error) => console.error("Error fetching listings:", error));
}

// Display the first four listings in ascending order when the page loads
displaySpecificListings("asc");

// Changing sorting order for showing the last four listings
JustStartedLink.addEventListener("click", (event) => {
  event.preventDefault();
  displaySpecificListings("desc");
  JustStartedLink.classList.add("active-underlined");
  lastChanceLink.classList.remove("active-underlined");
});

// Changing sorting order back to showing the four first listings

lastChanceLink.addEventListener("click", (event) => {
  event.preventDefault();
  displaySpecificListings("asc");
  JustStartedLink.classList.remove("active-underlined");
  lastChanceLink.classList.add("active-underlined");
});
