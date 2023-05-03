import { ReactNode } from 'react';

/**
 * Defines the structure of an object containing weather data.
 * The object must contain properties for the location name, main temperature details,
 * sunrise and sunset times, and an array of weather descriptions.
 * @interface
 * @property {string} name - The name of the location for which the weather data pertains.
 * @property {Object} main - An object containing the main temperature details for the location.
 * @property {number} main.temp - The current temperature in degrees Celsius.
 * @property {number} main.temp_min - The minimum temperature in degrees Celsius.
 * @property {number} main.temp_max - The maximum temperature in degrees Celsius.
 * @property {number} main.feels_like - The "feels like" temperature in degrees Celsius.
 * @property {number} main.humidity - The humidity percentage.
 * @property {Object} sys - An object containing sunrise and sunset times for the location.
 * @property {number} sys.sunRise - The UNIX timestamp of the sunrise time.
 * @property {number} sys.sunSet - The UNIX timestamp of the sunset time.
 * @property {Array} weather - An array of objects containing weather descriptions for the location.
 * @property {string} weather[].description - A brief description of the current weather.
 * @property {string} weather[].main - The main weather category (e.g. "Clear", "Rain", "Clouds", etc.).
 */
interface IWeatherData {
  /** The name of the location for which the weather data pertains. */
  name: string;
  /** An object containing the main temperature details for the location. */
  main: {
    /** The current temperature in degrees Celsius. */
    temp: number;
    /** The minimum temperature in degrees Celsius. */
    temp_min: number;
    /** The maximum temperature in degrees Celsius. */
    temp_max: number;
    /** The "feels like" temperature in degrees Celsius. */
    feels_like: number;
    /** The humidity percentage. */
    humidity: number;
  };
  /** An object containing sunrise and sunset times for the location. */
  sys: {
    /** The UNIX timestamp of the sunrise time. */
    sunRise: number;
    /** The UNIX timestamp of the sunset time. */
    sunSet: number;
  };
  /** An array of objects containing weather descriptions for the location. */
  weather: {
    /** A brief description of the current weather. */
    description: string;
    /** The main weather category (e.g. "Clear", "Rain", "Clouds", etc.). */
    main: string;
  }[];
}

/**
 * Defines the structure of an object that contains weather data output.
 * The object must contain a property for an instance of the IWeatherData interface.
 * @interface
 * @property {IWeatherData} weatherData - An instance of the IWeatherData interface containing weather data.
 */
interface IWeatherDataOutput {
  /** An instance of the `IWeatherData` interface containing weather data. */
  weatherData: IWeatherData;
}

/**
 * Defines the properties that can be passed to the Spinner component.
 * The component can be configured to show or hide the spinner and display an optional text label.
 * @interface
 * @property {boolean} [show] - Determines whether the spinner should be displayed or hidden.
 * @property {string} [text] - An optional text label to display alongside the spinner.
 */
interface ISpinnerProps {
  /** Determines whether the spinner should be displayed or hidden. */
  show?: boolean;
  /** An optional text label to display alongside the spinner.  */
  text?: string;
}

/**
 * Defines the expected shape of an object used to render a weather icon.
 * The object should contain an optional property for weather data, which itself should be an object
 * with an array of objects containing a main property representing the weather category.
 * @interface
 * @property {Object} [weatherData] - An optional object containing an array of weather objects.
 * @property {Array} [weatherData.weather] - An array of objects containing a main property representing the weather category.
 * @property {string} weatherData.weather[].main - The main weather category (e.g. "Clear", "Rain", "Clouds", etc.).
 */
interface IWeatherIcon {
  /** An optional object containing an array of weather objects. */
  weatherData?: {
    /** An array of objects containing a main property representing the weather category. */
    weather: {
      /** The main weather category (e.g. "Clear", "Rain", "Clouds", etc.). */
      main: string;
    }[];
  };
}

/**
 * Defines the props for a wrapper component that can contain any React nodes as its children.
 * @interface
 * @property {ReactNode} children - The child nodes to be wrapped by this component.
 */
interface IWrapperProps {
  /** The child nodes to be wrapped by this component. */
  children: ReactNode;
}

export type {
  IWeatherData,
  IWeatherDataOutput,
  ISpinnerProps,
  IWeatherIcon,
  IWrapperProps,
};
