import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../moviesAPI';
import { Error } from '../components/Error/Error';
import { Spinner } from '../components/Spinner/Spinner';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { AdditionalItems } from 'components/AdditionalItems/AdditionalItems';
import { BackArrowLink } from '../components/BackArrowLink/BackArrowLink';
import { scroll, scrollOptions } from '../Scroll';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setError(null);

    const getMovieInfo = async () => {
      try {
        const {
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
          genres,
        } = await getMovieDetails(movieId);

        const deliveredMovieInfo = {
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
          genres,
        };
        setMovie(deliveredMovieInfo);
      } catch {
        setError("Movies doesn't respond, or check your internet connection!");
      }
    };
    getMovieInfo();
  }, [movieId]);

  useEffect(() => {
    scroll.scrollToBottom(scrollOptions);
  }, []);

  if (!movie) {
    return;
  }

  return (
    <main>
      {error && <Error>{error}</Error>}
      <BackArrowLink to={backLinkHref}>Go back</BackArrowLink>
      {movie !== {} && (
        <MovieCard
          poster={movie.poster_path}
          title={movie.original_title}
          vote={movie.vote_average}
          overview={movie.overview}
          year={movie.release_date}
          genres={movie.genres}
        ></MovieCard>
      )}

      <AdditionalItems location={backLinkHref} />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
