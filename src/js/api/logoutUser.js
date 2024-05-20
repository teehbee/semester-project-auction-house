export function logOutUser() {
  const logOutIcons = document.querySelectorAll(".logout-icon");

  logOutIcons.forEach(function (logOutIcon) {
    logOutIcon.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.removeItem("apiKey");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userName");
      window.location.href = "../index.html";
    });
  });
}
