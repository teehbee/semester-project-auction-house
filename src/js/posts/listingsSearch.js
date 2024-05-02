export function searchPosts(listings, searchTerm) {
  if (!searchTerm || searchTerm.trim().length === 0) return listings;

  return listings.filter((listing) => {
    // Exclude listings without media URLs
    if (!listing.media || listing.media.length === 0) return false;

    const titleMatches = listing.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const descriptionMatches = listing.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Proceed only if the listing has media and either the title or description matches the search term
    return titleMatches || descriptionMatches;
  });
}
