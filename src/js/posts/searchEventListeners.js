export function addSearchSubmitListener(
  searchSubmit,
  searchInput,
  searchPosts,
  allListings,
  displayListings,
) {
  searchSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    const filteredListings = searchPosts(allListings, searchTerm);
    displayListings(filteredListings);
  });
}

export function addSearchInputListener(
  searchInput,
  searchPosts,
  allListings,
  displayListings,
) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      const filteredListings = searchPosts(allListings, searchTerm);
      displayListings(filteredListings);
    }
  });
}
