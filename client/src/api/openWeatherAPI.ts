import axios from 'axios';

/**
 * Makes an asynchronous call to a weather API endpoint and returns the response data if successful.
 * @returns {Promise<string>} A Promise that resolves with the weather data returned from the API, or rejects with an error.
 */
const weatherAPI = async (): Promise<string> => {
  const VITE_WEATHER_API = import.meta.env.VITE_WEATHER_API;
  // Axios GET request to weather API endpoint
  return await axios
    .get(VITE_WEATHER_API)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

export { weatherAPI };
