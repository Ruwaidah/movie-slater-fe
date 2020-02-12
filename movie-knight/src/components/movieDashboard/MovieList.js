import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./dashboard.scss";
import { getMovie } from "../../actions/index";
import { connect } from "react-redux";

function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const [zipCode, setZipCode] = useState(47712);
  const [releaseDate, setReleaseDate] = useState({
    default: "on",
    az: "off",
    recent: "off",
    soon: "off"
  }); //ReleaseDate
  // const [theatreName, setTheaterName] = useState()

  function makeCall() {
    axios
      .get(`https://movieknight01.herokuapp.com/api/movies?zip=${zipCode}`)
      .then(response => {
        console.log(response);
        setMovies(response.data);
      });
  }

  useEffect(() => {
    makeCall();
    props.getMovie(zipCode);
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setZipCode(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    makeCall();
    props.getMovie(zipCode);
    props.getMovie(zipCode);
  };
  //ReleaseDate
  const releaseChange = e => {
    e.preventDefault();
    if (e.target.value === "recent") {
      return setReleaseDate({ ...releaseDate, recent: "on" });
    } else if (e.target.value === "az") {
      return setReleaseDate({ ...releaseDate, az: "on" });
    } else if (e.target.value === "soon") {
      return setReleaseDate({ ...releaseDate, soon: "on" });
    } else {
      return null;
    }
    toggleMenu();
  };

  const handleChangeSearch = event => {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  };

  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
  };
  console.log(releaseDate);
  return (
    <div className="movielist-component">
      <br></br>
      <div className="zipsearch">
        <form onSubmit={handleSubmit}>
          <input
            className="fontAwesome"
            type="number"
            name="zipcode"
            placeholder="&#xf3c5;  Enter zip code to see movies near you"
            // value={zipCode}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="searchForm">
        <form>
          <input
            className="fontAwesome"
            placeholder="&#xf002;  Search Movies"
            onChange={handleChangeSearch}
            value={searchParam}
          />
        </form>

        {/* filter menu */}
        <div onClick={toggleMenu} id="hamburger-menu">
          {/* <img src="./images/menu.png" width="30px" /> */}
          <div className="linediv">
            Filter
            <div className="linecon">
              <div className="line1 black"></div>
              <div className="line1 white"></div>
              <div className="line2 black"></div>
              <div className="line2 white"></div>
              <div className="line3 black"></div>
              <div className="line3 white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* filter menu */}
      <div className="menu-filter" id="filter">
        <div>
          {/* ReleaseDate */}
          <div>
            Sort By :
            <select value={releaseDate} onChange={releaseChange}>
              <option value="default">Default</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <form onSubmit={releaseChange}>
              <input value="recent" name="recent" type="checkbox" />
              Most Recent
              <input value="az" name="az" type="checkbox" />A to Z
              <input value="soon" name="soon" type="checkbox" />
              Coming Soon
              <button className="filter-btn" type="submit">
                See Results
              </button>
            </form>
          </div>
        </div>
        <div>Movie Rating</div>
        <div>Review Rating</div>
      </div>

      <div className="movie-list">
        {movies
          .filter(movie => {
            return (
              movie.title.includes(searchParam) ||
              movie.title.toLowerCase().includes(searchParam) ||
              searchParam == null
            );
          })
          //ReleaseDate
          .sort(function(a, b) {
            if (releaseDate.recent === "on") {
              var dateA = new Date(a.releaseDate),
                dateB = new Date(b.releaseDate);
              return dateA - dateB;
            } else if (releaseDate.az === "on") {
              var nameA = a.title.toLowerCase(),
                nameB = b.title.toLowerCase();
              if (nameA < nameB)
                //sort string ascending
                return -1;
              if (nameA > nameB) return 1;
              return 0;
            } else {
              return null;
            }
          })
          .map(movie => {
            return <MovieCard movie={movie} key={movie.tmsId} />;
          })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movieList: state.movieList,
    fetchingData: state.fetchingData
  };
};

export default connect(mapStateToProps, { getMovie })(MovieList);
