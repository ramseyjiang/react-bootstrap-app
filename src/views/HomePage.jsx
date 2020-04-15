import React from "react";
import Weather from '../components/weather/Weather';
import WeatherContextProvider from "../contexts/WeatherContext";

import ShowProfile from '../components/profile/ShowProfile';
import TimeLine from '../components/profile/Timeline';
import ProfileContextProvider from "../contexts/ProfileContext"


const HomePage = () => {
  return (
    <>
      <WeatherContextProvider>
        <Weather />
      </WeatherContextProvider>
      <ProfileContextProvider>
        <TimeLine />
        <ShowProfile /> 
      </ProfileContextProvider>
    </>
  );
};

export default HomePage;