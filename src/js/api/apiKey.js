export async function fetchApiKey(apiKeyUrl) {
  try {
    const response = await fetch(apiKeyUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch API key");
    }
    const json = await response.json();
    const apiKey = json.data.key;
    localStorage.setItem("apiKey", apiKey);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
