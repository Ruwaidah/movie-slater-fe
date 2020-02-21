import React, { useState, useEffect } from "react";
import axios from "axios";
import "./seatChart.scss";
import Loading from "./Loading";
import screen from "./images/screen.svg";
import ProgressBar from "./ProgressBar";
import { connect } from 'react-redux'
import { Avatar } from "antd";
import { seatsArea } from '../actions/index.js'
import SeatsCard from "./SeatsCard.js"


const Seatchart = props => {
  const [seats, setSeats] = useState([]);
  const [seatsSelect, setSeatSelect] = useState({
    front: [],
    left: [],
    middle: [],
    right: [],
    end: []
  })


  useEffect(() => {
    axios.get("https://movie-knight.herokuapp.com/api/seats").then(res => {
      setSeats(res.data);
    });
  }, []);



  function showtimePage() {
   props.seatsArea(seatsSelect)
    props.history.push("/showtime");
  }

  if (!seats) {
    return <Loading />

  } else {
    return (
      <div>
        <div className="seat-container">
          {/* <h1 className="seat-title">Where would you like to sit?</h1> */}
          <h1 className="seat-header">
            Select the area in which you’d like to sit
        </h1>
          <div className="seat-chart">
            <img className="screen" src={screen} alt="movie theater screen" />
            <SeatsCard seats={seats} setSeatSelect={setSeatSelect} seatsSelect={seatsSelect} />
          </div>
          <div className="black-box">
            <button className="next-button" onClick={showtimePage}>
              Next
          </button>
          </div>
        </div>
        <ProgressBar />
      </div >

    );
  }
};

const mapStateToProps = state => {
  return {
    MovieSelects: state.MovieSelects,
    daySelect: state.daySelect,
    ticketsNumber: state.ticketsNumber,
    seatsSelects: state.seatsSelects

  };
};

export default connect(mapStateToProps, { seatsArea })(Seatchart);