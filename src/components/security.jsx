import { KeyOutlined, LockOpen } from "@mui/icons-material";
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

const Security = () => {
  const [currentUser, setCurrentUser] = useState();
  const [currentPassword, setCurrentPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [isInValid, setIsInValid] = useState(false);

  const updatePassword = (e) => {
    let temp = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:3001/users/${temp.id}`)
      .then((response) => response.json())
      .then((json) => setCurrentUser(json));

    setCurrentPassword(temp.password);

    e.preventDefault();

    if (oldPassword != "" && newPassword != "" && confirmpassword != "") {
      if (oldPassword == currentPassword && newPassword == confirmpassword) {
        const user = {
          firstname: currentUser.firstname,
          lastname: currentUser.lastname,
          username: currentUser.username,
          email: currentUser.email,
          dob: currentUser.dob,
          gender: currentUser.gender,
          password: newPassword,
          totalLikes: currentUser.totalLikes,
          totalComments: currentUser.totalComments,
          avatar_url: currentUser.avatar_url,
          background: currentUser.background,
          bio: currentUser.bio,
        };

        localStorage.setItem(
          "user",
          JSON.stringify({
            firstname: temp.firstname,
            lastname: temp.lastname,
            avatar: temp.avatar_url,
            username: temp.username,
            password: newPassword,
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
      }
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
              SECURITY
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="currentPassword">
                Current Password
              </InputLabel>
              <OutlinedInput
                id="currentPassword"
                type="password"
                label="Current Password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="newPassword">New Passowrd</InputLabel>
              <OutlinedInput
                id="newPassword"
                type="password"
                label="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type="password"
                label="Confirm Password"
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Button
                startIcon={<KeyOutlined />}
                onClick={updatePassword}
                variant="outlined"
              >
                UPDATE PASSWORD
              </Button>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Security;
