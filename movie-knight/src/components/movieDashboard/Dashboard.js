import React from "react";
import MovieList from "./MovieList";
import "./dashboard.scss";
import UpComingMovies from "./UpComingMovies.js";

const Dashboard = props => {
  //   document.getElementById("nav").classList.toggle("menubar");
  function DatePage() {
    props.history.push("/date");
  }

  return (
    <div className="dash-board">
      <div className="titles">
        <h1 className="header-dash">Select the movies you'd like to see</h1>
      </div>
      <MovieList />
      <UpComingMovies />
      <div className="black-box">
        <button className="next-button-disable" onClick={DatePage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
