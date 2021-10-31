import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>please register</h2>
      <form action="">
        <input type="email" name="" id="" />
        <br />
        <input type="password" name="" id="" />
        <input type="submit" value="submit" />
      </form>
      <Link to="/login">Already registeded</Link>
    </div>
  );
};

export default Register;
