// Validation functions

import { checkRegUsername } from "../validation/validateUsername.js";
import { validateEmail } from "../validation/validateEmail.js";
import {
  checkLength,
  checkPasswordConfirm,
} from "../validation/validatePassword.js";

import {
  registrationUserName,
  registrationEmail,
  registrationPassword,
  registrationNameError,
  registrationEmailError,
  registrationPasswordError,
  registrationPasswordRepeat,
  registrationPasswordRepeatError,
  registrationForm,
  registrationMainError,
} from "../validation/constants.js";

// Dialog elements

// Register function

import { apiBaseUrl, register } from "../api/constants.js";

import { registerUser } from "../api/registerUser.js";

/* --- */

function validateRegisterForm(event) {
  event.preventDefault();

  const user = {
    name: registrationUserName.value,
    email: registrationEmail.value,
    password: "registrationPasswordvalue",
  };

  // Validating name

  if (checkRegUsername(registrationUserName.value)) {
    registrationNameError.classList.add("d-none");
  } else {
    registrationNameError.classList.remove("d-none");
  }

  // Validating email

  if (validateEmail(registrationEmail.value) === true) {
    registrationEmailError.classList.add("d-none");
  } else {
    registrationEmailError.classList.remove("d-none");
  }

  // Validating password

  if (checkLength(registrationPassword.value, 7)) {
    registrationPasswordError.classList.add("d-none");
  } else {
    registrationPasswordError.classList.remove("d-none");
  }

  // Validating password confirmation

  if (
    checkPasswordConfirm(
      registrationPassword.value,
      registrationPasswordRepeat.value,
    )
  ) {
    registrationPasswordRepeatError.classList.add("d-none");
  } else {
    registrationPasswordRepeatError.classList.remove("d-none");
  }

  registerUser(apiBaseUrl + register, user);
}

document.addEventListener("click", function (event) {
  if (!registrationForm.contains(event.target)) {
    registrationNameError.classList.add("d-none");
    registrationEmailError.classList.add("d-none");
    registrationPasswordError.classList.add("d-none");
    registrationPasswordError.classList.add("d-none");
  }
});

if (registrationForm) {
  registrationForm.addEventListener("submit", validateRegisterForm);
} else {
  registrationMainError.classList.remove("d-none");
}
