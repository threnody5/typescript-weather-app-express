import { IWrapperProps } from '../../variables/interfaces';
import './styles.scss';

/**
 * This Card component provides a wrapper around the entry-form component.
 * @param param0 The children prop is used to pass the entry-form component as a child to the Card wrapper.
 * @returns
 * A div element with the entry-form component as its child.
 */
const Card = ({ children }: IWrapperProps) => {
  return <div className='card-wrapper'>{children}</div>;
};

export default Card;
