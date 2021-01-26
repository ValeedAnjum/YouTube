import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "./Icon/Logo";
const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
  };
});
const MobileDrawer = ({ mobileDrawer, setMobileDrawerState }) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileDrawer}
      onClose={setMobileDrawerState}
    >
      <div
        className={classes.toolbar}
        style={{ borderBottom: "1px solid #0000001a" }}
      >
        <List style={{ padding: "0" }}>
          <ListItem>
            <ListItemIcon>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText>
              <div style={{ width: "80px", cursor: "pointer" }}>
                <YouTubeIcon />
              </div>
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <List style={{ width: "240px" }}>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
