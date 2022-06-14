import React from "react";

export default function NavBar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">{children}</ul>
    </nav>
  );
}
