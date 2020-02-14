import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./dashboard.scss";
import { getMovie } from "../../actions/index";
import { connect } from "react-redux";

function MovieList(props) {

  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState("")
  const [zipCode, setZipCode] = useState(47712)

//FILTER MENU//
  const [filters, setFilter] = useState({
    filter: "",
    rating: "",
    mature: ""
  });
  const [values, setValues] = useState({
    filter: "",
    rating: "",
    mature: ""
  });
  console.log(filters)
  console.log(values)

  const submit = event => {
    event.preventDefault();
    setFilter(values);
    // toggleMenu();
    console.log(filters);
  };
  const change = event => {
    setValues({ ...values, filter: event.target.value });
  };

  const changeRating = event => {
    setValues({ ...values, rating: event.target.value });
  };

  const changeMature = event => {
    setValues({ ...values, mature: event.target.value });
  };

  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
  };

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
        <div onClick={toggleMenu} id="hamburger-menu">
         
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
      
      <div className="menu-filter" id="filter">
        <div> 
        <div class = "movie-rating">
          <div>
          <form  class="rating" id="ratingSelect" onSubmit={submit}>
            <div>
              Release Date
                </div>
                <div className = "movie-rating">
                  Rating
                    <form className="rating" id="ratingSelect">
                      <label>
                        <input type="radio" name="stars" id="R" value="R"  onChange={changeMature} />
                      R</label>
                      <label>
                        <input type="radio" name="stars" value="PG-13"  onChange={changeMature} />
                      PG-13</label>
                      <label>
                        <input type="radio" name="stars" value="PG"  onChange={changeMature}/>
                      PG</label>
                    </form>
                </div>

            <label>
            Review Rating
            </label>
              <label>
                <input type="radio" name="stars" value="1" onChange={changeRating} />
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="2" onChange={changeRating}/>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="3" onChange={changeRating} />
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="4" onChange={changeRating}/>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="5" onChange={changeRating} />
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
              </label>  

              Sort By :
 
              <input
                type="radio"
                value="most"
                name="filter"
                onChange={change}
              />
              Most Recent
              <input
                type="radio"
                value="old"
                onChange={change}
                name="filter"
              />
              Oldest
              <input type="radio" value="az" name="filter" onChange={change} />
              A-Z
              <input type="radio" value="za" name="filter" onChange={change} />
              Z-A
              
              <button>search</button>
            </form>
          </div>

        </div>
      </div>
    </div>
      <div className="movie-list">
        {movies
          .filter(movie => {
            return (
              (movie.title.includes(searchParam) ||
              movie.title.toLowerCase().includes(searchParam)) &&
              //Mature Rating
              (movie.ratings[0].code.toLowerCase().includes(filters.mature.toLowerCase()))
              ||
              //Review Rating
              (movie.maturityRating[0] && parseInt(movie.maturityRating[0].Value.split("/")[0]) < 2 * parseInt(filters.rating) + 1 && parseInt(movie.maturityRating[0].Value.split("/")[0]) >= 2 * parseInt(filters.rating) - 1)
            );
          })
             //Sort By
            .sort(function(a, b) {
            if (filters.filter === "recent") {
              var dateA = new Date(a.releaseDate),
                dateB = new Date(b.releaseDate);
              return dateA - dateB;
            } else if (filters.filter === "old") {
              var dateA = new Date(a.releaseDate),
                dateB = new Date(b.releaseDate);
              return dateB - dateA;
            } else if (filters.filter === "az") {
              var nameA = a.title.toLowerCase(),
                nameB = b.title.toLowerCase();
              if (nameA < nameB)
                return -1;
              if (nameA > nameB) return 1;
              return 0;
            } else if (filters.filter === "za") {
              var nameA = a.title.toLowerCase(),
                nameB = b.title.toLowerCase();
              if (nameA < nameB)
                return 0;
              if (nameA > nameB) return 1;
              return -1;
            }else {
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