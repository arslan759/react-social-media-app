import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomListItem = ({ link, icon, text }) => {
  const navigate = useNavigate();

  function handleclick() {
    if (link == "/") {
      localStorage.removeItem("user");
      navigate(link);
    } else {
      navigate(link);
    }
  }
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleclick}>
        <ListItemIcon sx={{ width: { md: "fit-content" } }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ display: { xs: "none", md: "block" } }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
