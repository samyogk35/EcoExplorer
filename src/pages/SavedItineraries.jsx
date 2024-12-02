import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getUserItineraries } from "../services/itineraryService";

const SavedItineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const userItineraries = await getUserItineraries(user.uid);
        console.log("Fetched itineraries:", userItineraries);
        setItineraries(userItineraries);
      } catch (err) {
        setError("Failed to fetch itineraries");
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, [user]);

  const renderItineraryContent = (itinerary) => {
    if (typeof itinerary === "string") {
      return (
        <pre className="whitespace-pre-wrap text-gray-700">{itinerary}</pre>
      );
    }

    if (Array.isArray(itinerary)) {
      return itinerary.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ));
    }

    return (
      <pre className="whitespace-pre-wrap text-gray-700">
        {JSON.stringify(itinerary, null, 2)}
      </pre>
    );
  };

  if (loading)
    return (
      <div className="container mx-auto px-4 py-8 text-center">Loading...</div>
    );
  if (error)
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Saved Itineraries</h1>

      {itineraries.length === 0 ? (
        <div className="text-center text-gray-600">
          No saved itineraries yet.
        </div>
      ) : (
        <div className="grid gap-6">
          {itineraries.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold">{item.destination}</h2>
                  <p className="text-gray-600">
                    {item.duration} days • ${item.budget} • {item.travelStyle}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-4">
                {renderItineraryContent(item.itinerary)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedItineraries;
