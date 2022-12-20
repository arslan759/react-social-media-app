import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import {
  LockOpen,
  LoginOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInValid, setIsInValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const createUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    let presentUser = users.filter((persons) => persons.username == username);
    let presentUsermail = users.filter((persons) => persons.email == email);

    if (
      firstname != "" &&
      lastname != "" &&
      username != "" &&
      email != "" &&
      password != "" &&
      presentUser.length < 1 &&
      presentUsermail.length < 1
    ) {
      setIsInValid(false);
      const user = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        dob: "",
        gender: "",
        password: password,
        totalLikes: 0,
        totalComments: 0,
        avatar_url: "",
        background: "",
        bio: "",
      };

      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      alert("user has been created");
      navigate("/");
    } else setIsInValid(true);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bg2})`,
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
          <Box display={"flex"} flexDirection="column">
            <Typography component="h1" sx={{ textAlign: "center" }}>
              <LockOpen color="primary" sx={{ fontSize: "50px" }} />
            </Typography>
            <Typography
              component="h1"
              textAlign={"center"}
              sx={{ fontSize: "50px" }}
            >
              SIGNUP
            </Typography>
            <Box display={"flex"}>
              <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="fname">First Name</InputLabel>
                <OutlinedInput
                  id="fname"
                  type="text"
                  label="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="lname">Last Name</InputLabel>
                <OutlinedInput
                  id="lname"
                  type="text"
                  label="Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormControl>
            </Box>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="username">Username</InputLabel>
              <OutlinedInput
                id="username"
                type="text"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
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
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {isInValid && (
              <FormControl sx={{ m: 1 }} variant="outlined">
                <Typography variant="span" color={"red"}>
                  Invalid Info or User Already Exists!
                </Typography>
              </FormControl>
            )}
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Button onClick={createUser} variant="outlined">
                SIGNUP
              </Button>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Link to="/">
                <Typography sx={{ display: "flex", justifyContent: "end" }}>
                  Already a Member? Login here!
                </Typography>
              </Link>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
