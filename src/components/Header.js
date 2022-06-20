import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import UserCard from "./UserCard";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">AD Games</h1>
      </Link>
      <UserCard />
      <NavBar />
    </header>
  );
}
