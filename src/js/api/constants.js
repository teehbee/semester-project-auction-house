// Url's and endpoints

export const apiBaseUrl = "https://v2.api.noroff.dev";

export const register = "/auth/register";

export const login = "/auth/login";

export const apiKeyEndPoint = "/auth/create-api-key";

export const profile = "/auction/profiles/";

const accessToken = localStorage.getItem("accessToken");

const apiKey = localStorage.getItem("apiKey");

export const options = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "X-Noroff-API-Key": apiKey,
  },
};

// Listings endpoints

export const allListings = "/auction/listings";
