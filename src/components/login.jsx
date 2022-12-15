import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./button";
import InputField from "./inputfield";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isInValid, setIsInValid] = useState(false);

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
    <>
      <h1 className="text-center">Login</h1>
      <form className="container w-25 ">
        <InputField
          label="User Name"
          type="text"
          onchange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          onchange={(e) => setPassword(e.target.value)}
        />

        {isInValid && (
          <div className="text-danger"> Incorrect Username or Password</div>
        )}

        <Button text="Login" onclick={ValidateLogin} />
        <div className="d-flex justify-content-end">
          <Link to="/signup">Not a member? Join now</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
