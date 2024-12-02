import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyBKrVhXDmgpUejJpPUIKnllCCgG5IuNeoU";

export const getPlaceDetails = async (placeId) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,photos,formatted_address,rating,types&key=${GOOGLE_API_KEY}`
    );

    if (response.data.result) {
      const { result } = response.data;

      // Get the first photo if available
      let photoUrl = null;
      if (result.photos && result.photos[0]) {
        photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=${GOOGLE_API_KEY}`;
      }

      return {
        name: result.name,
        address: result.formatted_address,
        rating: result.rating,
        type: result.types[0],
        photoUrl,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching place details:", error);
    return null;
  }
};
