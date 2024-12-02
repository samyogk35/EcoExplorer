const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/generate-itinerary", async (req, res) => {
  try {
    const { destination, duration, budget, travelStyle } = req.body;

    const prompt = `Create a detailed eco-friendly ${duration}-day travel itinerary for ${destination} with a budget of $${budget}. 
    Travel style preference: ${travelStyle}. 

    Please include:
    1. Eco-friendly accommodations (prioritize hotels with green certifications, eco-lodges, or sustainable properties)
    2. Daily activities with environmental impact considerations:
       - Walking or cycling tours
       - Nature preservation activities
       - Local, sustainable attractions
       - Carbon footprint for each activity
    3. Sustainable transportation options:
       - Public transit options
       - Bike rental locations
       - Walking routes
       - If necessary, hybrid/electric vehicle rentals
    4. Restaurant recommendations:
       - Farm-to-table restaurants
       - Local establishments using sustainable practices
       - Vegetarian/vegan options
       - Restaurants minimizing food waste
    5. Eco-friendly tips:
       - Estimated carbon savings compared to traditional travel
       - Local recycling guidelines
       - Sustainable shopping locations
       - Water conservation tips
    
    For each day, include the estimated carbon emissions saved compared to traditional tourism.
    Format the response in a clear, day-by-day structure with a sustainability summary at the end.`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ itinerary: text });
  } catch (error) {
    console.error("Error generating itinerary:", error);
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
