const API_KEY = "e78722c5341e4478e31b488139e2acbd"

const endpoints = {
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetflicOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated&api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?&api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?&api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?&api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `/discover/movie?&api_key=${API_KEY}&with_genres=10749`,
  getDocumentariesMovies: `/discover/movie?&api_key=${API_KEY}&with_genres=99`,
}

export default endpoints
