import React, { useState } from "react"
import { useEffect } from "react"
import fetcher from "../api/axios"

const imageBaseUrl = "https://image.tmdb.org/t/p/original/"

const MoviesRow = ({ title, endpoint }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetcher.get(endpoint)
      const data = await res.data
      setMovies(data.results)
      return data
    }
    getMovies()
  }, [endpoint])
  return (
    <div>
      <h2>{title}</h2>
      <div className="flex gap-2 overflow-x-scroll overflow-y-hidden p-5 scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={` w-full  transition hover:scale-[1.09] flex-[0_0_10%]  ${
              title === "Netflix Originals" ? "h-[250px]" : "h-[100px]"
            }`}
          >
            <img
              className="object-cover w-full h-full"
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesRow
