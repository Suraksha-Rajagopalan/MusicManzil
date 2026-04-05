// src/services/musicService.js
const CLIENT_ID = "70cce1b6";
// IMPORTANT: Use api.jamendo.com, not just jamendo.com
const BASE_URL = "https://api.jamendo.com/v3.0";

export const getPopularTracks = async (limit = 30) => {
  try {
    // We add &callback=jsonp to help bypass some basic browser restrictions
    const response = await fetch(
      `${BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${limit}&order=popularity_month`
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    console.log("1. Raw API Data:", data);
    console.log("API Response Status:", data.headers.status);

    // src/services/musicService.js
    return data.results.map((track) => ({
      id: track.id,
      title: track.name,
      artist: track.artist_name,
      cover:
        track.album_image || track.image || "https://via.placeholder.com/150",
      // Use 'audio' but add a backup just in case
      audio: track.audio || track.audiodownload,
    }));
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
