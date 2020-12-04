export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

export const getMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
}