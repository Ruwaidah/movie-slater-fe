import React from "react";
import MovieList from "./MovieList";

const Dashboard = props => {
  //   document.getElementById("nav").classList.toggle("menubar");
  function DatePage() {
    props.history.push("/date");
  }

  return (
    <div className="dash-board">
      <MovieList />
      <div className="black-box">
        <button className="next-button" onClick={DatePage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
