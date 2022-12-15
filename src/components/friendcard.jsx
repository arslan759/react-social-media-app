import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FriendCard = ({ avatar, firstname, lastname, bio }) => {
  return (
    <Box
      gap={1}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        flexWrap: "wrap",
        justifyContent: "start",
      }}
    >
      <Box
        p={2}
        justifyContent="space-between"
        bgcolor="white"
        flexWrap="wrap"
        borderRadius="10px"
        marginBottom="15px"
        gap={1}
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column", md: "column" },
          justifyContent: "space-between",
          width: { xs: "100%", sm: "45%", md: "45%", lg: "32%" },
          border: "2px solid blue",
        }}
      >
        <Box>
          <Box display={"flex"} direction="row" alignItems="center" gap={1}>
            <Avatar
              alt="Remy Sharp"
              src={avatar}
              sx={{ width: 30, height: 30 }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="span">
                {firstname + " " + lastname}
              </Typography>
              <Typography variant="span" sx={{ color: "gray" }}>
                {bio}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              marginTop={2}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  width: "auto",
                  borderRadius: "10px",
                }}
              >
                Follow
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "black",
                  width: { xs: "50%", sm: "auto", md: "30%" },
                  borderRadius: "10px",
                }}
              >
                Ignore
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FriendCard;
