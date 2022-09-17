import React from "react"
import MoviesRow from "../components/MoviesRow"
import endpoints from "../constants/endpoints"

const Home = () => {
  return (
    <div className="container sm:mx-auto px-4">
      <MoviesRow
        title="Netflix Originals"
        endpoint={endpoints.getNetflixOriginals}
      />
      <MoviesRow title="Trending Now" endpoint={endpoints.getTrending} />

      <MoviesRow title="Action Movies" endpoint={endpoints.getActionMovies} />
      <MoviesRow title="Comedy Movies" endpoint={endpoints.getComedyMovies} />
      <MoviesRow title="Horror Movies" endpoint={endpoints.getHorrorMovies} />
      <MoviesRow title="Romance Movies" endpoint={endpoints.getRomanceMovies} />
      <MoviesRow
        title="Documentaries"
        endpoint={endpoints.getDocumentariesMovies}
      />
    </div>
  )
}

export default Home
