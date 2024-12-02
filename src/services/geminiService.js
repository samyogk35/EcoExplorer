import { API_KEY } from "../constants/api";

export const generateItinerary = async (formData) => {
  const prompt = `Create a detailed ${formData.duration}-day travel itinerary for ${formData.destination} with a budget of $${formData.budget} USD. 
  Travel style preference: ${formData.travelStyle}. 
  Please include:
  1. Recommended hotels with approximate prices and their eco-friendly initiatives
  2. Daily activities and attractions to visit
  3. Estimated costs for activities
  4. Restaurant recommendations (highlighting sustainable and local options)
  5. Transportation suggestions (emphasizing eco-friendly options)
  6. Eco-friendly travel tips specific to ${formData.destination}
  7. Carbon footprint estimates for:
     - Transportation methods (e.g., flights, trains, buses, walking)
     - Accommodation choices
     - Daily activities
     - Overall trip carbon footprint
  
  For each day, please include:
  - Sustainable transportation options with CO2 emissions per person
  - Local, eco-friendly dining choices
  - Tips for minimizing environmental impact
  - Suggestions for supporting local communities
  - Carbon offset recommendations
  
  At the end, please provide:
  - Total estimated carbon footprint for the trip
  - Comparison with average tourist carbon footprint
  - Specific suggestions for reducing and offsetting the carbon impact
  
  Format the response in a clear, day-by-day structure, with "Eco-Tips" and "Carbon Impact" sections for each day.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
};
