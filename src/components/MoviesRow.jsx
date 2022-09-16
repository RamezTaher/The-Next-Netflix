import React, { useState } from "react"
import { useEffect } from "react"
import fetcher from "../api/axios"

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
  return <div>{title}</div>
}

export default MoviesRow
