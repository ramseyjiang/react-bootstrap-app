import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useReducer
} from "react";
import {
  initState,
  weatherReducer,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from "../services/WeatherReducer";
import { get } from "../components/common/utils/Request";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initState);

  const IP_API_URL = "http://ip-api.com/json";
  const WEATHER_API_URL =
    "https://api.openweathermap.org/data/2.5/weather?APPID=3a58f9dd1f1515ec0dba25894ccea202&q=";

  const getWeather = useCallback(() => {
    get(IP_API_URL).then(res => {
      let location = res.city + "," + res.countryCode;
      get(WEATHER_API_URL + location).then(result => {
        try {
          dispatch({ type: GET_WEATHER_SUCCESS, data: result });
        } catch {
          dispatch({ type: GET_WEATHER_FAILURE, data: result });
        }
      });
    });
  }, [IP_API_URL]);

  const weatherApi = useMemo(() => ({ state, getWeather }), [
    state,
    getWeather
  ]);

  return (
    <WeatherContext.Provider value={{ weatherApi }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export default WeatherContextProvider;
