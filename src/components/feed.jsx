import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddPost from "./addpost";
import PostCard from "./postCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json.reverse()));
  }, []);
  return (
    <Box
      bgcolor="whitesmoke"
      flex={5}
      p={2}
      sx={{ borderRadius: { xm: "0px", sm: "15px" } }}
    >
      <AddPost />
      {posts.length < 1 ? (
        <Typography sx={{ textAlign: "center" }} variant="h6">
          No Posts to Display
        </Typography>
      ) : (
        posts.map((item) => (
          <PostCard
            name={item.name}
            photo={item.photo}
            caption={item.caption}
            likes={item.likes}
            comments={item.comments}
            shares={item.shares}
            date={item.date}
          />
        ))
      )}
    </Box>
  );
};

export default Feed;
