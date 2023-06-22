import axios from 'axios';

/**
 * Function using axios to retrieve the weather data from openweathermap api.
 * @param lat Latitude for the selected city retrieved by the findLocation function.
 * @param lon Longitude for the selected city retrieved by the findLocation function.
 * @returns
 * If the latitude and longitude are correct, retrieves the current weather data from openweathermap in metric format.
 * If the latitude and longitude are incorrect, returns the error in a console log, and
 */
const findWeather = async (lat: number, lon: number, weatherAPI: string) => {
  const VITE_FIND_WEATHER_BASE = import.meta.env.VITE_FIND_WEATHER_BASE;
  const VITE_ID_NAME = import.meta.env.VITE_ID_NAME;
  const VITE_MEASUREMENT_UNITS = import.meta.env.VITE_MEASUREMENT_UNITS;
  return await axios
    .get(
      `${VITE_FIND_WEATHER_BASE}?lat=${lat}&lon=${lon}&${VITE_ID_NAME}${weatherAPI}&${VITE_MEASUREMENT_UNITS}`
    )
    .then((response) => {
      const weatherData = response.data;
      return weatherData;
    })
    .catch((err) => {
      console.error('Error: ', err);
      throw err.response.data.cod;
    });
};

export { findWeather };
