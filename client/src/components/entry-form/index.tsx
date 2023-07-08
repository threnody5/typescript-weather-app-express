import { useState } from 'react';
import * as APICall from './../../api';
import OutputData from '../output-data';
import Card from '../card';
import Spinner from '../spinner';
import { IWeatherData } from '../../variables/interfaces';
import './styles.scss';

/**
 * Component that allows the user to select the city and country of the weather they would like to view.
 * @returns
 * If all checks are successful, makes a call to openweathermap api to find the latitude and longitude of the selected city and country.
 * If the call succeeds, then makes a call to openweathermap api to find the current weather at that location.
 * If the call fails, then informs the user of the error, asking them to try again.
 */
const EntryForm = () => {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [weather, setWeather] = useState<IWeatherData>();
  const [errorMessages, setErrorMessages] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const findLocationHandler = () => {
    setErrorMessages('');
    setIsLoading(true);
    setWeather(undefined);

    if (city === '') {
      setErrorMessages('Please provide a city name.');
      setIsLoading(false);
      return;
    }

    if (country.length < 2) {
      setErrorMessages(
        'Please provide the country code. e.g. CA for Canada, US for United States.'
      );
      setIsLoading(false);
      return;
    }

    (async () => {
      try {
        const weatherAPI = await APICall.weatherAPI();
        const location = await APICall.findLocation(city, country, weatherAPI);
        const weather = await APICall.findWeather(
          location[0]?.lat,
          location[0]?.lon,
          weatherAPI
        );

        if (weather?.weather) {
          setWeather(weather);
        }
      } catch (err: unknown) {
        switch (err as string) {
          case '400':
            setErrorMessages(
              'Unable to find city. Please check the city spelling, verify the country code, and try again.'
            );
            break;
          default:
            setErrorMessages('An error has occurred, please try again.');
        }
      }
      setIsLoading(false);
    })();
  };

  return (
    <Card>
      <Spinner
        show={isLoading}
        text='Loading...'
      />
      <main>
        <div className='grid-container'>
          <div className='entry-form-container'>
            <div>
              <label>
                City:
                <input
                  type='text'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Country Code:
                <input
                  type='text'
                  value={country}
                  maxLength={2}
                  onChange={(e) => setCountry(e.target.value)}
                  title='e.g. CA for Canada, US for United States.'
                />
              </label>
            </div>
            <div>
              <button onClick={findLocationHandler}>Find City</button>
            </div>
            <div className='error-container'>{errorMessages}</div>
          </div>
          <div className='weather-output-data-container'>
            {weather?.name && <OutputData weatherData={weather} />}
          </div>
        </div>
      </main>
    </Card>
  );
};

export default EntryForm;
