import React from 'react';
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <>
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">
          Index
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/service">
          Services
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/search">
          Search
       </NavLink>
       <NavLink activeClassName="active_class" to="/user/vinod/thapa">
          User
       </NavLink>
       <NavLink exact activeClassName="active_class" to="/contact">
          Contact US
       </NavLink>
     </div>
    </>
};
export default Navbar;



     