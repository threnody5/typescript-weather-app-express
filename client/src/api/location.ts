import axios from 'axios';

/**
 * Function using axios to retrieve the longitude and latitude from openweathermap api.
 * @param city Name of the city to retrieve, provided by the user.
 * @param country Name of the country to retrieve, provided by the user.
 * @returns
 * If the entered information is valid, returns the longitude and latitude coordinates for that city.
 * Otherwise, returns a console log of the error in the catch.
 */
const findLocation = async (
  city: string,
  country: string,
  weatherAPI: string
) => {
  const VITE_FIND_LOCATION_BASE = import.meta.env.VITE_FIND_LOCATION_BASE;
  const VITE_ID_NAME = import.meta.env.VITE_ID_NAME;
  return await axios
    .get(
      `${VITE_FIND_LOCATION_BASE}${city},${country}&${VITE_ID_NAME}${weatherAPI}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
};

export { findLocation };
