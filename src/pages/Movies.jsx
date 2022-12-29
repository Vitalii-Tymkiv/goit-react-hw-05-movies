import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Error } from '../components/Error/Error';
import { TrendingMoviesList } from '../components/TrendingMoviesList/TrendingMoviesList';
import { Spinner } from '../components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { searchMovie } from '../moviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    setError(null);

    if (movieName === '') {
      return;
    }

    const getMovie = async () => {
      try {
        setIsLoading(true);
        const movies = await searchMovie(movieName);

        const deliveredMovies = movies.results.map(({ id, original_title }) => {
          return { id, original_title };
        });

        setMovies(deliveredMovies);

        if (movies.total_results === 0) {
          setError('Enter correct query!');
        }
      } catch {
        setError("Movies doesn't respond, or check your internet connection!");
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieName]);

  const handleSearch = e => {
    e.preventDefault();

    const movieSearch = e.target.search.value;
    if (movieSearch.trim() === '') {
      return toast.error('Searchbar is empty! Enter film name!', {
        duration: 2000,
        style: {
          border: '1px solid #3f51b5',
          padding: '16px',
          color: '#3f51b5',
          width: '400px',
        },
      });
    }

    setSearchParams({ query: movieSearch.toLowerCase() });
    e.currentTarget.reset();
  };

  return (
    <main>
      <PageHeading text="Find your movie" />
      <SearchBox onSubmit={handleSearch} />
      {error && <Error>{error}</Error>}
      {isLoading && <Spinner />}
      {movies.length > 0 && (
        <TrendingMoviesList
          movies={movies}
          prevLocation={location}
        ></TrendingMoviesList>
      )}
    </main>
  );
};

export default Movies;
