import { Add } from "@mui/icons-material";
import { Avatar, Box, Button, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const AddComment = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [comment, setComment] = useState("");

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:3001/users/${temp.id}`)
      .then((response) => response.json())
      .then((json) => setCurrentUser(json));
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    if (comment) {
      const temp = {
        avatar: currentUser.avatar_url,
        comment: comment,
        username: currentUser.firstname + " " + currentUser.lastname,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      const post = {
        ...currentUser,
        comments: temp,
      };

      fetch(`http://localhost:3001/posts${1}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      alert("Comment Added");
      window.location.reload(false);
    }
  };
  return (
    <Box
      sx={{
        background: "white",
        height: "auto",
        width: "100%",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "15px",
      }}
    >
      <form action="">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={currentUser.avatar_url} />

          <TextField
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            variant="outlined"
            size="small"
            sx={{
              background: "whitesmoke",
              width: "100%",
            }}
          />
          <Button onClick={handleComment} startIcon={<Add />}>
            {" "}
            Comment
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddComment;
