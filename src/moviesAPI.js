import axios from 'axios';

const API_KEY = 'd210a4e5fa71331bdd85136700dad179';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const axParams = {
  params: {
    language: 'en-US',
  },
};

export const getMoviesInTrend = async () => {
  const axUrl = `trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios.get(axUrl);
  return data;
};

export const searchMovie = async searchQuery => {
  const axUrl = `search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`;
  const { data } = await axios.get(axUrl, axParams);
  return data;
};

export const getMovieDetails = async movieId => {
  const axUrl = `movie/${movieId}?api_key=${API_KEY}`;
  const { data } = await axios.get(axUrl, axParams);
  return data;
};

export const getMoviesCredit = async movieId => {
  const axUrl = `movie/${movieId}/credits?api_key=${API_KEY}`;
  const { data } = await axios.get(axUrl, axParams);
  return data;
};

export const getMovieReviews = async movieId => {
  const axUrl = `movie/${movieId}/reviews?api_key=${API_KEY}&page=1`;
  const { data } = await axios.get(axUrl, axParams);
  return data;
};
