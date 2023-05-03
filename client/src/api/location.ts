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
  return await axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${weatherAPI}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
      // throw new Error(err);
    });
};

export { findLocation };
