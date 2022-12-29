import PropTypes from 'prop-types';
import { MdLocalMovies } from 'react-icons/md';
import { List, StyledLink } from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ movies, prevLocation }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: prevLocation }}>
              <MdLocalMovies size={28}></MdLocalMovies> {original_title}
            </StyledLink>
          </li>
        );
      })}
    </List>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
  prevLocation: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
};
