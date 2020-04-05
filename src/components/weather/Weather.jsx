import React, {useEffect} from "react";
import { Alert } from "react-bootstrap";
import { useWeatherContext } from "../../contexts/WeatherContext";

const Weather = () => {
  const { weatherApi } = useWeatherContext();
  useEffect(() => {
    weatherApi.getWeather(); 
  }, []);

  return (
    <>
      {weatherApi.state.data && <Alert className="justify-content-center weather-bar" variant='info'>
        Welcome, current weather is {weatherApi.state.data.weather[0].main}, temperature is {Math.round(((weatherApi.state.data.main.temp * 9/5 - 459.67) - 32)*5/9)}°C, conditions: {weatherApi.state.data.weather[0].description}
      </Alert>}
    </>
  );
}

export default Weather;