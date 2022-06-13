import React from "react";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [logincred , SetLoginCred ] = useState({
    email: "mahehs@gmail.com",
    password: " fmw",
  });


  const handlechange = (e) => {
    const [name , value] = e.target;
    SetLoginCred({
      ...logincred,
      [name]:  value,

    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();



  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" type="email" onChange={handlechange} value={logincred.email} placeholder="Enter Email"/>
        <input data-cy="login-password" name="password" type="password" value={logincred.password} onChange={handlechange} placeholder="Enter Password" />
        <button data-cy="login-submit" type="submit">{isAuthenticated ? "Login" : "Logout"}</button>
      </form>
    </div>
  );
};

export default Login;
