const footer = document.createElement("footer");

footer.innerHTML = `
<footer class="main-color-dark">
<div class="container text-start text-md-center py-2 py-md-3 pt-md-5">
  <a class="navbar-brand" href="index.html">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="./assets/logo/logo-large-white.svg"
      />
      <img src="./assets/logo/logo-small-white.svg" alt="Website logo" />
    </picture>
  </a>
  <div class="pt-2 pt-md-3 fw-light fs-1rem-lg-1-25rem">
    <p class="light-font pt-2 pt-md-3">
      The shabbiest auction house there is. Since 2024.
    </p>
    <p class="light-font pt-2 pt-md-3">Adress goes here</p>
  </div>
  <div>
    <ul
      class="footer-links py-2 py-md-3 px-0 fw-light fs-1rem-lg-1-25rem"
    >
      <li class="pt-2 pt-md-3">
        <a class="light-font" href="/auctions/index.html"
          >Live auctions</a
        >
      </li>
      <li class="pt-2 pt-md-3 open-listing-dialog">
        <a class="light-font" href="#">Sell items</a>
      </li>
    </ul>
  </div>
</div>
</footer>
`;

document.body.append(footer);
