import React from "react";
import "./Manageorders.css";
import Header from "../Header/Header";
import searchIcon from "../../Assets/Akram/search 1.svg";
import down from "../../Assets/Akram/down 1.svg";
import filter from "../../Assets/Akram/filter 1.svg";

function Manageorders() {
  return (
    <div>
      <Header />
      <div className="GlobalContainer">
        <span className="ManageOrderstitle">Manage Orders</span>

        <div className="cards-container">
          <div className="Card"></div>
          <div className="Card"></div>
          <div className="Card"></div>
          <div className="Card"></div>
        </div>
        <div className="break-line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1030"
            height="2"
            viewBox="0 0 1030 2"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M1024.88 0.281255C626.638 0.218094 403.358 -0.318721 5.12438 0.281255C2.29426 0.281255 0 0.666009 0 1.14063C0 1.61525 2.29428 2 5.12439 2H1024.88C1027.71 2 1030 1.61525 1030 1.14063C1030 0.666009 1027.71 0.281255 1024.88 0.281255Z"
              fill="#040404"
              fill-opacity="0.2"
            />
          </svg>
        </div>
        <div class="container">
          <button class="button1">
            <span>Status : All </span>
            <img src={down} alt="Icon" />
          </button>

          <div class="search-bar">
            <input type="text" placeholder="Quick Search ..." />
            <img class="search-icon" src={searchIcon} alt="Search Icon" />
          </div>

          <button class="button2">
            <span>Filter</span>
            <img src={filter} alt="Icon" width="16" height="16" />
          </button>
        </div>

        <div className="table-container"></div>
      </div>
    </div>
  );
}

export default Manageorders;
