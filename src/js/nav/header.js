const header = document.createElement("header");

header.innerHTML = `
<header>
<nav class="upper-nav py-3">
  <div class="container">
    <div class="row text-center">
      <div class="left-icon col-2 align d-flex align-items-center">
        <a class="d-block d-lg-none" id="hamburger-icon" href="#"
          ><img src="assets/logo/bars-dark.svg"
        /></a>
        <a class="search-icon nav-link d-none d-lg-block" href="#"
          ><img src="assets/logo/search-32px-dark.svg"
        /></a>
      </div>
      <div class="col-8 logo-container">
        <a class="navbar-brand" href="index.html">
          <picture>
            <source
              media="(min-width: 576px)"
              srcset="./assets/logo/logo-large.svg"
            />
            <img src="./assets/logo/logo-small.svg" alt="Website logo" />
          </picture>
        </a>
      </div>
      <div
        class="col-2 right-icons d-flex align-items-center justify-content-end"
      >
        <a href="" class="pe-3 open-login-modal">
          <img src="assets/logo/user-32px-dark.svg" />
        </a>
        <a id="profile-icon-header" href="" class="d-none d-lg-block">
          <img src="assets/logo/logo-logout-dark-32px.svg" />
        </a>
      </div>
    </div>
  </div>
  <div class="container-fluid p-0">
    <div class="nav-links menu-change w-100">
      <ul
        ul
        id="nav-icons"
        class="d-flex d-block d-lg-none list-style-off light-icons ps-0 pb-3 border-bottom"
      >
        <li class="me-auto">
          <a
            class="d-block pe-auto d-lg-none pb-5"
            id="close-menu"
            href="#"
            ><img src="assets/logo/logo-close-light.svg"
          /></a>
        </li>
        <li class="ms-auto ps-3">
          <a class="d-block d-lg-none search-icon" href="#"
            ><img src="assets/logo/logo-search-light.svg"
          /></a>
        </li>
        <li class="ps-3">
          <a class="d-block d-lg-none open-login-modal" href=""
            ><img src="assets/logo/logo-user-light.svg"
          /></a>
        </li>
        <li class="ps-3">
          <a class="d-block d-lg-none" href="#"
            ><img src="assets/logo/logo-logout-light-28px.svg"
          /></a>
        </li>
      </ul>
      <ul
        class="d-flex justify-content-center flex-column flex-lg-row nav-links-ul list-unstyled pt-3"
      >
        <li>
          <a
            class="fs-2-rem-lg-1-25rem font-change-menu font-change-color"
            href="/auctions/index.html"
            >Live Auctions</a
          >
        </li>
        <li class="open-listing-dialog">
          <a
            class="fs-2-rem-lg-1-25rem font-change-menu font-change-color"
            href="#"
            >Sell Items</a
          >
        </li>
        <li>
          <a
            class="fs-2-rem-lg-1-25rem font-change-menu font-change-color"
            href="#"
            >Contact Us</a
          >
        </li>
        <li class="open-register-modal">
          <a class="fs-1-5rem-lg-1-25rem font-change-color" href="#"
            >Register</a
          >
        </li>
        <li class="open-login-modal">
          <a class="fs-1-5rem-lg-1-25rem font-change-color" href=""
            >Log in</a
          >
        </li>
      </ul>
    </div>
  </div>
  <dialog id="login-dialog" class="main-color-dark">
    <div class="dialog-top-banner d-block d-md-none"></div>
    <div class="main-color-white w-100">
      <div class="container text-center py-5 main-color-white">
        <div id="close-login-dialog" class="position-absolute p-3">
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/logo/icon-close-dark-32px.svg"
            />
            <img
              src="/assets/logo/icon-close-dark-28px.svg"
              aria-label="close login form"
            />
          </picture>
        </div>
        <h2 class="dialog-title fs-2-rem-md-2-5rem pb-3">Log in</h2>
        <form id="login-form" class="form-width-dialog mx-auto" action="">
          <div class="mb-3 text-start">
            <label for="login-email" class="form-label fs-0-75rem mb-2"
              >Email address</label
            >
            <input type="email" class="form-control" id="login-email" />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Please check if this field is filled out correctly
            </div>
          </div>
          <div class="mb-3 mx-auto text-start">
            <label for="login-password" class="form-label fs-0-75rem mb-2"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="login-password"
            />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Please check if this field is filled out correctly
            </div>
          </div>
          <a href="" class="btn btn-dark mt-3">Submit</a>
          <div
            class="spinner-border text-secondary mt-4 d-none"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </div>
    <div class="bottom-dialog-banner mt-5 text-center">
      <p class="light-font font-source-serif-4 fs-1-25rem-md-1-5-rem">
        New user?
        <span
          class="light-font font-source-serif-4 fs-1-25rem-md-1-5-rem active-underlined"
          id="login-to-register-modal-switch"
          >Register a new user here</span
        >
      </p>
    </div>
  </dialog>
  <dialog id="register-dialog" class="main-color-dark">
    <div class="dialog-top-banner d-block d-md-none"></div>
    <div class="main-color-white w-100">
      <div class="container text-center py-5 main-color-white">
        <div id="close-registration-dialog" class="position-absolute p-3">
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/logo/icon-close-dark-32px.svg"
            />
            <img
              src="/assets/logo/icon-close-dark-28px.svg"
              aria-label="close registration form"
            />
          </picture>
        </div>
        <h2 class="dialog-title fs-2-rem-md-2-5rem pb-3">
          Register user
        </h2>
        <form
          id="register-form"
          class="form-width-dialog mx-auto"
          action=""
        >
          <div class="mb-3 text-start">
            <label for="register-name" class="form-label fs-0-75rem mb-2"
              >Name*</label
            >
            <input type="text" class="form-control" id="register-name" />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Please check if this field is filled out correctly
            </div>
          </div>
          <div class="mb-3 text-start">
            <label for="register-email" class="form-label fs-0-75rem mb-2"
              >Email address*</label
            >
            <input type="text" class="form-control" id="register-email" />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Please check if this field is filled out correctly
            </div>
          </div>
          <div class="mb-3 mx-auto text-start">
            <label
              for="register-password"
              class="form-label fs-0-75rem mb-2"
              >Password*</label
            >
            <input
              type="password"
              class="form-control"
              id="login-password"
            />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Your password must be at least 8 letters
            </div>
          </div>
          <div class="mb-3 mx-auto text-start">
            <label
              for="register-password-confirm"
              class="form-label fs-0-75rem mb-2"
              >Repeat Password*</label
            >
            <input
              type="password"
              class="form-control"
              id="login-password-confirm"
            />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * The passwords don't match
            </div>
          </div>
          <div class="">
            <div class="form-check d-flex">
              <input
                class="form-check-input form-checkbox me-3"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label fs-0-625rem text-start"
                for="flexCheckDefault"
              >
                By creating your user profile at Get rid of it, you accept
                our Terms and Conditions.
              </label>
            </div>
          </div>
          <a href="" class="btn btn-dark mt-3">Create profile</a>
          <div
            class="spinner-border text-secondary mt-4 d-none"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <dialog id="search-dialog" class="main-color-white">
    <div class="main-color-white w-100">
      <div class="container text-center py-5 main-color-white">
        <div id="close-search-dialog" class="position-absolute p-3">
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/logo/icon-close-dark-32px.svg"
            />
            <img
              src="/assets/logo/icon-close-dark-28px.svg"
              aria-label="close registration form"
            />
          </picture>
        </div>
        <h2 class="dialog-title fs-2-rem-md-2-5rem pb-3">Search</h2>
        <form
          id="search-form"
          class="form-width-dialog mx-auto pt-5"
          action=""
        >
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search listings"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              type="button"
              class="btn btn-dark"
              data-mdb-ripple-init
            >
              <img src="assets/logo/logo-search-light.svg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <dialog id="post-listing-dialog" class="main-color-white">
    <div class="main-color-white w-100">
      <div class="dialog-top-banner d-block d-md-none"></div>
      <div class="container text-center py-5 main-color-white">
        <div id="close-listing-dialog" class="position-absolute p-3">
          <picture class="cursor-pointer">
            <source
              media="(min-width: 768px)"
              srcset="/assets/logo/icon-close-dark-32px.svg"
            />
            <img
              src="/assets/logo/icon-close-dark-28px.svg"
              aria-label="close registration form"
            />
          </picture>
        </div>
        <h2 class="dialog-title fs-2-rem-md-2-5rem pb-3">
          Create listing
        </h2>
        <form
          id="register-form"
          class="form-width-dialog mx-auto"
          action=""
        >
          <div class="mb-3 text-start">
            <label for="listing-title" class="form-label fs-0-75rem mb-2"
              >Title</label
            >
            <input type="text" class="form-control" id="listing-title" />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Please check if this field is filled out correctly
            </div>
          </div>
          <div class="mb-3 text-start">
            <label
              for="listing-description"
              class="form-label fs-0-75rem mb-2"
              >Description</label
            >
            <textarea
              class="form-control"
              id="listing-description"
              rows="5"
            ></textarea>
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Please check if this field is filled out correctly
            </div>
          </div>
          <div class="mb-3 mx-auto text-start">
            <label for="listing-image" class="form-label fs-0-75rem mb-2"
              >Image (url)</label
            >
            <input type="text" class="form-control" id="listing-image" />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Must be a full valid url address
            </div>
          </div>
          <div class="mb-3 mx-auto text-start">
            <label for="listing-tags" class="form-label fs-0-75rem mb-2"
              >Tags (separate by comma)</label
            >
            <input
              type="password"
              class="form-control"
              id="listing-image"
            />
          </div>
          <div class="mb-3 mx-auto text-start">
            <label
              for="listing-end-date"
              class="form-label fs-0-75rem mb-2"
              >End date</label
            >
            <input
              type="text"
              class="form-control"
              id="listing-end-date"
            />
            <div
              class="form-error fs-0-625rem text-end text-danger d-none"
            >
              * Must be selected
            </div>
          </div>
          <div class="">
            <div class="form-check d-flex">
              <input
                class="form-check-input form-checkbox me-3"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label fs-0-625rem text-start"
                for="flexCheckDefault"
              >
                By creating your user profile at Get rid of it, you accept
                our Terms and Conditions.
              </label>
            </div>
          </div>
          <a href="" class="btn btn-dark mt-3">Create listing</a>
          <div
            class="spinner-border text-secondary mt-4 d-none"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</nav>
</header>
`;

document.body.prepend(header);
