import { Box, Button } from "@mui/material";
import React from "react";

const FriendHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bgcolor="white"
      p={2}
      borderRadius="10px"
      marginBottom="15px"
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },

        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: { xs: "50%", sm: "auto", md: "30%" },
          borderRadius: "10px",
        }}
      >
        Followers
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          width: { xs: "50%", sm: "auto", md: "30%" },
          borderRadius: "10px",
        }}
      >
        Following
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          width: { xs: "50%", sm: "auto", md: "30%" },
          borderRadius: "10px",
        }}
      >
        Find Friends
      </Button>
    </Box>
  );
};

export default FriendHeader;
