import { getProfileData } from "../api/profileFetch.js";
import { calculateCountdown } from "../listings/countdown.js";

// const showOwnListings = document.querySelector("#profile-show-your-listings");
// const showOwnWins = document.querySelector("#profile-show-your-wins");

const ownListingsContainer = document.querySelector(
  "#profile-your-listings-row",
);
// const ownWinsContainer = document.querySelector("#profile-your-wins-row");
const profileListingsLoader = document.querySelector(
  "#profile-listings-loader",
);
const placeHolder = document.querySelector("#no-auctions-placeholder");

async function fetchAndDisplayProfileListings() {
  try {
    profileListingsLoader.classList.remove("d-none");
    const getProfileListings = await getProfileData();

    const listings = getProfileListings.data.listings;

    ownListingsContainer.innerHTML = "";

    if (listings.length === 0) {
      placeHolder.classList.remove("d-none");
    } else {
      placeHolder.classList.add("d-none");
    }

    listings.forEach(async (listing) => {
      const hasBids = listing.bids && listing.bids.length > 0;
      const lastBid = hasBids
        ? listing.bids[listing.bids.length - 1].amount
        : "No bids yet";
      const endsAt = new Date(listing.endsAt).getTime();
      const now = new Date().getTime();

      // Change countdown text if auction is over. All auctions will be displayed.

      let countdownHTML = "";
      if (now < endsAt) {
        const { daysLeft, hoursLeft, minutesLeft, secondsLeft } =
          calculateCountdown(listing.endsAt);
        countdownHTML = `<p class="card-text">Time left: ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds</p>`;
      } else {
        countdownHTML = `<p class="card-text">Auction is over</p>`;
      }

      const profileListingHTML = `
    <div class="listings-container col-12 col-sm-6 col-lg-4 col-xl-3">
    <a class="text-decoration-none" href="../auctions/listing.html?id=${listing.id}">
      <div class="card card-width-306px border-none border-radius-none mx-auto">
        <img class="listings-image-card p-3 object-fit-img" src="${listing.media[0]?.url || "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}" alt="${listing.media[0]?.alt || "Image description is missing"}" width="306" height="350"/>
        <div class="card-body">
          <h2 class="card-title fs-1-25rem">${listing.title}</h2>
          ${countdownHTML}
          <p class="card-text">
            Current bid:
            <span class="card-next-bid-amount">${lastBid}</span>
          </p>
        </div>
      </div>
    </a>
  </div>
    `;
      ownListingsContainer.innerHTML += profileListingHTML;
      profileListingsLoader.classList.add("d-none");
    });
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
}

fetchAndDisplayProfileListings();
