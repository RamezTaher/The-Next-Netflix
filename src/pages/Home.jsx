import React from "react"
import MoviesRow from "../components/MoviesRow"
import endpoints from "../constants/endpoints"

const Home = () => {
  return (
    <>
      Home
      <MoviesRow title={"ramez"} endpoint={endpoints.getNetflixOriginals} />
    </>
  )
}

export default Home
