import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        {/* Avatars */}
        <Avatar
          className="header_avatar"
          alt="Shawn Stephens"
          src=""
          //alt={user?.displayName}
          //src={user?.photoURL}
        />
        <AccessTimeIcon />
        {/* Time Icon*/}
      </div>
      <div className="header_search">
        {/* Icon */}
        <SearchIcon />
        {/* Input*/}
        <input placeholder="Search TSec Channels" />
      </div>
      <div className="header_right">
        <LiveHelpIcon />
        {/* Help*/}
      </div>
    </div>
  );
}

export default Header;
