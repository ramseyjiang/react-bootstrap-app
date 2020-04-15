import React from "react";
import Weather from '../components/weather/Weather';
import WeatherContextProvider from "../contexts/WeatherContext";

import ShowProfile from '../components/profile/ShowProfile';
import ProfileContextProvider from "../contexts/ProfileContext"

const HomePage = () => {
  return (
    <>
      <WeatherContextProvider>
        <Weather />
      </WeatherContextProvider>
      <ProfileContextProvider>
        <ShowProfile />
      </ProfileContextProvider>
    </>
  );
};

export default HomePage;