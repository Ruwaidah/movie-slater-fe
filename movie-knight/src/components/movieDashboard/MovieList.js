import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./dashboard.scss";
import { getMovie } from "../../actions/index";
import { connect } from "react-redux";
import ZipSearch from "./ZipSearch.js";
import SearchForm from "./SearchForm.js";
import FilterMenu from "./FilterMenu.js";
import Loading from "../Loading.js";

function MovieList(props) {

  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState("")
  const [zipCode, setZipCode] = useState(47712)

  //Checkbox toggle
  

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
  
  const handleChangeSearch = event => {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  };

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
      </div>
      <ZipSearch setZipCode={setZipCode} getMovie={props.getMovie} />

      <SearchForm searchParam={searchParam} setSearchParam={setSearchParam} />

      <FilterMenu setMovies={setMovies} />
      {props.fetchingData ? (
        <Loading />
      ) : (
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
      )}
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
