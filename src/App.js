import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CityNamePrompt from "./components/CityNamePrompt";
import AddLineForm from "./components/AddLineForm";
import DisplayLines from "./components/DisplayLines";

const kBaseUrl = "http://127.0.0.1:5000";
const kDefaultLocation = "Seattle";
const kDefaultDescription = "Loading...";

const getLatLon = (locationName) => {
  return axios
    .get(`${kBaseUrl}/location`, {
      params: {
        q: locationName,
      },
    })
    .then((response) => {
      const firstResult = response.data[0];
      const lat = parseFloat(firstResult.lat);
      const lon = parseFloat(firstResult.lon);

      return { lat, lon };
    });
};

const getWeatherDescription = (lat, lon) => {
  return axios
    .get(`${kBaseUrl}/weather`, {
      params: {
        lat: lat,
        lon: lon,
      },
    })
    .then((response) => {
      const description = response.data.weather[0].description;
      return description;
    });
};

function App() {
  const [location, setLocation] = useState(kDefaultLocation);
  const [description, setDescription] = useState(kDefaultDescription);
  const [textLines, setTextLines] = useState([]);
  const [isShowingAllLines, setIsShowingAllLines] = useState(false);

  // Use useEffect to get the weather description for location
  useEffect(() => {
    getLatLon(location).then((response) => {
      getWeatherDescription(response.lat, response.lon).then((description) => {
        setDescription(description);
      });
    });
  }, [location]);

  const addNewLine = (newLineData) => {
    const newLine = `The ${newLineData.adjective} ${newLineData.noun} ${newLineData.adverb} ${newLineData.verb}.`;
    const newLines = [...textLines, newLine];
    setTextLines(newLines);
  };

  const toggleShowAllLines = () => {
    setIsShowingAllLines(!isShowingAllLines);
  };

  return (
    <div className="App">
      <header>
        <h1>Exquisite Weather Prompt</h1>
        <CityNamePrompt
          description={description}
          cityName={location}
          updateCity={setLocation}
        />
      </header>
      <main>
        {textLines.length > 0 && (
          <DisplayLines
            lineData={textLines}
            showAllLines={isShowingAllLines}
            toggleShowAllLines={toggleShowAllLines}
          />
        )}
        {!isShowingAllLines && <AddLineForm onNewLineReady={addNewLine} />}
      </main>
    </div>
  );
}

export default App;
