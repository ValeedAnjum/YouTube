import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const MobileDrawer = ({ mobileDrawer, setMobileDrawerState }) => {
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileDrawer}
      onClose={setMobileDrawerState}
    >
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
