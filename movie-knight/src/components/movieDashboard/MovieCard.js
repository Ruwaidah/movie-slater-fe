import React, { useState } from "react";
import "./dashboard.scss";
import { withRouter } from "react-router-dom";

function MovieCard(props) {
  let path;
  const [active, setActive] = useState(false);

  if (props.movie.ratings)
    path = `${props.movie.title}&rate=${props.movie.ratings[0].code}`;
  else path = props.movie.title;

  function toggleClass() {
    const currentState = active;
    setActive(!currentState);
  }

  return (
    <div className="movie-card">
      <div
        className={active ? "movie-img-enable red-box" : "movie-img-disable "}
      >
        <img
          src={props.movie.image}
          alt={props.movie.title}
          onClick={toggleClass}
        />
        <p
          onClick={() => props.history.push(`/details/${path}`)}
          className={active ? "movie-title-enable" : "movie-title-disable"}
        >
          {active ? "View Details" : null}
        </p>
      </div>
      <p
        onClick={() => props.history.push(`/details/${path}`)}
        className={active ? "movie-title-enable" : "movie-title-disable"}
      >
        {props.movie.title.length > 20
          ? props.movie.title.slice(0, 17) + "..."
          : props.movie.title}
      </p>
    </div>
  );
}

export default withRouter(MovieCard);
