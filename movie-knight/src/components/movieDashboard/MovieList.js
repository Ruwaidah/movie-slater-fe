import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import './dashboard.css';


export default function MovieList(){
  const [movies, setMovies] = useState([])

  const [zipCode, setZipCode] = useState(94080)

  console.log(zipCode);

  const handleChange = e =>{
    e.preventDefault();
    setZipCode(e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault();
  }
  

  useEffect(() => {
  axios.get(`https://movieknight01.herokuapp.com/api/movies?zip=${zipCode}`)
    .then(response => {
      console.log(response)
      setMovies(response.data)
    })
  },[zipCode])

  return (
    <div className="movie-list">
      <div>
        <form onSubmit={handleSubmit}>

          <input
            type='number'
            name='zipcode'
            placeholder='zipcode'
            value={zipCode}
            onChange={handleChange}
            />
            <button type='submit'>🔍</button>
        </form>
      </div>
      

        {movies.map(movie => {
          return <MovieCard movie={movie} key={movie.tmsId}/>
        })}

    </div>
  )
}
