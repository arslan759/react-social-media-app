import { KeyOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const General = () => {
  const [currentUser, setCurrentUser] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isInValid, setIsInValid] = useState(false);

  const updateInfo = (e) => {
    let temp = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:3001/users/${temp.id}`)
      .then((response) => response.json())
      .then((json) => setCurrentUser(json));

    e.preventDefault();

    if (firstname != "" && lastname != "" && email != "") {
      const user = {
        firstname: firstname,
        lastname: lastname,
        username: currentUser.username,
        email: email,
        dob: currentUser.dob,
        gender: currentUser.gender,
        password: currentUser.Password,
        totalLikes: currentUser.totalLikes,
        totalComments: currentUser.totalComments,
        avatar_url: currentUser.avatar_url,
        background: currentUser.background,
        bio: currentUser.bio,
      };

      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          avatar: temp.avatar_url,
          username: temp.username,
          password: temp.Password,
          id: temp.id,
        })
      );

      fetch(`http://localhost:3001/users/${currentUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      alert("user has been updated");
      window.location.reload(false);
    } else setIsInValid(true);
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
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
          <Box display={"flex"} flexDirection="column">
            <Typography
              component="h1"
              textAlign={"center"}
              sx={{ fontSize: "50px" }}
            >
              GENERAL
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="first-name">First Name</InputLabel>
              <OutlinedInput
                id="first-name"
                type="text"
                label="First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <OutlinedInput
                id="last-name"
                type="text"
                label="Last Name"
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Button
                startIcon={<KeyOutlined />}
                onClick={updateInfo}
                variant="outlined"
              >
                UPDATE INFO
              </Button>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default General;
