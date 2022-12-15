import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Friends from "../components/friends";
import Leftbar from "../components/leftbar";
import Navbar from "../components/navbar";
import Rightbar from "../components/rightbar";

const Friendspage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Friends users={users} />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Friendspage;
