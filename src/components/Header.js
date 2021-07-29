import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Trippany</h1>
      <ul className="main-nav">
        <li>
          <NavLink exact to="/" activeStyle={{ background: "tomato" }}>
            Home
          </NavLink>
          <NavLink to="/trips">Trips</NavLink>
          <NavLink to="/trip-form">Add Trip</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
