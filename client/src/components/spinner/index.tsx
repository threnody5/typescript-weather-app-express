import CircleLoader from 'react-spinners/CircleLoader';
import { ISpinnerProps } from '../../variables/interfaces';
import './styles.scss';

/**
 * Function to display a spinner when the application is loading.
 * @param object Text string set to loading, and show prop as a boolean to display or hide the Spinner component.
 * @returns
 * Returns a Spinning circle loader when the user clicks the "Find City" button in the EntryForm Component.
 */
const Spinner = ({ text = 'Loading...', show }: ISpinnerProps) => {
  if (!show) {
    return null;
  }

  if (!text) {
    text = 'Loading...';
  }

  return (
    <div className='loading-component'>
      <div className='content'>
        <CircleLoader
          color='#351453'
          size={150}
        />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Spinner;
