import React, { useState } from "react"
import { useEffect } from "react"
import fetcher from "../api/axios"
import endpoints from "../constants/endpoints"

const imageBaseUrl = "https://image.tmdb.org/t/p/original/"
const Hero = () => {
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
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }
  return (
    <header
      className="text-white object-contain h-[470px] bg-center bg-cover flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
        url(${imageBaseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="container sm:mx-auto px-4 pt-16 flex flex-col gap-6 ">
        <h1 className="text-3xl font-extrabold ">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex items-center gap-1">
          <button className="btn-primary btn">Play</button>
          <button className="btn-primary btn">My List</button>
        </div>

        <p className="w-1/2">{truncate(movie?.overview, 170)}</p>
      </div>
      <div
        className="h-[120px] mt-auto"
        style={{
          backgroundImage: `linear-gradient(180deg,transparent,rgba(37, 37, 37, 0.6),#111)`,
        }}
      ></div>
    </header>
  )
}

export default Hero
