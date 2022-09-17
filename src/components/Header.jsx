import React, { useState } from "react"
import { useEffect } from "react"
import fetcher from "../api/axios"
import endpoints from "../constants/endpoints"

const imageBaseUrl = "https://image.tmdb.org/t/p/original/"
const Header = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetcher.get(endpoints.getNetflixOriginals)
      const data = await res.data
      setMovie(data.results[Math.floor(Math.random() * data.results.length)])
      return data
    }
    getMovies()
  }, [])
  console.log(movie)
  return (
    <header className="bg-gray">
      <div className="container sm:mx-auto px-4">header</div>
    </header>
  )
}

export default Header
