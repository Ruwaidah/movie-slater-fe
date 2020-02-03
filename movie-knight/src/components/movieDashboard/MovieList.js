import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import './dashboard.css';


export default function MovieList(){
  const [movies, setMovies] = useState([])

  const [zipCode, setZipCode] = useState(90028)

  const [theatreName, setTheaterName] = useState()

  console.log(zipCode);

  console.log(theatreName);

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
      setTheaterName(response.data[0].showtimes[0].theatre.name)
    })
  },[zipCode])


  return (
    <div className="movie-list">

  <h2>{theatreName}</h2>
      <br></br>
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
