import { Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [localUser, setLocalUser] = useState();

  useEffect(() => {
    let temp = localStorage.getItem("user");
    setLocalUser(JSON.parse(temp));
  }, []);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    gap: 2,
    justifyContent: "space-between",
    alignItems: "center",
    background: "primary",
    color: "white",
  });

  const StyledSearch = styled("div")(({ theme }) => ({
    background: "white",
    padding: "0 10px",
    color: "black",
    flex: 5,
    display: "flex",
    alignItems: "center",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "end",
    flex: 2,
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex">
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" }, flex: 2 }}
            >
              Mogul
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: "block", sm: "none" }, flex: 2 }}
            >
              M
            </Typography>
            <StyledSearch
              sx={{
                border: "2px solid  white",
                width: "100%",
                borderRadius: 2,
              }}
            >
              <Search sx={{ color: "gray" }} />
              <InputBase placeholder="search..." />
            </StyledSearch>
          </Box>
          <UserBox>
            <Typography
              variant="span"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {localUser?.firstname + " " + localUser?.lastname}
            </Typography>
            <Avatar
              alt="Arslan Obaid"
              src={localUser?.avatar}
              onClick={(e) => setUserMenu(true)}
            />
          </UserBox>
        </Stack>
      </StyledToolbar>
      <Menu
        sx={{ marginTop: 5 }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={userMenu}
        onClose={(e) => setUserMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
