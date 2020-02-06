import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = props =>{
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`https://movieknight01.herokuapp.com/api/movies`)
          .then(response => {
            console.log(response)
            setMovies(response.data)
            
          })
      },[]);

    return (
        <div>
            
        {movies.map(movie => {
            return <div>
                <h1>MovieDetails</h1>
                <div>Rated{movie.title}</div>
                <div>{movie.ratings.code}</div>
                <div>{movie.longDescription}</div>
                <div>{movie.topCast}</div>
            
            </div>
          })}

        </div>
    )
}

export default MovieDetails;