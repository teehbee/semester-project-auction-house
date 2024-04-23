export function logOutUser() {
  const logOutIcon = document.querySelector("#logout-icon");

  logOutIcon.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("apiKey");
    localStorage.removeItem("accessToken");
    location.reload();
  });
}
