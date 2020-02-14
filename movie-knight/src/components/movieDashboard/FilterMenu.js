import React, { useState, useEffect } from "react";

function ZipSearch(props) {
  const [values, setValues] = useState({
    filter: ""
  });

  const change = event => {
    setValues({ filter: event.target.value });
  };

  const submit = event => {
    event.preventDefault();
    props.setFilter(values);
  };

  const toggleMenu = () => {
    document.getElementById("filter").classList.toggle("toggle-menu2");
  };

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
        <div>
          Sort By :
          <form onSubmit={submit}>
            <input
              type="radio"
              value="default"
              name="filter"
              onChange={change}
            />
            default
            <input type="radio" value="most" name="filter" onChange={change} />
            most
            <input type="radio" value="a-z" name="filter" onChange={change} />
            a-z
            <input type="radio" value="gener" onChange={change} name="filter" />
            gener
            <button>search</button>
          </form>
        </div>
        <div>Movie Rating</div>
        <div>Review Rating</div>
      </div>
    </div>
  );
}
export default ZipSearch;
