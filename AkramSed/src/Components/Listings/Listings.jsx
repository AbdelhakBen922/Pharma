import React from "react";
import "./Listings.css"; // We'll create the CSS file next
import Table from "../ListingsTable/Table";
import ListingsSearchBar from "../ListingsSearchBar/ListingsSearchBar";

function Listings() {
  return (
    <div className="listings">
      <div className="Search-container">
        <div className="title">Listings</div>
        <ListingsSearchBar/>
        <div className="add-prdct-btn">
          <button className="btn">Add product +</button>
        </div>
      </div>

      <Table/>
    </div>
  );
};

export default Listings;
