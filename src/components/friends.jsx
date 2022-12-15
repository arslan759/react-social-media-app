import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FriendCard from "./friendcard";
import FriendHeader from "./friendheader";

const Friends = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <Box
      bgcolor="whitesmoke"
      flex={5}
      p={2}
      sx={{ borderRadius: { xm: "0px", sm: "15px" } }}
    >
      <FriendHeader />
      {users.map((item) => (
        <FriendCard
          bio={item.bio}
          firstname={item.firstname}
          lastname={item.lastname}
          avatar={item.avatar_url}
        />
      ))}
    </Box>
  );
};

export default Friends;
