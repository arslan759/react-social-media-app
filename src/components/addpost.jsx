import {
  Add,
  AddReactionOutlined,
  Camera,
  Close,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  VideocamOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fade,
  Input,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let temp = localStorage.getItem("user");
    setCurrentUser(JSON.parse(temp));

    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caption) {
      const post = {
        username: currentUser.username,
        name: currentUser.firstname + " " + currentUser.lastname,
        caption: caption,
        photo: "https://wallpaperaccess.com/full/52447.jpg",
        likes: 0,
        comments: 0,
        shares: 0,
      };

      fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      alert("Post Created");
    }
  };

  // const StyledBox = styled(Box)({
  //   background: "white",
  //   height: "auto",
  //   width: "100%",
  //   padding: "20px",
  //   marginBottom: "20px",
  //   borderRadius: 15,
  // });

  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const StyledButton = styled(Button)({
    background: "none",
    color: "black",
  });

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
      {/* <StyledBox> */}
      <form action="">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          <TextField
            placeholder="What's on your mind?"
            variant="outlined"
            size="small"
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            sx={{
              background: "whitesmoke",
              width: "100%",
            }}
          />
        </Box>
        <Stack
          direction="row"
          sx={{
            marginTop: 2,
            width: "100%",
            display: {
              xs: "flex",
              sm: "block",
              flexDirection: "column",
              width: "100%",
              gap: "10px",
            },
          }}
        >
          <Box>
            <StyledButton
              onClick={handleOpen}
              size="small"
              startIcon={<VideocamOutlined color="error" />}
            >
              <Typography
                variant="p"
                fontWeight={300}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Live Video
              </Typography>
            </StyledButton>
            <StyledButton size="small" startIcon={<Camera color="success" />}>
              <Typography
                variant="p"
                fontWeight={300}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Photo/Video
              </Typography>
            </StyledButton>
            <StyledButton
              size="small"
              startIcon={<AddReactionOutlined color="primary" />}
            >
              <Typography
                variant="p"
                fontWeight={300}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Feeling
              </Typography>
            </StyledButton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Button
              onClick={handleSubmit}
              startIcon={<Add />}
              size="small"
              variant="contained"
              sx={{ width: "100%" }}
            >
              <Typography variant="p">POST</Typography>
            </Button>
          </Box>
        </Stack>
      </form>
      {/* </StyledBox> */}
    </Box>
  );
};

export default AddPost;
