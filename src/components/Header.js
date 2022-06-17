import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import UserPanel from "./UserPanel";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">AD Games</h1>
      </Link>
      <UserPanel />
      <NavBar />
    </header>
  );
}
