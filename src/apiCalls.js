import { mockMovies, getMockMovie } from './mockData';

export const getMovies = () => {
  return fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  })
  .catch((error) => {
    console.warn('API failed, using mock data:', error);
    return Promise.resolve(mockMovies);
  });
};

export const getMovie = (id) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  })
  .catch((error) => {
    console.warn('API failed, using mock data:', error);
    return Promise.resolve(getMockMovie(id));
  });
};
