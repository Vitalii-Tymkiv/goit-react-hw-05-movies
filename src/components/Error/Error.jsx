import { Message } from './Error.styled';
import PropTypes from 'prop-types';

export const Error = ({ children }) => {
  return <Message>{children}</Message>;
};

Error.propTypes = {
  childern: PropTypes.string.isRequired,
};
