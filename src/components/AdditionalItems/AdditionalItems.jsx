import PropTypes from 'prop-types';
import { StyledLink, List, Heading, Item } from './Additionalitems.styled';

export const AdditionalItems = ({ location }) => {
  return (
    <div>
      <hr />
      <Heading>Additional information</Heading>
      <List>
        <Item>
          <StyledLink to="cast" state={{ from: location }}>
            Cast
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews" state={{ from: location }}>
            Review
          </StyledLink>
        </Item>
      </List>
      <hr />
    </div>
  );
};

AdditionalItems.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
};
