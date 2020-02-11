import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './movieDetails.scss'
import { getMovieDetail } from '../actions/index';
import { connect } from 'react-redux'

const MovieDetails = props =>{

    const [movie, setMovie] = useState()

    useEffect(() =>{
      axios
      .post(`https://movieknight01.herokuapp.com/api/movies/moviedetails`, {'title': `${props.location.pathname.slice(9, )}` })
      .then(respone =>{
        setMovie(respone.data)
      })
      .catch(err =>{
        console.log(err)
      })
    }, [])

    function runtime(num)
    { 
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
    return `${hours}hr ${minutes}m`;         
  }


    if(!movie){
      return(
        <h1>Lodding...</h1>
      )
    }else{
      // console.log(movie)
      return (
          <div>

            <iframe src={`https://www.youtube.com/embed/${movie.videos[0].key}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
            />

            <img src={`http://image.tmdb.org/t/p/w185/${movie.movie.poster_path}`} />
            <h5 className='title'>{movie.movie.original_title}</h5>
            <p>Runtime {runtime(movie.moviedetail.runtime)}</p>
            <p>Rating: {movie.movie.vote_average}</p>
            {
              movie.moviedetail.genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))
            }
            <p>{movie.movie.overview}</p>

              <h3>Cast</h3>
              {
                movie.casts[0].map(people =>(
                  <div key={people.cast_id}>
                    <img src={`http://image.tmdb.org/t/p/w185/${people.profile_path}`} />
                    <p>{people.name}</p>
                  </div>
                ))
              }
          </div>
      )
    }

}


const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails
  }
}

export default connect(mapStateToProps, { getMovieDetail })(MovieDetails);