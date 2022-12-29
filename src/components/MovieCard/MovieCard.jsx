import PropTypes from 'prop-types';
import {
  Container,
  ProdYear,
  Genres,
  GenresList,
  Image,
  Info,
  InfoTitle,
  MovieTitle,
  Rating,
} from './MovieCard.styled';

export const MovieCard = ({ poster, title, vote, overview, year, genres }) => {
  const getYear = () => new Date(year).getFullYear();
  return (
    <Container>
      <Image src={`https://image.tmdb.org/t/p/w400${poster}`} alt={title} />
      <div>
        <MovieTitle>{title}</MovieTitle>
        <ProdYear>({getYear()})</ProdYear>
        <InfoTitle>User rating:</InfoTitle>
        <Rating>{vote}</Rating>
        <InfoTitle>Overview</InfoTitle>
        {overview && <Info>{overview}</Info>}
        <InfoTitle>Genres</InfoTitle>
        <GenresList>
          {genres.map(genre => {
            return <Genres key={genre.name}>{genre.name}</Genres>;
          })}
        </GenresList>
      </div>
    </Container>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
