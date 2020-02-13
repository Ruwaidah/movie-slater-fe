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
  const [maturityRatingsParam, setMaturityRatingsParam] = useState(["R", "PG-13", "PG", "G"])
  const [searchParam, setSearchParam] = useState("")
  const [zipCode, setZipCode] = useState(47712)
  const [searchParamRating, setSearchParamRating] = useState()
  const [sortFilter, setSortFilter] = useState({ default: true, az: false, za: false, recent: false, old: false, soon: false })//ReleaseDate
  const [sortValue, setSortValue] = useState({ default: true, az: false,  za: false, recent: false,  old: false, soon: false })//ReleaseDate

  //Checkbox toggle
  const [checked, setChecked] = useState({isChecked1: false, isChecked2: false, isChecked3: false, isChecked4: false});

  const toggleIsChecked1 = (e) => {
    setChecked({isChecked1: !checked.isChecked1});
  }
  const toggleIsChecked2 = (e) => {
    setChecked({isChecked2: !checked.isChecked2});
  }
  const toggleIsChecked3 = (e) => {
    setChecked({isChecked3: !checked.isChecked3});
  }
  const toggleIsChecked4 = (e) => {
    setChecked({isChecked4: !checked.isChecked4});
  }

  // const handleButtonClick = (e) => {
  //   toggleIsChecked();
  // }


  // const [theatreName, setTheaterName] = useState()
  
   //ReleaseDate
  // const submit = event => {
  //   event.preventDefault();
  //   setFilter(values);
  //   console.log(filters);
  // };

   //ReleaseDate
  // const change = event => {
  //   setValues({ filter: event.target.value });
  // };
  // console.log(filters);

   //ReleaseDate

  const releaseValue = e => {
    // e.preventDefault();
    if(e.target.value === "recent")
      {return setSortValue({ default: true, az: false, za: false, recent: !sortValue.recent, old: false, soon: false })}
    else if (e.target.value === "old")
      {return setSortValue({ default: true, az: false, za: false, recent: false, old: !sortValue.old, soon: false })}  
    else if (e.target.value === "az")
      {return setSortValue({ default: true, az: !sortValue.az, za: false, recent: false, old: false, soon: false })}
    else if (e.target.value === "za")
      {return setSortValue({ default: true, az: false, za: !sortValue.za, recent: false, old: false, soon: false })}
    else if (e.target.value === "soon")
      {return setSortValue({ default: true, az: false, za: false, recent: false, old: false, soon: !sortValue.soon })}
    else
      {return null}
    
  };
  console.log(sortValue);

  const releaseSubmit = e => {
    e.preventDefault();
    setSortFilter(sortValue);
    toggleMenu();
  //   console.log(filters);
    // if(e.target.value === "recent")
    //   {return setSortFilter({...sortFilter, recent: "on"})}
    // else if (e.target.value === "old")
    //   {return setSortFilter({...sortFilter, old: "on"})}  
    // else if (e.target.value === "az")
    //   {return setSortFilter({...sortFilter, az: "on"})}
    // else if (e.target.value === "za")
    //   {return setSortFilter({...sortFilter, za: "on"})}  
    //   else if (e.target.value === "soon")
    //   {return setSortFilter({...sortFilter, soon: "on"})}
    // else
    //   {return null}
    // toggleMenu();
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

  const handleChangeSearchRating = event => {
    console.log(event.target.value);
    setSearchParamRating(event.target.value);
    if(event.target.value !== "reset"){
      setSearchParam(null);
    } else {
      setSearchParam("");
    }
  };

  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
  };

  const filterMaturity = rating =>{
    setMaturityRatingsParam(maturityRatingsParam.map((currRating)=>{
      return currRating !== rating ? currRating : null;      
    }))
  }

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
