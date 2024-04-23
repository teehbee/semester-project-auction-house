const spinner = document.querySelector("#registration-spinner");

import * as constants from "../modals/constants.js";

export async function registerUser(url, data) {
  try {
    spinner.classList.remove("d-none");
    const postData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    if (!response.ok) {
      spinner.classList.add("d-none");
      throw new Error("HTTP error" + response.status);
    }
    console.log(response);
    const json = await response.json();

    // Switch to success modal and change url parameter

    constants.registerModal.close();
    constants.successDialog.showModal();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("modal", "success");
    history.pushState({}, "", "?" + searchParams.toString());

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
