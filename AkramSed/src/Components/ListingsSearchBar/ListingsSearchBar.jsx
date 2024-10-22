import React from 'react'
import searchIcon from "../../Assets/Akram/search 1.svg";
import down from "../../Assets/Akram/down (1) 1.svg";
import './ListingsSearchBar.css';
function ListingsSearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchInput"
        name="search"
        placeholder="Search for things ..."
      />
      <label for="search" className="labelContainer">
        <img className="searchIcon" src={searchIcon}></img>
        <div className="breakLine"></div>
        <text>Custom</text>
        <img src={down}></img>
      </label>
    </div>
  );
}

export default ListingsSearchBar