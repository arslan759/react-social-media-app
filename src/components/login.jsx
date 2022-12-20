import {
  LockOpen,
  LoginOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
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
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg2 from "../assets/bg2.jpg";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [isInValid, setIsInValid] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();
  useEffect(() => {
    let localUser = localStorage.getItem("user");

    if (localUser) {
      navigate("/home");
    }
  }, []);

  const ValidateLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));

    if (username !== "" && password !== "") {
      users.map((item) => {
        if (item.username == username && item.password == password) {
          setIsInValid(false);
          localStorage.setItem(
            "user",
            JSON.stringify({
              firstname: item.firstname,
              lastname: item.lastname,
              avatar: item.avatar_url,
              username: username,
              password: password,
              id: item.id,
            })
          );
          navigate("/home");
        } else {
          setIsInValid(true);
        }
      });
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
              LOGIN
            </Typography>
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
                  Invalid Info!
                </Typography>
              </FormControl>
            )}
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Button
                onClick={ValidateLogin}
                variant="outlined"
                startIcon={<LoginOutlined />}
              >
                LOGIN
              </Button>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Link to="/signup">
                <Typography sx={{ display: "flex", justifyContent: "end" }}>
                  Not a Member? Signup Now!
                </Typography>
              </Link>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
