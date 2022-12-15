import {
  GridView,
  Logout,
  ModeNight,
  PeopleAlt,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomListItem from "./listItem";

const Leftbar = ({ display }) => {
  return (
    <Box
      flex={2}
      px={2}
      sx={{
        display: { xs: "none", sm: "block" },
        flex: { sm: 1, md: 2 },
      }}
    >
      <Box width="100%">
        <Box>
          <List sx={{ position: "static" }}>
            <CustomListItem link="/home" icon={<GridView />} text="Feed" />
            <CustomListItem
              link="/friends"
              icon={<PeopleAlt />}
              text="Friends"
            />
            <CustomListItem
              link="/settings"
              icon={<Settings />}
              text="Settings"
            />
            <CustomListItem link="/" icon={<Logout />} text="Logout" />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemIcon sx={{ display: { sm: "none", md: "block" } }}>
                  <ModeNight />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Leftbar;
