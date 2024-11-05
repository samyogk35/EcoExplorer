const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$60-$100/night",\n      "hotelImageUrl": "https://www.theDcasino.com/wp-content/uploads/2020/02/The-D-Las-Vegas-Exterior-Shot.jpg",\n      "geoCoordinates": "36.1699° N, 115.1423° W",\n      "rating": 4.0,\n      "description": "A centrally located, budget-friendly hotel with a retro vibe, offering a casino, pool, and restaurants."\n    },\n    {\n      "hotelName": "Golden Nugget Las Vegas",\n      "hotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$80-$150/night",\n      "hotelImageUrl": "https://www.goldennugget.com/las-vegas/media/images/hotel/hotel-exterior-day.jpg",\n      "geoCoordinates": "36.1696° N, 115.1419° W",\n      "rating": 4.5,\n      "description": "A classic Las Vegas hotel with a casino, multiple pools, restaurants, and a shark tank."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$50-$80/night",\n      "hotelImageUrl": "https://www.circuscircus.com/media/images/hotel-exterior-day.jpg",\n      "geoCoordinates": "36.1220° N, 115.1711° W",\n      "rating": 3.5,\n      "description": "A budget-friendly hotel known for its circus theme, offering a casino, amusement park, and multiple restaurants."\n    },\n    {\n      "hotelName": "The Orleans Hotel & Casino",\n      "hotelAddress": "4500 W Tropicana Ave, Las Vegas, NV 89103",\n      "price": "$70-$120/night",\n      "hotelImageUrl": "https://www.orleanscasino.com/media/images/hotel/hotel-exterior-day.jpg",\n      "geoCoordinates": "36.0976° N, 115.1824° W",\n      "rating": 4.0,\n      "description": "A family-friendly hotel with a casino, bowling alley, multiple restaurants, and a pool."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "placeName": "Fremont Street Experience",\n      "placeDetails": "Explore the vibrant Fremont Street Experience, featuring a canopy of lights, street performers, and numerous casinos.",\n      "placeImageUrl": "https://www.vegasexperience.com/wp-content/uploads/2020/09/Fremont-Street-Experience-Canopy.jpg",\n      "geoCoordinates": "36.1698° N, 115.1423° W",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day1": {\n      "time": "Afternoon (12:00 PM - 3:00 PM)",\n      "placeName": "Pinball Hall of Fame",\n      "placeDetails": "Enjoy a nostalgic trip back in time at the Pinball Hall of Fame, playing over 200 classic pinball machines.",\n      "placeImageUrl": "https://www.pinballhalloffame.org/wp-content/uploads/2020/03/Pinball-Hall-of-Fame-Las-Vegas-IMG_7492.jpg",\n      "geoCoordinates": "36.1713° N, 115.1399° W",\n      "ticketPricing": "$12.50",\n      "rating": 4.0\n    },\n    "day1": {\n      "time": "Evening (7:00 PM - 10:00 PM)",\n      "placeName": "The Golden Nugget",\n      "placeDetails": "Enjoy a free show at the Golden Nugget\'s tank, featuring a variety of sharks and other marine life.",\n      "placeImageUrl": "https://www.goldennugget.com/las-vegas/media/images/attractions/shark-tank.jpg",\n      "geoCoordinates": "36.1696° N, 115.1419° W",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day2": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "placeName": "The Neon Museum",\n      "placeDetails": "Discover the iconic neon signs of Las Vegas\'s past at the Neon Museum.",\n      "placeImageUrl": "https://www.neonmuseum.org/wp-content/uploads/2015/12/Neon-Museum-Las-Vegas-IMG_5297.jpg",\n      "geoCoordinates": "36.1659° N, 115.1414° W",\n      "ticketPricing": "$25",\n      "rating": 4.5\n    },\n    "day2": {\n      "time": "Afternoon (12:00 PM - 3:00 PM)",\n      "placeName": "The Mob Museum",\n      "placeDetails": "Learn about the history of organized crime in Las Vegas at the Mob Museum.",\n      "placeImageUrl": "https://www.themobmuseum.org/wp-content/uploads/2017/05/mob-museum-exterior.jpg",\n      "geoCoordinates": "36.1663° N, 115.1396° W",\n      "ticketPricing": "$30",\n      "rating": 4.0\n    },\n    "day2": {\n      "time": "Evening (7:00 PM - 10:00 PM)",\n      "placeName": "Free Show on the Strip",\n      "placeDetails": "Catch a free show on the Las Vegas Strip, such as the Bellagio Fountains or the Volcano at the Mirage.",\n      "placeImageUrl": "https://www.bellagio.com/content/dam/mgmresorts/bellagio/attractions/fountains-of-bellagio/Bellagio-Fountains-at-Night.jpg",\n      "geoCoordinates": "36.1144° N, 115.1713° W",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "placeName": "Red Rock Canyon National Conservation Area",\n      "placeDetails": "Enjoy scenic views and hiking trails at Red Rock Canyon, a short drive from Las Vegas.",\n      "placeImageUrl": "https://www.nps.gov/redr/planyourvisit/images/RedRockCanyon-Photo2.jpg",\n      "geoCoordinates": "36.1814° N, 115.2963° W",\n      "ticketPricing": "$15",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Afternoon (12:00 PM - 3:00 PM)",\n      "placeName": "Hoover Dam",\n      "placeDetails": "Take a day trip to Hoover Dam, an impressive engineering marvel, and explore the surrounding area.",\n      "placeImageUrl": "https://www.nps.gov/hove/learn/nature/images/hoover-dam-wide.jpg",\n      "geoCoordinates": "36.0039° N, 114.9129° W",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Evening (7:00 PM - 10:00 PM)",\n      "placeName": "Las Vegas Strip",\n      "placeDetails": "Enjoy a final evening on the Las Vegas Strip, taking in the sights, sounds, and atmosphere of the city."\n    }\n  }\n}\n```\n\n**Explanation:**\n\n* **Hotels:** This section lists four budget-friendly hotel options with relevant details such as name, address, price range, image URL, location coordinates, ratings, and descriptions.\n* **Itinerary:** This section provides a suggested 3-day itinerary for a couple visiting Las Vegas on a cheap budget. \n* **Day Plan:** Each day is divided into morning, afternoon, and evening activities. \n* **Places:**  For each activity, details like the place name, description, image URL, coordinates, ticket price, and rating are provided. \n\n**Notes:**\n\n* Prices are estimates and may vary depending on the season and availability. \n* Consider checking for any free attractions, shows, or events that might be happening during your visit.\n* Don\'t forget to factor in travel time between locations and plan accordingly. \n* This itinerary is a suggestion, and you can customize it to your interests and preferences. \n',
        },
      ],
    },
  ],
});

const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
console.log(result.response.text());

run();
