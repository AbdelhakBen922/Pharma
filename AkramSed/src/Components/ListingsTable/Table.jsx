import React from "react";
import "./Table.css";
import Sidebar from "../SideBar/Sidebar";
import "../SideBar/Sidebar.css";

function Table() {
  return (
    <div>
      
      <div className="TableContainer">
        <div className="headContainer">
          <div className="heading">ID</div>
          <div className="heading">Product Image</div>
          <div className="heading">Product Name</div>
          <div className="heading">QTY</div>
          <div className="heading">Price</div>
          <div className="heading">Tags</div>
          <div className="heading">Status</div>
          <div className="heading">Actions</div>
        </div>
        <div className="lineBreak"></div>
        <div className="section"></div>
        <div className="lineBreak"></div>
        <div className="section"></div>
        <div className="lineBreak"></div>
        <div className="section"></div>
        <div className="lineBreak"></div>
        <div className="section"></div>
        <div className="lineBreak"></div>
        <div className="section"></div>
        <div className="lineBreak"></div>
      </div>
    </div>
  );
}

export default Table;
