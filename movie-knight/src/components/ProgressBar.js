import React, { useState } from "react";
import calendar from "./images/calendar.svg";
import cart from "./images/cart.svg";
import chair from "./images/chair.svg";
import clock from "./images/clock.svg";
import movieslate from "./images/movieslate.svg";
import searchmovie from "./images/searchmovie.svg";
import tickets from "./images/tickets.svg";
import "./ProgressBar.scss";
import { withRouter } from "react-router-dom";

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <img
        className="icons"
        src={searchmovie}
        alt="searchmovie logo"
        onClick={() => props.history.push("/")}
      />
      <div className="progress-line" />
      <img
        className="icons"
        src={calendar}
        alt="calendar logo"
        onClick={() => props.history.push("/date")}
      />
      <div className="progress-line" />
      <img
        className="icons"
        src={clock}
        alt="clock logo"
        onClick={() => props.history.push("/time")}
      />
      <div className="progress-line" />
      <img
        className="icons"
        src={tickets}
        alt="tickets logo"
        onClick={() => props.history.push("/tickets")}
      />
      <div className="progress-line" />
      <img
        className="icons"
        src={chair}
        alt="chair logo"
        onClick={() => props.history.push("/seats")}
      />
      <div className="progress-line" />
      <img
        className="icons"
        src={movieslate}
        alt="movieslate logo"
        onClick={() => props.history.push("/showtime")}
      />
      <div className="progress-line" />
      <img className="icons" src={cart} alt="cart logo" />
    </div>
  );
};

export default withRouter(ProgressBar);
