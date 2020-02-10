import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import './dashboard.scss';
import { getMovie } from '../../actions/index';
import { connect } from 'react-redux'

function MovieList(props) {
  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState()
  const [zipCode, setZipCode] = useState(47712)
  // const [theatreName, setTheaterName] = useState()

  function makeCall() {
    axios
      .get(`https://movieknight01.herokuapp.com/api/movies?zip=${zipCode}`)
      .then(response => {

        console.log(response);
        setMovies(response.data);
        // setTheaterName(response.data[0].showtimes[0].theatre.name)
      });
  }
  
  // console.log(props.fetchingData)
  // console.log(props.movieList[0])

  useEffect(() =>{
    makeCall()
    props.getMovie(zipCode)
  }, [])


  const handleChange = e => {
    e.preventDefault();
    setZipCode(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    makeCall();
    props.getMovie(zipCode)
  }


  const handleChangeSearch = event => {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  };

  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
  };

  return (
    <div className="movielist-component">
      {/* <h2>{theatreName}</h2> */}
      <br></br>
      <div className="zipsearch">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="zipcode"
            placeholder="zipcode"
            value={zipCode}
            onChange={handleChange}
          />
          {/* <button type="submit">🔍</button> */}
        </form>
      </div>
      <div className="searchForm">
        <form>
          <input
            placeholder=" 🔍 Search here"
            onChange={handleChangeSearch}
            value={searchParam}
          />
        </form>

        {/* filter menu */}
        <div onClick={toggleMenu} id="hamburger-menu">
          {/* <img src="./images/menu.png" width="30px" /> */}
          <div className="linediv">
            <div className="linecon">
              <div className="line black"></div>
              <div className="line white"></div>
              <div className="line2 black"></div>
              <div className="line white"></div>
              <div className="line3 black"></div>
              <div className="line white"></div>
            </div>
          </div>
        </div>

      </div>

      {/* filter menu */}
      <div className="menu-filter" id="filter">
        <div>
          Release Date
        </div>
        <div>
          Movie Rating
        </div>
        <div>
          Review Rating
        </div>
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
  }
}

export default connect(mapStateToProps, { getMovie })(MovieList)