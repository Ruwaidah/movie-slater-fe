import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"


export default function MovieList(){
  const [movies, setMovies] = useState([])

  useEffect(() => {
  axios.get(`https://movieknight01.herokuapp.com/api/movies`)
    .then(response => {
      console.log(response)
      setMovies(response.data)
    })
  },[])

  return (
    <div className="movie-list">
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.tmsId}/>
      })}
    </div>
  )
}
