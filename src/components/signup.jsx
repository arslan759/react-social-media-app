import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./button";
import Gender from "./gender";
import InputField from "./inputfield";

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [isInValid, setIsInValid] = useState(false);
  const [isAlready, setIsAlready] = useState(false);
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    let presentUser = users.filter((persons) => persons.username == username);
    let presentUsermail = users.filter((persons) => persons.email == email);

    if (presentUser >= 1) setIsAlready(true);

    if (
      firstname != "" &&
      lastname != "" &&
      username != "" &&
      email != "" &&
      dob != "" &&
      gender != "" &&
      password != "" &&
      presentUser.length < 1 &&
      presentUsermail.length < 1
    ) {
      setIsInValid(false);
      setIsAlready(false);
      const user = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        dob: dob,
        gender: gender,
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
    <>
      <div className="main row container-fluid d-flex justify-content-center align-items-center ">
        <div className="col-4 my-auto">
          <div className="form-container mx-auto">
            <h1 className="text-center">Signup</h1>
            <form className=" w-100">
              <div className="d-flex justify-content-between">
                <InputField
                  label="First Name"
                  type="text"
                  onchange={(e) => setFirstname(e.target.value)}
                />
                <InputField
                  label="Last Name"
                  type="text"
                  onchange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <InputField
                  label="Username"
                  type="text"
                  onchange={(e) => setUsername(e.target.value)}
                />

                <InputField
                  label="Date of Birth"
                  type="date"
                  onchange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <InputField
                  label="Email"
                  type="email"
                  onchange={(e) => setEmail(e.target.value)}
                />
                <Gender
                  gender={gender}
                  onchange={(e) => setGender(e.target.value)}
                />
              </div>
              <InputField
                label="Password"
                type="password"
                onchange={(e) => setPassword(e.target.value)}
              />
              {isInValid && <div className="text-danger">Invalid Info</div>}
              {isAlready && (
                <div className="text-danger">User Already Exists</div>
              )}

              <Button text="Sign Up" onclick={createUser} />
              <div className="d-flex justify-content-end">
                <Link to="/">Already have an Account? Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
