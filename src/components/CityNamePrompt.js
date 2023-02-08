import React, { useState } from "react";
import "./CityNamePrompt.css";

const CityNamePrompt = ({ description, cityName, updateCity }) => {
  const [formData, setFormData] = useState("");

  const handleCityChange = (event) => {
    const fieldValue = event.target.value;
    setFormData(fieldValue);
  };

  const submitNewCityName = (event) => {
    event.preventDefault();
    updateCity(formData);
  };

  return (
    <section className="city-form--inline">
      <p>It was a(n) {description} day in </p>
      <form className="city-form--inline" onSubmit={submitNewCityName}>
        <div>
          <input
            type="text"
            placeholder={cityName}
            name="newCityName"
            value={formData}
            onChange={handleCityChange}
          ></input>
        </div>
        <div>
          <input type="submit" value="Update City"></input>
        </div>
      </form>
    </section>
  );
};

export default CityNamePrompt;
