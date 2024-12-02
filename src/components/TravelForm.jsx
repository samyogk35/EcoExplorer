import React, { useState } from "react";
import PropTypes from "prop-types";

const TravelForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    budget: "",
    travelStyle: "balanced",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Where do you want to go?
          </label>
          <input
            type="text"
            value={formData.destination}
            onChange={(e) =>
              setFormData({ ...formData, destination: e.target.value })
            }
            className="input-field"
            placeholder="e.g., Paris, France"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many days?
          </label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="input-field"
            placeholder="Number of days"
            required
            min="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's your budget? (USD)
          </label>
          <input
            type="number"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="input-field"
            placeholder="Your budget in USD"
            required
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Travel Style
          </label>
          <select
            value={formData.travelStyle}
            onChange={(e) =>
              setFormData({ ...formData, travelStyle: e.target.value })
            }
            className="input-field"
          >
            <option value="budget">Budget</option>
            <option value="balanced">Balanced</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Generate Itinerary
        </button>
      </form>
    </div>
  );
};

TravelForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TravelForm;
