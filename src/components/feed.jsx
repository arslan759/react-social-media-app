import { Box } from "@mui/material";
import React, { useState } from "react";
import AddPost from "./addpost";
import PostCard from "./postCard";

const Feed = () => {
  return (
    <Box
      bgcolor="whitesmoke"
      flex={5}
      p={2}
      sx={{ borderRadius: { xm: "0px", sm: "15px" } }}
    >
      <AddPost />
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
};

export default Feed;
