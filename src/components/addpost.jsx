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
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [caption, setCaption] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let temp = localStorage.getItem("user");
    setCurrentUser(JSON.parse(temp));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caption) {
      const post = {
        username: currentUser.username,
        name: currentUser.firstname + " " + currentUser.lastname,
        caption: caption,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        avatar: currentUser.avatar,
        photo: photoURL,
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
      window.location.reload(false);
    }
  };

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
      <form action="">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={currentUser.avatar} />

          <TextField
            onClick={handleOpen}
            placeholder="What's on your mind?"
            variant="outlined"
            size="small"
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
        <Modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={"auto"}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create post
            </Typography>
            <UserBox>
              <Avatar src={currentUser.avatar} sx={{ width: 30, height: 30 }} />
              <Typography fontWeight={500} variant="span">
                {currentUser.firstname + " " + currentUser.lastname}
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%", marginBottom: "5px" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            />
            <TextField
              placeholder="Please Enter Photo URL"
              variant="outlined"
              onChange={(e) => {
                setPhotoURL(e.target.value);
              }}
              size="small"
              sx={{
                background: "whitesmoke",
                width: "100%",
              }}
            />

            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button onClick={handleSubmit}>Post</Button>
              <Button onClick={handleClose} sx={{ width: "100px" }}>
                <Close />
              </Button>
            </ButtonGroup>
          </Box>
        </Modal>
      </form>
    </Box>
  );
};

export default AddPost;
