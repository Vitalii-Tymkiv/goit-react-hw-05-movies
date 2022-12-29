import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from '../Error/Error';
import { List, ListItem, Image, Info } from './Cast.styled';
import { getMoviesCredit } from 'moviesAPI';
import brokenPhoto from '../../images/broken_img.png';
import { scroll, scrollOptions } from '../../Scroll';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const info = await getMoviesCredit(movieId);

        const deliveredInfo = info.cast.map(
          ({ id, name, character, profile_path }) => {
            return { id, name, character, profile_path };
          }
        );
        setActors(deliveredInfo);
      } catch {
        setError("Movies doesn't respond, or check your internet connection!");
      }
    };
    getInfo();
  }, [movieId]);

  useEffect(() => {
    scroll.scrollToBottom(scrollOptions);
  }, []);

  return (
    <>
      {error && <Error>{error}</Error>}
      {actors ? (
        <List>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <ListItem key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : brokenPhoto
                  }
                  alt={name}
                />
                <Info>
                  <p>{name}</p>
                  <p>
                    <b>Character:</b>
                    {character}
                  </p>
                </Info>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>Files about actors of this film are empty!</p>
      )}
    </>
  );
};

export default Cast;
