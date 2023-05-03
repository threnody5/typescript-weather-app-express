import { WiDayCloudyHigh, WiDaySprinkle, WiDaySunny } from 'react-icons/wi';
import { IWeatherIcon } from '../../variables/interfaces';

/**
 * Renders a weather icon based on the weather data received as a prop.
 * @param object - An object container weather data, including the main weather description.
 * @returns An element that displays Icons for the weather, depending on the selected weather type.
 */
const WeatherIcons = ({ weatherData }: IWeatherIcon) => {
  const icons: { [key: string]: JSX.Element } = {
    Clouds: (
      <WiDayCloudyHigh
        size={60}
        color={'#351453'}
      />
    ),
    Rain: (
      <WiDaySprinkle
        size={60}
        color={'#351453'}
      />
    ),
    Clear: (
      <WiDaySunny
        size={60}
        color={'#351453'}
      />
    ),
  };

  const description: string | undefined = weatherData?.weather[0]?.main;

  return <div className='weather-icons'>{icons[description as string]}</div>;
};

export default WeatherIcons;
