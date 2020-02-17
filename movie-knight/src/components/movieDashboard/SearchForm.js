import React, { useState, useEffect } from "react";

function SearchForm(props) {
  const handleChangeSearch = event => {
    props.setSearchParam({...props.searchParam, title: event.target.value});
  };

  return (
    <div className="searchForm">
      <form>
        <input
          className="fontAwesome"
          placeholder="&#xf002;  Search Movies"
          onChange={handleChangeSearch}
          value={props.searchParam.title}
        />
      </form>
    </div>
  );
}

export default SearchForm;
