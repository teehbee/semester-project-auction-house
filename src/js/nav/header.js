const header = document.createElement(`header`);

header.innerHTML = `
    <header>
      <nav class="upper-nav py-3">
        <div class="container">
          <div class="row text-center">
            <div class="left-icon col-2 align d-flex align-items-center">
              <a class="d-block d-lg-none" id="hamburger-icon" href="#"><img src="assets/logo/bars-dark.svg" /></a>
              <a class="nav-link d-none d-lg-block" href="#"><img src="assets/logo/search-32px-dark.svg" /></a>
            </div>
            <div class="col-8 logo-container">
              <a class="navbar-brand" href="index.html">
                <picture>
                  <source media="(min-width: 576px)" srcset="./assets/logo/logo-large.svg" />
                  <img src="./assets/logo/logo-small.svg" alt="Website logo" />
                </picture>
              </a>
            </div>
            <div class="col-2 right-icons d-flex align-items-center justify-content-end">
              <a class="nav-link pe-3 d-none d-lg-block" href="#"><img src="assets/logo/heart-32px-dark.svg" /></a>
              <a href="#"><img src="assets/logo/user-32px-dark.svg" /></a>
            </div>
          </div>
        </div>
        <div class="container-fluid p-0">
          <div class="nav-links menu-change w-100">
            <ul ul id="nav-icons" class="d-flex d-block d-lg-none list-style-off light-icons ps-0 pb-3 border-bottom">
              <li class="me-auto">
                <a class="d-block d-lg-none pb-5" id="close-menu" href="#"><img src="assets/logo/logo-close-light.svg" /></a>
              </li>
              <li class="ms-auto ps-3">
                <a class="d-block d-lg-none" href="#"><img src="assets/logo/logo-search-light.svg" /></a>
              </li>
              <li class="ps-3">
                <a class="d-block d-lg-none" href="#"><img src="assets/logo/logo-heart-light.svg" /></a>
              </li>
              <li class="ps-3">
                <a class="d-block d-lg-none" href="#"><img src="assets/logo/logo-user-light.svg" /></a>
              </li>
            </ul>
            <ul class="d-flex justify-content-center flex-column flex-lg-row nav-links-ul list-unstyled pt-3">
              <li>
                <a class="fs-2-rem-lg-1-25rem font-change-menu font-change-color" href="#">Live Auctions</a>
              </li>
              <li>
                <a class="fs-2-rem-lg-1-25rem font-change-menu font-change-color" href="#">Sell Items</a>
              </li>
              <li>
                <a class="fs-2-rem-lg-1-25rem font-change-menu font-change-color" href="#">Contact Us</a>
              </li>
              <li>
                <a class="fs-1-5rem-lg-1-25rem font-change-color" href="#">Register</a>
              </li>
              <li>
                <a class="fs-1-5rem-lg-1-25rem font-change-color" href="#">Log in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
`;

document.body.append("footer");