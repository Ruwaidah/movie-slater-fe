import React from 'react'
import MovieList from "./MovieList"
import './dashboard.scss'

const Dashboard = props => {
  //   document.getElementById("nav").classList.toggle("menubar");
  function DatePage() {
    props.history.push("/date");
  }

  return (
    <div className="dash-board">
      <MovieList />
      <div className="black-box">
        <button className="next-button-disable" onClick={DatePage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;