import React from "react";
import PropTypes from "prop-types";

const ItineraryDisplay = ({ itinerary }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Assuming itinerary content goes here */}
    </div>
  );
};

ItineraryDisplay.propTypes = {
  itinerary: PropTypes.string.isRequired,
};

export default ItineraryDisplay;
