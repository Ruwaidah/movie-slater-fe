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

  //ReleaseDate
  // const [filters, setFilter] = useState({
  //   filter: ""
  // });
  //ReleaseDate
  // const [values, setValues] = useState({
  //   filter: "default"
  // });
  
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
    toggleMenu();
  };
  console.log(sortValue);

  const releaseSubmit = e => {
    e.preventDefault();
    setSortFilter(sortValue);
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
  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
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

            {/* <select value={releaseDate} onChange={releaseChange}>
              <option value="default">Default</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select> */}

            <form onSubmit={releaseSubmit}>
              <input value="recent" name="recent" type="radio" onChange={releaseValue} checked={checked.isChecked1} onClick={toggleIsChecked1}/>Most Recent
              <input value="old" name= "old" type="radio" onChange={releaseValue} checked={checked.isChecked2} onClick={toggleIsChecked2}/>Oldest
              <input value="az" name="az" type="radio" onChange={releaseValue} checked={checked.isChecked3} onClick={toggleIsChecked3}/>A to Z
              <input value="za" name="za" type="radio" onChange={releaseValue} checked={checked.isChecked4} onClick={toggleIsChecked4}/>Z to A
              {/* <input value="soon" name="soon" type="radio" onChange={releaseChange}/>Coming Soon */}
              <button className="filter-btn"  >See Results</button>
            </form>  

            {/* NEW CODES */}
            {/* <form onSubmit={submit}> */}
              {/* <input
                type="radio"
                value="default"
                name="filter"
                onChange={change}
              />
              Default */}
              {/* <input
                type="radio"
                value="most"
                name="filter"
                onChange={change}
              />
              Most Recent
              <input type="radio" value="a-z" name="filter" onChange={change} />
              A-Z
              <input
                type="radio"
                value="soon"
                onChange={change}
                name="filter"
              />
              Coming Soon
              <button>See Results</button>
            </form> */}

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
          //NEW CODES
          .sort(function(a, b) {
            if (sortFilter.recent === true) {
              var dateA = new Date(a.releaseDate),
                dateB = new Date(b.releaseDate);
              return dateA - dateB;
            } else if (sortFilter.old === true) {
              var dateA = new Date(a.releaseDate),
                dateB = new Date(b.releaseDate);
              return dateB - dateA;
            } else if (sortFilter.az === true) {
              var nameA = a.title.toLowerCase(),
                nameB = b.title.toLowerCase();
              if (nameA < nameB)
                //sort string ascending
                return -1;
              if (nameA > nameB) return 1;
              return 0;
            } else if (sortFilter.za === true) {
              var nameA = a.title.toLowerCase(),
                nameB = b.title.toLowerCase();
              if (nameA < nameB)
                //sort string ascending
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