import React, { useState } from "react";
import DayCard from "./DayCard";
import { connect } from "react-redux";
import { dayNext } from "../actions/index.js";
import ProgressBar from "./ProgressBar";
import "../App.scss";

const DataPicker = props => {
  const [daySelect, setDaySelect] = useState([]);
  var today = new Date();
  var tomorrow = new Date(today.getTime());


  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];


  function timePage() {
    props.dayNext(daySelect);
    props.history.push("/time");
  }

  return (
    <div className="dayPicker-com">
      <div className="day-container">
        <h2 className="question">When would you like to go?</h2>

        <div className="days">
          {days.map((day, i) => {
            return (
              <DayCard
                key={i}
                day={day}
                index={i}
                daySelect={daySelect}
                setDaySelect={setDaySelect}
              />
            );
          })}
        </div>
      </div>

      <div className="black-box">
        <button className="next-button" onClick={timePage}>
          Next
        </button>
      </div>
      <ProgressBar />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    MovieSelects: state.MovieSelects,
    daySelect: state.daySelect
  };
};

export default connect(mapStateToProps, { dayNext })(DataPicker);
