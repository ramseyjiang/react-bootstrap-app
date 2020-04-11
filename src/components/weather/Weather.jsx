import React, {useEffect} from "react";
import { useWeatherContext } from "../../contexts/WeatherContext";
import RenderLoading from '../common/utils/RenderLoading';
import { Alert } from "react-bootstrap";


const Weather = () => {
  const { weatherApi } = useWeatherContext();
  useEffect(() => {
    weatherApi.getWeather(); 
  }, []);

  return (
    <>
      {!weatherApi.state.data ? 
      (<RenderLoading />) : 
      (<Alert className="justify-content-center weather-bar" variant='info'>
        Welcome, current weather is {weatherApi.state.data.weather[0].main}, temperature is {Math.round(((weatherApi.state.data.main.temp * 9/5 - 459.67) - 32)*5/9)}°C, conditions: {weatherApi.state.data.weather[0].description}
      </Alert>)}
    </>
  );
}

export default Weather;