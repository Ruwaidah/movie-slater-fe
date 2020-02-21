import React, { useState, useEffect } from "react";
import axios from "axios";
import "./seatChart.scss";
import Loading from "./Loading";
import screen from "./images/screen.svg";
import ProgressBar from "./ProgressBar";
import { connect } from "react-redux";

const Seatchart = props => {
  const [active, setActive] = useState([]);
  const [seats, setSeats] = useState([]);

  function seatCall() {
    axios.get("https://movie-knight.herokuapp.com/api/seats").then(res => {
      setSeats(res.data);
    });
  }

  function showtimePage() {
    props.history.push("/showtime");
  }

  console.log("we have seats", seats);

  console.log("Movie name", props.MovieSelects);
  console.log("Date", props.daySelect);
  console.log("Tickets", props.ticketsNumber);

  useEffect(() => {
    seatCall();
  }, []);


  if(!seats){
    return <Loading/>
  } else{
   return (
    <div>
      <div className="seat-container">
        {/* <h1 className="seat-title">Where would you like to sit?</h1> */}
        <h1 className="seat-header">
          Select the area in which you’d like to sit
        </h1>
        <div className="seat-chart">
          <img className="screen" src={screen} alt="movie theater screen" />
          {seats.map(seat => (
            <span key={seat.id} className="seat">{seat.seatName}</span>
          ))}
        </div>
        <div className="black-box">
          <button className="next-button" onClick={showtimePage}>
            Next
          </button>

        </div>
        <ProgressBar />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    MovieSelects: state.MovieSelects,
    daySelect: state.daySelect,
    ticketsNumber: state.ticketsNumber
  };
};

export default connect(mapStateToProps)(Seatchart);
