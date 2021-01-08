import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  IconButton,
  makeStyles,
  Button,
  Avatar,
  Grid,
} from "@material-ui/core";
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
        <Grid container>
          <Grid xs={2} container>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <div style={{ width: "80px" }}>
              <YouTubeIcon />
            </div>
          </Grid>
          {/* menu and icon button */}
          <Grid xs={8} justify="center" container alignItems="center">
            <Grid container xs={9}>
              <input
                type="text"
                style={{
                  borderRadius: "0",
                  border: "1px solid #cfcccc",
                  outline: "none",
                  flexGrow: "1",
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
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <MicIcon />
              </IconButton>
            </Grid>
          </Grid>
          {/* searchbar and mice icon  */}
          <Grid container xs={2} justifyContent="flex-end" alignItems="center">
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
