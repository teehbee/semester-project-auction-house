import { loginError } from "../validation/constants.js";

const loginSpinner = document.querySelector("#login-spinner");

// Login api fetch

export async function loginUser(url, data) {
  try {
    loginSpinner.classList.remove("d-none");
    const postData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    if (!response.ok) {
      loginSpinner.classList.add("d-none");
      loginError.classList.remove("d-none");
      throw new Error("HTTP error" + response.status);
    }

    const json = await response.json();

    const accessToken = json.data.accessToken;

    localStorage.setItem(`accessToken`, accessToken);

    loginSpinner.classList.remove("d-none");

    console.log(json);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    loginSpinner.classList.add("d-none");
  }
}

// API Key fetch
