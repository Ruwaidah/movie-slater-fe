import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const DayCard = props => {
  const [active, setActive] = useState(false);

  function toggleClass() {
    const currentState = active;
    setActive(!currentState);
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  //  Date Format
  function getday(number) {
    var day = new Date();
    day.setDate(day.getDate() + number);
    var dd = String(day.getDate()).padStart(2, "0");
    var mm = String(day.getMonth() + 1).padStart(2, "0");
    var yyyy = day.getFullYear();
    const dayName = days[day.getDay()];
    const dm = mm + "/" + dd;
    return [dm, dayName];
  }

  useEffect(() => {
    if (active) {
      props.setDaySelect([...props.daySelect, getday(props.index)]);
    }
  }, [active]);

  return (
    <button
      className={active ? " day red-box" : "day"}
      onClick={() => toggleClass()}
    >
      {`${getday(props.index)[1]} - ${getday(props.index)[0]}`}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    MovieSelects: state.MovieSelects,
    daySelects: state.daySelects
  };
};

export default connect(mapStateToProps)(DayCard);
