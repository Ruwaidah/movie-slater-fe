import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getMovie } from '../actions/index';
import { connect } from 'react-redux'

const MovieDetails = props =>{
    
    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     axios.get(`https://movieknight01.herokuapp.com/api/movies`)
    //       .then(response => {
    //         console.log(response)
    //         setMovies(response.data)
            
    //       })
    //   },[]);

    const zipcode = 20707

    useEffect(() =>{
      props.getMovie(zipcode)
    }, [])

    console.log(props.movieList)

    return (
        <div>
          <h1>MovieDetails</h1>
            
        {/* {movies.map(movie => {
            return <div>
                <div>Rated{movie.title}</div>
                <div>{movie.ratings.code}</div>
                <div>{movie.longDescription}</div>
                <div>{movie.topCast}</div>
            
            </div>
          })} */}

        </div>
    )
}

const mapStateToProps = state => {
  return {
    movieList: state.movieList
  }
}

export default connect(mapStateToProps, { getMovie })(MovieDetails);