import React from "react";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>AD Games</h1>
      <NavBar>
        <Link to="/users/:user_id/profile">my profile</Link>
        <Link to="/reviews">reviews</Link>
        <Link to="/categories">categories</Link>
        <Link to="/users">users</Link>
      </NavBar>
    </>
  );
}
