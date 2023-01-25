import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  // const recentItem = (topic) => {
  //   <div className="sidebar__recentItem">
  //     <span className="sidebar__hash">#</span>
  //     <p>{topic}</p>
  //   </div>;
  // };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://pbs.twimg.com/media/FUrfhkyXsAwgIof?format=jpg&name=4096x4096"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Javier Rivilla Salcedo</h2>
        <h4>https://github.com/jrivillasalcedo</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viwed you</p>
          <p className="sidebar__statNumber">254</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">54</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>ReactJS</p>
        </div>
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>Angular</p>
        </div>
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>Laravel</p>
        </div>
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>Spring</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
