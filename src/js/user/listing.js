import { getSpecificListing } from "../api/ListingFetch.js";
import { calculateCountdown } from "../listings/countdown.js";

const listingContainer = document.querySelector("#listing-container");

async function singleListing() {
  try {
    const singleListing = await getSpecificListing();

    console.log(singleListing);

    // Checking if bids are present. If not "no bids yet" is displayed

    const hasBids = singleListing.bids && singleListing.bids.length > 0;
    const lastBid = hasBids
      ? singleListing.bids[singleListing.bids.length - 1].amount
      : "no bids yet";

    // Countdown converter

    const { daysLeft, hoursLeft, minutesLeft, secondsLeft } =
      calculateCountdown(singleListing.endsAt);

    const countdownHTML = `
      <p class=ms-auto>${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds</p>
    `;

    listingContainer.innerHTML = `
    <div class="container">
    <div class="listing-title text-center pt-3 pt-md-5 pb-md-3">
      <h1 id="auction-title" class="fs-1-25rem-md-2-25rem font-source-serif-4 pt-2 pb-2">${singleListing.title}</h1>
    </div>
    <div class="row gx-5 py-3">
      <div class="col-12 col-md-6">
        <div class="image-gallery">
          <img class="img-fluid open-image-modal cursor-pointer" src="${singleListing.media[0]?.url || "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}" alt="${singleListing.media[0]?.alt || "No image uploaded"}"/>
        </div>
      </div>
      <div class="col-12 col-md-6 text-center">
        <div id="current-bid-container" class="d-flex justify-content-between pt-3 border-bottom-black">
          <p class="d-inline-block">Current bid: </p>
          <p class="d-inline-block" id="current-bid">${lastBid}</p>
        </div>
        <div id="auction-time-container" class="d-flex justify-content-between pt-3">
          <p class="d-inline-block">Remaining time:</p>
          <p class="d-inline-block">${countdownHTML}</p>
        </div>
        <div id="time-remaining-container" class="text-end fs-0-75rem">
          <p>End time: ${singleListing.endsAt}</p>
        </div>
          <form id="place-bid" action="" class="d-md-flex">
            <div id="place-bidding-container" class="row ms-auto"></div>
            <div class="col-12 col-md-5 my-2">
              <input type="text" class="form-control text-center text-md-start" placeholder="Your bid" />
            </div>
            <div class="col-12 col-md-4 col-lg-3 my-2 ms-md-2">
              <button class="btn btn-dark w-100">Place bid</button>
            </div>
          </form>
          <div class="accordion accordion-flush py-3" id="accordionFlushExample">
            <div class="accordion-item my-3">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Description
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body text-start">${singleListing.description}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Specifics
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body text-start"><p>Seller: <span id="seller-name-accordian">${singleListing.seller.name}</span></p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

singleListing();
