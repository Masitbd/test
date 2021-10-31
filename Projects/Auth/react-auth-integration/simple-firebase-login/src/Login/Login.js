import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const { singnInUsingGoogle, singinUsingGithub } = useFirebase();
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={singnInUsingGoogle}>Google signin</button>
      <br />
      <button onClick={singinUsingGithub}>Github signin</button>
      <br />
      <Link to="/register">New user</Link>
    </div>
  );
};

export default Login;
