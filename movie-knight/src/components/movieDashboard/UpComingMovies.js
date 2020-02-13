import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingMovies } from "../../actions/index.js";
import Loading from "../Loading.js";
import { withRouter } from "react-router-dom";

function UpComingMovies(props) {
  console.log(props.upcomingMovies);
  useEffect(() => {
    props.getUpcomingMovies();
  }, []);

  if (!props.movieList) return <Loading />;
  return (
    <div className="upcoming-com">
      <h4>Coming Soon ..</h4>
      <div className="movie-list">
        {props.upcomingMovies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-img-disable ">
              <img
                src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <p
              onClick={() => props.history.push(`/details/${movie.title}`)}
              className="movie-title-disable"
            >
              {movie.title.length > 20
                ? movie.title.slice(0, 17) + "..."
                : movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    upcomingMovies: state.upcomingMovies,
    fetchingData: state.fetchingData,
    movieList: state.movieList
  };
};

export default connect(mapStateToProps, { getUpcomingMovies })(
  withRouter(UpComingMovies)
);
