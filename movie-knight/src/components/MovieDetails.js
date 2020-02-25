import React, { useState, useEffect } from "react";
<<<<<<< HEAD
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import StarRatings from 'react-star-ratings';
import 'react-circular-progressbar/dist/styles.css';
=======
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import StarRatings from "react-star-ratings";
import "react-circular-progressbar/dist/styles.css";
>>>>>>> b708fd5a118fa14863e481025b28bb1397152d92
import axios from "axios";
import "./movieDetails.scss";
import { getMovieDetail } from "../actions/index";
import { connect } from "react-redux";
import Loading from "./Loading.js";
import ProgressBar from "./ProgressBar";
import { withRouter } from "react-router-dom"; 


export const MovieDetails = props => {
  const rating = props.location.pathname.split("=");
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/movies/moviedetails`, {
        title: `${props.location.pathname.slice(9)}`
      })
      .then(respone => {
        setMovie(respone.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(movie);
  function runtime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${hours}hr ${minutes}m`;
  }
  let firsttitle;
  let second_title;
  function reverseString(str) {
    return str
      .split("-")
      .reverse()
      .join("-");
  }
  if (movie) {
    firsttitle = movie.movie.original_title.split("(")[0];
    second_title = movie.movie.original_title.split("(")[1];
  }
  console.log(firsttitle);
  if (!movie) return <Loading />;
  else {
    const rate = movie.movie.vote_average.toString().replace(".", "");

    let casts = movie.casts[0].slice(0, 4);
    return (
      <div className="movieDetails-com">
        <>
          {!movie.videos[0] ? (
            <iframe
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${movie.videos[0].key}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          )}
        </>
        <div className="image-headers">
          <img
            src={`http://image.tmdb.org/t/p/w185/${movie.movie.poster_path}`}
          />
          <div className="headers">
            <h5 className="title">
              {movie.movie.original_title.includes("(")
                ? movie.movie.original_title.split("(")[0]
                : movie.movie.original_title.includes(":")
                ? movie.movie.original_title.split(":")[0]
                : movie.movie.original_title}
            </h5>
            <>
              {!movie.directors[0] ? (
                <p>
                  <span>Directed by N/A</span>
                </p>
              ) : (
                <p>
                  <span>Directed by {movie.directors[0].name}</span>
                </p>
              )}
            </>
            <p>
              <span> {runtime(movie.moviedetail.runtime)}</span>
            </p>
            {/* <div id="prog">
              <CircularProgressbar value={rate} maxValue={100} text={`${rate}%`} styles={buildStyles({ textSize: "32px", pathColor: `rgb(255, 0, 0)`, textColor: `rgb(255, 255, 255)` })} />
            </div> */}
            {rating[1] ? (
              <p>
                <span>{rating[1]}</span>
              </p>
            ) : null}
            {/* 
            <p>
              <span>
                {movie.movie.vote_average}/10 <i className="fab fa-imdb"></i>
              </span>
            </p> */}
            <p>
              <span>
                {reverseString(movie.moviedetail.release_date).replace(
                  /-/g,
                  " / "
                )}
              </span>
            </p>
            <p className="genres">
              {movie.moviedetail.genres.slice(0, 3).map((genre, i, arr) => {
                if (arr.length - 1 === i) {
                  return <span key={genre.id}>{genre.name}</span>;
                } else {
                  return <span key={genre.id}>{genre.name},</span>;
                }
              })}
            </p>
            <StarRatings
              rating={movie.movie.vote_average / 2}
              starRatedColor="red"
              // changeRating={this.changeRating}
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
              name="rating"
            />
          </div>
        </div>

        <div className="overview">
          <h5>
            {movie.movie.original_title.includes("(")
              ? movie.movie.original_title
              : movie.movie.original_title.includes(":")
              ? movie.movie.original_title
              : null}
          </h5>
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
                {people.profile_path === null ? (
                  <img
                    className="cast-img"
                    src={`https://res.cloudinary.com/donsjzduw/image/upload/v1580504817/hfjrl5wbkiugy4y0gmqu.jpg`}
                  />
                ) : (
                  <img
                    className="cast-img"
                    src={`http://image.tmdb.org/t/p/w185/${people.profile_path}`}
                  />
                )}
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
                <>
                  {people.profile_path === null ? (
                    <img
                      className="dir-img"
                      src={`https://res.cloudinary.com/donsjzduw/image/upload/v1580504817/hfjrl5wbkiugy4y0gmqu.jpg`}
                    />
                  ) : (
                    <img
                      className="dir-img"
                      src={`http://image.tmdb.org/t/p/w185/${people.profile_path}`}
                    />
                  )}
                </>
                <p>{people.name}</p>
              </div>
            ))}
          </div>
        </div>
        <ProgressBar />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails
  };
};

export default withRouter(connect(mapStateToProps, { getMovieDetail })(MovieDetails));
