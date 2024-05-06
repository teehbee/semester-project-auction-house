export const listingTemplate = (listing, countdownHTML, lastBid) => `
  <div class="listings-container col-12 col-sm-6 col-lg-4 col-xl-3">
    <a class="text-decoration-none" href="../auctions/listing.html?id=${listing.id}">
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
