import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, makeStyles, Button, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import YouTubeIcon from "./Icon/Logo";
const useStyle = makeStyles((theme) => {
  return {
    appbar: {
      backgroundColor: "white",
    },
  };
});
const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar position="fixed" color="primary" className={classes.appbar}>
      <Toolbar>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ display: "flex", flexGrow: "1" }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <div style={{ width: "80px" }}>
              <YouTubeIcon />
            </div>
          </div>
          {/* menu and icon button */}
          <div
            style={{
              display: "flex",
              flexGrow: "2",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", width: "90%" }}>
              <input
                type="text"
                style={{
                  borderRadius: "0",
                  border: "1px solid #cfcccc",
                  width: "90%",
                  outline: "none",
                }}
                placeholder="Search"
              />
              <Button
                variant="text"
                color="default"
                style={{
                  backgroundColor: "#f8f8f8",
                  borderRadius: "0",
                  border: "1px solid #cfcccc",
                  borderLeft: "none",
                }}
              >
                <SearchIcon style={{ color: "rgb(146 143 143)" }} />
              </Button>
            </div>
            <IconButton>
              <MicIcon />
            </IconButton>
          </div>
          {/* searchbar and mice icon  */}
          <div
            style={{
              display: "flex",
              flexGrow: "2",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton>
              <VideoCallIcon color="action" />
            </IconButton>
            <IconButton>
              <AppsIcon color="action" />
            </IconButton>
            <IconButton>
              <NotificationsIcon color="action" />
            </IconButton>
            <IconButton>
              <Avatar alt="user-name" src="./pictures/avatar.jpg" />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
