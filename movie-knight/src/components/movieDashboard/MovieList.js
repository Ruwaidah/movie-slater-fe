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
  const [searchParam, setSearchParam] = useState("");

  const [zipCode, setZipCode] = useState(localStorage.getItem("zip"));

  const [filters, setFilter] = useState({
    filter: ""
  });

  const [movieSelect, setMovieSelect] = useState([]);

  useEffect(() => {
    props.getMovie(zipCode);
  }, [zipCode]);

  console.log(props.movieList);

  return (
    <div className="movielist-component">
      <br></br>

      <ZipSearch setZipCode={setZipCode} getMovie={props.getMovie} />

      <SearchForm searchParam={searchParam} setSearchParam={setSearchParam} />

      <FilterMenu setFilter={setFilter} />
      {props.fetchingData ? (
        <Loading />
      ) : (
        <div className="movie-list">
          {props.movieList
            .filter(movie => {
              return (
                movie.title.includes(searchParam) ||
                movie.title.toLowerCase().includes(searchParam) ||
                searchParam == null
              );
            })
            .sort(function(a, b) {
              if (filters.filter === "most") {
                var dateA = new Date(a.releaseDate),
                  dateB = new Date(b.releaseDate);
                return dateA - dateB;
              } else if (filters.filter === "a-z") {
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
              return <MovieCard movie={movie} key={movie.tmsId} movieSelect={movieSelect} setMovieSelect={setMovieSelect}/>;
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
