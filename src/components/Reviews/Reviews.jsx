import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { List, Item, Author, NoReviews } from './Reviews.styled';
import { getMovieReviews } from '../../moviesAPI';
import { Error } from '../Error/Error';
import { scroll, scrollOptions } from '../../Scroll';

const Reveiws = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReveiws = async () => {
      try {
        const allReveiws = await getMovieReviews(movieId);

        const deliveredReviews = allReveiws.results.map(
          ({ id, author, content, created_at }) => {
            return { id, author, content, created_at };
          }
        );
        setReviews(deliveredReviews);
      } catch {
        setError("Movies doesn't respond, or check your internet connection!");
      }
    };
    getReveiws();
  }, [movieId]);

  useEffect(() => {
    scroll.scrollToBottom(scrollOptions);
  }, []);

  return (
    <>
      {error && <Error>{error}</Error>}
      <List>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content, created_at }) => {
            const date = new Date(created_at);
            return (
              <Item key={id}>
                <Author>
                  <b>Author: </b>
                  {author} ({date.toLocaleDateString()})
                </Author>
                <p>{content}</p>
              </Item>
            );
          })
        ) : (
          <NoReviews>Files with reviews of this film are empty!</NoReviews>
        )}
      </List>
    </>
  );
};

export default Reveiws;
