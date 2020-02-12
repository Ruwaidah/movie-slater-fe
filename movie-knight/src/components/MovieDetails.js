import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetails.scss";
import { getMovieDetail } from "../actions/index";
import { connect } from "react-redux";

const MovieDetails = props => {
  const [movie, setMovie] = useState();
  const [seeAllCasts, setSeeAllCasts] = useState(false);

  useEffect(() => {
    axios
      .post(`https://movieknight01.herokuapp.com/api/movies/moviedetails`, {
        title: `${props.location.pathname.slice(9)}`
      })
      .then(respone => {
        setMovie(respone.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function runtime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${hours}hr ${minutes}m`;
  }

  function reverseString(str) {
    return str.split("-").reverse().join("-");
}

  if (!movie) {
    return <h1>Loading...</h1>;
  } else {
    console.log(movie);
    if (seeAllCasts) var casts = movie.casts[0];
    else casts = movie.casts[0].slice(0, 4);
    return (
      <div className="movieDetails-com">
        <iframe
          src={`https://www.youtube.com/embed/${movie.videos[0].key}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <div className="image-headers">
          <img
            src={`http://image.tmdb.org/t/p/w185/${movie.movie.poster_path}`}
          />
          <div className="headers">
            <h5 className="title">{movie.movie.original_title}</h5>
            <p>
              <span>Directed by {movie.directors[0].name}</span>
            </p>
            <p>
              <span> {runtime(movie.moviedetail.runtime)}</span>
            </p>
            <p>
              <span>{movie.movie.vote_average} IMDB</span>
            </p>
            <p>
              <span>{reverseString(movie.moviedetail.release_date).replace(/-/g, ' / ')}</span>
            </p>
            <p className="genres">
              <span className="genere"></span>
              {movie.moviedetail.genres.slice(0, 3).map((genre, i, arr) => {
                if(arr.length - 1 === i){
                  return <span key={genre.id}>{genre.name}</span>
                }else{
                  return <span key={genre.id}>{genre.name},</span>
                }
              })}
            </p>
          </div>
        </div>
        <div className="overview">
          <p>{movie.movie.overview}</p>
        </div>
        <div className="casts">
          <div className="cast-title">
            <h3>Top Casts</h3>
            {/* <p onClick={() => setSeeAllCasts(!seeAllCasts)}>
              {seeAllCasts ? "See top Casts" : "See all casts "}{" "}
            </p> */}
          </div>
          <div className="casts-dir-div">
            {casts.map(people => (
              <div key={people.cast_id}>
                <img
                  className='cast-img'
                  src={`http://image.tmdb.org/t/p/w185/${people.profile_path}`}
                />
                <p>{people.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="director">
          <h3>Directors </h3>
          <div className="casts-dir-div">
            {movie.directors.map(people => (
              <div key={people.id}>
                <img
                className='dir-img'
                  src={`http://image.tmdb.org/t/p/w185/${people.profile_path}`}
                />
                <p>{people.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails
  };
};

export default connect(mapStateToProps, { getMovieDetail })(MovieDetails);
