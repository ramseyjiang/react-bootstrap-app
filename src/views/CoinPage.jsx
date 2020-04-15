import React from "react";

import ExchangeContextProvider from "../contexts/ExchangeContext";
import CurrentExchangeRate from '../components/exchange/CurrentExchangeRate';

import CoinContextProvider from "../contexts/CoinContext";
import CurrentPrice from "../components/coins/CurrentPrice";

const CoinPage = () => {
  return (
    <>
      <CoinContextProvider>
        <CurrentPrice />
      </CoinContextProvider>
      <ExchangeContextProvider>
        <CurrentExchangeRate />
      </ExchangeContextProvider>
    </>
  );
};

export default CoinPage;