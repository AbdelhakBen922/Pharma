import React from "react";
import "./InventoryTable.css";
import BarElement from "./BarElement";
function InventoryTable(props) {
  return (
    <div className="TableContainer">
      <div className="headContainer">
        {props.header.map((header, index) => (
          <BarElement
            key={index}
            className={header}
            title={header}
          ></BarElement>
        ))}
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
  );
}

export default InventoryTable;
