import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const DayCard = props => {
  const [active, setActive] = useState(false);

  function toggleClass() {
    const currentState = active;
    setActive(!currentState);
  }

  //  Date Format
  function getday(number) {
    var day = new Date();
    day.setDate(day.getDate() + number);
    var dd = String(day.getDate()).padStart(2, "0");
    var mm = String(day.getMonth() + 1).padStart(2, "0");
    var yyyy = day.getFullYear();
    const dm = mm + "/" + dd;
    return dm;
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
      {`${props.day} - ${getday(props.index)}`}
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
