import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageHeading } from '../components/PageHeading/PageHeading';
import { getMoviesInTrend } from '../moviesAPI';
import { Error } from '../components/Error/Error';
import { Spinner } from '../components/Spinner/Spinner';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
// import { scroll, scrollOptions } from '../Scroll';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setError(null);

    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesInTrend();
        const deliveredMovies = data.results.map(({ id, original_title }) => {
          return { id, original_title };
        });
        setMovies(deliveredMovies);
      } catch {
        setError("Movies doesn't respond, or check your internet connection!");
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  // useEffect(() => {
  //   scroll.scrollToBottom(scrollOptions);
  // }, []);

  return (
    <main>
      {isLoading && <Spinner />}
      <PageHeading text="Trending today" />
      {movies.length > 0 && (
        <TrendingMoviesList movies={movies} prevLocation={location} />
      )}
      {error && <Error>{error}</Error>}
    </main>
  );
};

export default Home;
