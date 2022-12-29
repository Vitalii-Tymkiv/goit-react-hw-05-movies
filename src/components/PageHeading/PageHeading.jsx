import PropTypes from 'prop-types';
import { PageTitle } from './PageHeading.styled';

export const PageHeading = ({ text }) => {
  return <PageTitle>{text}</PageTitle>;
};

PageHeading.propTypes = { text: PropTypes.string.isRequired };
