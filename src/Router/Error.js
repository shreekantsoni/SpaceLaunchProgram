import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return <>
       <center>
	      <h1> 404 Error! </h1>
	      <NavLink to="/"> Go Back </NavLink>
	   </center>
    </>
};

export default Error;