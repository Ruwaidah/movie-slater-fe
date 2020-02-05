import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import './dashboard.scss';

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState()
  const [zipCode, setZipCode] = useState(90028)
  const [theatreName, setTheaterName] = useState()

  console.log(zipCode);
  console.log(theatreName);

  function makeCall() {
    axios.get(`https://movieknight01.herokuapp.com/api/movies?zip=${zipCode}`)
      .then(response => {
        console.log(response)
        setMovies(response.data)
        // setTheaterName(response.data[0].showtimes[0].theatre.name)
      })
  }

  const handleChange = e => {
    e.preventDefault();
    setZipCode(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    makeCall();
  }

  const handleChangeSearch = event => {
    console.log(event.target.value)
    setSearchParam(event.target.value);
  };

  return (
    <>
      {/* <h2>{theatreName}</h2> */}
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

      <form>
        <input
        className="searchForm"
        placeholder=" 🔍 Search here"
        onChange={handleChangeSearch}
        value={searchParam}
        />
      </form>

      <div className="movie-list">

        {
          movies.filter(movie => {
            return movie.title.includes(searchParam) || movie.title.toLowerCase().includes(searchParam) ||  searchParam == null;
          }).map(movie => {
            return <MovieCard movie={movie} key={movie.tmsId} />
          })}
      </div>
    </>
  )
}
