import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false); // Reset loading state if it gets stuck
  }, []); // Empty dependency array

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-black py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create your perfect travel itinerary
            </h1>
            <p className="text-xl mb-8 text-green-100">
              incorporating traditional travel planning with integrated
              artificial intelligence and eco-friendly recommendations
            </p>
            {isLoading ? (
              <div>Processing...</div>
            ) : (
              <>
                {user ? (
                  <Link
                    to="/generate"
                    className="btn-primary bg-black text-black-600 hover:bg-black-50"
                  >
                    Create New Itinerary
                  </Link>
                ) : (
                  <div className="space-x-4">
                    <Link
                      to="/login"
                      className="w-full flex justify-center py-8 px-8 rounded-md shadow-md text-sm font-medium text-green-700 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="AI-Powered Planning"
            description="Get intelligent suggestions based on your preferences and budget"
            icon="🤖"
          />
          <FeatureCard
            title="Save & Share"
            description="Keep track of your favorite itineraries and share with friends"
            icon="💾"
          />
          <FeatureCard
            title="Carbon emmision"
            description="Know the carbon emmision of your trip and get recommendations to reduce it"
            icon="🌍"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => (
  <div className="card hover:shadow-md transition-shadow duration-200">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
