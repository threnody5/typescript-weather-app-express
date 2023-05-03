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
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`
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
