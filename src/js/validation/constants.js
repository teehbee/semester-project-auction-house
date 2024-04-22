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

// Spinner for registration

export const registrationSpinner = document.querySelector(
  "#registration-spinner",
);
