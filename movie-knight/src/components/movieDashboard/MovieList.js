import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import './dashboard.css';
import { Input } from 'antd'


export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState([])
  const [zipCode, setZipCode] = useState(90028)
  const [theatreName, setTheaterName] = useState()
  const { Search } = Input;
  
  console.log(zipCode);
  console.log(theatreName);

  useEffect(() => {
    axios.get(`https://movieknight01.herokuapp.com/api/movies?zip=${zipCode}`)
      .then(response => {
        console.log(response)
        setMovies(response.data)
        setTheaterName(response.data[0].showtimes[0].theatre.name)
      })
  }, [zipCode])

  const handleChange = e => {
    e.preventDefault();
    setZipCode(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleChangeSearch = event => {
    setSearchParam({ ...searchParam, [event.target.name]: event.target.value });
  };

  return (
    <>
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
      <Search
        placeholder="Search here"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
        onChange={handleChangeSearch}
      />

      <div className="movie-list">

        {movies.map(movie => {
          return <MovieCard movie={movie} key={movie.tmsId} />
        })}
      </div>
    </>
  )
}
