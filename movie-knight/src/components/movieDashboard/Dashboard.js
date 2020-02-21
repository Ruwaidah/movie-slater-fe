import React, { useState } from "react";
import MovieList from "./MovieList";
import "./dashboard.scss";
import UpComingMovies from "./UpComingMovies.js";
import { connect } from "react-redux";
import { movieNext } from "../../actions/index.js";

const Dashboard = props => {
  const [movieSelect, setMovieSelect] = useState([]);
  //   document.getElementById("nav").classList.toggle("menubar");
  function DatePage() {
    props.movieNext(movieSelect);
    props.history.push("/date");
  }

  // const search = document.getElementById("search");
  // search.classList.add("brightness");

  console.log("movies", props.MovieSelects);
  console.log("movies", movieSelect);

  return (
    <div className="dash-board">
      <div className="titles">
        <h1 className="header-dash">Select the movies you'd like to see</h1>
      </div>
      <MovieList movieSelect={movieSelect} setMovieSelect={setMovieSelect} />
      <UpComingMovies />

      {props.NextButton ? (
        <div className="black-box">
          <button className="next-button-disable" onClick={DatePage}>
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    NextButton: state.NextButton,
    MovieSelects: state.MovieSelects
  };
};

export default connect(mapStateToProps, { movieNext })(Dashboard);
