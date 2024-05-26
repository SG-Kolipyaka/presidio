import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css";
import Logout from "./Logout";

const Links = [
  { path: "/", title: "Home" },
  { path: "/login", title: "Login" },
  { path: "/signup", title: "SignUp" },
];

const Navbar = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="navbar">
      {Links.map((el) => (
        <NavLink
          className="nav-link"
          activeClassName="active"
          key={el.path}
          to={el.path}
          exact
        >
          {el.title}
        </NavLink>
      ))}
      <div style={{marginLeft:"50%",marginTop:"19px"}}>
       <Logout />
      </div>
    </div>
  );
};

export default Navbar;
