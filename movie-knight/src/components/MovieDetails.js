import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getMovie } from '../actions/index';
import { connect } from 'react-redux'

const MovieDetails = props =>{
    
    const [movies, setMovies] = useState([])


    const movie = props.location.pathname

    console.log(movie.slice(9, ))

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=feb6f0eeaa0a72662967d77079850353&language=en-US&query=${movie.slice(9, )}&page=1&include_adult=true`)
        .then(resp =>{
          // console.log(resp)
          setMovies(resp.data.results[0])
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])

    console.log(movies)

    if(!movies){
      return(
        <h1>Lodding...</h1>
      )
    }else{
      return (
          <div>
            <h1>{movies.title}</h1>
            <img  src={`http://image.tmdb.org/t/p/w185/${movies.poster_path}`} alt={movies.title} />
            <h3>Rating: {movies.vote_average}</h3>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            {/* <img src={`http://image.tmdb.org/t/p/w185/${movies.backdrop_path}`} /> */}
  
          </div>
      )
    }

}

const mapStateToProps = state => {
  return {
    movieList: state.movieList
  }
}

export default connect(mapStateToProps, { getMovie })(MovieDetails);