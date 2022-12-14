import movieTrailer from "movie-trailer"
import React, { useState } from "react"
import { useEffect } from "react"
import YouTube from "react-youtube"
import fetcher from "../api/axios"

const imageBaseUrl = "https://image.tmdb.org/t/p/original/"

const MoviesRow = ({ title, endpoint }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((error) => console.log(error))
    }
  }

  console.log(trailerUrl)

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
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      <div className="flex gap-2 overflow-x-scroll overflow-y-hidden py-6 scrollbar-hide">
        {movies.map((movie) => (
          <div
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={` w-full  transition hover:scale-[1.09] flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_10%]  ${
              title === "Netflix Originals" ? "h-[250px]" : "h-[100px]"
            }`}
          >
            <img
              className="object-fill w-full h-full"
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  )
}

export default MoviesRow
