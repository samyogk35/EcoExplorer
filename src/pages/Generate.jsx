import React, { useState } from "react";
import TravelForm from "../components/TravelForm";
import { generateItinerary } from "../services/geminiService";
import { saveItinerary } from "../services/itineraryService";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Generate = () => {
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setFormData(data);
//display result
    try {
      const generatedItinerary = await generateItinerary(data);
      setItinerary(generatedItinerary);//store the result
    } catch (err) {
      setError("Failed to generate itinerary. Please try again.");
      console.error("Generation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) {
      setError("Please login to save itineraries");
      return;
    }

    try {
      setLoading(true);
      await saveItinerary(user.uid, {   // optional save to database 
        itinerary,
        destination: formData.destination,
        duration: formData.duration,
        budget: formData.budget,
        travelStyle: formData.travelStyle,
      });
      navigate("/saved");
    } catch (error) {
      console.error("Save error:", error);
      setError("Failed to save itinerary: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Generate Itinerary
      </h1>
      <TravelForm onSubmit={handleSubmit} />

      {loading && (
        <div className="text-center mt-8">
          <p>Processing...</p>
        </div>
      )}

      {error && (
        <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {itinerary && !loading && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
          <pre className="whitespace-pre-wrap">{itinerary}</pre>
          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Itinerary"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Generate;
