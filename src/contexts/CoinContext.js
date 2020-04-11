import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useReducer,
} from "react";
import {
  initState,
  coinReducer,
  LOADING,
  GET_COIN_SUCCESS,
  GET_COIN_FAILURE,
} from "../services/CoinReducer";
import { get } from "../components/common/utils/Request";

const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coinReducer, initState);

  const COIN_API_URL =
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD";

  const loading = useCallback(() => dispatch({ type: LOADING }), []);

  const getCoins = useCallback(() => {
    get(COIN_API_URL).then((result) => {
      try {
        dispatch({ type: GET_COIN_SUCCESS, data: result });
      } catch {
        dispatch({ type: GET_COIN_FAILURE, data: result });
      }
    });
  }, [COIN_API_URL]);

  const coinsApi = useMemo(() => ({ state, getCoins, loading }), [
    state,
    getCoins,
    loading,
  ]);

  return (
    <CoinContext.Provider value={{ coinsApi }}>{children}</CoinContext.Provider>
  );
};

export const useCoinContext = () => {
  return useContext(CoinContext);
};

export default CoinContextProvider;
