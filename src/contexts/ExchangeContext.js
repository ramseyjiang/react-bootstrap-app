import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useReducer
} from "react";
import {
  initState,
  exchangeReducer,
  GET_LATEST_SUCCESS,
  GET_LATEST_FAILURE
} from "../services/ExchangeReducer";

import { get } from "../components/common/utils/Request";

const ExchangeContext = createContext();

const ExchangeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(exchangeReducer, initState);
  const EXCHANGE_API_URL = "https://api.exchangeratesapi.io/";

  const getLatestExchangeRate = useCallback(() => {
    get(EXCHANGE_API_URL + "latest?base=USD").then(result => {
      try {
        dispatch({ type: GET_LATEST_SUCCESS, data: result });
      } catch {
        dispatch({ type: GET_LATEST_FAILURE, data: result });
      }
    });
  }, []);

  const exchangeApi = useMemo(() => ({ state, getLatestExchangeRate }), [
    state,
    getLatestExchangeRate
  ]);

  return (
    <ExchangeContext.Provider value={{ exchangeApi }}>
      {children}
    </ExchangeContext.Provider>
  );
};

export const useExchangeContext = () => {
  return useContext(ExchangeContext);
};

export default ExchangeContextProvider;
