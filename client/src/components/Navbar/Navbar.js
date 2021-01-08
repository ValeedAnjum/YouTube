import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div style={{ width: "80px" }}>
          <YouTubeIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
