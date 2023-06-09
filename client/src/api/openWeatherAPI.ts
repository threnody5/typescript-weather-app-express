import axios from 'axios';

/**
 * Makes an asynchronous call to a weather API endpoint and returns the response data if successful.
 * @returns {Promise<string>} A Promise that resolves with the weather data returned from the API, or rejects with an error.
 */
const weatherAPI = async (): Promise<string> => {
  // Axios GET request to weather API endpoint
  return await axios
    .get('http://77.243.85.205:9000/weatherAPI')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

export { weatherAPI };
