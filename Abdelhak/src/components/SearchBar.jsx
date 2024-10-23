import React from 'react'
import searchIcon from "../assets/search (1).png";
import down from "../assets/down.png";
import './SearchBar.css';
function SearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchInput"
        name="search"
        placeholder="Search Inventory..."
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

export default SearchBar