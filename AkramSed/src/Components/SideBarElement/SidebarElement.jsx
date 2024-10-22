import React from "react";



function SidebarElement({ logo, title }) {
    return (
      <div className="sidebar-element">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">{title}</h1>
      </div>
    );
  }
export default SidebarElement