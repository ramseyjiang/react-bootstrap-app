import React from "react";
import Weather from '../components/weather/Weather';
import WeatherContextProvider from "../contexts/WeatherContext";
import ExchangeContextProvider from "../contexts/ExchangeContext";
import CurrentExchangeRate from '../components/exchange/CurrentExchangeRate';

const HomePage = () => {
  return (
    <>
      <WeatherContextProvider>
        <Weather />
      </WeatherContextProvider>
      <ExchangeContextProvider>
        <CurrentExchangeRate />
      </ExchangeContextProvider>
    </>
  );
};

export default HomePage;