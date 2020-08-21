import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header"></div>
      <div className="sidebar__info">
        <h2> Tsec General</h2>
        <h3>
          <FiberManualRecordIcon />
          Shawn Stephens
        </h3>
      </div>
      <CreateIcon />
    </div>
  );
}

export default Sidebar;