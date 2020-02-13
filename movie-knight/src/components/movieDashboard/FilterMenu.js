import React, { useState, useEffect } from "react";

function ZipSearch(props) {
  /*
  const [maturityRatingsParam, setMaturityRatingsParam] = useState(["R", "PG-13", "PG", "G"])
  const [searchParamRating, setSearchParamRating] = useState()
  const [sortFilter, setSortFilter] = useState({ default: true, az: false, za: false, recent: false, old: false, soon: false })//ReleaseDate
  const [sortValue, setSortValue] = useState({ default: true, az: false,  za: false, recent: false,  old: false, soon: false })//ReleaseDate
  const [checked, setChecked] = useState({isChecked1: false, isChecked2: false, isChecked3: false, isChecked4: false});
  */
  const [filters, setFilters] = useState({
    Sort: {
      default: true,
      az: false,
      za: false,
      recent: false,
      old: false,
      soon: false
    },
    Ratings: [],
    Maturity: []
  });

  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
  };
  const handleChanges = event => {
    setFilters(event.target.value)
    console.log(filters);
  }

  return (
    <div className="filter-com">
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
      <div className="menu-filter" id="filter">
        <form onChange={handleChanges}>
          <div className="Sorter">
            <span>Sort by:</span><br />
            <input value="recent" name="recent" type="radio"/>Most Recent<br></br>
            <input value="old" name= "old" type="radio"/>Oldest<br></br>
            <input value="az" name="az" type="radio"/>A to Z<br></br>
            <input value="za" name="za" type="radio"/>Z to A
          </div>
          <div>
            <span>Movie Reviews:</span><br />
            <label>
              <input type="radio" name="stars" value="reset" />
              <span>Reset</span>
            </label>
            <label>
              <input type="radio" name="stars" value="1" />
              <span class="icon-full">★</span>
              <span class="icon">☆</span>
              <span class="icon">☆</span>
              <span class="icon">☆</span>
              <span class="icon">☆</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon">☆</span>
              <span class="icon">☆</span>
              <span class="icon">☆</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon">☆</span>
              <span class="icon">☆</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon">☆</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" />
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
              <span class="icon-full">★</span>
            </label>
          </div>
          <div>
            <span>Movie Rating</span><br />
            <label>
              <input type="checkbox" name="stars" id="R" value="R" defaultChecked/>
            R</label>
            <label>
              <input type="checkbox" name="stars" value="PG-13" defaultChecked/>
            PG-13</label>
            <label>
              <input type="checkbox" name="stars" value="PG" defaultChecked/>
            PG</label>
            <label>
              <input type="checkbox" name="stars" value="G" defaultChecked/>
            G</label>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ZipSearch;

{/*

  const [maturityRatingsParam, setMaturityRatingsParam] = useState(["R", "PG-13", "PG", "G"])
  const [searchParamRating, setSearchParamRating] = useState()
  const [sortFilter, setSortFilter] = useState({ default: true, az: false, za: false, recent: false, old: false, soon: false })//ReleaseDate
  const [sortValue, setSortValue] = useState({ default: true, az: false,  za: false, recent: false,  old: false, soon: false })//ReleaseDate
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
          Release Date
        </div>
        <div className = "movie-rating">
          Rating
            <form className="rating" id="ratingSelect" onChange={filterMaturity}>
              <label>
                <input type="checkbox" name="stars" id="R" value="R" defaultChecked/>
              R</label>
              <label>
                <input type="checkbox" name="stars" value="PG-13" defaultChecked/>
              PG-13</label>
              <label>
                <input type="checkbox" name="stars" value="PG" defaultChecked/>
              PG</label>
              <label>
                <input type="checkbox" name="stars" value="G" defaultChecked/>
              G</label>
            </form>
          </div>
        <div>
          Review Rating
          <div class = "movie-rating">
            <form class="rating" id="ratingSelect" onChange={handleChangeSearchRating}>
              <label>
                <input type="radio" name="stars" value="reset" />
                <span>Reset</span>
              </label>
              <label>
                <input type="radio" name="stars" value="1" />
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="2" />
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="3" />
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="4" />
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon">☆</span>
              </label>
              <label>
                <input type="radio" name="stars" value="5" />
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
                <span class="icon-full">★</span>
              </label>
            </form>
          <div>
            Sort By :

            

            <form onSubmit={releaseSubmit}>
              <input value="recent" name="recent" type="checkbox" onChange={releaseValue} checked={checked.isChecked1} onClick={toggleIsChecked1}/>Most Recent<br></br>
              <input value="old" name= "old" type="checkbox" onChange={releaseValue} checked={checked.isChecked2} onClick={toggleIsChecked2}/>Oldest<br></br>
              <input value="az" name="az" type="checkbox" onChange={releaseValue} checked={checked.isChecked3} onClick={toggleIsChecked3}/>A to Z<br></br>
              <input value="za" name="za" type="checkbox" onChange={releaseValue} checked={checked.isChecked4} onClick={toggleIsChecked4}/>Z to A
              

              <div>Movie Rating</div>
              <div>Review Rating</div>
              <button className="filter-btn" >See Results</button>
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
              movie.title.toLowerCase().includes(searchParam)) ||
              (movie.ratings && (maturityRatingsParam.includes(movie.ratings.code))) ||
              (movie.maturityRating[0] && parseInt(movie.maturityRating[0].Value.split("/")[0]) < 2 * parseInt(searchParamRating) + 1 && parseInt(movie.maturityRating[0].Value.split("/")[0]) >= 2 * parseInt(searchParamRating) - 1)

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
      </div> */}