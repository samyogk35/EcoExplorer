import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    if (name === "noOfDays" && value > 5) {
      alert("You can only plan for 5 days");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGenerateTrip = () => {
    if (
      formData?.location &&
      !formData?.noOfDays &&
      !formData?.budget &&
      !formData?.traveller
    ) {
      toast("Please fill all the fields");
      return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{noOfDays}", formData?.noOfDays)
      .replace("{traveller}", formData?.traveller)
      .replace("{budget}", formData?.budget);
    console.log(FINAL_PROMPT);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preference</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="font-medium text-xl">Where are you going?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="font-medium text-xl">How many days?</h2>
          <input
            placeholder="Ex. 3"
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
        <div>
          <h2 className="font-medium text-xl">What is your Budget?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg 
                hover:shadow 
                ${
                  formData?.budget === item.title
                    ? "border-[#6ec56b] shadow-lg"
                    : ""
                }`}
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
                <h2>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-medium text-xl">Who are you travelling with?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveller", item.people)}
                className={`p-4 border cursor-pointer rounded-lg 
                  hover:shadow 
                  ${
                    formData?.traveller === item.people
                      ? "border-[#6ec56b] shadow-lg"
                      : ""
                  }`}
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
                <h2>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#6ec56b] text-white align-middle my-20 flex py-3 px-6 rounded-lg">
        <button onClick={OnGenerateTrip}>GENERATE TRIP</button>
      </div>
    </div>
  );
}

export default CreateTrip;
