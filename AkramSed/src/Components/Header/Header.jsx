import React from "react";
import "./Header.css";
import Notifications from "../../Assets/Akram/notification (1) 1.svg";
import settings from "../../Assets/Akram/setting (3) 1.svg";
import logout from "../../Assets/Akram/logout 1.svg";

function Header  ({ fullName, role, imageUrl }) {
  return (
    <div className="Header">
      
        <div className="icons">
          <img src={settings} alt="settings"></img>
          <img src={Notifications} alt="notifications"></img>
        </div>

        <div className="card">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          <div className="content">
            <h2 className="name">Full Name</h2>
            <p className="role">Role</p>
          </div>
        </div>

        <div className="Logout-icon">
          <img src={logout} alt="logout"></img>
        </div>
      </div>
    
  );
};

export default Header;
