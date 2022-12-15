import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Feed from "../components/feed";
import Leftbar from "../components/leftbar";
import Navbar from "../components/navbar";
import Rightbar from "../components/rightbar";

const Homepage = () => {
  const [caption, setCaption] = useState("");
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Feed caption={caption} />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Homepage;
