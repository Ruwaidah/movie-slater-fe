import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import './dashboard.css';
import { Input } from 'antd'


export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState([])
  const { Search } = Input;

  useEffect(() => {
    axios.get(`https://movieknight01.herokuapp.com/api/movies?zip=57701`)
      .then(response => {
        console.log(response)
        setMovies(response.data)
      })
  }, [])

  const handleChange = event => {
    setSearchParam({ ...searchParam, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Search
        placeholder="Search here"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
        onChange={handleChange}
      />
      <div className="movie-list">

        {movies.map(movie => {
          return <MovieCard movie={movie} key={movie.tmsId} />
        })}
      </div>
    </>
  )
}
