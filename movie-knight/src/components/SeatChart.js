import React, { useState, useEffect } from "react";
import axios from "axios";
import "./seatChart.scss";
import screen from "./images/screen.svg";

const Seatchart = props => {
  const [active, setActive] = useState([]);
  const [seats, setSeats] = useState([]);

  function seatCall() {
    axios.get("https://movie-knight.herokuapp.com/api/seats").then(res => {
      setSeats(res.data);
    });
  }

  console.log("we have seats", seats);

  useEffect(() => {
    seatCall();
  }, []);

  return (
    <div className="seat-container">
      <h1 className="seat-title">Where would you like to sit?</h1>
      <h2 className="seat-header">
        Select the area in which you’d like to sit
      </h2>
      <div className="seat-chart">
        <img className="screen" src={screen} alt="movie theater screen" />
        {seats.map(seat => (
          <span className="seat">{seat.seatName}</span>
        ))}
      </div>
    </div>
  );
};

export default Seatchart;
