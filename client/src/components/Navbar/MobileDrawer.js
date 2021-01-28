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
    paper: {
      overflow: "hidden",
    },
    list_root: {
      width: "240px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
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
      classes={{ paper: classes.paper }}
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
      <List classes={{ root: classes.list_root }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (item, index) => (
            <ListItem key={index} button>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
