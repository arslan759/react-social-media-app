import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let localUser = localStorage.getItem("user");

    if (localUser) {
      setIsValid(true);
    } else {
      navigate("/");
    }
  });
  return <>{isValid ? children : null}</>;
};

export default Auth;
