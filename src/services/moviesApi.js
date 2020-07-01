import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = '0519155fd53be4ff5ad8e64316027387';

const fetchTrendingMovies = () => {
  return axios(`/trending/movie/day?api_key=${apiKey}`).then(
    response => response.data.results,
  );
};

const fetchMovieDetails = id => {
  return axios(`/movie/${id}?api_key=${apiKey}`).then(
    response => response.data,
  );
};

const fetchMovieCast = id => {
  return axios(`/movie/${id}/credits?api_key=${apiKey}`).then(
    response => response.data.cast,
  );
};

const fetchMovieReviews = id => {
  return axios(`/movie/${id}/reviews?api_key=${apiKey}`).then(
    response => response.data.results,
  );
};

const fetchMoviesWithQuery = searchQuery => {
  return axios(`/search/movie?api_key=${apiKey}&query=${searchQuery}`).then(
    response => response.data.results,
  );
};

export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMoviesWithQuery,
};
