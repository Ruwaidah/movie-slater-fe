import React, { useState } from "react";
import { connect } from "react-redux";
import TimeCard from "./TimeCard";
import ProgressBar from "./ProgressBar";

const TimePicker = props => {
  const [timeSelect, setTimeSelect] = useState([]);

  const times = ["9-11 AM", "12-2 PM", "3-5 PM", "6-8 PM", "9-Midnight"];

  console.log("timepage", props.daySelects);

  function ticketsPage() {
    props.history.push("/tickets");
  }

  function HomePage() {
    props.history.push("/");
  }

  return (
    <div>
      <div>
        <button onClick={HomePage}>⬅</button>
      </div>

      <h2 className="question">What time would you like to go?</h2>

      <div className="days">
        {times.map((time, i) => {
          return (
            <TimeCard
              key={i}
              time={time}
              index={i}
              timeSelect={timeSelect}
              setTimeSelect={setTimeSelect}
            />
          );
        })}
      </div>

      <div className="black-box">
        <button className="next-button" onClick={ticketsPage}>
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
    daySelects: state.daySelects
  };
};

export default connect(mapStateToProps)(TimePicker);
