import { IWeatherDataOutput } from './../../variables/interfaces';
import WeatherIcons from '../weather-icons';
import './styles.scss';

/**
 * Function that renders the weather data for the user.
 * @param object The weatherData prop that is used for displaying the information.
 * @returns
 * Temp, min temp, max temp, feels like, and humidity level for the selected city.
 */
const OutputData = ({ weatherData }: IWeatherDataOutput) => {
  return (
    <main className='output-data-container'>
      <div className='output-data-description'>
        {weatherData?.weather[0].description.toUpperCase()}
      </div>
      <WeatherIcons weatherData={weatherData} />
      <div className='output-data-values'>
        <div>
          Temperature: <span> {weatherData?.main.temp.toFixed(1)}&deg;C</span>
        </div>
        <div>
          Minimum Temperature: {weatherData?.main.temp_min.toFixed(1)}&deg;C
        </div>
        <div>
          Maximum Temperature: {weatherData?.main.temp_max.toFixed(1)}&deg;C
        </div>
        <div>Feels Like: {weatherData?.main.feels_like.toFixed(1)}&deg;C</div>
        <div>Humidity: {weatherData?.main.humidity}%</div>
      </div>
    </main>
  );
};

export default OutputData;
