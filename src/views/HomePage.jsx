import React from "react";
import Weather from '../components/weather/Weather';
import WeatherContextProvider from "../contexts/WeatherContext";

import ExchangeContextProvider from "../contexts/ExchangeContext";
import CurrentExchangeRate from '../components/exchange/CurrentExchangeRate';

import CoinContextProvider from "../contexts/CoinContext";
import CurrentPrice from "../components/coins/CurrentPrice";

const HomePage = () => {
  return (
    <>
      <WeatherContextProvider>
        <Weather />
      </WeatherContextProvider>
      <CoinContextProvider>
        <CurrentPrice />
      </CoinContextProvider>
      <ExchangeContextProvider>
        <CurrentExchangeRate />
      </ExchangeContextProvider>
    </>
  );
};

export default HomePage;