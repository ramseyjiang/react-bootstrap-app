import React from "react";
import Weather from '../components/weather/Weather';
import WeatherContextProvider from "../contexts/WeatherContext";

const HomePage = () => {
  return (
    <>
      <WeatherContextProvider>
        <Weather />
      </WeatherContextProvider>
    </>
  );
};

export default HomePage;