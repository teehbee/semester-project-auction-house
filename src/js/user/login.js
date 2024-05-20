import { loginUser } from "../api/loginUser.js";
import { fetchApiKey } from "../api/apiKey.js";
import { apiBaseUrl, login, apiKeyEndPoint } from "../api/constants.js";

import {
  loginForm,
  loginEmail,
  loginPassword,
  loginError,
} from "../validation/constants.js";

async function handleLogin(event) {
  event.preventDefault();

  const userLogin = {
    email: loginEmail.value,
    password: loginPassword.value,
  };

  const loginSuccess = await loginUser(apiBaseUrl + login, userLogin);
  if (loginSuccess) {
    const apiKeyFetchSuccess = await fetchApiKey(apiBaseUrl + apiKeyEndPoint);
    if (apiKeyFetchSuccess) {
      console.log("API key fetched successfully");
    } else {
      console.log("Failed to fetch API key");
    }
  } else {
    console.log("login failed");
  }
}

document.addEventListener("click", function (event) {
  if (!loginForm.contains(event.target)) {
    loginError.classList.add("d-none");
  }
});

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}
