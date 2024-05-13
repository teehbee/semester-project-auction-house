/* Registration form */

export const registrationForm = document.querySelector("#register-form");

export const registrationUserName = document.querySelector("#register-name");
export const registrationEmail = document.querySelector("#register-email");
export const registrationPassword =
  document.querySelector("#register-password");
export const registrationPasswordRepeat = document.querySelector(
  "#register-password-confirm",
);
export const registrationConsentInput =
  document.querySelector("#register-confirm");

export const registrationButton = document.querySelector(
  "#submit-registration",
);

export const registrationConfirm = document.querySelector("#register-confirm");

// Error classes for registration

export const registrationNameError = document.querySelector(
  "#register-name-error",
);
export const registrationEmailError = document.querySelector(
  "#register-email-error",
);
export const registrationPasswordError = document.querySelector(
  "#registration-password-error",
);
export const registrationPasswordRepeatError = document.querySelector(
  "#registration-password-repeat-error",
);
export const registrationTermsError = document.querySelector(
  "#registration-terms-error",
);
export const registrationMainError = document.querySelector(
  "#registration-error",
);
export const registrationConfirmError = document.querySelector(
  "#registration-terms-error",
);

// Spinner for registration

export const registrationSpinner = document.querySelector(
  "#registration-spinner",
);

/* Login form */

export const loginForm = document.querySelector("#login-form");
export const loginEmail = document.querySelector("#login-email");
export const loginPassword = document.querySelector("#login-password");

// Error classes for login

export const loginError = document.querySelector("#login-error");

// Post listings

export const listingForm = document.querySelector("#listing-form");
export const listingTitle = document.querySelector("#listing-title");
export const listingDescription = document.querySelector(
  "#listing-description",
);
export const listingImageUrl = document.querySelector("#listing-image");
export const listingImageDescription = document.querySelector(
  "#listing-image-description",
);
export const listingConfirmCheckbox = document.querySelector(
  "#confirm-listing-checkbox",
);

export const listingSpinner = document.querySelector("#listing-spinner");

export const listingSubmission = document.querySelector("#submit-listing");

export const listingSuccessMessage = document.querySelector("#listing-success");

// Error classes for post listings

export const titleErrorListing = document.querySelector(
  "#listing-form-error-title",
);
export const descriptionErrorListing = document.querySelector(
  "#listing-form-error-description",
);
export const imageErrorListing = document.querySelector(
  "#image-form-error-description",
);
export const EndTimeErrorListing = document.querySelector(
  "#end-time-error-description",
);
export const confirmListingError = document.querySelector(
  "#confirm-listing-error",
);

// Post bids

export const biddingForm = document.querySelector("#place-bid");
export const biddingAmount = document.querySelector("#bid-amount");
export const biddingSubmit = document.querySelector("#bid-submit");

// Error class for bidding

export const biddingError = document.querySelector("#bid-error");
