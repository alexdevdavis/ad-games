import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <Link to="/users/:user_id/profile">my profile</Link>
        <Link to="/reviews">reviews</Link>
        <Link to="/categories">categories</Link>
        <Link to="/users">users</Link>
      </ul>
    </nav>
  );
}
