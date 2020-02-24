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
import { toggleNext, toggleNextOff } from "../../actions/index";

<<<<<<< HEAD
export function MovieList(props) {

  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState("")
  const [zipCode, setZipCode] = useState(47712)
  const [movieSelect, setMovieSelect] = useState([]);
=======
function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [zipCode, setZipCode] = useState(47712);
>>>>>>> 221300e6b5db2c83c6505cecdf518bcb0b8c5ccd
  const [filters, setFilter] = useState({
    filter: "",
    rating: ["1", "2", "3", "4", "5"],
    mature: ["G", "PG", "PG-13", "R"]
  });
  //Checkbox toggle

  // useEffect(() => {
  //   if (props.movieSelect.length > 0) {
  //     props.toggleNext();
  //   } else if (props.movieSelect.length === 0) {
  //     props.toggleNextOff();
  //   }
  // })

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
  }, [zipCode]);

  // useEffect(() => {
  //   props.toggleNext(props.movieSelect);
  // }, []);

  const toggleMenu = () => {
    document.getElementById("filter").classList.remove("toggle-menu2");
  };

  return (
    <div className="movielist-component">
      <ZipSearch setZipCode={setZipCode} getMovie={props.getMovie} />

      <SearchForm searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="filter-max">
        <FilterMenu setFilter={setFilter} filters={filters} />
        {props.movieSelect.length == 3 ? (
          <p className="max-num">Max Number</p>
        ) : (
          <p className="max-num"></p>
        )}
      </div>
      {props.fetchingData ? (
        <Loading />
      ) : (
        <div className="movie-list" onClick={toggleMenu}>
          {movies
            .filter(movie => {
              return (
                (movie.title.includes(searchParam) ||
                  movie.title.toLowerCase().includes(searchParam)) &&
                movie.ratings &&
                movie.maturityRating &&
                filters.mature.includes(movie.ratings[0].code) &&
                movie.maturityRating[0] &&
                filters.rating.includes(
                  Math.round(
                    parseInt(movie.maturityRating[0].Value.split("/")[0]) / 2
                  ).toString()
                )
              );
            })
            .sort(function(a, b) {
              if (filters.filter === "recent") {
                var dateA = new Date(a.releaseDate),
                  dateB = new Date(b.releaseDate);
                return dateB - dateA;
              } else if (filters.filter === "old") {
                var dateA = new Date(a.releaseDate),
                  dateB = new Date(b.releaseDate);
                return dateA - dateB;
              } else if (filters.filter === "az") {
                var nameA = a.title.toLowerCase(),
                  nameB = b.title.toLowerCase();
                if (nameA < nameB)
                  //sort string ascending
                  return -1;
                if (nameA > nameB) return 1;
                return 0;
              } else if (filters.filter === "za") {
                var nameA = a.title.toLowerCase(),
                  nameB = b.title.toLowerCase();
                if (nameA > nameB)
                  //sort string ascending
                  return -1;
                if (nameA < nameB) return 1;
                return 0;
              } else {
                return null;
              }
            })
            .map(movie => {
              return (
                <MovieCard
                  movie={movie}
                  key={movie.tmsId}
                  movieSelect={props.movieSelect}
                  setMovieSelect={props.setMovieSelect}
                />
              );
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
export default connect(mapStateToProps, {
  getMovie,
  toggleNext,
  toggleNextOff
})(MovieList);
