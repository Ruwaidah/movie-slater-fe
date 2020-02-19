import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const TimeCard = props => {
  const [active, setActive] = useState(false);

  function toggleClass() {
    const currentState = active;
    setActive(!currentState);
  }

  //   useEffect(() => {
  //     if (active) {
  //       props.setTimeSelect([...props.timeSelect, ]);
  //     }
  //   }, [active]);

  return (
    <button
      className={active ? " day red-box" : "day"}
      onClick={() => toggleClass()}
    >
      {props.time}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    MovieSelects: state.MovieSelects,
    daySelect: state.daySelect
  };
};

export default connect(mapStateToProps)(TimeCard);
