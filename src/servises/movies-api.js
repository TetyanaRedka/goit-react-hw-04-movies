import axios from 'axios';

import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  api_key: 'c8e555b792369f2cdd4fa1e59af4be3e',
  language: 'en-US',
};

// export const getGenres = async () => {
//   try {
//     const { data } = await axios.get('/genre/movie/list', { params });
//     return data.genres;
//   } catch (error) {
//     throw error;
//   }
// };

export const getTrendMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day', { params });

    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, { params });

    return data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const { data } = await axios.get('/search/movie', { params: { ...params, query: query, page: 1, include_adult: false } });

    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`, { params });

    return data.cast;
  } catch (error) {
    throw error;
  }
};

export const getReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });

    return data.results;
  } catch (error) {
    throw error;
  }
};

getMovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

searchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

getCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

getReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
