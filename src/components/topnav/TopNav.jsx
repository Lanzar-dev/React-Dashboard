import React from "react";
import data from "../../constants/data";
import UserInfo from "../user-info/UserInfo";
import "./topnav.scss";

const TopNav = () => {
  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topnav">
      <UserInfo user={data.user} />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};

export default TopNav;
