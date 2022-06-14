import React from "react";
import NavBar from "./NavBar";
import UserPanel from "./UserPanel";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">AD Games</h1>
      <UserPanel />
      <NavBar />
    </header>
  );
}
